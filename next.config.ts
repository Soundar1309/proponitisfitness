import type { NextConfig } from "next";

const nextConfig = {
  // Specify 'dist' as the custom build directory
  distDir: 'dist',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
