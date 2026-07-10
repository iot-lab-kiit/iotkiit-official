/** @type {import('next').NextConfig} */

const localAPI = "http://localhost:3000/api";
const prodAPI = process.env.NEXT_PUBLIC_API_URL || "https://api.iotkiit.in";

const nextConfig = {
  reactStrictMode: true,
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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      undici: false,
      canvas: false,
    };
    return config;
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    SERVER: prodAPI,
    apiVersion: "v1",
  },
    // target: "serverless",
};

module.exports = nextConfig;
