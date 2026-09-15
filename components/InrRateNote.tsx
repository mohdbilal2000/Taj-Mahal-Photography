'use client';

import { INR_NOTE, INR_NOTE_SHORT, useCurrency } from '@/lib/currency';

/**
 * Explains where a rupee figure came from. Only rendered while rupees are on
 * screen — in dollars there is nothing to qualify, because USD is the price.
 */
export default function InrRateNote({
  full,
  className = '',
}: {
  /** Use the long wording (quiet pages); default is the one-line version. */
  full?: boolean;
  className?: string;
}) {
  const { currency } = useCurrency();
  if (currency !== 'INR') return null;

  return (
    <p className={`text-xs text-gray-500 leading-relaxed ${className}`}>
      {full ? INR_NOTE : INR_NOTE_SHORT}
    </p>
  );
}
