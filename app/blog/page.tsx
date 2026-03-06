import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, articleSchema, jsonLd, SITE } from '@/lib/seo';

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

const blogPosts = [
  {
    slug: 'best-time-to-photograph-taj-mahal',
    title: 'Best Time to Photograph the Taj Mahal: A Complete Guide',
    excerpt: 'Sunrise, sunset, or monsoon season? Learn exactly when to visit the Taj Mahal for the most stunning photographs, including monthly lighting conditions and crowd levels.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Photography Tips',
  },
  {
    slug: 'what-to-wear-taj-mahal-photoshoot',
    title: 'What to Wear for a Taj Mahal Photoshoot: Outfit Guide',
    excerpt: 'Your outfit choice matters against the white marble backdrop. Discover the best colors, fabrics, and styles that photograph beautifully at the Taj Mahal.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    date: '2025-02-10',
    readTime: '6 min read',
    category: 'Style Guide',
  },
  {
    slug: 'taj-mahal-photography-rules-2025',
    title: 'Taj Mahal Photography Rules: What Is and Isn\'t Allowed',
    excerpt: 'A definitive guide to photography regulations at the Taj Mahal. Learn about permit requirements, prohibited items, restricted zones, and how to avoid security issues.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    date: '2025-03-05',
    readTime: '10 min read',
    category: 'Travel Guide',
  },
  {
    slug: 'pre-wedding-shoot-taj-mahal-planning',
    title: 'Planning a Pre-Wedding Shoot at the Taj Mahal',
    excerpt: 'Everything couples need to know about planning a pre-wedding or engagement photoshoot at the Taj Mahal, from permits to poses to the perfect timeline.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop',
    date: '2025-04-20',
    readTime: '7 min read',
    category: 'Pre-Wedding',
  },
  {
    slug: 'agra-beyond-taj-mahal-photo-locations',
    title: '5 Stunning Photo Locations in Agra Beyond the Taj Mahal',
    excerpt: 'Discover Agra Fort, Mehtab Bagh, Itimad-ud-Daulah, and other magnificent locations that complement your Taj Mahal photography experience.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    date: '2025-05-12',
    readTime: '9 min read',
    category: 'Travel Guide',
  },
  {
    slug: 'taj-mahal-camera-settings-tips',
    title: 'Camera Settings for Taj Mahal Photography: Pro Tips',
    excerpt: 'Professional camera settings recommendations for photographing the Taj Mahal in different lighting conditions, from sunrise golden hour to harsh midday light.',
    image: 'https://images.unsplash.com/photo-1514222288957-49a4653e1073?q=80&w=800&auto=format&fit=crop',
    date: '2025-06-18',
    readTime: '11 min read',
    category: 'Photography Tips',
  },
];

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
              <article key={post.slug} className="bg-white rounded-sm border border-marble-200 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
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
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-ink-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
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
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Blog', url: `${SITE.url}/blog` },
        ])) }}
      />
      {/* Article schemas for each blog post */}
      {blogPosts.map((post) => (
        <script
          key={post.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema(
            post.title,
            post.excerpt,
            `${SITE.url}/blog/${post.slug}`,
            post.date,
            post.image,
          )) }}
        />
      ))}
    </div>
  );
}
