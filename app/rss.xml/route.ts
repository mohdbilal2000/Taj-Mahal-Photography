import { SITE } from '@/lib/seo';
import { POSTS } from '@/lib/blog';

export const dynamic = 'force-static';

/**
 * An RSS feed of the guides.
 *
 * Feed readers are a small audience now, but feeds are still how aggregators,
 * newsletter tools and several AI crawlers discover that a page changed —
 * cheaply, without re-crawling the sitemap. Each item carries the article's
 * direct answer, so a consumer that only reads the feed still gets the point.
 */
function escape(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function GET() {
  const items = [...POSTS]
    .sort((a, b) => (a.updated < b.updated ? 1 : -1))
    .map((post) => {
      const url = `${SITE.url}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.published).toUTCString()}</pubDate>
      <category>${escape(post.category)}</category>
      <description>${escape(post.excerpt)}</description>
      <content:encoded><![CDATA[<p>${post.answer}</p>]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE.name)} — Guides</title>
    <link>${SITE.url}/blog</link>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical guides to photographing the Taj Mahal, from a government-licensed photographer in Agra.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
