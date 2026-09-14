'use client';

/**
 * Site-wide currency switch. Indian guests are quoted domestic INR rates —
 * these are real rate cards, not a conversion of the USD price, so both sets
 * live in data rather than being computed from an exchange rate.
 *
 * The choice is remembered per browser in localStorage. Server-rendered pages
 * always paint USD first so the static HTML (and anything crawling it) stays
 * stable; the provider swaps to a stored INR preference after hydration.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import packagesData from './packages.json';

export type Currency = 'USD' | 'INR';

const STORAGE_KEY = 'tmp:currency';

/** Domestic INR rate card, keyed by plan id. */
const INR_RATES: Record<string, number> = {
  ...Object.fromEntries(packagesData.packages.map((p) => [p.id, p.inr])),
  proposal: 28000,
  'taj-agra-fort': 32000,
  'full-day': 40000,
  'sunrise-luxury-innova': 55000,
  'sunrise-luxury-urbania': 75000,
};

/** Alternate slugs that share a plan's rate (see PLAN_ALIASES in plans.ts). */
const RATE_ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
  'transport-photography': 'transport-guide',
};

export function inrRate(planId: string): number | undefined {
  return INR_RATES[RATE_ALIASES[planId] ?? planId];
}

export function formatMoney(amount: number, currency: Currency): string {
  return currency === 'INR'
    ? `₹${amount.toLocaleString('en-IN')}`
    : `$${amount.toLocaleString('en-US')}`;
}

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (next: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: 'USD',
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('USD');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'INR' || stored === 'USD') setCurrencyState(stored);
    } catch {
      // Private browsing or blocked storage — USD is a fine default.
    }
  }, []);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Preference simply will not persist; the page still switches.
    }
  }, []);

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
