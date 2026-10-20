import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronDown, 
  HelpCircle, 
  CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';

const faqs = [
  {
    q: "What are your check-in and check-out timings?",
    a: "Standard check-in is at 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out is subject to room availability on that day and can be coordinated with the front desk."
  },
  {
    q: "Is Cloudgreen Resort truly pet-friendly?",
    a: "Yes! We warmly welcome well-behaved dogs and cats. We have extensive open lawns for walking. Please inform us when booking so we allocate a garden-access ground floor room."
  },
  {
    q: "Is breakfast complimentary?",
    a: "Yes, every room booking includes a complimentary hot breakfast buffet served between 8:00 AM and 10:30 AM featuring Maharashtrian specialties, tea, coffee, and continental items."
  },
  {
    q: "How far is the resort from Mahabaleshwar and Panchgani?",
    a: "Metgutad is centrally located right on the Panchgani-Mahabaleshwar Road — approximately 10 km from Panchgani Table Land and 7.5 km from Mahabaleshwar center / Venna Lake."
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer free cancellation up to 48 hours prior to your scheduled arrival date. Cancellations within 48 hours may incur a 1-night retention fee."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>Contact Us | Cloudgreen Resort &amp; Spa Metgutad Mahabaleshwar</title>
        <meta name="description" content="Get in touch with Cloudgreen Resort & Spa on Panchgani-Mahabaleshwar Rd, Metgutad. Call 094206 33577 or message on WhatsApp for room bookings and inquiries." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-3">
            Always At Your Service
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Contact &amp; Location
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Have questions about tariffs, room availability, pet policies, or driving directions? Reach out to our 24/7 Metgutad desk.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-cream-200 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Phone */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">Call Front Desk</h3>
              <p className="text-xs text-slate-500 mt-1">Available 24/7 for assistance</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="mt-3 block font-bold text-forest-900 text-sm hover:underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500 mt-1">Instant photo sharing &amp; tariffs</p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-bold text-emerald-700 text-sm hover:underline"
              >
                Message on WhatsApp →
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">Email Reservations</h3>
              <p className="text-xs text-slate-500 mt-1">For corporate &amp; group packages</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-3 block font-bold text-forest-900 text-xs sm:text-sm hover:underline truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">Resort Location</h3>
              <p className="text-xs text-slate-500 mt-1">Metgutad, Maharashtra 412806</p>
              <span className="mt-3 block text-xs font-semibold text-forest-700">
                Panchgani - Mahabaleshwar Rd
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid: Form + Map */}
      <section className="py-12 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-4">
                Send Us a Direct Message
              </h2>
              <ContactForm />
            </div>

            {/* Map & Directions */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-4">
                Find Us on the Highway
              </h2>
              <MapEmbed />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">Frequently Asked</span>
            <h3 className="font-serif text-3xl font-bold text-forest-950">
              Common Questions Before Visiting
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden bg-cream-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-forest-950"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-forest-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
