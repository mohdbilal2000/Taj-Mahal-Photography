import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-marble-50">
        <div className="text-center px-4 section">
          <h1 className="font-serif text-6xl md:text-8xl font-semibold text-ink-900 mb-4">404</h1>
          <p className="text-xl text-ink-700 mb-8">This page could not be found.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn btn-ink"
            >
              Return Home
            </Link>
            <Link
              href="/services"
              className="btn btn-outline"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
