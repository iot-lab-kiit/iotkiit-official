# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Multi-stage production build for the Next.js 16 (Turbopack) site.
#
# Node base image: the newest ACTIVE LTS as of 2026-10 is Node 26 "Krypton"
# (LTS 2026-10-28). Trixie-slim is Debian stable — glibc, the safest choice
# for Next.js's image optimizer (sharp) and other native/SIMD codepaths.
# To roll back to the mature LTS at any time, set:  --build-arg NODE_VERSION=24-trixie-slim
# ---------------------------------------------------------------------------
ARG NODE_VERSION=26-trixie-slim

# ---- Stage 1: install dependencies (cached layer) -------------------------
FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app

# Copy only the manifests first so this layer is cached until deps change.
COPY package.json package-lock.json ./

# Reproducible install from the committed lockfile; BuildKit caches npm's
# download cache across builds so repeat installs are near-instant.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund


# ---- Stage 2: build the standalone server ---------------------------------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Bring in the freshly installed node_modules, then the source.
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# `.next/cache` is mounted (not baked) to speed up rebuilds. It holds only the
# Turbopack/fetch caches — never the emitted standalone output or static assets.
RUN --mount=type=cache,target=/app/.next/cache \
    npm run build


# ---- Stage 3: minimal runtime image ---------------------------------------
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# The official node image ships an unprivileged `node` user (uid 1000); we copy
# as root (to chown) and then drop privileges for the running process.
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# The prerender/route cache directory must exist and be writable by the user.
RUN mkdir -p .next/cache && chown -R node:node .next

USER node
EXPOSE 3000

# Liveness probe: the site's `/` returns 200 once the server is up.
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD ["node", "-e", "require('http').get('http://127.0.0.1:3000/',(r)=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"]

CMD ["node", "server.js"]
