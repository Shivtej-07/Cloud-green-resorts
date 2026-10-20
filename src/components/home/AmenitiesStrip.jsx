import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Waves, 
  Sparkles, 
  Utensils, 
  Wifi, 
  Car, 
  HeartHandshake, 
  Shirt, 
  Flame, 
  ArrowRight 
} from 'lucide-react';
import { amenitiesData } from '../../data/amenities';
import SectionTitle from '../common/SectionTitle';

// Map icon string names to actual Lucide components
const iconMap = {
  Waves,
  Sparkles,
  Utensils,
  Wifi,
  Car,
  HeartHandshake,
  Shirt,
  Flame
};

export default function AmenitiesStrip() {
  const topAmenities = amenitiesData.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-forest-950 text-cream-100 relative overflow-hidden">
      
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle
          subtitle="Resort Facilities"
          title="Curated Comforts in Nature"
          description="From refreshing pool swims and Ayurvedic massages to complimentary breakfast and pet hospitality, every amenity is crafted for pure mountain ease."
          dark={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {topAmenities.map((amenity, index) => {
            const Icon = iconMap[amenity.icon] || Sparkles;

            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-between transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950 transition-all duration-300 mb-3 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-cream-300/70 line-clamp-2 leading-relaxed">
                    {amenity.shortDesc}
                  </p>
                </div>

                <span className="mt-3 text-[10px] uppercase tracking-wider font-semibold text-gold-400/80 bg-gold-500/10 px-2 py-0.5 rounded-full">
                  {amenity.tag}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* View all amenities link */}
        <div className="mt-12 text-center">
          <Link
            to="/amenities"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 hover:text-gold-300 underline underline-offset-8 transition-colors group"
          >
            <span>Explore All Resort Facilities &amp; Guidelines</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
