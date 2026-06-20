import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, webPageSchema, graphSchema, jsonLd, SITE, LAST_UPDATED } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Taj Mahal Photography Blog | Tips, Guides & Travel Advice',
  description: 'Expert guides on Taj Mahal photography: best times to visit, what to wear, photography permit rules, camera settings, and insider tips from a government-licensed photographer in Agra.',
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: 'Taj Mahal Photography Blog | Tips, Guides & Travel Advice',
    description: 'Expert photography guides from a licensed Taj Mahal photographer.',
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-marble-50">
        {/* Hero */}
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-4 block">Expert Guides</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Taj Mahal Photography Blog</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Insider tips, outfit guides, and expert advice from a government-licensed Taj Mahal photographer with over 10 years of experience.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-sm border border-marble-200 overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <time dateTime={post.datePublished}>{new Date(post.datePublished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-ink-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-medium text-gold-600 group-hover:text-gold-700">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* AEO: Quick Answers Block — feeds AI engines */}
        <section className="py-20 bg-white border-t border-marble-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-8">Quick Answers: Taj Mahal Photography</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">What is the best time to photograph the Taj Mahal?</h3>
                <p className="text-gray-600">Sunrise (approximately 5:30–7:30 AM depending on season) offers the best photography conditions with soft golden light, fewer crowds, and the marble reflecting warm pink and amber tones. The Taj Mahal is closed on Fridays.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">Can you take professional photos at the Taj Mahal?</h3>
                <p className="text-gray-600">Yes, but professional photography (with tripods, multiple lenses, or large camera bags) requires hiring a government-licensed photographer who holds an official permit from the Ministry of Tourism. Unlicensed photographers will be stopped by security.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">What should I wear for a Taj Mahal photoshoot?</h3>
                <p className="text-gray-600">Bold, saturated colors like red, emerald green, royal blue, and gold photograph beautifully against the white marble. Avoid white clothing as it blends with the monument. Flowy fabrics like sarees, maxi dresses, and dupattas add movement to portraits.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Blog', url: `${SITE.url}/blog` },
              ]),
              webPageSchema({
                url: `${SITE.url}/blog`,
                name: 'Taj Mahal Photography Blog',
                description: 'Expert photography guides from a government-licensed Taj Mahal photographer.',
                image: SITE.image,
                lastReviewed: LAST_UPDATED,
              }),
              {
                '@type': 'Blog',
                '@id': `${SITE.url}/blog#blog`,
                name: 'Taj Mahal Photography Blog',
                description: 'Insider tips, outfit guides, and expert advice from a licensed Taj Mahal photographer.',
                url: `${SITE.url}/blog`,
                publisher: { '@id': `${SITE.url}/#business` },
                blogPost: blogPosts.map((post) => ({
                  '@type': 'BlogPosting',
                  '@id': `${SITE.url}/blog/${post.slug}#article`,
                  headline: post.title,
                  description: post.excerpt,
                  url: `${SITE.url}/blog/${post.slug}`,
                  mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
                  datePublished: post.datePublished,
                  dateModified: post.dateModified,
                  image: post.image,
                  articleSection: post.category,
                  author: { '@id': `${SITE.url}/#photographer` },
                  publisher: { '@id': `${SITE.url}/#business` },
                })),
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
