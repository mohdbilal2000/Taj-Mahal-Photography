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
      {
        // Retired package — the sunrise session now covers short visits.
        source: '/services/quick-capture',
        destination: '/services/sunrise',
        permanent: true,
      },
      {
        // Retired package — family groups are covered by the sunrise session
        // (3–5 reels: solo / couple / family) and the Guide + Photo combos.
        source: '/services/family',
        destination: '/services/sunrise',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
