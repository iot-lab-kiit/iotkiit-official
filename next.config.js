/** @type {import('next').NextConfig} */

const localAPI = "http://localhost:3000/api";
const prodAPI = process.env.NEXT_PUBLIC_API_URL || "https://api.iotkiit.in";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.iotkiit.in", "i.imgur.com"],
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    SERVER: prodAPI,
    apiVersion: "v1",
  },
    // target: "serverless",
};

module.exports = nextConfig;
