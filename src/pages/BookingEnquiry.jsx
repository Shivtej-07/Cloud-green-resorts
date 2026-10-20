import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, 
  Utensils, 
  Waves, 
  Clock, 
  Sparkles, 
  Phone, 
  HeartHandshake 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import EnquiryForm from '../components/contact/EnquiryForm';

export default function BookingEnquiry() {
  return (
    <>
      <Helmet>
        <title>Book Direct &amp; Save | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content="Book direct with Cloudgreen Resort & Spa, Metgutad for guaranteed best rates starting ₹1,897/night. Free breakfast, swimming pool, flexible cancellation, and pet-friendly stays." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-16 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Direct Reservation Benefits</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Reserve Your Hill Haven
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Guaranteed best tariffs, flexible 48-hour cancellation, and complimentary breakfast. No commission markups.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="py-14 bg-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Direct Booking Perks Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <strong className="text-forest-950 block">Best Rate Guarantee</strong>
                <span className="text-slate-500">From ₹1,897 / night</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex items-center gap-3">
              <Utensils className="w-8 h-8 text-gold-500 shrink-0" />
              <div className="text-xs">
                <strong className="text-forest-950 block">Complimentary Breakfast</strong>
                <span className="text-slate-500">Fresh local spread</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex items-center gap-3">
              <Clock className="w-8 h-8 text-forest-700 shrink-0" />
              <div className="text-xs">
                <strong className="text-forest-950 block">Free Cancellation</strong>
                <span className="text-slate-500">Up to 48h prior</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex items-center gap-3">
              <HeartHandshake className="w-8 h-8 text-rose-500 shrink-0" />
              <div className="text-xs">
                <strong className="text-forest-950 block">Pet Friendly</strong>
                <span className="text-slate-500">Bring your furry friends</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <EnquiryForm />

          {/* Need help bar */}
          <div className="mt-8 bg-forest-900 text-cream-100 rounded-3xl p-6 text-center sm:flex sm:items-center sm:justify-between gap-4">
            <div className="text-left mb-4 sm:mb-0">
              <h4 className="font-serif text-lg font-bold text-white">Need Immediate Assistance?</h4>
              <p className="text-xs text-cream-300">Speak directly with our Metgutad reservations manager.</p>
            </div>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-forest-950 px-6 py-3 rounded-full text-sm font-bold shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
