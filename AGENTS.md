# AGENTS.md

Guidance for AI agents (and new contributors) working in this repo.

## What this is

The official website of **IoT Lab, KIIT** — a Next.js 14 (App Router) site.
Most pages are static and data-driven; there is no CMS. Content lives in
hand-edited TypeScript files and is deployed by pushing to git.

- Framework: Next.js 14.2 (App Router, `app/`), React 18, TypeScript 5.2 (strict)
- Styling: Tailwind CSS; some MUI (`@mui/*`) and Emotion; animations via
  framer-motion, GSAP, and Lottie
- Backend API (events, etc.): `https://api.iotkiit.in` (see `next.config.js`);
  `publicRuntimeConfig.SERVER` + `apiVersion` are how pages reach it
- Path alias: `@/*` maps to the repo root (`@/data/team`, `@/components/...`)

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # production build (run this before handing off big changes)
npm run lint       # eslint (next/core-web-vitals)
npm run prettier-check
npm run prettier-fix
```

Both `package-lock.json` and `yarn.lock` are committed and both get updated
(there's even a commit shifting from npm to yarn, yet npm keeps being used).
Don't add a third lockfile (no pnpm/bun), and don't delete either one.

## Deployment

Vercel redeploys on `git push` to the default branch. There is no separate
deploy step. Keep commits small and reviewable; the team edits this repo
directly.

## Where content lives (`data/`)

Pages read content from typed arrays in `data/`. **To change site content,
edit these files — don't hardcode into components.** Each file's header
comment explains its conventions; respect them.

- `data/team.ts` — the current (2026-27) roster: `coordinators`,
  `specializedLeads`, `leads`, `members`. The Team page groups `members` by
  `domain` using a fixed `DOMAIN_ORDER` in `app/team/page.tsx`; keep domain
  strings in `data/domains.ts` and `data/team.ts` identical and in the same
  order. Someone in multiple domains gets one entry per domain.
- `data/alumni.ts` — past-year teams (names + socials, photos mostly absent).
- `data/domains.ts` — lab domains; `icon` names map to MUI icons resolved in
  the Domains component.
- `data/projects.ts`, `data/gallery.ts`, `data/achievements.ts`,
  `data/site.ts` — projects, gallery event photo sets, member achievements,
  and lab-wide contact/social links (empty string hides a footer icon).

### Photos

- Current team: `/public/team/<rollno>.webp`, named by roll number.
- Carried-over members: `/public/images/legacy-team-images/<slug>.webp`.
- Gallery: drop photos in `public/images/<event>/` and append an event entry;
  filenames must match disk **exactly, including case** (Vercel's FS is
  case-sensitive).
- People without a photo render a muted placeholder — never fabricate or
  substitute a photo.
- `objectPosition` on a `Person` fine-tunes the crop so no face is cut off;
  default is `object-top`.

### Hard rules from the repo's own conventions

- **No fabricated data.** Stats (photo counts, achievement links, social URLs)
  come from real sources. If a link or number isn't known, leave it out rather
  than guessing.
- Don't invent social profile URLs. Only add `linkedin`/`github`/`email` when
  the real URL is known (member emails follow `<rollno>@kiit.ac.in`).

## Code conventions

- Prettier is authoritative: single quotes **including JSX** (`jsxSingleQuote:
  true`), semicolons, trailing commas, 2-space indent, `printWidth` 80,
  `arrowParens: avoid`. Run `npm run prettier-fix` before committing.
- Components live in `components/`, grouped by area (`team/`, `teamPage/`,
  `homePage/`, `galleryPage/`, ...). Shared primitives (`Navbar`, `Footer`,
  `Reveal`, `Stagger`) sit at the top level. Follow the existing grouping
  before creating new folders.
- `app/<route>/page.tsx` files stay thin: import data + components, compose
  sections. Heavy lifting belongs in `components/`.
- Animation helpers: `Reveal` (scroll reveal) and `Stagger` (children appear
  in sequence — pass `step` for delay) wrap sections; prefer them over ad-hoc
  scroll effects.
- `data/` files are plain typed arrays with `export interface` types. Mirror
  the existing JSDoc-style header comments when adding a new data file.
- TypeScript is strict — no `any`, and optional fields use `?` rather than
  sentinel values like `''` (except `data/site.ts`, where `''` deliberately
  hides an icon).

## Verifying changes

- Content-only edits (`data/`, `public/`): `npm run build` is enough.
- Component/TSX edits: also run `npm run lint` and `npm run prettier-check`.
- After moving/renaming images, grep the repo for the old path — broken image
  paths 404 silently at runtime.
