// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const config = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@music-vine/shaders', '@music-vine/shaders-react'],
  rewrites: async () => [
    {
      source: '/registry/:path*',
      destination: '/r/:path*.json',
    },
  ],
};

export default config;
