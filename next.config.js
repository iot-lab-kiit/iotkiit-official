/** @type {import('next').NextConfig} */

const nextConfig = {
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
    // target: "serverless",
};

module.exports = nextConfig;
