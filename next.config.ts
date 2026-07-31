import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
  async redirects() {
    return [
      {
        // Retired offering — merged into the customisable Transport + Guide plan.
        source: '/services/transport-photography',
        destination: '/services/transport-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
