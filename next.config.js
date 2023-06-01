/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  exportPathMap: function () {
    return {
      '/_redirects': { page: '/_redirects' },
    };
  },
}

module.exports = nextConfig
