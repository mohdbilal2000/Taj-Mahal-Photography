import type { Metadata } from 'next';
import QuoteMaker from '@/components/QuoteMaker';

// Owner-only tool. Deliberately not linked from the nav, footer, sitemap,
// llms.txt or any page — reach it by typing the address. noindex keeps it out
// of search; it is not in robots.txt because listing it there would advertise it.
export const metadata: Metadata = {
  title: { absolute: 'Quote maker' },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function QuotePage() {
  return <QuoteMaker />;
}
