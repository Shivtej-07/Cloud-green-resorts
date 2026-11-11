import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation, Clock, ArrowRight, Compass, Mountain, Trees, Waves } from 'lucide-react';
import { attractions } from '../../data/attractions';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const HOME_REGIONS = [
  { id: 'mahabaleshwar', label: 'Mahabaleshwar', icon: Mountain },
  { id: 'matheran', label: 'Matheran', icon: Trees },
  { id: 'dapoli', label: 'Dapoli', icon: Waves }
];

export default function NearbyAttractions() {
  const [activeRegion, setActiveRegion] = useState('mahabaleshwar');

  const topAttractions = attractions
    .filter((spot) => spot.region === activeRegion)
    .slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Explore Maharashtra With Reveridge"
          title="Nearby Attractions & Sightseeing"
          description="From iconic Sahyadri peaks, Lingmala Waterfall, and Venna Lake in Mahabaleshwar to Matheran's horse trails and Dapoli's Konkan beaches & sea forts."
        />

        {/* Interactive Destination Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {HOME_REGIONS.map((region) => {
            const isActive = activeRegion === region.id;
            const RegionIcon = region.icon;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveRegion(region.id)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-2 ${
                  isActive
                    ? 'text-white'
                    : 'bg-white text-slate-700 hover:bg-forest-50 border border-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="homeAttractionTab"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-forest-900 shadow-md -z-0"
                  />
                )}
                <RegionIcon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-gold-400' : 'text-forest-700'}`} />
                <span className="relative z-10">{region.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {topAttractions.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-forest-950">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Distance Badge */}
                  <div className="absolute top-3 left-3 bg-forest-950/90 backdrop-blur-md text-gold-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Navigation className="w-3 h-3 text-gold-400" />
                    <span>{spot.distance}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {spot.regionLabel}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cream-300" />
                    <span>{spot.driveTime}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-forest-700 bg-forest-50 px-2 py-0.5 rounded">
                      {spot.category}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-forest-950 mt-2 group-hover:text-forest-700 transition-colors">
                      {spot.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {spot.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium truncate mr-2">
                      {spot.highlight}
                    </span>
                    <Link
                      to="/attractions"
                      className="text-forest-800 font-bold hover:text-forest-950 shrink-0 flex items-center gap-0.5"
                    >
                      <span>More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all attractions button */}
        <div className="mt-14 text-center">
          <Button
            to="/attractions"
            variant="outline"
            size="lg"
            icon={Compass}
          >
            Explore All 20 Locations (Mahabaleshwar, Matheran &amp; Dapoli)
          </Button>
        </div>
      </div>
    </section>
  );
}
