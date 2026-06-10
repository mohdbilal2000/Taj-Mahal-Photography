import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SITE } from '@/lib/seo';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

/**
 * Curated keyword set. Google ignores <meta name="keywords"> entirely;
 * Bing/Yandex still parse it but treat large dumps as a negative quality
 * signal. The long-tail (200+ phrasings) is now covered by visible page
 * content, the FAQ schema, the on-page Quick Answer blocks and /llms.txt
 * — not by stuffing them into <head>.
 */
const KEYWORDS = [
  'Taj Mahal photographer',
  'licensed Taj Mahal photographer',
  'government licensed photographer Taj Mahal',
  'Taj Mahal photoshoot',
  'Taj Mahal sunrise photoshoot',
  'pre-wedding photography Taj Mahal',
  'Taj Mahal couple photoshoot',
  'Taj Mahal family photography',
  'Taj Mahal proposal photographer',
  'Taj Mahal photography permit',
  'Agra photographer',
  'photographer in Agra',
  'Taj Mahal tour from Delhi',
  'same day Taj Mahal tour from Delhi',
  'Delhi to Agra sunrise tour',
  'private Taj Mahal tour with photographer',
  'luxury Taj Mahal tour Innova',
  'luxury Taj Mahal tour Urbania',
  'Taj Mahal tour with guide and photographer',
  'Taj Mahal Agra Fort tour',
  'skip the line Taj Mahal tour',
  'best time for Taj Mahal photography',
  'is photography allowed inside Taj Mahal',
  'how to book Taj Mahal photographer',
  'best Taj Mahal photographer in Agra',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: 'Next.js',
  keywords: KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: SITE.url,
    languages: {
      'en-US': SITE.url,
      'en-GB': SITE.url,
      'en-IN': SITE.url,
      'x-default': SITE.url,
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    alternateLocale: ['en_GB', 'en_IN'],
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 630,
        alt: 'Taj Mahal Photography — Official Licensed Photographer in Agra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [SITE.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Photography',
  classification: 'Tourism, Photography, Travel',
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Agra, Uttar Pradesh, India',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    'ICBM': `${SITE.geo.lat}, ${SITE.geo.lng}`,
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    'language': 'en',
    'coverage': 'Worldwide',
    'target': 'all',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': SITE.name,
    'application-name': SITE.name,
    'theme-color': '#1A1A1A',
    'msapplication-TileColor': '#1A1A1A',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Agra, Uttar Pradesh, India" />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
      </head>
      <body className="font-sans bg-[#FAFAFA] text-[#1A1A1A] antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
