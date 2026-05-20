/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If deploying to aisy-ai.github.io (root), leave basePath empty.
  // If deploying to a /repo-name sub-path, set basePath: '/repo-name'
  basePath: '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
