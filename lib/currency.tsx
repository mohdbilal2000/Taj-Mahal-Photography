'use client';

/**
 * Site-wide currency switch. Rupee prices are the dollar price converted at
 * the rate in lib/packages.json and rounded, which is exactly what the PDFs
 * print — one rate constant keeps the site, the sheets and WhatsApp in step.
 *
 * The choice is remembered per browser in localStorage. Server-rendered pages
 * always paint USD first so the static HTML (and anything crawling it) stays
 * stable; the provider swaps to a stored INR preference after hydration.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import packagesData from './packages.json';

export type Currency = 'USD' | 'INR';

const STORAGE_KEY = 'tmp:currency';

/**
 * INR is a straight conversion of the USD price, rounded to a clean figure —
 * the same formula scripts/generate-pdfs.mjs uses, so the site and the PDFs
 * always show the same rupee number.
 */
export function toInr(usd: number): number {
  const { usdToInr, inrRoundTo } = packagesData.meta;
  return Math.round((usd * usdToInr) / inrRoundTo) * inrRoundTo;
}

/** The note shown wherever rupee prices appear. */
export const INR_NOTE = packagesData.meta.inrNote;

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
