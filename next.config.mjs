import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'zod/v3': path.resolve(__dirname, 'node_modules/zod/v3/index.js'),
    };
    return config;
  },
};

export default nextConfig;
