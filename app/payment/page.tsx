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
  { period: '30+ days before session', fee: 'No cancellation fee', color: 'text-accent-bright' },
  { period: '11–29 days before session', fee: '30% of total booking', color: 'text-accent' },
  { period: '3–10 days before session', fee: '50% of total booking', color: 'text-accent' },
  { period: 'Within 48 hours', fee: '100% — non-refundable', color: 'text-ivory' },
];

export default function PaymentPage() {
  return (
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />
      <main id="main-content" className="flex-grow bg-night">

        {/* Hero */}
        <div className="bg-coal bg-mughal-pattern border-b border-line py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="kicker mb-4">
              Secure &amp; Verified
            </p>
            <h1 className="display-tight font-display text-ivory text-4xl md:text-5xl font-medium">
              Payment Methods
            </h1>
            <p className="mt-5 text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              All payments are processed securely under{' '}
              <strong className="text-accent">Taj Guides &amp; Travel Services</strong> —
              the registered parent company operating both{' '}
              <a href="https://tajmahalphotography.com" className="link-underline text-ivory hover:text-accent transition-colors">
                tajmahalphotography.com
              </a>{' '}
              and{' '}
              <a href="https://tajmahaltouristguide.com" target="_blank" rel="noopener noreferrer" className="link-underline text-ivory hover:text-accent transition-colors">
                tajmahaltouristguide.com
              </a>.
            </p>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-night border-b border-line py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" />Government Registered Business</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" />HDFC Bank Verified Account</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />24/7 WhatsApp Support</span>
              <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" />Receipt Issued for All Payments</span>
            </div>
          </div>
        </div>

        {/* Parent Company Notice */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
          <div className="bg-surface border border-line p-6 flex gap-4">
            <Building2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display font-medium text-ivory mb-1">About the Operating Company</h2>
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-ivory">Taj Mahal Photography</strong> is a specialized photography service operated
                under <strong className="text-ivory">Taj Guides &amp; Travel Services</strong> — a government-approved tourism
                company based in Agra since 1998, led by <strong className="text-ivory">Shafiq Khan</strong> (Government
                Approved Tourist Guide, Ministry of Tourism &amp; Culture, Govt. of India), also
                operating{' '}
                <a href="https://tajmahaltouristguide.com" target="_blank" rel="noopener noreferrer" className="link-underline text-accent hover:text-accent-bright">
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
          <h2 className="font-display text-2xl md:text-3xl text-ivory font-medium mb-8 text-center">
            Choose Your Payment Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="border border-line p-6 hover:border-line-strong transition-colors bg-surface">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 border border-line bg-night">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-ivory text-base">{method.title}</h3>
                        <p className="text-faint text-xs">{method.subtitle}</p>
                      </div>
                    </div>
                    <span className="border border-line-strong text-muted text-[10px] font-mono uppercase tracking-[0.14em] px-2.5 py-1">
                      {method.badge}
                    </span>
                  </div>
                  {method.details.length > 0 && (
                    <div className="bg-night border border-line p-4 mb-4 space-y-2">
                      {method.details.map((d) => (
                        <div key={d.label} className="flex justify-between text-sm">
                          <span className="text-faint">{d.label}</span>
                          <span className="font-mono font-semibold text-ivory text-right ml-4">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-muted leading-relaxed">{method.note}</p>
                  {method.title === 'UPI Payment' && (
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20would%20like%20the%20UPI%20QR%20code%20to%20pay%20for%20my%20photography%20booking.`}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.14em] text-[11px] text-accent hover:text-accent-bright transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Request UPI QR via WhatsApp →
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add-on note */}
          <p className="mt-6 text-sm text-faint text-center">
            Add extra edited high-resolution photos for <strong className="text-ivory">$20 each</strong> to any package or tour.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-coal border-y border-line py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl text-ivory font-medium mb-10 text-center">
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
                  <div className="w-12 h-12 border border-accent text-accent font-mono flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-medium text-ivory mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-2xl md:text-3xl text-ivory font-medium mb-2 text-center">
            Cancellation &amp; Refund Policy
          </h2>
          <p className="text-faint text-center text-sm mb-10">
            Politique d&apos;annulation — Applies to all bookings under Taj Guides &amp; Travel Services
          </p>
          <div className="overflow-hidden border border-line">
            <table className="w-full text-sm">
              <thead className="bg-coal text-ivory">
                <tr>
                  <th className="text-left py-4 px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Notice Period</th>
                  <th className="text-left py-4 px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Cancellation Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cancellationPolicy.map((row, i) => (
                  <tr key={row.period} className={i % 2 === 0 ? 'bg-surface' : 'bg-night'}>
                    <td className="py-4 px-6 text-muted">{row.period}</td>
                    <td className={`py-4 px-6 font-semibold ${row.color}`}>{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-surface border border-line flex gap-3">
            <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted">
              <strong className="text-ivory">Tailor-made packages</strong> may be subject to alternative cancellation terms
              communicated at the time of booking. To cancel or reschedule, contact us via WhatsApp at{' '}
              <a href={`https://wa.me/${SITE.whatsapp}`} className="link-underline font-semibold text-accent hover:text-accent-bright">{SITE.phoneDisplay}</a> as soon as possible.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-coal bg-mughal-pattern border-t border-line py-16 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-3xl font-medium text-ivory mb-4">Ready to Book Your Session?</h2>
            <p className="text-muted mb-8">
              Contact us on WhatsApp — we&apos;ll confirm your slot and send payment instructions within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Taj%20Mahal%20photography%20session.`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ivory text-night font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>
              <Link href="/book" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-line-strong text-ivory font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:border-accent hover:text-accent transition-colors">
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
