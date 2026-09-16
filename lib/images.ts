/**
 * Every photograph the site shows, in one place.
 *
 * These are placeholders. For a photography business the imagery *is* the
 * product, and stock pictures of the Taj Mahal — especially the same one
 * repeated across cards — are the single loudest signal that a site is a
 * template. Replacing them is the highest-value change available here:
 * drop files into `public/photos/` and change the value to `/photos/<file>`.
 * Nothing else needs touching; every page reads from this map.
 *
 * Until then the placeholders are at least distributed so no two cards on a
 * screen repeat the same frame.
 */

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/** Distinct frames, so neighbouring cards never show the same picture. */
const FRAMES = {
  reflectingPool: 'photo-1564507592333-c60657eea523',
  couple: 'photo-1585506942812-e72b29cef752',
  gardens: 'photo-1548013146-72479768bada',
  archway: 'photo-1524492412937-b28074a5d7da',
  detail: 'photo-1587474260584-136574528ed5',
} as const;

export const HERO_IMAGE = U(FRAMES.reflectingPool, 2400);

/** Card image per plan id. Keys match the ids in lib/plans.ts. */
export const PLAN_IMAGES: Record<string, string> = {
  sunrise: U(FRAMES.reflectingPool),
  'pre-wedding': U(FRAMES.couple),
  'guided-photo-tour-small': U(FRAMES.archway),
  'guided-photo-tour-large': U(FRAMES.gardens),
  'transport-guide': U(FRAMES.detail),
  proposal: U(FRAMES.couple),
  'taj-agra-fort': U(FRAMES.archway),
  'full-day': U(FRAMES.gardens),
  'sunrise-luxury-innova': U(FRAMES.detail),
  'sunrise-luxury-urbania': U(FRAMES.gardens),
};

export function planImage(id: string): string {
  return PLAN_IMAGES[id] ?? U(FRAMES.reflectingPool);
}
