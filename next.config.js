/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure Next resolves paths relative to this project
  outputFileTracingRoot: __dirname,
  output: "export",
};

module.exports = nextConfig;
