import { GALLERY } from '@/lib/gallery';
import { PLAN_IMAGES } from '@/lib/images';
import { SITE } from '@/lib/seo';

/**
 * A dedicated image sitemap.
 *
 * Next's sitemap helper has no image extension, and Google's image index
 * needs one: a page sitemap says the page exists, an image sitemap says there
 * are eighteen photographs on it and what each one shows. For a business
 * whose product is photographs, image search is not a side channel.
 */
export const dynamic = 'force-static';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const pages = [
    {
      loc: `${SITE.url}/portfolio`,
      images: GALLERY.map((g) => ({ loc: `${SITE.url}${g.src}`, caption: g.alt, title: g.place })),
    },
    {
      loc: `${SITE.url}/services`,
      images: Object.entries(PLAN_IMAGES).map(([id, src]) => ({
        loc: `${SITE.url}${src}`,
        caption: `${id.replace(/-/g, ' ')} at the Taj Mahal, Agra`,
        title: 'Taj Mahal Photography',
      })),
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    (p) => `  <url>
    <loc>${esc(p.loc)}</loc>
${p.images
  .map(
    (i) => `    <image:image>
      <image:loc>${esc(i.loc)}</image:loc>
      <image:caption>${esc(i.caption)}</image:caption>
      <image:title>${esc(i.title)}</image:title>
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' },
  });
}
