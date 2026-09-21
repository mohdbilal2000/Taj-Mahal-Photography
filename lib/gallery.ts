import { planById } from './plans';

/**
 * The portfolio.
 *
 * Every frame is tied to the package that produced it. A gallery that is only
 * a wall of pictures asks the visitor to do the work of imagining what they
 * would be buying; tying each photograph to a package and a price turns the
 * portfolio into the shortest path to a booking.
 */
export type GalleryImage = {
  src: string;
  alt: string;
  /** Plan id from lib/plans.ts — what a guest would book to get this shot. */
  planId: string;
  /** Where it was taken, shown under the photograph in the lightbox. */
  place: string;
  /** Tall frames earn a double-height tile in the mosaic. */
  portrait?: boolean;
  /** The strongest frames lead and get a wider tile. */
  feature?: boolean;
};

export const GALLERY: GalleryImage[] = [
  { src: '/photos/gallery/05.jpg', alt: 'A couple photographed on the lawns with the Taj Mahal behind them', planId: 'pre-wedding', place: 'Taj Mahal, south lawns', feature: true },
  { src: '/photos/gallery/11.jpg', alt: 'A couple silhouetted in the great gateway arch, reflected in the water below', planId: 'pre-wedding', place: 'The great gate', portrait: true },
  { src: '/photos/gallery/16.jpg', alt: 'A guest in a red saree beside the reflecting pool at the Taj Mahal', planId: 'sunrise', place: 'The reflecting pool', portrait: true },
  { src: '/photos/gallery/13.jpg', alt: 'International guests with their licensed guide in the Taj Mahal gardens', planId: 'guided-photo-tour-small', place: 'Taj Mahal gardens' },
  { src: '/photos/gallery/04.jpg', alt: 'A couple in the red sandstone colonnade at Agra Fort', planId: 'taj-agra-fort', place: 'Agra Fort colonnade', feature: true },
  { src: '/photos/gallery/07.jpg', alt: 'A couple in traditional dress photographed in front of the Taj Mahal', planId: 'pre-wedding', place: 'Central walkway' },
  { src: '/photos/gallery/01.jpg', alt: 'A group of guests in saris walking together at the monument', planId: 'guided-photo-tour-large', place: 'The terrace' },
  { src: '/photos/gallery/08.jpg', alt: 'A couple sharing a moment on a bench with the Taj Mahal behind', planId: 'pre-wedding', place: 'Diana bench', portrait: true },
  { src: '/photos/gallery/12.jpg', alt: 'Guests photographed with their guide in front of the Taj Mahal', planId: 'guided-photo-tour-small', place: 'Taj Mahal gardens' },
  { src: '/photos/gallery/02.jpg', alt: 'The Taj Mahal mirrored in the central reflecting pool at first light', planId: 'transport-guide', place: 'The reflecting pool' },
  { src: '/photos/gallery/15.jpg', alt: 'A couple standing together at the end of the reflecting pool', planId: 'pre-wedding', place: 'The reflecting pool', portrait: true },
  { src: '/photos/gallery/17.jpg', alt: 'A couple posed hand in hand on the marble walkway', planId: 'pre-wedding', place: 'Central walkway', portrait: true },
  { src: '/photos/gallery/03.jpg', alt: 'A solo guest photographed beside the reflecting pool', planId: 'sunrise', place: 'The reflecting pool', portrait: true },
  { src: '/photos/gallery/18.jpg', alt: 'A couple photographed on the lawns with the Taj Mahal behind them', planId: 'sunrise', place: 'Taj Mahal gardens' },
  { src: '/photos/gallery/06.jpg', alt: 'A couple close together with the dome of the Taj Mahal behind them', planId: 'pre-wedding', place: 'The west lawn' },
  { src: '/photos/gallery/09.jpg', alt: 'A couple posed at the reflecting pool, the Taj Mahal centred behind', planId: 'pre-wedding', place: 'The reflecting pool', portrait: true },
  { src: '/photos/gallery/14.jpg', alt: 'A guest photographed in the Taj Mahal gardens in the late afternoon', planId: 'sunrise', place: 'Taj Mahal gardens', portrait: true },
  { src: '/photos/gallery/10.jpg', alt: 'A couple photographed on the marble platform at the Taj Mahal', planId: 'sunrise', place: 'The marble platform', portrait: true },
];

/** The packages that actually appear in the gallery, in the order shown. */
export const GALLERY_FILTERS = [
  { id: 'all', label: 'Everything' },
  { id: 'sunrise', label: 'Sunrise session' },
  { id: 'pre-wedding', label: 'Couple & pre-wedding' },
  { id: 'guided-photo-tour-small', label: 'Guide + photo' },
  { id: 'taj-agra-fort', label: 'Agra Fort' },
] as const;

/** Guide + photo covers both group sizes; Agra Fort covers the longer days. */
const FILTER_MATCHES: Record<string, string[]> = {
  'guided-photo-tour-small': ['guided-photo-tour-small', 'guided-photo-tour-large'],
  'taj-agra-fort': ['taj-agra-fort', 'full-day', 'transport-guide'],
};

export function matchesFilter(image: GalleryImage, filter: string): boolean {
  if (filter === 'all') return true;
  return (FILTER_MATCHES[filter] ?? [filter]).includes(image.planId);
}

export function planFor(image: GalleryImage) {
  return planById(image.planId);
}
