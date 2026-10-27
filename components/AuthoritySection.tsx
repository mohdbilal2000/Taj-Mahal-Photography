'use client';

import { ShieldCheck, Award, Camera, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Government licensed',
    description: 'Certified by the Ministry of Tourism after the full examination, not a tout with a camera.',
  },
  {
    icon: Award,
    title: 'Authorised access',
    description: 'A permit holder may work inside the complex with professional equipment. Nobody else may.',
  },
  {
    icon: Camera,
    title: 'Professional gear',
    description: 'Full-frame bodies and prime lenses — the kit security turns back at the gate without a permit.',
  },
  {
    icon: Clock,
    title: '48–72 hour delivery',
    description: 'Every frame in full resolution, edited, in a private gallery before your next stop.',
  },
];

/**
 * The licence, in four cards.
 *
 * It used to be a hairline grid two columns wide, which on a 360px phone put
 * four words on a line and read like a spreadsheet. These are mounted the way
 * the rest of the site is, and they go to one column where two would cramp.
 */
export default function AuthoritySection() {
  return (
    <section className="section bg-white">
      <div className="shell">
        <div className="section-head mx-auto max-w-2xl text-center">
          <span className="collage-label text-xs font-bold uppercase tracking-widest text-gold-700">
            Why it matters
          </span>
          <h2 className="h2-fluid font-serif font-semibold text-ink-900 text-balance">
            Why choose a licensed photographer?
          </h2>
          <p className="text-ink-700 text-pretty">
            Not everyone with a camera is allowed to work inside the Taj Mahal. The permit is the
            difference between a session that runs to plan and one that ends at the security gate.
          </p>
        </div>

        <div className="reveal reveal-stagger collage-grid grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="collage-card h-full">
                <div className="collage-body pt-4">
                  <Icon className="mb-4 h-6 w-6 text-gold-600" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-semibold leading-snug text-ink-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700 text-pretty">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
