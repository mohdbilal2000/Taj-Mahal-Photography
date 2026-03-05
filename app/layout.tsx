import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

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
  title: 'Official Government Licensed Taj Mahal Photographer | Agra',
  description: 'Official Government Licensed Taj Mahal Photographer in Agra. Authorized for Photography Inside Taj Mahal. Premium guided experience for international visitors.',
  keywords: 'Taj Mahal Photographer, Licensed Photographer Agra, Taj Mahal Photoshoot, Government Approved Photographer Taj Mahal',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[#FAFAFA] text-[#1A1A1A] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
