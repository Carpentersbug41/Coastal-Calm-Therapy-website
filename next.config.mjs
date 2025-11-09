import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable MDX support for .md and .mdx files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // Enable static exports where possible
  experimental: {
    mdxRs: false,
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/the-architect',
        permanent: true, // 301 redirect
      },
      {
        source: '/blog',
        destination: '/articles',
        permanent: true, // 301 redirect
      },
      {
        source: '/blog/:slug*',
        destination: '/articles/:slug*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);

