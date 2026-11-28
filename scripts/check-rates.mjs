/**
 * Finds prices written by hand in the source that no longer match
 * lib/packages.json. Run after changing a rate:
 *
 *   npm run check:rates
 *
 * It lists every "$N" and "₹N" in the code that is neither a current package
 * price, nor its rupee conversion, nor on the short allow-list below (the
 * Archaeological Survey's ticket prices and a few figures that are not our
 * rates). Anything else is either a stale number or a number worth turning
 * into a rate token (see lib/rates.ts). Exits 1 when it finds any, so it can
 * gate a deploy.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const data = JSON.parse(readFileSync(join(root, 'lib/packages.json'), 'utf8'));
const { usdToInr, inrRoundTo } = data.meta;
const toInr = (usd) => Math.round((usd * usdToInr) / inrRoundTo) * inrRoundTo;

const packages = [...data.packages, ...(data.otherPackages ?? []), ...(data.addOns ?? [])];
const usdOk = new Set(packages.map((p) => p.usd));
const inrOk = new Set(packages.map((p) => toInr(p.usd)));

// Figures that are not our rates: ASI ticket prices, the mausoleum ticket, the
// exchange-rate line, and the "$20 offers outside the gate" the cost guides warn about.
const allow = new Set([
  // rupees
  5, 25, 30, 40, 50, 90, 200, 300, 310, 540, 600, 610, 650, 1100, 500, 1000, usdToInr,
  // dollars
  1, 13, 20,
]);

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (['node_modules', '.next', '.git', 'public'].includes(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx)$/.test(name) && !/rates\.ts$/.test(name)) files.push(path);
  }
};
for (const d of ['lib', 'app', 'components']) walk(join(root, d));

let found = 0;
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/([$₹])\s?(\d[\d,]*)/g)) {
      const n = Number(m[2].replace(/,/g, ''));
      const ok = m[1] === '$' ? usdOk.has(n) || allow.has(n) : inrOk.has(n) || allow.has(n);
      if (!ok) {
        found += 1;
        console.log(`${file.replace(root, '')}:${i + 1}  ${m[0]}   ${line.trim().slice(0, 90)}`);
      }
    }
  });
}
console.log(found ? `\n${found} price(s) do not match packages.json.` : 'Every written price matches packages.json.');
process.exit(found ? 1 : 0);
