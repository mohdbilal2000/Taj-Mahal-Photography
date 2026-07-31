# Taj Mahal Photography — AI SEO / AEO / GEO Audit & Action Plan

**Domain:** tajmahalphotography.com
**Last reviewed:** 2026-05-15
**Branch / latest commit:** `main` — see `git log -1`
**Pages indexed:** 29 static routes
**Audience:** SEO team + agency partners

---

## TL;DR for the team

- **On-site SEO / AEO / GEO score: ~9 / 10.** The technical foundation, structured-data graph, AI crawler allowlist and AEO surface (`/llms.txt`, speakable selectors, FAQ, HowTo, Quick Answer blocks) are at or beyond 2026 best practice.
- **Off-site authority: ~3 / 10.** This is the bottleneck. Backlinks, Google Business Profile, TripAdvisor, Reddit/YouTube mentions are the real ranking lever from here.
- **Composite practical score: ~6.5 / 10.** Rankings will not move materially until off-site is addressed.
- **Single highest-leverage next action:** Claim and verify the Google Business Profile.

---

## 1. Score breakdown

| Dimension | Score | Status |
|---|---|---|
| Technical SEO | 9.5 / 10 | Excellent — clean Next.js 15 SSG, canonical/sitemap/robots/hreflang, mobile-first |
| Structured data (Schema.org) | 9.5 / 10 | Excellent — single `@graph` per page, no duplicates, no policy violations |
| AEO (Answer Engine Optimization) | 8 / 10 | Strong — `/llms.txt`, Quick Answer blocks, 17-question FAQ, speakable. Off-site mentions are the gap. |
| GEO (Geo / Local intent) | 8 / 10 | Strong — Wikidata sameAs, geo meta tags, areaServed, knowsLanguage. GBP missing. |
| E-E-A-T | 7 / 10 | Strong on credentials, weak on verifiable reviews |
| Off-site authority | 3 / 10 | Bottleneck — needs link-building, GBP, third-party listings |
| **Composite (weighted)** | **6.5 / 10** | On-site is done; off-site is next |

---

## 2. What's implemented in code (current state)

### 2.1 Crawl & discovery

- **robots.txt** (`app/robots.ts`) — allowlist for every major training AND retrieval-time AI agent (see full list in §9)
- **XML sitemap** (`/sitemap.xml`, `app/sitemap.ts`) — 27 routes including all package detail pages and `/llms.txt`
- **`/llms.txt`** (`app/llms.txt/route.ts`) — markdown index for AI agents (Anthropic-supported emerging standard)
- **Canonical URLs** declared per page; consistent trailing-slash policy
- **hreflang** declared: `en-US`, `en-GB`, `en-IN`, `x-default`
- **Meta tags** — geo.region, geo.position, ICBM, theme-color, application-name, viewport
- **`rel="me"`** on footer social links (IndieWeb entity verification)

### 2.2 Structured data graph

Every page emits a single `@graph` JSON-LD block (preferred by AI parsers over multiple loose script tags).

Entity types injected across the site:

| Entity | Where |
|---|---|
| LocalBusiness / ProfessionalService / PhotographyBusiness | All pages (`@id: #business`) |
| Person — photographer with `hasCredential` referencing Ministry of Tourism | Home, About (`@id: #photographer`) |
| WebSite + WebPage (with `lastReviewed` freshness signal) | Every route |
| TouristAttraction × 2 — Taj Mahal + Agra Fort | Home (`@id: #taj-mahal`, `#agra-fort`) |
| TouristTrip × 2 — Sunrise Luxury Innova + Urbania | Home + per-slug |
| Service × 9 — every package | Per-slug |
| FAQPage — 17-question shared FAQ with speakable | Home + `/faq` + per-slug |
| HowTo × 2 — "How to book" + "How to book licensed photographer" | Home + `/permit-guide` |
| BreadcrumbList | Every page |
| Review × 3 — customer testimonials | Home |
| Blog + BlogPosting × 6 | `/blog` |
| SpeakableSpecification | Home, FAQ, per-slug — targets `.faq-answer`, `.quick-answer` |
| ProfilePage | About |
| OfferCatalog with 9 offers + dynamic priceValidUntil | LocalBusiness |

**Wikidata Q-IDs in `sameAs` chains** (gives AI rerankers a verifiable entity edge):

| Entity | Q-ID |
|---|---|
| Taj Mahal | Q9141 |
| Agra Fort | Q43473 |
| Agra | Q42941 |
| Delhi | Q1353 |
| Ministry of Tourism, Government of India | Q6868810 |

### 2.3 AEO surface (Answer Engine Optimization)

- **Visible "Quick Answer" block** at the top of every package and tour page — 40 to 60 word direct-answer paragraph in the exact format Google AI Overviews and Perplexity preferentially extract.
- **17-question FAQ** shared from `lib/content.ts` across `/`, `/faq`, and per-page; visible answers carry `.faq-answer` class for speakable extraction.
- **Numbered itineraries** for luxury tours (the format AI rerankers extract for "what does the tour include" / "what time does it start" queries).
- **Comparison cross-links** between Innova and Urbania tours (AI engines surface comparison content for "X vs Y" queries).
- **Visible "Last updated" timestamp** on long-form pages.
- **Dynamic `LAST_UPDATED`** and **`priceValidUntil`** (+18 months) computed at build time so freshness signals don't go stale.
- **sr-only TL;DR block** on home page (accessibility-compliant; not marked speakable to avoid hidden-text policy risk).

### 2.4 GEO / Local intent

- `geo.region` IN-UP, `geo.position`, `ICBM`
- PostalAddress with street, city, state, zip, country
- `areaServed`: Agra + Delhi with Wikidata + Wikipedia sameAs
- TouristAttraction nodes with lat/lng + Wikidata
- `knowsLanguage`: en, hi, ur
- OpeningHoursSpecification with daily hours
- `currenciesAccepted`: USD, INR
- `paymentAccepted`: Cash, UPI, Bank Transfer

### 2.5 E-E-A-T signals

- Person / Photographer entity with `hasCredential` (EducationalOccupationalCredential, License) referencing the Ministry of Tourism
- `recognizedBy` GovernmentOrganization with Wikidata sameAs to the issuing authority
- About page (`/about`) describes credentials, "10+ years experience", "5,000+ clients", "80+ countries"
- Permit Guide page (`/permit-guide`) demonstrates domain expertise
- Customer Review nodes with `author`, `country`, `datePublished`, `reviewBody`, `reviewRating`

---

## 3. Critical issues found and fixed (May 2026 audit)

These were either residual bugs from prior SEO work, or issues introduced by the May 2026 AEO overhaul. **All resolved on `main`** as of the latest commit.

| # | Severity | Issue | Status |
|---|---|---|---|
| 1 | HIGH | Duplicate FAQ markup (Microdata in FAQ component + JSON-LD in page) — Google explicit rich-result disqualifier | Fixed: Microdata stripped, single JSON-LD source of truth |
| 2 | HIGH | Duplicate Offer / TouristTrip Microdata on PhotographyPlans and LuxuryTours components | Fixed |
| 3 | HIGH | AggregateRating claimed `reviewCount: 500` but only 3 Review nodes existed — verifiable mismatch, rich-result disqualifier | Fixed: AggregateRating removed until verifiable Google/TripAdvisor URLs are wired in (see §4.2) |
| 4 | HIGH | Self-published Reviews (`publisher: business` reviewing itself) — Google Merchant Listings 2023+ policy violation | Fixed: `publisher` and `itemReviewed` stripped from review schema |
| 5 | HIGH | `/blog` page emitted Article schemas pointing at 6 non-existent `/blog/{slug}` URLs — cloaking-equivalent | Fixed: replaced with single Blog + embedded BlogPosting (no per-post URLs) |
| 6 | HIGH | OfferCatalog advertised `/services/quick-capture`, `/services/taj-agra-fort`, `/services/full-day` — all returned 404 | Fixed: 3 missing detail pages built with full content + FAQ + schema |
| 7 | MED | `/services/sunrise` static route shadowed the dynamic `[slug]` route — old multi-script pattern persisted | Fixed: migrated to `@graph` |
| 8 | MED | Hardcoded `LAST_REVIEWED = '2026-05-15'` date that would silently go stale | Fixed: replaced with build-time computed `LAST_UPDATED` constant in `lib/seo.ts` |
| 9 | MED | Hardcoded `priceValidUntil: '2026-12-31'` across all offers | Fixed: dynamic +18 months from build time |
| 10 | MED | Speakable `cssSelector` targeted `.tldr` which sits in `sr-only` — hidden-text policy risk | Fixed: removed from speakable selectors |
| 11 | MED | Canonical home URL trailing-slash inconsistency between `metadata.canonical` and JSON-LD `WebPage.url` | Fixed |
| 12 | MED | HowTo schemas on `/permit-guide` and home page shared no unique `@id` (collision) | Fixed: unique `@id` on each |
| 13 | LOW | `<meta name="keywords">` had ~200 phrases (Bing/Yandex treat large dumps as a quality-negative signal) | Fixed: trimmed to 25 high-intent terms; long-tail covered by visible content + FAQ schema |
| 14 | LOW | Hero `alt` was generic "Taj Mahal at Sunrise" | Fixed: descriptive alt |
| 15 | LOW | Tracked artifact `app/about/test.txt` | Fixed: deleted |
| 16 | LOW | `/payment` and `/services/quick-capture` missing from sitemap | Fixed |
| 17 | LOW | `/services` Offer schema used string price, missing `priceValidUntil` | Fixed: uses centralized `offerSchema` helper |

---

## 4. Off-site action items — what the team needs to do

This is **the highest-leverage work** from here. Most code-side work is done; rankings will not move materially until these are addressed. Priority order:

### 4.1 Google Business Profile — CRITICAL

**Why it matters:** For "Taj Mahal photographer" queries, the Local Pack (Map + 3 listings) often sits above all organic results. Without a verified GBP, the business is invisible to the largest source of local-intent traffic. This single action has historically moved local-intent businesses from invisible to 3-pack in 60–90 days.

**Actions:**
- [ ] Claim and verify the GBP at "Taj Mahal East Gate Road, Agra, UP 282001"
- [ ] Add 30+ portfolio photos (interior, exterior, with-client shots)
- [ ] Add the government license certificate as a Business Asset
- [ ] Post weekly updates (each new package, each Instagram post, seasonal updates)
- [ ] Reply to every review within 48 hours
- [ ] Add Q&A entries on the GBP that mirror the on-site FAQ

### 4.2 Reviews — Google + TripAdvisor — CRITICAL

**Why it matters:** Google's "Reviews" carousel for "best Taj Mahal photographer" pulls from Google + TripAdvisor + Reddit. AI Overviews cite these by name. AggregateRating schema is currently OMITTED from the site because no verifiable review URLs exist — wiring real reviews will reactivate that rich-result signal.

**Actions:**
- [ ] TripAdvisor: claim business listing
- [ ] Set up a post-shoot review request flow (WhatsApp template + QR code given to clients on delivery)
- [ ] Target: 30 Google reviews and 15 TripAdvisor reviews in 90 days
- [ ] Once reviews exist, send the public URLs to the dev team — `reviewSchema()` already accepts a `sourceUrl` field and `aggregateRating` will be re-enabled with the verified count

### 4.3 Third-party listings — HIGH

These platforms drive significant traffic for "things to do in Agra" / "Taj Mahal tour" queries and link back to your site.

- [ ] **GetYourGuide** — list both Sunrise Luxury Tours and both Guide+Photo combos
- [ ] **Viator** — same
- [ ] **Klook** — same (high traffic from Asian markets)
- [ ] **Airbnb Experiences** — list at least one package
- [ ] **Lonely Planet** "things to do in Agra" — pitch a recommendation
- [ ] **Wikivoyage Agra page** — propose an external-link addition under "See / Do"
- [ ] **TimeOut India** — pitch story

### 4.4 Backlinks — HIGH

The single biggest organic ranking lever after GBP. Build for 6–12 months for compounding effect.

- [ ] **Reddit** — answer 5 questions per week in r/IndiaTravel, r/travel, r/solotravel about Taj Mahal permits, photography, sunrise. Be helpful, link only when genuinely relevant. AI Overviews cite Reddit at ~24–47% of citations in this vertical.
- [ ] **YouTube** — one 60-second clip per package, optimized title + description + tags. YouTube is the #2 most-cited domain in Google AI Overviews after Reddit.
- [ ] **Travel blogs** — outreach to top 20 India travel bloggers; offer free shoots in exchange for a do-follow backlink + an authentic review
- [ ] **Indian press** — pitch to TOI, Hindustan Times, Tribune, NDTV travel desks. Story angles: "Government-licensed photographer at Taj Mahal", "Same-day Delhi → Agra sunrise luxury tour"
- [ ] **Local Agra business directories** — Justdial, Sulekha, Tradeindia
- [ ] **Photography communities** — 500px, Behance, Flickr profile linking to the site

### 4.5 Visible E-E-A-T improvements

- [ ] Display the actual license number on the About page (replace the placeholder "GOVT ID" badge with the real number)
- [ ] Add a high-resolution photograph of the license certificate to the About page
- [ ] Add a dedicated `/about/photographer` profile route (dev team can build on request — listed in §7)
- [ ] Add a "Press" section listing any prior media coverage
- [ ] Display verified review counts and source links once reviews exist

---

## 5. Verification tools — what the team should run weekly

| Tool | URL | What to check |
|---|---|---|
| Google Search Console | search.google.com/search-console | Index coverage, sitemap status, Core Web Vitals, top queries, click-through rate |
| Bing Webmaster Tools | bing.com/webmasters | Same for Bing/Yahoo (some AI engines retrieve through Bing) |
| Google Rich Results Test | search.google.com/test/rich-results | Validate each page's structured data has no errors |
| Schema.org Validator | validator.schema.org | Comprehensive Schema.org validity |
| PageSpeed Insights | pagespeed.web.dev | LCP / INP / CLS per page |
| Ahrefs / SEMrush (paid) | — | Backlink growth, ranking position for target keywords, competitor gap analysis |
| SimilarWeb | similarweb.com | Traffic estimate, traffic sources |
| Bing IndexNow API | bing.com/indexnow | Push new content for instant indexing |
| Google Business Profile Insights | business.google.com | GBP performance once verified |

### 5.1 Specific pages to test in Rich Results

| URL | Should validate |
|---|---|
| `/` | LocalBusiness, FAQPage, HowTo, TouristAttraction × 2, TouristTrip × 2, BreadcrumbList, Person, Review × 3 |
| `/services/sunrise-luxury-innova` | TouristTrip (with Vehicle, itinerary, departureLocation), Service, FAQ, WebPage, BreadcrumbList |
| `/services/guided-photo-tour-large` | Service, FAQ, WebPage, BreadcrumbList |
| `/services/sunrise` | TouristTrip, FAQ, WebPage, BreadcrumbList |
| `/permit-guide` | HowTo (unique `@id`), FAQ, WebPage, BreadcrumbList |
| `/blog` | Blog + BlogPosting × 6, BreadcrumbList |
| `/about` | ProfilePage, Person, WebPage, BreadcrumbList |
| `/faq` | FAQPage with speakable, WebPage, BreadcrumbList |

### 5.2 llms.txt verification

Fetch `https://tajmahalphotography.com/llms.txt` directly — should return `text/plain` markdown index of every package and tour. Compare against the README of `app/llms.txt/route.ts`.

### 5.3 robots.txt verification

Fetch `https://tajmahalphotography.com/robots.txt` — should list every AI bot in §9 with `Allow: /`.

---

## 6. Estimated lead impact (honest assessment)

Real lead numbers depend on inputs I don't have (current baseline inquiries, conversion rate, ad spend, season). Honest framing:

- **Code-side improvements alone** will increase eligibility to be cited by ChatGPT, Claude, Perplexity, Google AI Overviews and Gemini, but AI-search referrals are typically 1–5% of total search volume in this vertical right now.
- **AI-search-referred visitors do convert better** (2–3× higher inquiry rates than generic search visits) because they're more decision-ready when they arrive.
- **Real lead impact this year depends almost entirely on whether GBP, reviews and backlinks are tackled.**

A reasonable trajectory with the off-site work in §4:

| Window | Expected inquiry uplift (organic + AI) | Driver |
|---|---|---|
| Q1 (months 1–3) | +5 to 10 inquiries / month | GBP claim + initial reviews start flowing |
| Q2 (months 4–6) | +20 to 40 inquiries / month | Reviews compound, first AI citations land, initial backlinks register |
| Q3 (months 7–9) | +50 to 80 inquiries / month | AI engines re-rank with off-site authority signals, GBP 3-pack inclusion |
| End of year | Organic + AI driving 50%+ of inbound | Compound effect of all of the above |

**Without off-site work, the increase plateaus around +3 to 5 inquiries / month from AI-search visibility alone.**

The single number-swing factor is **whether the Google Business Profile gets claimed and verified.**

---

## 7. Roadmap — code work still available on request

The dev team can ship any of these on request:

| Priority | Item | Why it matters | Effort |
|---|---|---|---|
| HIGH | `/about/photographer` page with license certificate + visible license number | +1 to E-E-A-T; AI engines verify credentials via on-page artifacts | 1 day |
| HIGH | `/blog/[slug]` template + write the 6 placeholder posts as full content | Unlocks Article rich results; +1 to AEO surface; long-tail organic acquisition | 2 to 3 days |
| MED | Per-pickup-city landing pages (sunrise tour from Noida / Gurugram / Ghaziabad / Faridabad) | +0.5 to GEO; captures 6+ long-tail city queries | 1 day |
| MED | `/services/compare` side-by-side comparison page | AI engines preferentially extract comparison tables for "X vs Y" queries | 0.5 day |
| LOW | Schema for monument opening hours, Friday closures, ticket prices | Direct answers to common queries; AI engines extract structured facts | 0.5 day |
| LOW | Open Graph image variants per package (currently uses Unsplash hero) | Cleaner social cards on shares | 0.5 day |
| LOW | Hindi-language site (`/hi/` subpath) with translated content | Captures Indian-language search; opens domestic market | 5+ days |

---

## 8. File-level reference for the team

| Concern | File |
|---|---|
| All schema generators (LocalBusiness, Person, TouristTrip, Review, FAQ, Speakable, HowTo, WebPage, graph wrapper, Wikidata constants) | `lib/seo.ts` |
| Shared FAQ + testimonial data | `lib/content.ts` |
| Robots / AI bot allowlist | `app/robots.ts` |
| `/llms.txt` route | `app/llms.txt/route.ts` |
| Sitemap | `app/sitemap.ts` |
| Root metadata + keywords + hreflang | `app/layout.tsx` |
| Home page `@graph` | `app/page.tsx` |
| Per-package detail pages | `app/services/[slug]/page.tsx` |
| Standalone `/services/sunrise` | `app/services/sunrise/page.tsx` |
| FAQ component (speakable selectors) | `components/FAQ.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Hero (alt text) | `components/Hero.tsx` |
| Photography plans (5 cards, $59 to $499) | `components/PhotographyPlans.tsx` |
| Guided Photo Tours ($79 / $99) | `components/GuidedPhotoTours.tsx` |
| Luxury Tours from Delhi ($650 / $899) | `components/LuxuryTours.tsx` |
| Footer (`rel="me"` social, services list) | `components/Footer.tsx` |
| Booking form (service dropdown) | `components/ContactForm.tsx` |

---

## 9. AI bot allowlist reference

These bots are explicitly allowed in `app/robots.ts`. Verify by fetching `/robots.txt` in production.

| Provider | User-agent(s) |
|---|---|
| OpenAI | `GPTBot`, `ChatGPT-User`, `OAI-SearchBot` |
| Google | `Googlebot`, `Google-Extended`, `Google-NotebookLM`, `Google-CloudVertexBot` |
| Anthropic | `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `anthropic-ai` |
| Perplexity | `PerplexityBot`, `Perplexity-User` |
| Microsoft / Bing | `Bingbot` |
| Apple | `Applebot`, `Applebot-Extended` |
| Meta | `Meta-ExternalAgent`, `Meta-ExternalFetcher`, `FacebookBot` |
| Mistral | `MistralAI-User` |
| Cohere | `cohere-ai`, `Cohere-AI` |
| Amazon | `Amazonbot`, `AmazonBot` |
| You / DuckDuckGo | `YouBot`, `DuckAssistBot`, `DuckDuckBot` |
| TikTok | `Bytespider` |
| Huawei | `PetalBot` |
| Other | `Diffbot`, `Timpibot`, `NeevaBot`, `Yandex`, `YandexBot`, `BaiduSpider` |

---

## 10. Things we deliberately did NOT do — and why

These sound trendy but either don't move the needle in 2026 or actively hurt rankings. The dev team will refuse to add them.

| Thing | Why we skipped it |
|---|---|
| `display: none` keyword stuffing | Treated as cloaking by Google; AI rerankers ignore. The legitimate "hidden from design, visible to bots" channels are JSON-LD, `meta`, `sr-only` accessibility content, OpenGraph — all already maxed. |
| `/llms-full.txt` | Anthropic / OpenAI / Google crawlers don't fetch this in meaningful volume during live retrieval. A 300K-domain Nov 2025 study showed no measurable citation lift. Real value is for IDE agents only. |
| Daily empty `lastmod` bumps in sitemap | Google explicitly devalues this; AI engines compute content deltas, not sitemap timestamps. |
| AggregateRating without verifiable underlying Review nodes | Rich-result disqualifier under Google policy. Will be re-enabled when real Google/TripAdvisor URLs are wired in (§4.2). |
| Self-published Reviews (business reviewing itself) | Google Merchant Listings 2023+ policy violation. |
| Blanket `Speakable` on every paragraph | Dilutes the signal. Only direct-answer passages are marked. |
| Stuffing `sameAs` with low-authority profiles (Pinterest, random directories) | Weakens entity confidence vs. Wikidata / Wikipedia / Google Knowledge Graph. |
| Generic "AI sitemaps" or proprietary AEO meta tags from SaaS vendors | No engine reads them. |

---

## 11. Sign-off

**On-site SEO / AEO / GEO is done.** The site is at or beyond the standard for 2026 best practices on every code-controllable dimension. Repeat audits should focus on regressions, not new features.

**Off-site is the bottleneck.** Rankings from here are a function of authority and review signals from outside the codebase.

**Single most important action from here: claim and verify the Google Business Profile (§4.1).**

---

**Repo:** github.com/mohdbilal2000/Taj-Mahal-Photography
**Doc location:** `docs/SEO-AUDIT.md`
**Maintained by:** dev team
