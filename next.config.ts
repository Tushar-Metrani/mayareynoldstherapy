import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary: original template images (Part 1 clone). Replace with local /public images in the redesign pass.
    remotePatterns: [{ protocol: "https", hostname: "images.squarespace-cdn.com" }],
  },
};

export default nextConfig;