import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { useData } from '../context/DataContext';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { InstagramIcon, FacebookIcon } from '../components/common/SocialIcons';

const faqs = [
  {
    q: "What are your check-in and check-out timings?",
    a: "Standard check-in is at 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out is subject to room availability on that day and can be coordinated with the front desk."
  },
  {
    q: "Is Reveridge Boutique Escapes pet-friendly?",
    a: "Yes! We warmly welcome well-behaved dogs and cats across our properties with open lawns for walking. Please inform us when booking so we allocate a convenient garden-access room or villa suite."
  },
  {
    q: "Is breakfast included?",
    a: "Many room plans include our freshly prepared hot breakfast served between 8:00 AM and 10:30 AM featuring Maharashtrian specialties, freshly brewed coffee, chai, and continental selections."
  },
  {
    q: "How far is your Mahabaleshwar property from Mahabaleshwar center and Panchgani?",
    a: "Metgutad sits right on the Panchgani–Mahabaleshwar Road — approximately 10 km from Panchgani Table Land and 7.5 km from Mahabaleshwar market and Venna Lake."
  },
  {
    q: "What is your cancellation policy?",
    a: "We offer free cancellation up to 48 hours prior to your scheduled arrival date. Cancellations within 48 hours may incur a 1-night retention fee."
  }
];

export default function Contact() {
  const { siteConfig } = useData();
  const [openFaq, setOpenFaq] = useState(0);

  const primaryPhone = siteConfig?.contact?.phoneDisplay || '+91 94226 00577';
  const secondaryPhone = siteConfig?.contact?.altPhone || '+91 94206 33577';
  const primaryEmail = siteConfig?.contact?.email || 'reservations@reveridge.com';
  const supportEmail = siteConfig?.contact?.supportEmail || 'info@reveridge.com';
  const websiteLabel = siteConfig?.contact?.website || 'www.reveridge.com';
  const websiteUrl = siteConfig?.contact?.websiteUrl || 'https://www.reveridge.com';
  const instagramHandle = siteConfig?.socials?.instagramHandle || '@reveridge';
  const instagramUrl = siteConfig?.socials?.instagram || 'https://www.instagram.com/reveridge/';
  const facebookLabel = siteConfig?.socials?.facebookLabel || 'Reveridge — Elevated Escapes';
  const facebookUrl = siteConfig?.socials?.facebook || 'https://www.facebook.com/reveridge/';

  return (
    <>
      <Helmet>
        <title>Contact Us | {siteConfig.name}</title>
        <meta name="description" content={`Get in touch with ${siteConfig.name} across Maharashtra. Call ${primaryPhone} or ${secondaryPhone}, or email ${primaryEmail} for stays and bookings.`} />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-3">
            Always At Your Service
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Contact &amp; Location
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Have questions about tariffs, destination availability, pet policies, or private villa buyouts? Connect directly with the Reveridge hospitality desk.
          </p>
        </motion.div>
      </section>

      {/* Quick Contact Cards */}
      <section className="pt-12 pb-6 bg-cream-200 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Phones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">Call Reservations</h3>
              <p className="text-xs text-slate-500 mt-1">Available 24/7 for assistance</p>
              <div className="mt-3 space-y-1">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="block font-bold text-forest-900 text-sm hover:text-gold-700 hover:underline transition-colors"
                >
                  {primaryPhone}
                </a>
                <a
                  href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                  className="block font-bold text-forest-900 text-sm hover:text-gold-700 hover:underline transition-colors"
                >
                  {secondaryPhone}
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-4 shadow-sm">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500 mt-1">Instant photo sharing &amp; tariffs</p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-bold text-emerald-700 text-sm hover:underline"
              >
                <span>Message on WhatsApp</span>
                <span>→</span>
              </a>
            </motion.div>

            {/* Emails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">Email Reservations</h3>
              <p className="text-xs text-slate-500 mt-1">Stays, events &amp; general enquiries</p>
              <div className="mt-3 space-y-1">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="block font-bold text-forest-900 text-xs sm:text-sm hover:text-gold-700 hover:underline truncate transition-colors"
                >
                  {primaryEmail}
                </a>
                <a
                  href={`mailto:${supportEmail}`}
                  className="block font-bold text-forest-800 text-xs sm:text-sm hover:text-gold-700 hover:underline truncate transition-colors"
                >
                  {supportEmail}
                </a>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">Resort Location</h3>
              <p className="text-xs text-slate-500 mt-1">Metgutad, Maharashtra 412806</p>
              <span className="mt-3 block text-xs font-semibold text-forest-700">
                Panchgani - Mahabaleshwar Rd
              </span>
            </motion.div>

          </div>

          {/* Official Website & Social Media Channels Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group bg-white rounded-2xl p-4 sm:p-5 shadow-soft border border-slate-200/80 hover:border-forest-800/40 flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-11 h-11 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Official Website
                  </span>
                  <span className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-700 transition-colors truncate block">
                    {websiteLabel}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-forest-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.a>

            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group bg-white rounded-2xl p-4 sm:p-5 shadow-soft border border-slate-200/80 hover:border-rose-300 flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Instagram
                  </span>
                  <span className="font-serif text-base font-bold text-forest-950 group-hover:text-rose-700 transition-colors truncate block">
                    {instagramHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.a>

            <motion.a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group bg-white rounded-2xl p-4 sm:p-5 shadow-soft border border-slate-200/80 hover:border-sky-300 flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                  <FacebookIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    Facebook
                  </span>
                  <span className="font-serif text-base font-bold text-forest-950 group-hover:text-sky-700 transition-colors truncate block">
                    {facebookLabel}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.a>
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
