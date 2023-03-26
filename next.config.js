/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  darkMode: "class",
  theme: {
    extend: {},
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
