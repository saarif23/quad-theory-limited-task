/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.api.technicaltest.quadtheoryltd.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
