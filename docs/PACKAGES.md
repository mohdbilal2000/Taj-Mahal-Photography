# Packages, pricing & PDFs

`lib/packages.json` is the single source of truth for the five bookable packages:
the website reads it (prices, the INR rate card, the download links) and
`scripts/generate-pdfs.mjs` renders every PDF from it. Edit that file, re-run the
generator, and the site and the PDFs stay in step.

## Prices

International guests are quoted USD. Indian guests are quoted a **domestic INR rate
card** — these are their own round-figure rates, not a conversion of the USD price,
so a moving exchange rate never makes them wrong.

| # | Package | USD | INR | Duration | Guide |
|---|---------|-----|-----|----------|-------|
| 1 | Taj Mahal Sunrise Photoshoot | $120 | ₹10,000 | 1.5–2 hours | Not included |
| 2 | Couple & Pre-Wedding | from $199 | from ₹15,000 | 2+ hours | Not included |
| 3 | Guide Tour + Photo · Small Group (1–5) | from $89 | from ₹7,500 | Half day | Included |
| 4 | Guide Tour + Photo · Large Group (6–12) | from $119 | from ₹10,000 | Half day | Included |
| 5 | Transport + Guide (no photography) | from $99 | from ₹8,000 | Same day, Agra | Included |

Every PDF states the guide position explicitly — included, or not included — so no
guest assumes a guide comes with a photography-only session.

INR rates for the older plans that are not in the PDF set (proposal, heritage trail,
full day, the two luxury tours) live in `INR_RATES` in `lib/currency.tsx`.

Shared terms: 20% advance confirms the booking, balance after the tour; every package
is customisable; monument entry tickets are never included; the photography permit is
included in every photography package.

## The PDFs

```sh
npm run pdfs     # renders all 12 files into public/pdf/
```

Twelve files — for each audience (`international`, `india`): a one-page sheet per
package plus a three-page brochure covering all five.

```
public/pdf/<package-id>-<audience>.pdf     e.g. sunrise-india.pdf
public/pdf/all-packages-<audience>.pdf
```

The generator needs a Chromium binary. It finds Playwright's by default; set
`CHROME_PATH` to point it elsewhere.

Because they live in `public/`, every sheet is downloadable from the site and can be
linked straight into WhatsApp, e.g.
`https://tajmahalphotography.com/pdf/sunrise-india.pdf`.

## Where prices appear on the site

- Currency switch: `lib/currency.tsx`, `components/CurrencyToggle.tsx` (in the header)
- Price rendering: `components/Price.tsx` — plans without an INR rate stay in USD
- Download links: `components/PackagePdfLinks.tsx` (service pages),
  `components/PdfDownloadCentre.tsx` (`/services#downloads`)

Prose that quotes a price (FAQ answers, schema.org offers, `llms.txt`) is written in
USD and updated by hand — grep for the figure when a price changes.

## Retired packages

Quick Capture ($49) and Family Vacation Photography ($299) were withdrawn; their
`/services/*` URLs 301-redirect to `/services/sunrise` (see `next.config.ts`).
