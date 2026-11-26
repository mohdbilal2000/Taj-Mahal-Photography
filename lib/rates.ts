import packagesData from './packages.json';

/**
 * Rates in running text, filled from lib/packages.json.
 *
 * Prose that names a price is written with a token instead of a number, so
 * changing a rate (or the dollar to rupee rate) in packages.json changes every
 * guide, every language and every search description at the next build:
 *
 *   {usd:sunrise}   $120
 *   {usdc:sunrise}  120 USD
 *   {inr:sunrise}   ₹11,400
 *   {both:sunrise}  $120 (₹11,400)
 *   {usd:min}       the cheapest package    {usd:max}  the dearest
 *   {inr:min} {inr:max}
 *   {rate}          ₹95
 *
 * An unknown package id throws, so a typo fails the build rather than
 * publishing "undefined".
 */

type Priced = { id: string; usd: number };

const ALL: Priced[] = [
  ...(packagesData.packages as Priced[]),
  ...(((packagesData as { otherPackages?: Priced[] }).otherPackages ?? []) as Priced[]),
];

const { usdToInr, inrRoundTo } = packagesData.meta;
const toInr = (usd: number) => Math.round((usd * usdToInr) / inrRoundTo) * inrRoundTo;
const inrText = (usd: number) => `₹${toInr(usd).toLocaleString('en-IN')}`;
const usdText = (usd: number) => `$${usd.toLocaleString('en-US')}`;

function priceOf(key: string): number {
  if (key === 'min') return Math.min(...ALL.map((p) => p.usd));
  if (key === 'max') return Math.max(...ALL.map((p) => p.usd));
  const found = ALL.find((p) => p.id === key);
  if (!found) throw new Error(`rates: unknown package "${key}" in a rate token`);
  return found.usd;
}

export function fillRates(text: string): string {
  return text
    .replace(/\{rate\}/g, `₹${usdToInr}`)
    .replace(/\{(usd|usdc|inr|both):([a-z0-9-]+)\}/g, (_m, kind: string, key: string) => {
      const usd = priceOf(key);
      if (kind === 'usd') return usdText(usd);
      if (kind === 'usdc') return `${usd.toLocaleString('en-US')} USD`;
      if (kind === 'inr') return inrText(usd);
      return `${usdText(usd)} (${inrText(usd)})`;
    });
}

/** Fill every string in a nested structure (an article, a page's data) without touching its shape. */
export function fillRatesDeep<T>(value: T): T {
  if (typeof value === 'string') return fillRates(value) as T;
  if (Array.isArray(value)) return value.map((v) => fillRatesDeep(v)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillRatesDeep(v)])) as T;
  }
  return value;
}

/** A package's dollar price, from packages.json. Use this instead of typing the number. */
export const usdOf = (id: string): number => priceOf(id);
