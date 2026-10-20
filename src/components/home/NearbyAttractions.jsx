import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Clock, ArrowRight } from 'lucide-react';
import { attractions } from '../../data/attractions';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function NearbyAttractions() {
  const topAttractions = attractions.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          subtitle="Explore the Western Ghats"
          title="Centrally Located in Metgutad"
          description="Cloudgreen Resort is ideally situated halfway between Panchgani and Mahabaleshwar, making sightseeing effortless and time-saving."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topAttractions.map((spot, index) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Distance Badge */}
                <div className="absolute top-3 left-3 bg-forest-950/85 backdrop-blur-md text-gold-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Navigation className="w-3 h-3 text-gold-400" />
                  <span>{spot.distance} from resort</span>
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
                    {spot.highlight.split(',')[0]}
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
        </div>

        {/* View all attractions button */}
        <div className="mt-14 text-center">
          <Button
            to="/attractions"
            variant="outline"
            size="lg"
            icon={ArrowRight}
          >
            Discover All Nearby Viewpoints &amp; Farms
          </Button>
        </div>

      </div>
    </section>
  );
}
