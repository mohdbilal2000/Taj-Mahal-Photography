# Design & UX notes

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

## Still open

- Nothing outstanding on imagery.
- Testimonials are three static quotes; real Google reviews with names and dates
  would carry far more weight.
- Sections below the fold still reveal via motion; moving them to `.rise` would
  let the noscript rule go.
