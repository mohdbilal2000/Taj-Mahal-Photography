import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Taj Mahal photographer',
    'licensed photographer Agra',
    'Taj Mahal photoshoot',
    'government approved photographer Taj Mahal',
    'Taj Mahal sunrise photography',
    'pre-wedding Taj Mahal',
    'couple photography Taj Mahal',
    'Agra photographer',
    'Taj Mahal photography permit',
    'professional photographer Agra India',
    'Taj Mahal photo tour',
    'best photographer near Taj Mahal',
    'hire photographer Taj Mahal',
    'Taj Mahal photography packages',
    'Taj Mahal portrait session',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: SITE.url,
    languages: { 'en-US': SITE.url },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
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
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Agra',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    'ICBM': `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Agra, Uttar Pradesh, India" />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
      </head>
      <body className="font-sans bg-[#FAFAFA] text-[#1A1A1A] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
