import Image from 'next/image';

export default function LicenseValidation() {
  return (
    <section className="py-20 bg-ink-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1514222288957-49a4653e1073?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">The Importance of a Licensed Photographer</h2>
            <div className="w-20 h-1 bg-gold-500 mb-8" />
            
            <div className="space-y-6 text-gray-300">
              <p>
                The Taj Mahal has strict regulations regarding professional photography. Unlicensed photographers are routinely stopped by security, leading to confiscated equipment and ruined experiences for tourists.
              </p>
              <p>
                As an <strong>Official Government Licensed Photographer</strong>, I have passed the required examinations by the Ministry of Tourism, granting me legal authorization to conduct professional photoshoots within the monument premises.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <span className="text-gold-400 mr-3">✓</span>
                  <span>Guaranteed entry with professional camera gear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-3">✓</span>
                  <span>No interruptions from security personnel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-3">✓</span>
                  <span>Access to the best vantage points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-3">✓</span>
                  <span>Deep knowledge of the monument&apos;s history and lighting</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1592635196238-f14d75121615?q=80&w=800&auto=format&fit=crop"
                alt="Photographer in action at Taj Mahal"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ink-900 font-bold text-xs text-center leading-tight">GOVT<br/>ID</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Authorized Personnel</p>
                    <p className="text-gold-400 text-sm">Ministry of Tourism, Govt. of India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold-500 opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold-500 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
