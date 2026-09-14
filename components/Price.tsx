'use client';

import { formatMoney, inrRate, useCurrency } from '@/lib/currency';

type PriceProps = {
  /** Plan id — used to look up the domestic INR rate. */
  planId: string;
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

/**
 * One price, in whichever currency the visitor picked. Plans with no domestic
 * rate stay in USD even when INR is selected — better an honest USD figure
 * than an invented rupee one.
 */
export default function Price({
  planId,
  usd,
  fromPrice,
  className = '',
  codeClassName = 'text-sm text-gray-500',
  hideCode,
}: PriceProps) {
  const { currency } = useCurrency();
  const inr = inrRate(planId);
  const showInr = currency === 'INR' && inr !== undefined;
  const amount = showInr ? inr! : usd;
  const code = showInr ? 'INR' : 'USD';

  return (
    <>
      {fromPrice && (
        <span className="block text-xs uppercase tracking-wide text-gray-400 font-normal">
          Starting from
        </span>
      )}
      <span className={className}>{formatMoney(amount, code === 'INR' ? 'INR' : 'USD')}</span>
      {!hideCode && <span className={codeClassName}> {code}</span>}
    </>
  );
}
