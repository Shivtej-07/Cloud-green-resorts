import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, Star } from 'lucide-react';
import { destinations, destinationsSummary } from '../../data/destinations';
import DestinationIcon from '../common/DestinationIcons';
import SectionTitle from '../common/SectionTitle';

export default function DestinationsStrip() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-teal-600 fill-teal-600/20" />
              <span>{destinationsSummary.title} • {destinationsSummary.badgeText}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight">
              Boutique Nature Escapes Across Maharashtra
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-light leading-relaxed">
              Spanning mountains, forests, and coastlines. Reveridge is boutique by design, personal by nature, and five-star in feeling without the formality of a traditional luxury brand. Nature is the amenity. Stillness is the luxury.
            </p>
          </div>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 group shrink-0"
          >
            <span>Explore All 5 Destinations Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5 Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {destinations.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
            >
              <Link
                to={`/destinations/${prop.id}`}
                className="group flex flex-col h-full bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-gold-500/50 hover:shadow-soft-lg transition-all duration-300"
              >
                {/* Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 border border-slate-200/90 group-hover:border-teal-500/50 group-hover:bg-teal-50/30 flex items-center justify-center p-2.5 transition-all shadow-2xs">
                    <DestinationIcon type={prop.iconType} className="w-full h-full" />
                  </div>

                  {prop.bhk ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gold-50 text-gold-700 border border-gold-200">
                      {prop.bhk}
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200/60">
                      Resort
                    </span>
                  )}
                </div>

                {/* Destination Name & Brand */}
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    {prop.propertyCode}
                  </span>
                  <h3 className="font-semibold text-slate-900 text-base group-hover:text-teal-900 transition-colors tracking-tight line-clamp-1">
                    {prop.shortName}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {prop.brandName}
                  </p>
                  <p className="text-[11px] text-teal-600 font-medium mt-1 line-clamp-1">
                    {prop.badge}
                  </p>
                </div>

                {/* Bottom Tariff & Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">From</span>
                    <span className="font-bold text-sm text-forest-900">
                      ₹{prop.startingPrice.toLocaleString()}
                    </span>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Brand Name Origin Strip */}
        <div className="mt-10 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-gold-500/40 shadow-sm shrink-0 bg-forest-950">
              <img src="/reveridge-logo.jpg" alt="Reveridge Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                Brand Name Origin: Reve (Growth) + Ridge (Mountain)
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Elevation in every sense — a higher standard of experience, a deeper connection with the surroundings, and a stay that stays with you.
              </p>
            </div>
          </div>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 shrink-0 bg-teal-50 hover:bg-teal-100/80 px-4 py-2 rounded-xl transition-colors"
          >
            <span>Learn More About Reveridge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

