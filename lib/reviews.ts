import { SITE } from './seo';

/**
 * The Google rating shown on the site.
 *
 * It refreshes itself when a Places API key is present: the page is rebuilt
 * daily and the live figure replaces the stored one. Without a key — which is
 * the default, since the key costs money — it falls back to the figure in
 * lib/seo.ts, which is what was on the profile the day it was checked.
 *
 * The point is that the number can never be silently wrong: either it is
 * live, or it is dated and the site says when it was checked.
 */
export type Rating = {
  value: number;
  count: number;
  /** True when the numbers came from Google just now rather than from source. */
  live: boolean;
  checked: string;
};

const FALLBACK: Rating = {
  value: SITE.googleRating,
  count: SITE.googleReviewCount,
  live: false,
  checked: SITE.googleRatingChecked,
};

/** Rebuild the page carrying this at most once a day. */
export const RATING_REVALIDATE = 60 * 60 * 24;

export async function getRating(): Promise<Rating> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${key}`,
      { next: { revalidate: RATING_REVALIDATE } }
    );
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as { rating?: number; userRatingCount?: number };
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') return FALLBACK;
    return {
      value: Math.round(data.rating * 10) / 10,
      count: data.userRatingCount,
      live: true,
      checked: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    };
  } catch {
    // Never let a ratings lookup take the page down with it.
    return FALLBACK;
  }
}
