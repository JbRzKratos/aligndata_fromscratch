/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Enable gzip/brotli compression
  compress: true,

  // Image optimization — unoptimized for Cloudflare Pages (no server-side processing)
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },

  // Security headers — served via Cloudflare _headers file for better CDN caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

