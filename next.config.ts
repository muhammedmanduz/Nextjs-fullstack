import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Apple domains
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
      },
      // Samsung
      {
        protocol: "https",
        hostname: "images.samsung.com",
      },
      // Huawei
      {
        protocol: "https",
        hostname: "consumer.huawei.com",
      },
      // Sony
      {
        protocol: "https",
        hostname: "www.sony.com.tr",
      },
      // Xiaomi
      {
        protocol: "https",
        hostname: "i01.appmifile.com",
      },
      // Dell
      {
        protocol: "https",
        hostname: "i.dell.com",
      },
    ],
  },
  // other Next.js config options can go here
};

export default nextConfig;
