/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for Cloudflare Pages
    domains: ['github.com'], // Add any external image domains you're using
  },
  trailingSlash: true, // Add trailing slashes for better compatibility
}

module.exports = nextConfig 