import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // gera /out para deploy estático (Netlify/Cloudflare)
  images: {
    unoptimized: true, // desativa image optimizer do Next para export estático
  },
};

export default nextConfig;
