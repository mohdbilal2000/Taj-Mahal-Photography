'use client';

import { Download, FileText } from 'lucide-react';
import packagesData from '@/lib/packages.json';
import { formatMoney, toInr } from '@/lib/currency';

/**
 * Every rate sheet in one place. Each PDF prints USD and INR together, so a
 * guest can be sent one file whatever currency they think in.
 */
export default function PdfDownloadCentre() {
  return (
    <section
      className="bg-white border border-marble-200 rounded-sm p-8 md:p-12 scroll-mt-32 md:scroll-mt-40"
      id="downloads"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block">
            Rate Card
          </span>
          <h2 className="font-serif text-3xl font-semibold text-ink-900">Download the rates (PDF)</h2>
          <p className="text-gray-600 mt-2">
            One page per package, ready to share on WhatsApp. Every sheet shows the price in
            dollars and rupees, and states the Taj Mahal guide rule.
          </p>
        </div>
        <a
          href="/pdf/all-rates.pdf"
          download
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ink-900 text-white text-sm font-medium rounded-sm hover:bg-ink-800 transition-colors"
        >
          <FileText className="w-4 h-4" />
          All rates — photography, guide &amp; transport
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {packagesData.packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex items-center justify-between gap-4 border border-marble-200 rounded-sm p-4 hover:border-gold-500 transition-colors"
          >
            <div className="min-w-0">
              <p className="font-medium text-ink-900 truncate">{pkg.name}</p>
              <p className="text-sm text-gray-500">
                {pkg.fromPrice ? 'From ' : ''}
                {formatMoney(pkg.usd, 'USD')} · {formatMoney(toInr(pkg.usd), 'INR')} · {pkg.duration}
              </p>
            </div>
            <a
              href={`/pdf/${pkg.id}.pdf`}
              download
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 border border-ink-900 rounded-sm px-3 py-2 hover:bg-marble-100 transition-colors"
              aria-label={`Download the ${pkg.name} PDF`}
            >
              <Download className="w-4 h-4" />
              PDF
            </a>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-6">{packagesData.meta.inrNote}</p>
    </section>
  );
}
