import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop"
          alt="Taj Mahal at Sunrise"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-block mb-6 px-4 py-1.5 border border-white/30 backdrop-blur-sm rounded-full">
          <span className="text-white text-xs font-medium tracking-widest uppercase">
            Government Licensed & Authorized
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-6 drop-shadow-lg">
          Capture the Magic of the <span className="italic text-gold-400">Taj Mahal</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
          Premium guided photography experiences by an official government-licensed photographer. Authorized access for unforgettable memories.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/book" className="w-full sm:w-auto px-8 py-4 bg-white text-ink-900 font-medium text-sm tracking-wide uppercase hover:bg-marble-100 transition-colors rounded-sm">
            Book Your Session
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-black/30 backdrop-blur-md border border-white/30 text-white font-medium text-sm tracking-wide uppercase hover:bg-black/50 transition-colors rounded-sm">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
