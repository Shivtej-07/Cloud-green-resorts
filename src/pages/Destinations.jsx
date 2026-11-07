import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  Check, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Users, 
  Bed, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { destinations, destinationsSummary, brandDetails } from '../data/destinations';
import DestinationIcon from '../components/common/DestinationIcons';
import BrandPhilosophy from '../components/common/BrandPhilosophy';
import { siteConfig } from '../data/siteConfig';
import WhatsAppIcon from '../components/common/WhatsAppIcon';

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All 5 Properties' },
    { id: 'Resort & Spa', label: 'Resorts & Spa' },
    { id: 'Private Luxury Villa', label: 'Private Villas (4 & 6 BHK)' },
    { id: 'Heritage Cottage', label: 'Heritage Cottages' }
  ];

  const filteredDestinations = activeFilter === 'all'
    ? destinations
    : destinations.filter(d => d.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our 5 Destinations &amp; Luxury Stays | Reveridge Hospitality</title>
        <meta 
          name="description" 
          content="Explore all 5 Reveridge properties across Maharashtra: Mahabaleshwar Resort & Spa, Mahabaleshwar 6 BHK Villa, Lingmala 4 BHK Villa, Matheran 3 BHK Cottage, and Dapoli Coastal Resort & Spa." 
        />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/85 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-4 h-4 text-teal-400" />
            <span>Reveridge Hospitality Collection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Handpicked Destinations
          </h1>

          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            From misty Sahyadri ridges and roaring waterfalls to tranquil automobile-free hill stations and sun-drenched Konkan beaches.
          </p>

          {/* Quick Counter Strip */}
          <div className="mt-8 inline-flex items-center gap-4 sm:gap-8 bg-forest-900/90 border border-gold-500/30 px-6 py-3 rounded-2xl backdrop-blur-md text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="text-white font-bold">5 Distinct Properties</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-cream-200">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Mahabaleshwar • Matheran • Dapoli</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Reveridge Is & Brand Name Origin */}
      <BrandPhilosophy className="py-14 sm:py-20 border-b border-forest-900" />

      {/* Main Content Area */}
      <section className="py-14 sm:py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-forest-800 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-forest-50 hover:text-forest-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Destination Cards List */}
          <div className="space-y-12">
            {filteredDestinations.map((prop, idx) => (
              <motion.div
                key={prop.id}
                id={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft-lg border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 hover:border-gold-500/50 transition-all duration-300"
              >
                {/* Left/Top: Photo Gallery Carousel / Hero */}
                <Link to={`/destinations/${prop.id}`} className="lg:col-span-5 relative h-72 lg:h-auto min-h-[280px] overflow-hidden group block">
                  <img
                    src={prop.images[0]}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                  
                  {/* Property Code Badge */}
                  <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-md text-gold-400 border border-gold-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {prop.propertyCode}
                  </div>

                  {/* BHK Badge */}
                  {prop.bhk && (
                    <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {prop.bhk}
                    </div>
                  )}

                  {/* Rating Badge on Image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                    <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    <span className="font-bold">{prop.rating}</span>
                    <span className="text-white/70">({prop.reviewCount} reviews)</span>
                  </div>
                </Link>

                {/* Right: Property Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                            {prop.type}
                          </span>
                          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-gold-500" />
                            {prop.location}
                          </span>
                        </div>
                        <Link to={`/destinations/${prop.id}`} className="hover:text-forest-800 transition-colors">
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight leading-tight">
                            {prop.name}
                          </h2>
                        </Link>
                      </div>

                      {/* Line-art Icon Container */}
                      <div className="w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] max-w-[3.5rem] max-h-[3.5rem] rounded-2xl bg-slate-50 border border-slate-200 p-2.5 shrink-0 hidden sm:flex items-center justify-center">
                        <DestinationIcon type={prop.iconType} className="w-full h-full object-contain" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="mt-2.5 text-xs sm:text-sm text-forest-800 font-medium italic">
                      "{prop.tagline}"
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {prop.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prop.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenities Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {prop.amenities.map((amenity, aIdx) => (
                        <span 
                          key={aIdx} 
                          className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Starting tariff</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                          ₹{prop.startingPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 font-normal">/ night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about booking ${prop.name}. Please share tariffs and availability.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>

                      <Link
                        to={`/destinations/${prop.id}`}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <span>View Property Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/booking?property=${prop.id}`}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 text-xs font-bold transition-colors shadow-sm"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Need Assistance Bar */}
          <div className="mt-16 bg-forest-900 text-cream-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-gold-500/20">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Need Help Planning Your Getaway?
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl font-light">
                Our reservations concierge can help you choose the ideal property between Mahabaleshwar, Lingmala, Matheran, and Dapoli based on your group size and occasion.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-forest-950 px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Concierge: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

