/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ai', '@ai-sdk/ui-utils', 'zod-to-json-schema', '@ai-sdk/react', '@ai-sdk/google'],
};

export default nextConfig;
