import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

/** Installable-app basics; the layout already advertises apple-mobile-web-app. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Taj Photography',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FBF9F5',
    theme_color: '#14110F',
    categories: ['travel', 'photography'],
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
