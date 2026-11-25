import Image from 'next/image';
import { GALLERY } from '@/lib/gallery';

/**
 * Every photograph the studio has tied to a package, shown on that package's
 * own page. A package page that shows one hero picture asks the reader to
 * take the result on trust; five frames from real sessions is the proof.
 */
export default function PackagePhotos({ planId, heading = 'Photos from this session' }: { planId: string; heading?: string }) {
  const canonical = planId === 'couple' ? 'pre-wedding' : planId;
  const photos = GALLERY.filter((g) => g.planId === canonical).slice(0, 6);
  if (photos.length < 2) return null;

  return (
    <section aria-label={heading} className="mb-14">
      <p className="collage-caption text-2xl text-gold-700">real sessions</p>
      <h2 className="mt-1 font-serif text-3xl font-semibold text-ink-900">{heading}</h2>
      <div
        className={`collage-grid mt-8 grid grid-cols-2 gap-5 sm:gap-7 ${
          photos.length >= 5 ? 'md:grid-cols-3 lg:grid-cols-5' : photos.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
        }`}
      >
        {photos.map((p, i) => (
          <figure key={p.src} className={`collage-card ${i === 0 && photos.length === 5 ? 'col-span-2 md:col-span-1' : ''}`}>
            <div className="collage-media relative aspect-[3/4]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="collage-body">
              <span className="collage-caption text-xl">{p.place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
