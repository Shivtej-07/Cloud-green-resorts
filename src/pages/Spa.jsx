import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  Check, 
  Heart, 
  MessageCircle, 
  Flower2, 
  ShieldCheck, 
  Droplet, 
  Calendar 
} from 'lucide-react';
import { spaServices } from '../data/spaServices';
import { siteConfig } from '../data/siteConfig';
import { buildSpaEnquiryLink } from '../utils/whatsapp';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

export default function Spa() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Body", "Ayurveda", "Aroma Therapy", "Therapeutic", "Body Scrubs", "Facials", "Couple Packages"];

  const filteredServices = selectedCategory === "All"
    ? spaServices
    : spaServices.filter(s => s.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Spa &amp; Wellness | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content="Rejuvenate your senses at Cloudgreen Wellness Spa, Metgutad. Traditional Ayurvedic Abhyanga, Swedish massage, organic strawberry scrubs and couple therapy packages." />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
            <Flower2 className="w-4 h-4 text-gold-400" />
            <span>Cloudgreen Wellness Sanctuary</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Ayurvedic &amp; Holistic Spa
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Surrender into tranquility. Rebalance your body and mind with our healing therapies infused with fresh mountain botanicals, wild honey, and organic essential oils.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-cream-300">
            <span>🌿 Open Daily: 8:00 AM – 8:00 PM</span>
            <span>•</span>
            <span>✨ Certified Professional Therapists</span>
            <span>•</span>
            <span>💆 Private &amp; Couple Therapy Suites</span>
          </div>
        </div>
      </section>

      {/* Spa Menu Section */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Pill Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-forest-800 text-cream-100 shadow-md font-semibold scale-105'
                    : 'bg-white text-slate-700 hover:bg-cream-100 border border-slate-200/80 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const whatsappUrl = buildSpaEnquiryLink(service.name, service.price);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col sm:flex-row group"
                >
                  <div className="sm:w-2/5 h-60 sm:h-auto overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-forest-950/85 backdrop-blur-md text-gold-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-xl font-bold text-forest-950">
                          {service.name}
                        </h3>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-forest-800 font-medium">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                        {service.oils && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 truncate text-[11px]">{service.oils}</span>
                          </>
                        )}
                      </div>

                      {/* Benefits */}
                      <div className="mt-3 space-y-1">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <Check className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Pricing & WhatsApp CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-400 block">Tariff</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-2xl font-bold text-forest-900">
                            ₹{service.price.toLocaleString()}
                          </span>
                          {service.price90 && (
                            <span className="text-xs text-slate-500">
                              (90m: ₹{service.price90})
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book Session</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Spa Guidelines & Etiquette */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-6 text-center">
              Spa Etiquette &amp; Booking Guidelines
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
              <div className="space-y-2 p-4 bg-cream-50 rounded-2xl">
                <strong className="text-forest-950 text-sm block">Advance Reservation</strong>
                <p>We recommend booking appointments at least 3 hours in advance, especially during peak weekend hours.</p>
              </div>

              <div className="space-y-2 p-4 bg-cream-50 rounded-2xl">
                <strong className="text-forest-950 text-sm block">Arrival Time</strong>
                <p>Please arrive 10 minutes before your scheduled appointment time to enjoy herbal green tea and consult your therapist.</p>
              </div>

              <div className="space-y-2 p-4 bg-cream-50 rounded-2xl">
                <strong className="text-forest-950 text-sm block">Health &amp; Allergies</strong>
                <p>Kindly inform therapists of any hypertension, muscle injuries, or herbal allergies prior to your massage session.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
