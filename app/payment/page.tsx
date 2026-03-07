import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';
import {
  Banknote,
  Smartphone,
  Globe,
  ShieldCheck,
  Clock,
  MessageCircle,
  Building2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payment Methods | How to Pay – Taj Mahal Photography',
  description:
    'Secure payment options for Taj Mahal Photography sessions. Bank transfer, cash, UPI, and international wire transfer accepted. Operated under Taj Guides & Travel Services, HDFC Bank verified.',
  alternates: { canonical: `${SITE.url}/payment` },
  robots: { index: true, follow: true },
};

const paymentMethods = [
  {
    icon: Building2,
    title: 'Bank Transfer (Preferred)',
    subtitle: 'Direct to our verified HDFC account',
    badge: 'Most Popular',
    badgeColor: 'bg-amber-500',
    details: [
      { label: 'Company Name', value: 'Taj Guides & Travel Services' },
      { label: 'Bank', value: 'HDFC Bank Ltd.' },
      { label: 'Account Number', value: '50200073280162' },
      { label: 'IFSC Code', value: 'HDFC0001461' },
      { label: 'SWIFT Code', value: 'HDFCINBBXXX' },
      { label: 'Branch', value: 'Shamshabad Road, Agra, UP – 282001' },
    ],
    note: 'Use for NEFT, RTGS, IMPS, or international wire transfer. Please WhatsApp us your payment screenshot after transfer.',
  },
  {
    icon: Smartphone,
    title: 'UPI Payment',
    subtitle: 'Instant transfer via any UPI app',
    badge: 'Instant',
    badgeColor: 'bg-green-600',
    details: [],
    note: 'Scan the QR code or request our UPI ID via WhatsApp. Accepted apps: Google Pay, PhonePe, Paytm, BHIM, and all UPI-enabled apps.',
  },
  {
    icon: Banknote,
    title: 'Cash Payment',
    subtitle: 'Pay in person on the day of your shoot',
    badge: 'Available',
    badgeColor: 'bg-slate-600',
    details: [],
    note: 'Cash accepted in INR or USD at the time of your session. Exact amount preferred. A payment receipt will be issued.',
  },
  {
    icon: Globe,
    title: 'International Wire Transfer',
    subtitle: 'For clients booking from abroad',
    badge: 'International',
    badgeColor: 'bg-blue-600',
    details: [
      { label: 'Beneficiary', value: 'Taj Guides & Travel Services' },
      { label: 'SWIFT / BIC', value: 'HDFCINBBXXX' },
      { label: 'Account Number', value: '50200073280162' },
      { label: 'Bank Address', value: 'HDFC Bank Ltd., Shamshabad Road, Agra, UP, India' },
    ],
    note: 'Bank charges may apply from your end. Please allow 2–3 business days for international transfers to reflect.',
  },
];

const cancellationPolicy = [
  { period: '30+ days before session', fee: 'No cancellation fee', color: 'text-green-600' },
  { period: '11–29 days before session', fee: '30% of total booking', color: 'text-amber-600' },
  { period: '3–10 days before session', fee: '50% of total booking', color: 'text-orange-600' },
  { period: 'Within 48 hours', fee: '100% — non-refundable', color: 'text-red-600' },
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">

        {/* Hero */}
        <div className="bg-ink-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">
              Secure &amp; Verified
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">
              Payment Methods
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              All payments are processed securely under{' '}
              <strong className="text-amber-400">Taj Guides &amp; Travel Services</strong> —
              the registered parent company operating both{' '}
              <a href="https://tajmahalphotography.com" className="underline hover:text-amber-400 transition-colors">
                tajmahalphotography.com
              </a>{' '}
              and{' '}
              <a href="https://tajmahaltouristguide.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400 transition-colors">
                tajmahaltouristguide.com
              </a>.
            </p>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-amber-50 border-b border-amber-100 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-amber-800">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-600" />Government Registered Business</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" />HDFC Bank Verified Account</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-600" />24/7 WhatsApp Support</span>
              <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-amber-600" />Receipt Issued for All Payments</span>
            </div>
          </div>
        </div>

        {/* Parent Company Notice */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex gap-4">
            <Building2 className="h-6 w-6 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-slate-800 mb-1">About the Operating Company</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Taj Mahal Photography</strong> is a specialized photography service operated
                under <strong>Taj Guides &amp; Travel Services</strong> — a government-approved tourism
                company based in Agra since 1998, led by <strong>Shafiq Khan</strong> (Government
                Approved Tourist Guide, Ministry of Tourism &amp; Culture, Govt. of India), also
                operating{' '}
                <a href="https://tajmahaltouristguide.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline hover:text-amber-700">
                  TajMahalTouristGuide.com
                </a>.
                All payments go to the same registered HDFC bank account — one payment covers your
                entire booking. No separate accounts needed.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-semibold mb-8 text-center">
            Choose Your Payment Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="border border-marble-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-amber-50 rounded-lg">
                        <Icon className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink-900 text-base">{method.title}</h3>
                        <p className="text-gray-500 text-xs">{method.subtitle}</p>
                      </div>
                    </div>
                    <span className={`text-white text-xs font-medium px-2.5 py-1 rounded-full ${method.badgeColor}`}>
                      {method.badge}
                    </span>
                  </div>
                  {method.details.length > 0 && (
                    <div className="bg-slate-50 rounded-lg p-4 mb-4 space-y-2">
                      {method.details.map((d) => (
                        <div key={d.label} className="flex justify-between text-sm">
                          <span className="text-gray-500">{d.label}</span>
                          <span className="font-mono font-semibold text-ink-900 text-right ml-4">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed">{method.note}</p>
                  {method.title === 'UPI Payment' && (
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20would%20like%20the%20UPI%20QR%20code%20to%20pay%20for%20my%20photography%20booking.`}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Request UPI QR via WhatsApp →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-marble-50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-semibold mb-10 text-center">
              How the Payment Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Book via WhatsApp', desc: 'Send us your preferred date & package. We confirm availability instantly.' },
                { step: '02', title: 'Receive Invoice', desc: 'We send a formal booking confirmation with total amount and bank details.' },
                { step: '03', title: 'Make Payment', desc: 'Transfer via bank, UPI, or arrange cash. Share your payment screenshot via WhatsApp.' },
                { step: '04', title: 'Session Confirmed', desc: 'You receive a booking receipt and full session details within 2 hours.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-semibold mb-2 text-center">
            Cancellation &amp; Refund Policy
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Politique d&apos;annulation — Applies to all bookings under Taj Guides &amp; Travel Services
          </p>
          <div className="overflow-hidden rounded-xl border border-marble-200">
            <table className="w-full text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Notice Period</th>
                  <th className="text-left py-4 px-6 font-semibold">Cancellation Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-marble-100">
                {cancellationPolicy.map((row, i) => (
                  <tr key={row.period} className={i % 2 === 0 ? 'bg-white' : 'bg-marble-50'}>
                    <td className="py-4 px-6 text-gray-700">{row.period}</td>
                    <td className={`py-4 px-6 font-semibold ${row.color}`}>{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Tailor-made packages</strong> may be subject to alternative cancellation terms
              communicated at the time of booking. To cancel or reschedule, contact us via WhatsApp at{' '}
              <a href={`https://wa.me/${SITE.whatsapp}`} className="font-semibold underline">{SITE.phoneDisplay}</a> as soon as possible.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-ink-900 text-white py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-semibold mb-4">Ready to Book Your Session?</h2>
            <p className="text-gray-300 mb-8">
              Contact us on WhatsApp — we&apos;ll confirm your slot and send payment instructions within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Taj%20Mahal%20photography%20session.`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-sm transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>
              <Link href="/book" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-ink-900 font-medium text-sm rounded-sm hover:bg-marble-100 transition-colors">
                Book Online
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Payment Methods', url: `${SITE.url}/payment` },
          ])),
        }}
      />
    </div>
  );
}
