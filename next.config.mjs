/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages - generates an "out/" directory
  output: "export",

  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Image optimization - must be unoptimized for static export (no server)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

