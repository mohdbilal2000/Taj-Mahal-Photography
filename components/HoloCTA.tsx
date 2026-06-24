import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/seo';

/**
 * Holographic CTA band — a deliberately different "material" in the homepage
 * sequence: an animated aurora field with iridescent (holographic) display
 * type and a glass action panel. Server component; all motion is CSS so it
 * stays fast and respects prefers-reduced-motion.
 */
export default function HoloCTA() {
  return (
    <section className="relative aurora bg-night overflow-hidden py-28 sm:py-36">
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="kicker inline-flex items-center gap-3 mb-7 justify-center">
            <span className="h-px w-8 bg-accent" />
            Limited to 2 permits a day
            <span className="h-px w-8 bg-accent" />
          </span>

          <h2 className="display-tight font-medium text-4xl sm:text-6xl lg:text-7xl text-ivory">
            Your Taj Mahal shoot,{' '}
            <span className="holo-text italic font-light">made unforgettable</span>
          </h2>

          <p className="mt-7 text-muted leading-relaxed max-w-xl mx-auto">
            Government-licensed access, sunrise light, and a team that handles the
            permits, the car and the timing. Tell us your dates — we reply on
            WhatsApp within 10 minutes.
          </p>

          <hr className="holo-rule mx-auto mt-12 mb-12 w-40 border-0" />

          {/* Glass action panel */}
          <div className="glass mx-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3">
            <Link
              href="/book"
              className="group inline-flex items-center justify-center gap-2 bg-ivory text-night px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors duration-300"
            >
              Book your session
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-line-strong text-ivory px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition-colors duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
