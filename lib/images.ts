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

/**
 * Swap a placeholder for real work by changing its value to the local path,
 * e.g. `sunrise: '/photos/sunrise.jpg'`. public/photos/README.md lists the
 * filename each slot expects and the frame that suits it.
 */

/**
 * Distinct frames, spread so neighbouring cards never repeat one. All are
 * Agra: a Delhi frame (India Gate) was previously landing on the Agra-only
 * transport card, which reads as a different city's tour.
 */
const FRAMES = {
  reflectingPool: 'photo-1564507592333-c60657eea523',
  couple: 'photo-1585506942812-e72b29cef752',
  gardens: 'photo-1548013146-72479768bada',
  archway: 'photo-1524492412937-b28074a5d7da',
} as const;

export const HERO_IMAGE = U(FRAMES.reflectingPool, 2400);

/** Card image per plan id. Keys match the ids in lib/plans.ts. */
export const PLAN_IMAGES: Record<string, string> = {
  sunrise: U(FRAMES.reflectingPool),
  'pre-wedding': U(FRAMES.couple),
  'guided-photo-tour-small': U(FRAMES.gardens),
  'guided-photo-tour-large': U(FRAMES.archway),
  // Four frames across five cards: the one repeat sits diagonally opposite.
  'transport-guide': U(FRAMES.reflectingPool),
  'taj-agra-fort': U(FRAMES.archway),
  'full-day': U(FRAMES.gardens),
  'sunrise-luxury-innova': U(FRAMES.couple),
  'sunrise-luxury-urbania': U(FRAMES.gardens),
};

export function planImage(id: string): string {
  return PLAN_IMAGES[id] ?? U(FRAMES.reflectingPool);
}
