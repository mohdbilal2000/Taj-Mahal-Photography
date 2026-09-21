/**
 * The portfolio: the studio's own photographs of real guests at the Taj
 * Mahal and Agra Fort. Files are in public/photos/gallery.
 *
 * Alt text describes what is actually in each frame — it is what a screen
 * reader reads out, and what an image search has to go on.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  category: 'Sunrise' | 'Couple' | 'Family' | 'Group' | 'Heritage';
};

export const GALLERY: GalleryImage[] = [
  { src: '/photos/gallery/05.jpg', alt: 'A couple photographed on the lawns with the Taj Mahal behind them', category: 'Couple' },
  { src: '/photos/gallery/11.jpg', alt: 'A couple silhouetted in the great gateway arch, reflected in the water below', category: 'Couple' },
  { src: '/photos/gallery/13.jpg', alt: 'International guests with their licensed guide in the Taj Mahal gardens', category: 'Group' },
  { src: '/photos/gallery/16.jpg', alt: 'A guest in a red saree beside the reflecting pool at the Taj Mahal', category: 'Sunrise' },
  { src: '/photos/gallery/04.jpg', alt: 'A couple in the red sandstone colonnade at Agra Fort', category: 'Heritage' },
  { src: '/photos/gallery/01.jpg', alt: 'A group of guests in saris walking together at the monument', category: 'Group' },
  { src: '/photos/gallery/08.jpg', alt: 'A couple sharing a moment on a bench with the Taj Mahal behind', category: 'Couple' },
  { src: '/photos/gallery/12.jpg', alt: 'Guests photographed with their guide in front of the Taj Mahal', category: 'Group' },
  { src: '/photos/gallery/02.jpg', alt: 'The Taj Mahal mirrored in the central reflecting pool', category: 'Heritage' },
  { src: '/photos/gallery/15.jpg', alt: 'A couple standing together at the end of the reflecting pool', category: 'Couple' },
  { src: '/photos/gallery/17.jpg', alt: 'A couple posed hand in hand on the marble walkway', category: 'Couple' },
  { src: '/photos/gallery/03.jpg', alt: 'A solo guest photographed beside the reflecting pool', category: 'Sunrise' },
  { src: '/photos/gallery/18.jpg', alt: 'A family group photographed together in the Taj Mahal gardens', category: 'Family' },
  { src: '/photos/gallery/06.jpg', alt: 'A couple close together with the dome of the Taj Mahal behind them', category: 'Couple' },
  { src: '/photos/gallery/09.jpg', alt: 'A couple posed at the reflecting pool, the Taj Mahal centred behind', category: 'Couple' },
  { src: '/photos/gallery/14.jpg', alt: 'A guest holding a keepsake frame in front of the Taj Mahal', category: 'Family' },
  { src: '/photos/gallery/10.jpg', alt: 'A couple photographed on the marble platform at the Taj Mahal', category: 'Couple' },
  { src: '/photos/gallery/07.jpg', alt: 'A couple in traditional dress photographed at the monument', category: 'Couple' },
];
