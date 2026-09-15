# Packages, pricing & PDFs

`lib/packages.json` is the single source of truth: the website reads it (prices, the
exchange rate, download links, the Taj Mahal guide notice) and
`scripts/generate-pdfs.mjs` renders every PDF from it. Edit that file, run
`npm run pdfs`, and the site and the sheets stay in step.

## The Taj Mahal guide rule

**A guide is not allowed inside the Taj Mahal alongside a photographer.** This is a
deal-breaker for guests who assume they get both, so it is stated up front, never in
fine print:

- Photography packages (sunrise, couple/pre-wedding): no guide at all — the licensed
  photographer is with you inside.
- Guide + photo tours: the guide covers Agra Fort, Mehtab Bagh and Itmad-ud-Daulah;
  inside the Taj Mahal the photographer takes you through.
- Transport + Guide: guide throughout, because no photographer travels with you.

On the site it renders as `components/TajGuideNotice.tsx` on every affected package
page; in the PDFs it is a red banner on every sheet and on each rate-card page.

## Prices and the exchange rate

**USD is the price. Rupees are converted from it**, at one rate that lives in
`lib/packages.json`:

```json
"usdToInr": 95,          // $1 = ₹95
"inrRoundTo": 5,
"rateUpdated": "15 September 2026"
```

Exchange rates move, so this is the only thing to edit when they do. `toInr()` exists
in both `lib/currency.tsx` and `scripts/generate-pdfs.mjs` and returns the same
figure, and the "converted at $1 = ₹95, rate updated …" line shown on the site and
printed in the PDFs is **built from those constants** — it cannot fall out of step
with the numbers beside it. After changing the rate, run `npm run pdfs`.

| # | Package | USD | INR @ ₹95 | Duration | Guide |
|---|---------|-----|-----------|----------|-------|
| 1 | Taj Mahal Sunrise Photoshoot | $120 | ₹11,400 | 1.5–2 hours | None (not allowed with a photographer) |
| 2 | Couple & Pre-Wedding | from $199 | from ₹18,905 | 2+ hours | None (not allowed with a photographer) |
| 3 | Guide Tour + Photo · Small Group (1–5) | from $89 | from ₹8,455 | Half day | Outside the Taj Mahal |
| 4 | Guide Tour + Photo · Large Group (6–12) | from $119 | from ₹11,305 | Half day | Outside the Taj Mahal |
| 5 | Transport + Guide (no photography) | from $99 | from ₹9,405 | Same day, Agra | Throughout |

Longer photography days and the Delhi luxury tours live in `otherPackages` and appear
on the "Other Tours" page of the rate card.

Shared terms: 20% advance confirms the booking, balance after the tour; every package
is customisable; monument entry tickets are never included; the photography permit is
included in every photography package.

## The PDFs

```sh
npm run pdfs     # renders into public/pdf/
```

Every page prints **USD and INR together**, so one file suits any guest.

```
public/pdf/<package-id>.pdf   one big-type page per package (5 files)
public/pdf/all-rates.pdf      cover + a page per category (photography tours,
                              guide + photo tours, transport + guide) + other
                              tours and shared terms
```

The generator needs a Chromium binary — it finds Playwright's by default, or set
`CHROME_PATH`. `PDF_DUMP_DIR=<dir>` writes the HTML instead of rendering, which is
how to eyeball a layout change quickly.

Because they live in `public/`, every sheet is linkable straight into WhatsApp, e.g.
`https://tajmahalphotography.com/pdf/sunrise.pdf`.

## Where prices appear on the site

- Currency switch: `lib/currency.tsx`, `components/CurrencyToggle.tsx` (header)
- Price rendering: `components/Price.tsx`
- The "converted at" line: `components/InrRateNote.tsx` — renders only in ₹ mode,
  since in dollars there is nothing to qualify
- Downloads: `components/PackagePdfLinks.tsx` (package pages),
  `components/PdfDownloadCentre.tsx` (`/services#downloads`)

Prose that quotes a price (FAQ answers, schema.org offers, `llms.txt`) is written in
USD and updated by hand — grep for the figure when a price changes.

## Retired packages

Quick Capture ($49) and Family Vacation Photography ($299) were withdrawn; their
`/services/*` URLs 301-redirect to `/services/sunrise` (see `next.config.ts`).
