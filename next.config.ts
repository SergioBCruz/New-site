import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // Define o root para evitar aviso de workspaces/lockfiles externos
    root: __dirname,
  },
};

export default nextConfig;
