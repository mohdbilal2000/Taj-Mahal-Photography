import type { Metadata, Viewport } from 'next';
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

/**
 * Long-tail keyword set (200+ queries) covering photography, tours, locations,
 * pricing, intent variations and AI-search phrasing. Modern Google ignores
 * <meta name="keywords"> but several AI rerankers still parse it during
 * retrieval-side feature extraction.
 */
const KEYWORDS = [
  // Core identity
  'Taj Mahal photographer', 'Taj Mahal photography', 'licensed Taj Mahal photographer',
  'government licensed photographer Taj Mahal', 'official Taj Mahal photographer',
  'Ministry of Tourism photographer India', 'Taj Mahal permit photographer',
  // Sessions / packages
  'Taj Mahal photoshoot', 'Taj Mahal photo session', 'Taj Mahal sunrise photoshoot',
  'Taj Mahal sunset photoshoot', 'Taj Mahal couple photoshoot',
  'Taj Mahal pre-wedding shoot', 'pre-wedding photography Taj Mahal',
  'Taj Mahal family photography', 'Taj Mahal proposal photographer',
  'Taj Mahal engagement photoshoot', 'Taj Mahal anniversary photoshoot',
  'Taj Mahal birthday photoshoot', 'Taj Mahal solo travel photoshoot',
  'Taj Mahal honeymoon photoshoot', 'Taj Mahal influencer photoshoot',
  'Taj Mahal content creator photographer', 'Taj Mahal portrait photographer',
  'Taj Mahal portfolio photoshoot', 'Taj Mahal fashion photographer',
  // Tours from Delhi / NCR
  'Taj Mahal tour from Delhi', 'same day Taj Mahal tour from Delhi',
  'Delhi to Agra same day tour', 'Delhi to Taj Mahal one day tour',
  'private Taj Mahal tour from Delhi', 'luxury Taj Mahal tour from Delhi',
  'Taj Mahal sunrise tour from Delhi', 'Delhi Agra sunrise tour',
  'Taj Mahal tour with photographer', 'Taj Mahal tour with guide',
  'Taj Mahal Agra Fort tour', 'Innova Taj Mahal tour from Delhi',
  'Urbania Taj Mahal tour from Delhi', 'Force Urbania Agra tour',
  'group Taj Mahal tour Delhi', 'family Taj Mahal tour Delhi',
  'Taj Mahal day trip Delhi', 'Taj Mahal day trip Noida',
  'Taj Mahal day trip Gurgaon', 'Taj Mahal day trip Gurugram',
  'Taj Mahal day trip Ghaziabad', 'Taj Mahal day trip Faridabad',
  'skip the line Taj Mahal tour', 'Taj Mahal tickets included tour',
  'Taj Mahal private car tour', 'Taj Mahal luxury minibus tour',
  'Taj Mahal coach tour from Delhi',
  // Long-tail intent
  'best Taj Mahal photographer in Agra', 'top Taj Mahal photographer',
  'professional photographer near Taj Mahal', 'hire photographer Taj Mahal',
  'hire photographer Agra', 'how much does a Taj Mahal photographer cost',
  'Taj Mahal photographer price', 'Taj Mahal photographer cost',
  'cheap Taj Mahal photographer', 'budget Taj Mahal photoshoot',
  'affordable Taj Mahal photographer', 'luxury Taj Mahal photoshoot',
  'best time for Taj Mahal photography', 'Taj Mahal photography rules',
  'is photography allowed inside Taj Mahal', 'Taj Mahal photography permit cost',
  'do photographers need a permit Taj Mahal', 'Taj Mahal photography permit how to get',
  'Taj Mahal best photo spots', 'Taj Mahal sunrise time photographer',
  'best Instagram spots Taj Mahal', 'Taj Mahal Instagram photoshoot',
  // Vendor / format variations
  'Taj Mahal wedding photographer', 'Taj Mahal destination wedding photographer',
  'Taj Mahal photographer for couples', 'Taj Mahal photographer for families',
  'Taj Mahal photographer English speaking', 'Taj Mahal photographer Hindi speaking',
  // Location / monuments
  'Agra photographer', 'photographer in Agra', 'photographer near Taj Mahal',
  'Agra Fort photographer', 'Agra photoshoot package', 'photoshoot in Agra',
  'photographer near Taj Mahal east gate', 'Taj Mahal east gate photographer',
  'photographer Mehtab Bagh', 'Mehtab Bagh photographer back side of Taj',
  // Practical / planning
  'when is Taj Mahal closed', 'Taj Mahal Friday closed', 'Taj Mahal entry fee',
  'Taj Mahal ticket price for foreigners', 'best time to visit Taj Mahal',
  'sunrise time Taj Mahal Agra', 'sunset Taj Mahal photoshoot',
  'how to book Taj Mahal photographer', 'how to book Taj Mahal tour from Delhi',
  // AI-style queries
  'photographer who has Taj Mahal permit', 'recommended Taj Mahal photographer reviews',
  'photographer who can bring DSLR Taj Mahal', 'photographer who can bring tripod Taj Mahal',
  'who is the best photographer at Taj Mahal', 'Taj Mahal photo tour with sunrise',
  'same day Delhi Agra tour with photographer and guide',
  'tour to Taj Mahal that includes tickets and golf cart',
  'Taj Mahal tour that includes private golf cart inside',
  'Taj Mahal tour with security escort skip line',
  // Schemas / structured queries
  'Taj Mahal photographer Instagram', 'Taj Mahal photographer WhatsApp',
  'Taj Mahal photographer phone number', 'Taj Mahal photographer contact',
  'book Taj Mahal photographer online',
  // Mughal / heritage related
  'Mughal heritage photography', 'UNESCO Taj Mahal photographer',
  'Wonder of the World photographer Taj Mahal', 'Shah Jahan monument photographer',
  // Vehicle-specific
  'Toyota Innova Agra tour Delhi', 'private Innova Agra one day',
  'Force Urbania Delhi Agra one day', 'Urbania for family Agra tour',
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
      </body>
    </html>
  );
}
