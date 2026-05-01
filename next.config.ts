import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinhomeshocmonsr.vn",
      },
    ],
  },
};

export default nextConfig;
