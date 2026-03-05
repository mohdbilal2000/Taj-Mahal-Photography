import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taj Mahal Photography Permit Guide | Official Rules',
  description: 'Everything you need to know about photography permits, rules, and regulations inside the Taj Mahal. Guide by a Government Licensed Photographer.',
};

export default function PermitGuidePage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Page Header */}
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Taj Mahal Photography Permit Guide</h1>
            <p className="text-lg text-gray-300">Official rules, regulations, and why hiring a licensed photographer is essential for your visit.</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-serif text-3xl text-ink-900 mb-6">Understanding Taj Mahal Photography Rules</h2>
            <p>
              The Taj Mahal is a UNESCO World Heritage site and a protected monument under the Archaeological Survey of India (ASI). To preserve its sanctity and ensure security, strict rules govern photography within its premises.
            </p>

            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Is Photography Allowed Inside the Taj Mahal?</h3>
            <p>
              This is the most common question we receive. The answer is nuanced:
            </p>
            <ul>
              <li><strong>Exterior & Gardens:</strong> Yes, photography is allowed in the gardens, near the reflecting pool, and around the exterior of the monument.</li>
              <li><strong>Inside the Main Mausoleum:</strong> <strong>NO.</strong> Photography is strictly prohibited inside the main tomb area where the cenotaphs of Shah Jahan and Mumtaz Mahal are located.</li>
            </ul>

            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Do Photographers Need a Permit?</h3>
            <p>
              Tourists are allowed to bring basic point-and-shoot cameras or smartphones for personal use without a special permit. However, <strong>professional photography requires strict authorization.</strong>
            </p>
            <p>
              Security personnel at the gates will confiscate or deny entry to individuals carrying:
            </p>
            <ul>
              <li>Tripods or monopods</li>
              <li>Extra lenses or large camera bags</li>
              <li>Drones (strictly prohibited in the entire area)</li>
              <li>Professional lighting equipment</li>
            </ul>

            <div className="bg-marble-50 p-6 border-l-4 border-gold-500 my-8">
              <h4 className="font-serif text-xl text-ink-900 mb-2">The Licensed Photographer Advantage</h4>
              <p className="mb-0">
                As an Official Government Licensed Photographer, I hold a valid permit issued by the Ministry of Tourism. This allows me to enter with professional-grade equipment and conduct photoshoots without harassment from security, ensuring a smooth experience for you.
              </p>
            </div>

            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">How to Book a Licensed Photographer in Agra?</h3>
            <p>
              When booking a photographer for the Taj Mahal, always ask to see their official Government ID badge. Many unauthorized photographers operate outside the gates, but they risk being stopped by security inside, ruining your experience.
            </p>
            <p>
              To book an authorized session with us:
            </p>
            <ol>
              <li>Fill out our inquiry form with your preferred date.</li>
              <li>We will confirm availability (we limit sessions to ensure quality).</li>
              <li>Meet at the designated gate at the agreed time (usually sunrise).</li>
              <li>Enjoy a seamless, guided photoshoot experience.</li>
            </ol>
          </article>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
