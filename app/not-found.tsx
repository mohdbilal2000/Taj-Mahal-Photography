import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-marble-50">
        <div className="text-center px-4 py-20">
          <h1 className="font-serif text-6xl md:text-8xl font-semibold text-ink-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">This page could not be found.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-ink-900 text-white text-sm font-medium rounded-sm hover:bg-ink-800 transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-ink-900 text-ink-900 text-sm font-medium rounded-sm hover:bg-marble-100 transition-colors"
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
