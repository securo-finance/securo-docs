import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Emits .next/standalone, which is what the container image runs.
  output: 'standalone',
};

export default withMDX(config);
