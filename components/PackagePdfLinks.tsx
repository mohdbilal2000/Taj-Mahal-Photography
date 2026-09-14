'use client';

import { Download } from 'lucide-react';
import packagesData from '@/lib/packages.json';

/** Plans that have a printed sheet in public/pdf. */
const SHEETS = new Set(packagesData.packages.map((p) => p.id));

const ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
  'transport-photography': 'transport-guide',
};

/**
 * Download links for a package. Each sheet prints USD and INR side by side,
 * so one file works for every guest — no separate versions to keep in step.
 */
export default function PackagePdfLinks({ planId }: { planId: string }) {
  const id = ALIASES[planId] ?? planId;
  const hasSheet = SHEETS.has(id);

  return (
    <div className="mt-6 pt-6 border-t border-marble-200">
      {hasSheet && (
        <a
          href={`/pdf/${id}.pdf`}
          download
          className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 border border-ink-900 text-ink-900 text-sm font-medium rounded-sm hover:bg-marble-100 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download this package (PDF)
        </a>
      )}
      <a
        href="/pdf/all-rates.pdf"
        download
        className={`block text-center text-xs text-gray-500 hover:text-gold-600 transition-colors ${hasSheet ? 'mt-2' : ''}`}
      >
        All rates — photography, guide &amp; transport (USD &amp; ₹)
      </a>
    </div>
  );
}
