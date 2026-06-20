import { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';

// Stable, content-accurate `lastModified` dates. We deliberately do NOT stamp
// every route with the build time — Google devalues sitemaps whose lastmod
// bumps on every deploy without a real content change. Bump a date here only
// when that route's content actually changes.
type Entry = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const ROUTES: Entry[] = [
  { path: '', lastModified: '2026-06-05', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', lastModified: '2026-06-05', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/sunrise', lastModified: '2026-05-15', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/couple', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/pre-wedding', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/family', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/proposal', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/taj-agra-fort', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/full-day', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/quick-capture', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/guided-photo-tour-small', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/guided-photo-tour-large', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/sunrise-luxury-innova', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/sunrise-luxury-urbania', lastModified: '2026-06-05', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/book', lastModified: '2026-03-06', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/portfolio', lastModified: '2026-03-06', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/permit-guide', lastModified: '2026-05-15', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', lastModified: '2026-05-15', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', lastModified: '2026-06-20', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/blog', lastModified: '2026-06-20', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/payment', lastModified: '2026-03-07', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy', lastModified: '2026-03-07', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-04-18', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/llms.txt', lastModified: '2026-06-20', changeFrequency: 'weekly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
