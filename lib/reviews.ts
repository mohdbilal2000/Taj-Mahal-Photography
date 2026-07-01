// ─── Google Reviews source ───────────────────────────────────────────────
//
// Pulls live customer reviews from the business's Google Business Profile via
// the Places API (New) and caches them with a daily revalidation window, so
// the site "auto-updates" as new reviews land on Google. When no API key is
// configured (local dev, previews) it transparently falls back to a curated
// set of testimonials, so the UI always has content to render.
//
// To enable live reviews, set in the environment:
//   GOOGLE_PLACES_API_KEY  — a Google Cloud key with the Places API (New) enabled
//   GOOGLE_PLACE_ID        — (optional) the Place ID; auto-resolved by name if omitted
//
// See .env.example for details.

import { testimonials } from '@/lib/content';

export type Review = {
  name: string;
  country?: string;
  text: string;
  rating: number;
  /** ISO date (YYYY-MM-DD) or '' when unknown. */
  datePublished: string;
  /** Human relative time from Google, e.g. "2 months ago". */
  relativeTime?: string;
  /** Reviewer avatar URL from Google (optional). */
  photoUrl?: string;
  /** Deep link to the review / profile on Google (optional). */
  sourceUrl?: string;
};

export type ReviewsData = {
  reviews: Review[];
  /** Overall star rating (e.g. 4.9) or null when unknown. */
  rating: number | null;
  /** Total Google review count or null when unknown. */
  count: number | null;
  /** Public URL to read all reviews on Google. */
  googleUrl: string;
  source: 'google' | 'curated';
};

/** Query used to auto-resolve the Place ID when GOOGLE_PLACE_ID is not set. */
const PLACE_QUERY = 'Tajmahal Photography Taj Mahal East Gate Road Agra';

/** Reliable fallback link to the Google listing / reviews. */
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Tajmahal+Photography+Agra';

/** Revalidate the Google fetch once a day (seconds). */
const REVALIDATE_SECONDS = 60 * 60 * 24;

/** Curated fallback, derived from the maintained testimonials list. */
function curatedReviews(): ReviewsData {
  return {
    reviews: testimonials.map((t) => ({
      name: t.name,
      country: t.country,
      text: t.text,
      rating: t.rating,
      datePublished: t.datePublished,
    })),
    rating: null,
    count: null,
    googleUrl: GOOGLE_REVIEWS_URL,
    source: 'curated',
  };
}

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
};

/** Resolve a Place ID from the business name when one isn't pinned in env. */
async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id',
    },
    body: JSON.stringify({ textQuery: PLACE_QUERY, maxResultCount: 1 }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { id?: string }[] };
  return data.places?.[0]?.id ?? null;
}

/**
 * Fetch reviews for the homepage. Never throws — always returns renderable
 * data, falling back to the curated set when Google is unavailable.
 */
export async function getReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return curatedReviews();

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await resolvePlaceId(apiKey));
    if (!placeId) return curatedReviews();

    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask':
            'id,rating,userRatingCount,googleMapsUri,reviews',
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) return curatedReviews();

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: PlacesReview[];
    };

    const reviews: Review[] = (data.reviews ?? [])
      .map((r): Review | null => {
        const text = (r.text?.text || r.originalText?.text || '').trim();
        const name = r.authorAttribution?.displayName?.trim();
        if (!text || !name) return null;
        return {
          name,
          text,
          rating: Math.round(r.rating ?? 5),
          datePublished: r.publishTime ? r.publishTime.slice(0, 10) : '',
          relativeTime: r.relativePublishTimeDescription,
          photoUrl: r.authorAttribution?.photoUri,
          sourceUrl: r.authorAttribution?.uri,
        };
      })
      .filter((r): r is Review => r !== null);

    // If Google returned no usable review bodies, keep the curated copy but
    // still surface the real aggregate rating/count when we have them.
    if (reviews.length === 0) {
      const fallback = curatedReviews();
      return {
        ...fallback,
        rating: data.rating ?? null,
        count: data.userRatingCount ?? null,
        googleUrl: data.googleMapsUri || GOOGLE_REVIEWS_URL,
      };
    }

    return {
      reviews,
      rating: data.rating ?? null,
      count: data.userRatingCount ?? null,
      googleUrl: data.googleMapsUri || GOOGLE_REVIEWS_URL,
      source: 'google',
    };
  } catch {
    return curatedReviews();
  }
}
