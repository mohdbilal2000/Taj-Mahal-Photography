import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, Camera, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white pt-20 pb-8">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 — Logo & Description */}
          <div>
            <Link href="/" className="flex flex-col items-start mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase">
                Taj Mahal
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gold-400 uppercase">
                Photography
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Official Government Licensed Taj Mahal Photographer in Agra.
              Authorized for Photography Inside Taj Mahal. Trusted by
              International Visitors.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/taj.mahal.photography"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/taj-mahal-photography-3a9ab0296/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19m7nwKSSQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Follow on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold-400">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/sunrise"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sunrise Photoshoot
                </Link>
              </li>
              <li>
                <Link
                  href="/services/couple"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Couple Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pre-wedding"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pre-Wedding Shoot
                </Link>
              </li>
              <li>
                <Link
                  href="/services/family"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Family Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/services/proposal"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Proposal Shoot
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Information */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold-400">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/permit-guide"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-gray-400 hover:text-white transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold-400">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0 text-gold-400" />
                <span>
                  Taj Mahal East Gate Road,
                  <br />
                  Agra, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0 text-gold-400" />
                <a href="tel:+918393010125" className="hover:text-white transition-colors">+91 83930 10125</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-gold-400" />
                <a href="mailto:booking@tajmahalphotography.com" className="hover:text-white transition-colors">booking@tajmahalphotography.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sister brand + partner network */}
        <div className="border-t border-gray-800 pt-8 mb-8 text-center">
          <p className="text-xs text-gray-500 mb-3">
            Part of the <strong className="text-gray-400">Taj Guides &amp; Travel Services</strong> family
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <span className="text-gray-600">Sister Brand:</span>
            <a href="https://tajmahaltouristguide.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-white transition-colors">
              TajMahalTouristGuide.com
            </a>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <span className="text-gray-600">Featured On:</span>
            <a href="https://guideindiatours.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Guide India Tours</a>
            <a href="https://www.asiabylocals.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Asia By Locals</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Taj Mahal Photography. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
