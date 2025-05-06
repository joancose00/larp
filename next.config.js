/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Only enable static export in production
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  distDir: process.env.NODE_ENV === 'production' ? 'out' : '.next',
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Required for static export
    domains: ['github.com'], // Add any external image domains you're using
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true, // Add trailing slashes for better compatibility
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    }
    return config
  },
  // For Cloudflare Pages static export
  experimental: {
    scrollRestoration: true,
  }
}

module.exports = nextConfig 