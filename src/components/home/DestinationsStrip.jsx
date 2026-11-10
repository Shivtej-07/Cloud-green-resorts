import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { destinations, destinationsSummary } from '../../data/destinations';

export default function DestinationsStrip() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-teal-600 fill-teal-600/20" />
              <span>{destinationsSummary.title} • {destinationsSummary.badgeText}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
              Boutique Nature Escapes Across Maharashtra
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl">
              Spanning mountains, forests, and coastlines. Reveridge is boutique by design, personal by nature, and five-star in feeling without the formality of a traditional luxury brand. Nature is the amenity. Stillness is the luxury.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 group shrink-0"
            >
              <span>Explore All 5 Destinations Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 5 Destinations Grid — Card Background Images with Property Logo/Icon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {destinations.map((prop, idx) => {
            const propImage = prop.images?.[0] || prop.image;

            return (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="flex"
              >
                <Link
                  to={`/destinations/${prop.id}`}
                  className="group relative flex flex-col justify-between w-full min-h-[340px] sm:min-h-[360px] rounded-3xl p-5 overflow-hidden shadow-soft-lg hover:shadow-2xl border border-slate-200/80 hover:border-gold-500/80 transition-all duration-500 cursor-pointer block text-left"
                >
                  {/* Property Photo as Card Background with Smooth Hover Zoom */}
                  <img
                    src={propImage}
                    alt={prop.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Multi-Stop Gradient Overlay for High Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25 transition-opacity group-hover:opacity-90" />

                  {/* Top Bar: Property Code & Type Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-300 border border-gold-500/40 uppercase">
                      {prop.propertyCode}
                    </span>

                    {prop.bhk ? (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500 text-forest-950 shadow-xs uppercase tracking-wider">
                        {prop.bhk}
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-forest-900/85 backdrop-blur-md text-gold-300 border border-gold-500/30 uppercase tracking-wider">
                        Resort
                      </span>
                    )}
                  </div>

                  {/* Bottom Content: Name, Brand, Badge & Price */}
                  <div className="relative z-10 text-white mt-16">

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors tracking-tight line-clamp-1 leading-snug">
                      {prop.shortName}
                    </h3>

                    <p className="text-xs text-cream-100/80 line-clamp-1 mt-0.5 font-light">
                      {prop.brandName}
                    </p>

                    <p className="text-[11px] text-teal-300 font-medium mt-1 line-clamp-1">
                      {prop.badge}
                    </p>

                    {/* Bottom Tariff & Action */}
                    <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-white/70 uppercase block font-medium">From</span>
                        <span className="font-bold text-base text-gold-300">
                          ₹{prop.startingPrice.toLocaleString()}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1 text-white font-bold text-xs group-hover:text-gold-300 group-hover:translate-x-0.5 transition-all">
                        <span>View Page</span>
                        <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
