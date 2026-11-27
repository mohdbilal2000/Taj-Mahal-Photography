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
      // Hindi guides retired: the studio serves international visitors, so each
      // Hindi guide now points at its English original.
      { source: '/hi/guides', destination: '/blog', permanent: true },
      { source: '/hi/guides/taj-mahal-photographer-ka-kharcha-2026', destination: '/blog/taj-mahal-photographer-cost', permanent: true },
      { source: '/hi/guides/taj-mahal-pre-wedding-shoot-allowed-ya-banned', destination: '/blog/pre-wedding-shoot-taj-mahal-permission', permanent: true },
      { source: '/hi/guides/taj-mahal-photoshoot-ke-liye-kya-pehne', destination: '/blog/what-to-wear-taj-mahal-photoshoot', permanent: true },
      { source: '/hi/guides/taj-mahal-ticket-price-timing-gate-2026', destination: '/blog/taj-mahal-tickets-timings-gates', permanent: true },
      { source: '/hi/guides/jaipur-se-agra-taj-mahal-doori', destination: '/blog/jaipur-to-agra-taj-mahal-photo-trip', permanent: true },
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
      {
        // Retired package — couples are served by the pre-wedding session.
        source: '/services/proposal',
        destination: '/services/pre-wedding',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
