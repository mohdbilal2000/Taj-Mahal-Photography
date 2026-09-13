# Packages & Pricing (source of truth)

The five bookable packages, matching `docs/Taj-Mahal-Photography-Packages-2026.pdf`.
Prices are USD, per package (not per person). Monument entry tickets are never included;
the official photography permit is included in every photography package.
Every package is customisable — **20% advance confirms the booking**, balance after the tour.

| # | Package | Price | Duration | Key inclusions |
|---|---------|-------|----------|----------------|
| 1 | Taj Mahal Sunrise Photoshoot | $120 | 1.5–2 hours | 120+ photos · 3–5 reels (solo/couple/family) · hotel pickup & drop-off |
| 2 | Couple & Pre-Wedding | from $199 | 2+ hours | 200+ high-res photos · 30 edited photos (guest picks) · 30-sec cinematic video · posing direction |
| 3 | Guide Tour + Photo · Small Group (1–5) | from $89 | Half day | Licensed guide · photographer · 40 natural digital photos · 5 reels |
| 4 | Guide Tour + Photo · Large Group (6–12) | from $119 | Half day | Licensed guide · photographer · 60 natural digital photos · 7 reels · group + individual portraits |
| 5 | Transport + Guide (no photography) | from $99 | Same day, Agra only | Private A/C car + chauffeur · Ministry of Tourism licensed guide · hotel/station/airport pickup · no photographer |

Packages 3–5 cover the Taj Mahal, Agra Fort and Mehtab Bagh / Itmad-ud-Daulah.

## Regenerating the PDF

The brochure source is `docs/packages-brochure.html`. Render with headless Chromium:

```sh
chrome --headless --no-pdf-header-footer \
  --print-to-pdf=docs/Taj-Mahal-Photography-Packages-2026.pdf \
  file://$PWD/docs/packages-brochure.html
```

## Retired packages

Quick Capture ($49) and Family Vacation Photography ($299) were withdrawn; their
`/services/*` URLs 301-redirect to `/services/sunrise` (see `next.config.ts`).
Family groups are covered by the sunrise session's reels and the Guide + Photo combos.
