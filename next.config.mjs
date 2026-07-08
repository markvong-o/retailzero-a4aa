const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  serverExternalPackages: ["@modelcontextprotocol/sdk"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
