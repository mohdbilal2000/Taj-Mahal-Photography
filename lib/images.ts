// ─────────────────────────────────────────────────────────────
//  Centralized monument image library
//
//  Why this exists:
//  - Our niche is foreigner photography tours of Agra/Delhi MONUMENTS.
//    Imagery must stay monument-led (Taj Mahal, Agra Fort, Mughal
//    architecture) — never generic people/performance stock.
//  - Previously the same handful of Unsplash IDs were pasted ad-hoc across
//    ~15 files, which made the site feel repetitive and made swaps painful.
//  - Each entry carries descriptive, location-accurate ALT text. Good alt
//    text is an SEO/AEO signal (and an accessibility requirement), so it
//    lives with the asset instead of being re-invented per usage.
//
//  To add/replace a photo: drop a verified monument Unsplash ID below with
//  honest alt text. `img(asset, width)` builds an optimized, correctly
//  cropped URL on demand.
// ─────────────────────────────────────────────────────────────

export type MonumentImage = {
  /** Unsplash photo id (the `photo-...` slug, no query string). */
  id: string;
  /** Honest, location-specific alt text — used for SEO + a11y. */
  alt: string;
};

/**
 * Verified monument photographs. Each is a building/architecture/landscape
 * shot of the Taj Mahal, Agra Fort or a Mughal heritage site — no posed
 * people, performers or cultural-show imagery (per the brand brief).
 */
export const IMG = {
  // The iconic white-marble Taj Mahal with the central reflecting pool.
  tajReflection: {
    id: 'photo-1564507592333-c60657eea523',
    alt: 'The white marble Taj Mahal mausoleum mirrored in the central reflecting pool at sunrise in Agra, India',
  },
  // Taj Mahal in warm low-angle light — used for golden-hour / couple framing.
  tajGoldenHour: {
    id: 'photo-1585506942812-e72b29cef752',
    alt: 'The Taj Mahal glowing in warm golden-hour light above the Yamuna riverbank in Agra',
  },
  // Wider Taj Mahal composition with gardens / approach.
  tajGardens: {
    id: 'photo-1548013146-72479768bada',
    alt: 'The Taj Mahal framed by its symmetrical Mughal charbagh gardens and cypress avenue',
  },
  // Mughal architecture detail / Agra Fort red sandstone.
  agraFort: {
    id: 'photo-1524492412937-b28074a5d7da',
    alt: 'Red sandstone Mughal arches and inlaid marble detail at Agra Fort, a UNESCO World Heritage site',
  },
  // Taj Mahal dome / minaret architectural study.
  tajDome: {
    id: 'photo-1587474260584-136574528ed5',
    alt: 'Close architectural study of the Taj Mahal central dome, finial and flanking minarets against a clear sky',
  },
  // Atmospheric Taj Mahal at dawn through morning haze.
  tajDawnHaze: {
    id: 'photo-1514222288957-49a4653e1073',
    alt: 'The Taj Mahal silhouetted through soft morning haze at first light in Agra',
  },
  // Taj Mahal seen from the riverside / alternate vantage.
  tajRiverside: {
    id: 'photo-1590136132691-8b19a18b4ef3',
    alt: 'The Taj Mahal viewed across the Yamuna river from Mehtab Bagh at dusk',
  },
} as const satisfies Record<string, MonumentImage>;

export type ImageKey = keyof typeof IMG;

/**
 * Build an optimized Unsplash URL for an asset.
 * @param image  an entry from IMG
 * @param width  intrinsic pixel width to request (default 1200)
 * @param opts   optional crop tuning — `ar` like '3/4', '16/9' for varied framing
 */
export function img(
  image: MonumentImage,
  width = 1200,
  opts?: { ar?: string; quality?: number },
): string {
  const params = new URLSearchParams({
    q: String(opts?.quality ?? 80),
    w: String(width),
    auto: 'format',
    fit: 'crop',
  });
  if (opts?.ar) params.set('ar', opts.ar);
  return `https://images.unsplash.com/${image.id}?${params.toString()}`;
}
