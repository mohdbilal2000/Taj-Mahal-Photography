'use client';

import { Download } from 'lucide-react';
import packagesData from '@/lib/packages.json';
import { useCurrency } from '@/lib/currency';

/** Plans that have a printed sheet in public/pdf. */
const SHEETS = new Set(packagesData.packages.map((p) => p.id));

const ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
  'transport-photography': 'transport-guide',
};

/**
 * Download links for a package's one-page PDF. There is an INR sheet for
 * Indian guests and a USD sheet for international guests — the visitor's
 * currency choice decides which one leads, and the other stays one click away.
 */
export default function PackagePdfLinks({ planId }: { planId: string }) {
  const { currency } = useCurrency();
  const id = ALIASES[planId] ?? planId;
  if (!SHEETS.has(id)) return null;

  const indiaFirst = currency === 'INR';
  const primary = {
    href: `/pdf/${id}-${indiaFirst ? 'india' : 'international'}.pdf`,
    label: indiaFirst ? 'Download PDF (₹ Indian guests)' : 'Download PDF (international guests)',
  };
  const secondary = {
    href: `/pdf/${id}-${indiaFirst ? 'international' : 'india'}.pdf`,
    label: indiaFirst ? 'International guests (USD)' : 'Indian guests (₹ INR)',
  };

  return (
    <div className="mt-6 pt-6 border-t border-marble-200">
      <a
        href={primary.href}
        download
        className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 border border-ink-900 text-ink-900 text-sm font-medium rounded-sm hover:bg-marble-100 transition-colors"
      >
        <Download className="w-4 h-4" />
        {primary.label}
      </a>
      <a
        href={secondary.href}
        download
        className="block text-center text-xs text-gray-500 hover:text-gold-600 mt-2 transition-colors"
      >
        {secondary.label}
      </a>
    </div>
  );
}
