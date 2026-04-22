/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern WebP/AVIF formats automatically for smaller payloads
    formats: ["image/avif", "image/webp"],
    // Optimized device sizes for responsive srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce default quality slightly for faster loads with minimal visual loss
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
  webpack(config, { dev }) {
    if (dev) {
      config.cache = {
        type: "memory",
      };
    }

    return config;
  },
};

export default nextConfig;
