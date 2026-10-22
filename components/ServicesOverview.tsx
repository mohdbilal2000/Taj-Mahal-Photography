'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Sunrise Photoshoot',
    description:
      'The most magical time to visit. Avoid the crowds and capture the Taj Mahal bathed in soft morning light.',
    image:
      '/photos/gallery/16.jpg',
    link: '/services/sunrise',
  },
  {
    title: 'Couple & Pre-Wedding',
    description:
      'Romantic, editorial-style portraits celebrating your love story against the ultimate monument of love.',
    image:
      '/photos/gallery/11.jpg',
    link: '/services/couple',
  },
  {
    title: 'Guide + Photo Tour',
    description:
      'A licensed local guide and a professional photographer together — natural photos and reels at every iconic spot.',
    image:
      '/photos/gallery/13.jpg',
    link: '/services/guided-photo-tour-small',
  },
];

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-mughal-pattern bg-marble-50 section">
      <div ref={sectionRef} className="shell">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
          <div className="max-w-2xl">
            <span className="collage-label text-gold-700 text-xs font-bold tracking-widest uppercase mb-3">
              Our Expertise
            </span>
            <h2 className="h1-fluid font-serif font-semibold text-ink-900">
              Premium Photography Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center text-ink-900 font-medium hover:text-gold-600 transition-colors"
          >
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="collage-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-9">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
            >
              <Link href={service.link} className="collage-card group block">
                <div className="collage-media relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* The title is written under the print, as a caption, rather
                    than laid over the photograph. */}
                <div className="collage-body flex items-baseline justify-between gap-3">
                  <h3 className="collage-caption text-2xl sm:text-[1.6rem]">{service.title}</h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold-600 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center text-ink-900 font-medium hover:text-gold-600 transition-colors"
          >
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
