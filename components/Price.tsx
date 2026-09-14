'use client';

import { formatMoney, toInr, useCurrency } from '@/lib/currency';

type PriceProps = {
  /** Plan id — kept for the download links and analytics on the same cards. */
  planId?: string;
  /** USD price, used as the server-rendered default. */
  usd: number;
  /** Render a "Starting from" label above the amount. */
  fromPrice?: boolean;
  /** Tailwind classes for the amount itself. */
  className?: string;
  /** Tailwind classes for the currency code shown after the amount. */
  codeClassName?: string;
  /** Hide the trailing currency code (for dense cards). */
  hideCode?: boolean;
};

/** One price, in whichever currency the visitor picked. */
export default function Price({
  usd,
  fromPrice,
  className = '',
  codeClassName = 'text-sm text-gray-500',
  hideCode,
}: PriceProps) {
  const { currency } = useCurrency();
  const showInr = currency === 'INR';
  const amount = showInr ? toInr(usd) : usd;
  const code: 'INR' | 'USD' = showInr ? 'INR' : 'USD';

  return (
    <>
      {fromPrice && (
        <span className="block text-xs uppercase tracking-wide text-gray-400 font-normal">
          Starting from
        </span>
      )}
      <span className={className}>{formatMoney(amount, code)}</span>
      {!hideCode && <span className={codeClassName}> {code}</span>}
    </>
  );
}
