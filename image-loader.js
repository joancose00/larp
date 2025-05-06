export default function cloudflareLoader({ src, width, quality }) {
  // For local images, use the default unoptimized loader
  if (src.startsWith('/')) {
    return src;
  }
  
  // For external images, you can implement other logic if needed
  return src;
}