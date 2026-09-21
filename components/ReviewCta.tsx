import Image from 'next/image';
import { Star, QrCode, ExternalLink } from 'lucide-react';
import { SITE } from '@/lib/seo';
import type { Rating } from '@/lib/reviews';

/**
 * Asking for the review, and making it one scan away.
 *
 * Most guests are handed their gallery and never asked. The QR is generated
 * at build time into public/review-qr.svg and points at the profile by CID,
 * so it resolves to this business and nothing near its name — which matters
 * when it is printed on a card handed over at the gate.
 */
export default function ReviewCta({ rating }: { rating: Rating }) {
  return (
    <section className="bg-ink-900 text-white py-20 grain relative" id="review">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          <div>
            <span className="eyebrow text-gold-400 mb-4 block">Shot with us?</span>
            <h2 className="h2-fluid font-serif font-semibold mb-4 text-balance">
              Leave a review — it takes a minute
            </h2>
            <p className="text-white/70 lead mb-6 max-w-lg text-pretty">
              Reviews are how the next couple finds a licensed photographer instead of a tout at
              the gate. Scan the code, or tap through to the profile.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 text-ink-900 text-sm font-semibold rounded-sm hover:bg-gold-400 transition-colors"
              >
                <Star className="w-4 h-4 fill-ink-900" />
                Review us on Google
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={SITE.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/25 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                See the profile
              </a>
            </div>

            <p className="text-white/50 text-sm mt-6">
              Currently <strong className="text-white font-semibold">{rating.value}</strong> from{' '}
              {rating.count} reviews
              {rating.live ? '' : ` · checked ${rating.checked}`}
            </p>
          </div>

          {/* Scannable from a phone held up to a laptop, or printed on a card. */}
          <figure className="justify-self-center">
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-deep">
              <Image
                src="/review-qr.svg"
                alt={`QR code linking to the Google Business profile for ${SITE.name}`}
                width={190}
                height={190}
                className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px]"
              />
            </div>
            <figcaption className="text-center text-white/50 text-xs mt-3 flex items-center justify-center gap-1.5">
              <QrCode className="w-3.5 h-3.5" />
              Scan to open our Google profile
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
