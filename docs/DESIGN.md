# Design & UX notes

## The one change that matters most

**Every photograph on this site is stock.** Thirty image slots were drawing on
five Unsplash frames, repeated across neighbouring cards — for a photography
business that is the loudest possible signal that a site is a template, and no
amount of layout work compensates for it. A guest deciding whether to hand over
their one morning at the Taj Mahal is buying the photographs, and right now they
cannot see any.

Replacing them is a one-line change per plan:

1. Drop files into `public/photos/`
2. In `lib/images.ts`, change the value to `/photos/<file>.jpg`

Everything reads from that map — hero, cards, service pages. Real work in the
hero alone would do more for conversion than anything else listed here.

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

## Still open

- Real photography (above).
- A portfolio/gallery section on the homepage — there is a `/portfolio` route but
  nothing proving the work on the landing page.
- Testimonials are three static quotes; real Google reviews with names and dates
  would carry far more weight.
- Sections below the fold still reveal via motion; moving them to `.rise` would
  let the noscript rule go.
