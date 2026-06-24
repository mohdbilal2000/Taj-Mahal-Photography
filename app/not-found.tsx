import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />
      <main id="main-content" className="flex-grow flex items-center justify-center bg-night bg-mughal-pattern">
        <div className="text-center px-4 py-24">
          <p className="kicker mb-6">Error 404 — Page Not Found</p>
          <h1 className="display-tight font-display text-[6rem] md:text-[10rem] font-medium text-ivory leading-none mb-6">
            404
          </h1>
          <p className="text-lg text-muted max-w-md mx-auto mb-10">
            The page you were looking for has drifted out of frame. Let&apos;s get you back to the gallery.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-ivory text-night font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
