/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
