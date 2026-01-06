import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: {
    compilationMode: "annotation",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sp-ao.shortpixel.ai",
      },
      {
        protocol: "https",
        hostname: "adaptive-engg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
