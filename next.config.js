/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Cloudflare Pages deployments
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
    domains: ['github.com'], // Add any external image domains you're using
  },
  trailingSlash: true // Add trailing slashes for better compatibility
}

module.exports = nextConfig 