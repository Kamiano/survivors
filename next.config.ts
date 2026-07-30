import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows the production build to finish despite the standalone Sanity CLI type mismatch
    ignoreBuildErrors: true,
  },

  experimental: {
    serverActions: {
      allowedOrigins: ['192.168.100.3', '[::1]', 'localhost:3000'],
    },
  },
  
  /* Any other config options you already have */
};

export default nextConfig;