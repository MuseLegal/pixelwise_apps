/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubActions && repo ? `/${repo}` : '',
  assetPrefix: isGithubActions && repo ? `/${repo}/` : '',
};

export default nextConfig;
