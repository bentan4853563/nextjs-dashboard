import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental", // Ensure this is needed
  },
  distDir: ".next", // Change back to default if not necessary
};

export default nextConfig;
