/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  exportPathMap() {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
