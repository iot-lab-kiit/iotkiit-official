
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",

  reactStrictMode: true,

  experimental: {
    agentUpgrade: "latest",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.iotkiit.in",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;

