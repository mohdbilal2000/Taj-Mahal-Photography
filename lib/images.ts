/**
 * Every photograph the site shows, in one place.
 *
 * These are the studio's own photographs of real guests, which is the whole
 * point on a photography site — stock pictures of the Taj Mahal, repeated
 * across cards, are what make a site look like a template. Files live in
 * public/photos; see the README there for what each slot wants.
 */

export const HERO_IMAGE = '/photos/hero.jpg';

/** Card image per plan id. Keys match the ids in lib/plans.ts. */
export const PLAN_IMAGES: Record<string, string> = {
  sunrise: '/photos/sunrise.jpg',
  'pre-wedding': '/photos/pre-wedding.jpg',
  'guided-photo-tour-small': '/photos/guided-photo-tour-small.jpg',
  'guided-photo-tour-large': '/photos/guided-photo-tour-large.jpg',
  'transport-guide': '/photos/transport-guide.jpg',
  'taj-agra-fort': '/photos/taj-agra-fort.jpg',
  'full-day': '/photos/full-day.jpg',
  'sunrise-luxury-innova': '/photos/sunrise-luxury-innova.jpg',
  'sunrise-luxury-urbania': '/photos/sunrise-luxury-urbania.jpg',
};

/** Alternate slugs that share a plan's photograph (see PLAN_ALIASES in plans.ts). */
const IMAGE_ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
  'transport-photography': 'transport-guide',
};

export function planImage(id: string): string {
  return PLAN_IMAGES[IMAGE_ALIASES[id] ?? id] ?? HERO_IMAGE;
}
