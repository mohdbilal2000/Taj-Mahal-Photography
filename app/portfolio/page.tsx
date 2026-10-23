import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, imageObjectSchema, jsonLd, SITE } from '@/lib/seo';
import { GALLERY, planFor } from '@/lib/gallery';
import PortfolioGallery from '@/components/PortfolioGallery';

export const metadata: Metadata = {
  title: 'Portfolio | Taj Mahal Photography Gallery',
  description: 'Browse our portfolio of professional Taj Mahal photographs. Sunrise shoots, couple portraits, pre-wedding sessions, and family photography by a government-licensed photographer in Agra.',
  alternates: { canonical: `${SITE.url}/portfolio` },
  openGraph: {
    title: 'Portfolio | Taj Mahal Photography Gallery',
    description: 'Stunning Taj Mahal photography by a government-licensed professional photographer.',
    url: `${SITE.url}/portfolio`,
    images: [{ url: SITE.image, width: 1200, height: 630, alt: 'Taj Mahal Photography Portfolio' }],
  },
};


export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        <div className="bg-ink-900 text-white section">
          <div className="shell-narrow max-w-4xl text-center">
            <span className="eyebrow text-gold-400 mb-4 block">Our Work</span>
            <h1 className="h1-fluid font-serif font-semibold mb-6">Photography Portfolio</h1>
            <p className="text-lg text-marble-300">Every photograph here is our own work, at the Taj Mahal and across Agra — and each one is tagged with the package that produced it.</p>
          </div>
        </div>

        <div className="shell py-16 md:py-20">
          <PortfolioGallery />

          {/* The page was 387 words of pictures and nothing a search engine or
              an answer engine could read. These are the questions people ask
              while they are looking at the gallery. */}
          <section className="mt-20 border-t border-marble-200 pt-14">
            <div className="shell-narrow max-w-3xl px-0">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-5">
                What you are looking at
              </h2>
              <p className="mb-4 leading-relaxed text-ink-700 text-pretty">
                Every photograph on this page is our own work, taken at the Taj Mahal, Agra Fort
                and Mehtab Bagh with guests who booked one of the packages on this site. None of
                it is stock, and none of it is from a different monument with the dome composited
                in — which is worth saying, because both are common in this market.
              </p>
              <p className="mb-4 leading-relaxed text-ink-700 text-pretty">
                Almost all of it was shot in the first ninety minutes after the gates open. That
                is not a stylistic preference: by nine in the morning the marble reads as a flat
                white, the central path is full, and the positions these frames were taken from
                have thirty people standing in them. The quiet hour is the product.
              </p>
              <p className="mb-8 leading-relaxed text-ink-700 text-pretty">
                The equipment in these frames — a tripod at the reflecting pool, a second lens for
                the inlay detail — only passes the security check because the photographer holds
                the Ministry of Tourism permit. A visitor carrying the same kit is turned back at
                the belt, which is the practical difference between these photographs and the ones
                you can take yourself.
              </p>

              <dl className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-sm border hairline bg-marble-50 p-5">
                  <dt className="font-serif text-lg font-semibold text-ink-900">
                    Will my photographs look like these?
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                    The locations and the light will, because they are fixed. The poses are
                    directed on the day around what you are comfortable with — most guests have
                    never been photographed professionally, and the frames people keep are usually
                    the ones taken between poses.
                  </dd>
                </div>
                <div className="rounded-sm border hairline bg-marble-50 p-5">
                  <dt className="font-serif text-lg font-semibold text-ink-900">
                    How many of these do I get?
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                    120 or more from a sunrise session, 200 or more from a couple session with 30
                    edited to your choice, 40 to 60 on the guide-and-photographer packages. All of
                    them in full resolution, inside 48 hours.
                  </dd>
                </div>
                <div className="rounded-sm border hairline bg-marble-50 p-5">
                  <dt className="font-serif text-lg font-semibold text-ink-900">
                    Can I ask for a specific frame from this page?
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                    Yes, and it helps. Send the photograph on WhatsApp when you book and we will
                    build the morning around reaching that position while it is still empty.
                  </dd>
                </div>
                <div className="rounded-sm border hairline bg-marble-50 p-5">
                  <dt className="font-serif text-lg font-semibold text-ink-900">
                    Are these edited?
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-700">
                    Colour and contrast, yes. We do not move the monument, remove crowds that were
                    there, or replace skies — if a morning was foggy, the photographs look foggy,
                    which is why the timing advice on this site is as blunt as it is.
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <div className="mt-16 text-center border-t border-marble-200 pt-14">
            <p className="text-ink-500 mb-6 lead">
              Every frame above came from a package you can book today.
            </p>
            <Link
              href="/services"
              className="btn btn-ink btn-lg"
            >
              See the packages
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
      <MobileActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Portfolio', url: `${SITE.url}/portfolio` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd({
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Taj Mahal Photography Portfolio',
          description: 'Professional photographs of the Taj Mahal captured by a government-licensed photographer in Agra, India.',
          url: `${SITE.url}/portfolio`,
          about: { '@type': 'Place', name: 'Taj Mahal', address: 'Agra, Uttar Pradesh, India' },
          // Each frame described individually, so image search has something
          // to rank beyond a filename.
          associatedMedia: GALLERY.map((img) =>
            imageObjectSchema({
              url: `${SITE.url}${img.src}`,
              caption: img.alt,
              contentLocation: img.place,
            })
          ),
        }) }}
      />
    </div>
  );
}
