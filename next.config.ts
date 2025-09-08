import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactStrictMode: true,
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.166:3000"],
};


export default nextConfig;
