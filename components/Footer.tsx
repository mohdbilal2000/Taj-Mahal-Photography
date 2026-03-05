import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col items-start mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase">Taj Mahal</span>
              <span className="text-[10px] tracking-[0.2em] text-gold-400 uppercase">Photography</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Official Government Licensed Taj Mahal Photographer in Agra. Authorized for Photography Inside Taj Mahal. Trusted by International Visitors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services/sunrise" className="hover:text-white transition-colors">Sunrise Photoshoot</Link></li>
              <li><Link href="/services/couple" className="hover:text-white transition-colors">Couple Photography</Link></li>
              <li><Link href="/services/pre-wedding" className="hover:text-white transition-colors">Pre-Wedding Shoot</Link></li>
              <li><Link href="/services/family" className="hover:text-white transition-colors">Family Photography</Link></li>
              <li><Link href="/services/proposal" className="hover:text-white transition-colors">Proposal Shoot</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">Information</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/permit-guide" className="hover:text-white transition-colors">Permit Guide</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About the License</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Taj Mahal East Gate Road,<br />Agra, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>booking@tajmahalphotography.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Taj Mahal Photography. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
