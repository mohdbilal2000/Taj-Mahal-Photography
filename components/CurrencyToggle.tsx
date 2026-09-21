'use client';

import { useCurrency } from '@/lib/currency';

/**
 * USD / INR switch. Indian guests are quoted a domestic rate card, so this is
 * a price switch rather than a live conversion.
 */
export default function CurrencyToggle({ className = '' }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center rounded-sm border border-white/25 overflow-hidden ${className}`}
      role="group"
      aria-label="Display currency"
    >
      {(['USD', 'INR'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setCurrency(option)}
          aria-pressed={currency === option}
          className={`px-3 min-h-[34px] flex items-center text-[11px] font-bold tracking-wider transition-colors ${
            currency === option
              ? 'bg-gold-500 text-ink-900'
              : 'text-white/70 hover:text-white'
          }`}
        >
          {option === 'INR' ? '₹ INR' : '$ USD'}
        </button>
      ))}
    </div>
  );
}
