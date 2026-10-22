# Marble & Paper

The site has one theme and everything is built from it. If a new section does
not use these pieces, it will look like it came from a different website —
which is exactly what was wrong before this was written down.

**The idea.** Marble, paper and ink. The ground is warm off-white, like the
marble at first light. Photographs are never flush against the page: they are
*prints*, mounted on cream paper, slightly askew, hand-captioned — the way the
studio's own Instagram grid looks. Type is ink on that paper, serif for
headings with exactly one italic gold line per heading, sans for everything
read in paragraphs. Gold is reserved for the single action we want taken on a
given screen; it is never decoration.

**The parts.**

| Piece | Class | Rule |
|-------|-------|------|
| Page ground | `bg-marble-50` / `bg-white` | Alternate; never two dark sections in a row |
| The one dark room | `bg-ink-900 grain` | Only the film section. Contrast, not a pattern |
| Print | `.collage-card` + `.collage-media` + `.collage-body` | Any photograph in a card |
| Grid of prints | `.collage-grid` | Alternates the lean; never past 1.6deg |
| Tape | `.taped` | Hero cluster and the moments wall only |
| Hand caption | `.collage-caption` | Under the print, never over the photograph |
| Section label | `.collage-label` | The eyebrow above a *section* heading, on light grounds |
| Inline label | `.eyebrow` | Labels inside a card, and every eyebrow on a dark ground |
| Action | `.btn` + `.btn-gold` | One per screen |
| Secondary action | `.btn` + `.btn-outline` (`-light` on dark) | |
| Serious secondary | `.btn` + `.btn-ink` | Sidebars, forms |
| WhatsApp | `.btn` + `.btn-whatsapp` | Keeps its own green — people look for it |
| Size | `.btn-lg`, `.btn-sm`, `.btn-block` | Default height is 3rem; nothing smaller than 2.5rem |
| Section | `.section` | Vertical air, fluid from 3.25rem to 5.5rem |
| Gutter | `.shell` / `.shell-narrow` | Fluid 1.25rem → 2rem; never a fixed `px-4` |
| Heading block | `.section-head` | Label, heading, one paragraph — in that order |

**Responsiveness contract.** The layout is checked at 320, 360, 414, 768,
1024, 1280 and 1440 by `npm run audit`, which is the definition of "it works
on phones" here. Two rules that come out of that: a grid of *text* collapses
to one column below `sm`, because two columns of prose on a 360px phone give
four words a line; and a video keeps its own aspect ratio in an ordinary
block, never in a fixed-height viewport box, which is what made the film
section read as broken on a phone.


## Photography

The site runs on the studio's own photographs of real guests — supplied from
Drive in September 2026 and processed into `public/photos`. There is no stock
imagery left anywhere in the codebase.

- `public/photos/<slot>.jpg` — one per plan, plus `hero.jpg`, wired through
  `lib/images.ts`
- `public/photos/gallery/01–18.jpg` — the portfolio, listed with alt text in
  `lib/gallery.ts`

To swap any of them, replace the file or point the map at a different one.
Process new files the way these were: `sharp().rotate()` (honours EXIF, which
one of the originals needed), resize to 2000px for the hero and 1200–1400px
elsewhere, `jpeg({ quality: 80–82, mozjpeg: true })`. That lands each frame
around 100–200KB.

The hero photograph needs its left third reasonably clear — the headline sits
there on desktop. On phones the crop is a narrow vertical slice, so a frame
with its subject dead centre survives that better than one weighted to a side.

## Design tokens

`app/globals.css` holds the system. Use the tokens rather than one-off values:

- **Colour** — warm marble (`marble-50…300`) against warm ink (`ink-900…400`),
  gold (`gold-400…700`) for accent only. Nothing is pure grey; everything carries
  a little warmth, which is what separates paper from screen.
- **Type** — fluid scale via `clamp()`: `.display`, `.h1-fluid`, `.h2-fluid`,
  `.h3-fluid`, `.lead`, `.eyebrow`. One scale from 390px to 1440px, no jumps at
  breakpoints. Large serif gets negative tracking, small caps labels get wide.
- **Depth** — `--shadow-soft`, `--shadow-lift`, `--shadow-deep`. Warm-tinted and
  layered; a single hard shadow reads cheap.
- **Motion** — `--ease-out-expo` for everything. `.card-lift`, `.img-zoom`
  (frame stays still, photograph moves), `.link-sweep`, `.rise`.

## Rules worth keeping

- **Reveal in CSS, not JS.** motion renders its initial state into the server
  HTML, so a motion-revealed H1 ships at `opacity: 0` to anything that does not
  run scripts. The hero uses the `.rise` CSS animation for that reason; the
  noscript rule in `app/layout.tsx` covers the sections that still use motion.
- **No per-card stagger on a row.** Staggered delays make a grid look broken
  mid-scroll. Reveal a row together.
- **Text over photography needs a directional scrim**, not a flat overlay —
  `.scrim-hero` plus a left-to-right gradient, so copy sits on dark ground while
  the picture still reads as a picture.
- **Prefers-reduced-motion is honoured globally** in `globals.css`. Do not add
  animation that ignores it.
- **Claims must be verifiable.** The hero links to the Google profile rather
  than printing a star rating, and `lib/seo.ts` deliberately omits
  `AggregateRating`. If real review counts arrive, wire them in properly.

## Conversion path

- Desktop: hero CTA pair (Book / WhatsApp) → quick-book rail → package pages.
- Mobile: `components/MobileActionBar.tsx` pins price + WhatsApp + Book once the
  hero is scrolled past. The floating WhatsApp bubble is desktop-only.
- WhatsApp links are built in `lib/contact.ts` with the message pre-filled from
  context — a pre-filled message gets a reply, a bare "Hi" does not.

## Guest moments

`components/GuestMoments.tsx` on the homepage mounts six photographs as
polaroids — cream mount, a tilt, a hand-written caption in Caveat, a heart —
matching the cards the studio posts on Instagram.

Two of the supplied photographs arrived with that frame already burned into
the pixels, and in the plain portfolio grid they read as a mistake. They are
cropped back to the photograph itself (`sharp().extract()`), so the section
mounts all six identically and the treatment is the design rather than an
inconsistency.

## Film

`components/FilmShowcase.tsx` shows the two clips the studio supplied. Both
are things already sold and previously invisible on the site: a 27-second
landscape edit (the "30 second cinematic video" in the couple package) and a
vertical 14-second reel (the "3–5 reels" every package includes).

The cinematic clip starts as a card and scales to fill the screen on scroll;
the reel then rises beside it in a phone-shaped frame. The choreography is
decoration, so `useReducedMotion` drops it entirely and renders the same two
clips stacked and still.

The files are ~5MB together, so they are `preload="none"` and only given a
`src` once an IntersectionObserver says they are within 400px of the
viewport. Posters are stills from the gallery, since a poster frame cannot be
pulled from an H.264 file in this environment.

## Entrance and scroll

Two mechanisms, deliberately both CSS:

- `.rise` — a one-shot entrance for above-the-fold content (the hero H1).
- `.reveal` / `.reveal-stagger` — fades and lifts an element, or walks a grid's
  children in 70ms apart, as it scrolls into view.

Both ship *visible*. `.reveal`'s hiding rules are scoped under
`html[data-reveal='on']`, and that attribute is only set by
`components/ScrollReveal.tsx` once it mounts — so a crawler, a reader with
scripts off, or anyone with `prefers-reduced-motion: reduce` sees the content
rather than an empty page. This is the trap worth remembering: a motion library
writes `opacity: 0` into the *server* HTML, which is why `motion/react` is kept
off anything that matters for SEO.

Apply `.reveal` only where `motion/react` is not already animating the same
element, or it animates twice.

## The collage language

The guest-moments wall started as a one-off: two of the studio's photographs
already carried a cream mount and a hand-written caption because they were made
for Instagram. That treatment is now the site's visual language, in
`app/globals.css`:

- `.collage-card` — the paper mount. Warm `#FBF5EA`, 10px of margin around the
  photograph, a print shadow, and a tilt from `--tilt` that straightens and
  lifts on hover, as if you picked the print up.
- `.collage-media` / `.collage-body` — the photograph and the caption area
  inside the mount. A card needs both for the mount to read correctly.
- `.collage-grid` — alternating tilts by `nth-child`, never past 1.6deg, so a
  two-column phone layout cannot push a corner past the viewport.
- `.taped` — a strip of washi tape over the top edge. Hero cluster and the
  moments wall only; on every card it becomes noise.
- `.collage-caption` / `.collage-label` — the hand-written caption, and the
  pinned paper label used for section eyebrows.

Two things to know before using it:

**Do not set `position` in `.collage-card`.** This file is unlayered, so it
beats Tailwind's utilities — an earlier version set `position: relative` and
silently overrode `absolute` on the hero cluster, stacking the prints in a
column. `.taped` needs only *a* positioning context, and every taped element
already has one.

**Never put `.collage-card` on a `motion.*` element.** motion writes an inline
`transform`, which replaces `rotate(var(--tilt))` outright. The plan, tour and
guided-tour cards were converted from motion entrances to `.reveal` for exactly
this reason; a motion *wrapper* around a collage card is fine, because a parent
transform does not overwrite the child's.

## Density

Section rhythm is `py-14 md:py-20` (and `py-16 md:py-24` for the few feature
sections), headers `mb-10 md:mb-16`. Phones get roughly a third less vertical
air than desktop because the same padding that frames a section on a 1440px
screen is dead scrolling on a 390px one.

## Blog and languages

`lib/blog.ts` holds the articles; `app/blog/[slug]/page.tsx` renders them. Each
post leads with an `answer` field — one self-contained paragraph that answers
the title — because that is the part a featured snippet or an AI answer quotes.
Keep it standalone: no "as mentioned above".

`lib/i18n.ts` holds one translated landing page per language, rendered by
`components/LocaleLanding.tsx` at `/fr`, `/es`, `/de`, `/it`, `/pt`, `/ru`,
`/ja`, `/zh`, `/ar`, `/hi`. Routes are explicit directories, not a `[locale]`
segment, so they can never shadow a real page. Prices are read from
`lib/plans.ts` and never translated, and `localeAlternates()` is the single
source for hreflang, used by the root layout and every locale page with English
as `x-default`. Adding a language is: one entry in `LOCALES`, one four-line
`app/<code>/page.tsx`, one entry in `LOCALE_SERVICES` and one copy of
`app/<code>/[slug]/page.tsx`.

`lib/i18n-services.ts` holds five service pages per language at
`/<locale>/<slug>`, rendered by `components/LocaleServicePage.tsx`. Slugs are
written in the language, not transliterated, so the keyword is in the URL —
which also means hreflang cannot pair pages by URL. `serviceAlternates()`
pairs them by `planId` instead, with the English `/services/<id>` page as
`x-default`. Each locale route sets `dynamicParams = false`, so an unknown
slug 404s rather than rendering an empty shell.

## Booking

`components/QuickBook.tsx` is the booking path: package, date, guest count,
then a WhatsApp link whose message already contains all three. It takes a
`labels` object, so the message arrives in the language the guest was reading,
and `planNames` so the package is named in that language too. It is on the
homepage rail, every English service page, every article and every translated
page. Keep it to three fields — the deposit, the meeting point and the ticket
count are a reply away, and asking for them up front is what makes a form get
abandoned.

## Still open

- Nothing outstanding on imagery.
- Testimonials are three static quotes; real Google reviews with names and dates
  would carry far more weight.
- Sections below the fold still reveal via motion; moving them to `.rise` would
  let the noscript rule go.

## Checking the whole site, not the page you just edited

`scripts/audit-pages.mjs` sweeps every route at phone and desktop width, at
five scroll depths, and reports four faults that are invisible from whichever
page you happen to be working on:

- **horizontal overflow** — the page can be scrolled sideways
- **float-covers-content** — fixed furniture (back-to-top, chat bubble, action
  bar) sitting on top of a heading, link or paragraph
- **broken-image** — an `<img>` that resolved to nothing
- **small-tap-target** — below WCAG 2.5.8's 24px on a phone, skipping links
  that flow inline in a sentence, which the guideline exempts

```sh
npm run build
npx next start -p 3000 &                 # AFTER the build, never before
node scripts/audit-pages.mjs 3000        # needs headless Chrome on :9231
```

**Restart the server after every build.** `next start` serves the HTML with
the stylesheet hash it had at boot; rebuild underneath it and that file 404s,
so every page renders unstyled. Three audits in a row were thrown away this
way, each reporting dozens of "tap targets" that were only small because no
CSS was loading. If an audit suddenly finds faults everywhere, check
`curl -o /dev/null -w '%{http_code}' <the css url from the page source>`
before believing it.

It exists because a floating button was covering body copy on phones for
several commits while every individual page looked fine in isolation. Run it
before pushing anything that touches layout, and treat a non-clean result as
a broken build.
