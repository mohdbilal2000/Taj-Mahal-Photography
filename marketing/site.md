# Site sheet

The one file that is different for every business. The agents and commands in `.claude/` are
generic: they read this sheet to learn which site they work on and how this repo is built.
`/marketing-onboard <url>` writes it for a new business.

## Business

- **Name:** Taj Mahal Photography
- **URL:** https://www.tajmahalphotography.com
- **Counts as a mention of us:** the business name "Taj Mahal Photography" used as a business, or the
  domain `tajmahalphotography.com`. The generic phrase "Taj Mahal photography" (the activity) does
  not count. Other Agra studios use near-identical names; a different site, phone or address means
  it is a competitor.
- **What we sell, to whom:** see `marketing/brand.md`.
- **Owner:** never opens files. Everything they need arrives as the chat message or phone
  notification itself, in short plain Hinglish, with any text they must paste written out in full.
  Customer-facing text: English and Spanish; French, German, Italian, Portuguese when earned.

## Markets

- **Target:** visitors from the USA, Canada, the UK and Europe, and Mexico and Latin America.
  Mexico is a priority: Spanish content, pesos and Mexico-to-India travel context.
- **Not targeted: India.** No Hindi content. No topics that only an Indian resident would search
  (Indian-citizen ticket deals, domestic train bookings, Indian wedding directories, rupee pricing).
  Facts for foreign visitors stay (the foreign ticket price, e-visa, flights, currency).
- **Prices** are shown in US dollars. Do not add rupee prices to titles, descriptions or new text.
- **Where these travellers ask questions:** r/travel, r/solotravel, r/IndiaTravel and r/india travel
  threads written by foreigners, TripAdvisor's India forums, Quora, and in Spanish r/mexico,
  r/viajes and Los Viajeros.
- **When choosing what to write, list on or pitch,** prefer the option an American, Canadian,
  European or Mexican traveller would see. Skip the one only an Indian audience would see.
- Enquiries from India are still answered politely; we simply do not spend effort attracting them.

## Facts

Never restate these from memory; read the file.

- Contact details, address, Google profile link, rating and review count: `lib/seo.ts` (`SITE`).
- People and credentials: `lib/team.ts`.
- Plans, what each includes, terms: `lib/packages.json`.

## Prices

Never typed. In text use tokens filled from `lib/packages.json` (`{usd:sunrise}`, `{inr:sunrise}`,
`{both:sunrise}`, `{usd:min}`; Spanish uses `{usdc:id}`; see `lib/rates.ts`). In code use
`usdOf('id')`. For text that leaves the site (a listing, a post), read the number from
`lib/packages.json` at the time of writing.

## Content

- English guides: `lib/blog.ts` (core) and `lib/blog-world.ts`; type `BlogPost`.
- Search title/description overrides: `lib/blog-seo.ts`. Sources per guide: `lib/blog-sources.ts`,
  keyed by slug.
- Spanish: `lib/blog-es.ts`. Each guide has `enSlug` pointing at its English twin; `lib/guides.ts`
  builds hreflang from that. Another language is added in `lib/guide-ui.ts` plus a route folder
  like `app/es/guias`. (Hindi guides were retired on 27 Nov 2026 and redirect to English.)
- Routes, sitemap (`app/sitemap.ts`), RSS and `app/llms.txt/route.ts` pick new guides up from those
  files. After adding one, confirm the new URL is in the built output.
- Page titles and descriptions for other pages are in each page's `metadata`.
- Topic facts that change (monument ticket fees, timings, closed days, what is allowed) must come
  from the official source, opened at the time of writing.

## Media

Photos are in `public/`; what each shows is described in `lib/gallery.ts` and `lib/images.ts`.

## Checks before anything is published

All three must pass:

```
./node_modules/.bin/tsc --noEmit
npm run check:rates
npm run build
```

(`npm ci` first if `node_modules` is missing.)

## Publishing

Commit, then push to `main`; Vercel deploys `main` automatically. After the deploy, tell search
engines: `node scripts/indexnow.mjs /path /path`.

## Autopilot

The scheduled runs read this section first.

- **Autopilot: ON** (change to OFF and every scheduled run stops at once, doing nothing)
- **New guides published without asking:** at most 1 per week, and only when the fact-checker passes
  it. Otherwise it is saved in `marketing/drafts/` for the owner.
- **Existing guides refreshed without asking:** at most 2 per week (facts, dates, a missing answer).
- **Never without the owner:** changing prices, plans, contact details or legal pages; deleting or
  renaming a page; anything outside this repo (posting, emailing, submitting, replying anywhere).
