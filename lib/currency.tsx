'use client';

/**
 * Site-wide currency switch.
 *
 * USD is the real package price; rupees are converted from it at the single
 * rate in lib/packages.json. Exchange rates move, so that rate — and the date
 * it was set — is the only thing to edit, and every rupee figure and every
 * "converted at" line on the site and in the PDFs follows from it.
 *
 * The choice is remembered per browser in localStorage. Server-rendered pages
 * always paint USD first so the static HTML (and anything crawling it) stays
 * stable; the provider swaps to a stored INR preference after hydration.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import packagesData from './packages.json';

export type Currency = 'USD' | 'INR';

const STORAGE_KEY = 'tmp:currency';

export const INR_RATE = packagesData.meta.usdToInr;
export const RATE_UPDATED = packagesData.meta.rateUpdated;

/** Rupees from dollars, at the one rate the whole site shares. */
export function toInr(usd: number): number {
  const { usdToInr, inrRoundTo } = packagesData.meta;
  return Math.round((usd * usdToInr) / inrRoundTo) * inrRoundTo;
}

/** The full "how we got this rupee figure" line, built from the rate itself. */
export const INR_NOTE =
  `USD is the package price. ₹ is converted at $1 = ₹${INR_RATE} (rate updated ${RATE_UPDATED}) — ` +
  'exchange rates move, so the rupee amount is confirmed on WhatsApp when you book.';

/** Same thing, short enough to sit under a price. */
export const INR_NOTE_SHORT = `Converted at $1 = ₹${INR_RATE} · ${packagesData.meta.rateUpdatedShort} · confirmed when you book`;

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
