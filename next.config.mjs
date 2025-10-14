// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // самый простой вариант — "domains"
    domains: ["aacarsdna.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
