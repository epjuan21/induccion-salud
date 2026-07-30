import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimizing local, trusted SVG assets (e.g. institutional logo).
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
