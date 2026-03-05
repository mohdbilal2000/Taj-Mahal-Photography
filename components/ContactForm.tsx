'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 bg-ink-900 text-white" id="book">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-2 block">Secure Your Date</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Book Your Authorized Photoshoot</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Due to government regulations, I can only take a limited number of clients per day. Please inquire early to secure your preferred date and time.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm mb-8">
              <h3 className="font-serif text-xl font-semibold text-gold-400 mb-2">Limited Daily Permits</h3>
              <p className="text-sm text-gray-300">
                To maintain the quality of experience and adhere to monument guidelines, I accept maximum 2 shoots per day (Sunrise and Sunset).
              </p>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              * We aim to respond to all inquiries within 10 minutes during business hours via WhatsApp.
            </p>
          </div>
          
          <div className="bg-white text-ink-900 p-8 rounded-sm shadow-xl">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Inquiry Received!</h3>
                <p className="text-gray-600">Thank you for reaching out. I will contact you via WhatsApp shortly to confirm availability.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-gold-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality *</label>
                    <input type="text" id="nationality" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                    <input type="tel" id="whatsapp" required placeholder="+1 234 567 8900" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                    <input type="date" id="date" required className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors bg-white">
                    <option>Sunrise Photoshoot</option>
                    <option>Couple / Pre-Wedding</option>
                    <option>Family Photography</option>
                    <option>Proposal Shoot</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors resize-none"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-ink-900 text-white py-3 px-4 rounded-sm font-medium hover:bg-ink-800 transition-colors disabled:opacity-70 flex justify-center items-center"
                >
                  {status === 'submitting' ? 'Sending...' : 'Check Availability'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
