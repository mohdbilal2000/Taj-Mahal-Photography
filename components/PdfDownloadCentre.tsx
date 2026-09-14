'use client';

import { Download, FileText } from 'lucide-react';
import packagesData from '@/lib/packages.json';
import { formatMoney, useCurrency } from '@/lib/currency';

/**
 * Every package sheet in one place. Guests share these on WhatsApp, so both
 * the Indian (INR) and international (USD) versions are always reachable —
 * the currency switch only decides which set is shown first.
 */
export default function PdfDownloadCentre() {
  const { currency, setCurrency } = useCurrency();
  const indiaFirst = currency === 'INR';
  const audience = indiaFirst ? 'india' : 'international';
  const other = indiaFirst ? 'international' : 'india';

  return (
    <section className="bg-white border border-marble-200 rounded-sm p-8 md:p-12 scroll-mt-32 md:scroll-mt-40" id="downloads">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block">
            Price List
          </span>
          <h2 className="font-serif text-3xl font-semibold text-ink-900">Download the package PDFs</h2>
          <p className="text-gray-600 mt-2">
            One sheet per package, ready to share on WhatsApp. Indian guests get domestic ₹ rates;
            international guests get USD pricing and foreign-national ticket rates.
          </p>
        </div>
        <a
          href={`/pdf/all-packages-${audience}.pdf`}
          download
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ink-900 text-white text-sm font-medium rounded-sm hover:bg-ink-800 transition-colors"
        >
          <FileText className="w-4 h-4" />
          All 5 packages ({indiaFirst ? '₹ INR' : 'USD'})
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
                {formatMoney(indiaFirst ? pkg.inr : pkg.usd, indiaFirst ? 'INR' : 'USD')} · {pkg.duration}
              </p>
            </div>
            <a
              href={`/pdf/${pkg.id}-${audience}.pdf`}
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

      <p className="text-sm text-gray-500 mt-6">
        Need the {indiaFirst ? 'international (USD)' : 'Indian (₹ INR)'} versions?{' '}
        <button
          type="button"
          onClick={() => setCurrency(indiaFirst ? 'USD' : 'INR')}
          className="text-gold-600 font-medium hover:underline"
        >
          Switch to {indiaFirst ? 'USD' : '₹ INR'}
        </button>{' '}
        or{' '}
        <a href={`/pdf/all-packages-${other}.pdf`} download className="text-gold-600 font-medium hover:underline">
          download the {indiaFirst ? 'USD' : '₹ INR'} brochure
        </a>
        .
      </p>
    </section>
  );
}
