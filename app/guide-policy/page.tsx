import type { Metadata } from 'next';
import Link from 'next/link';
import { GuidePolicyPage } from '@/components/GuidePolicy';
import { SITE } from '@/lib/seo';

// Sent to clients with a quote — never linked from the site, absent from the
// sitemap and llms files, and noindex so it stays out of search.
export const metadata: Metadata = {
  title: { absolute: 'Before you book: our guide policy' },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function GuidePolicyRoute() {
  return (
    <main className="min-h-screen bg-marble-50">
      <div className="border-b hairline bg-white">
        <div className="shell flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-xl italic text-ink-900">{SITE.name}</Link>
          <span className="eyebrow hidden text-gold-700 sm:inline">Official Government Licensed Photographer · Agra</span>
        </div>
      </div>
      <GuidePolicyPage />
    </main>
  );
}
