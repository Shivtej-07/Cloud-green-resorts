import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Flower2, 
  Heart, 
  CheckCircle2 
} from 'lucide-react';
import { spaServices } from '../../data/spaServices';
import Button from '../common/Button';

export default function SpaHighlight() {
  const topServices = spaServices.filter(s => s.popular).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-sage-50 relative overflow-hidden">
      
      {/* Background soft botanical watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Highlight info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-forest-800">
              <Flower2 className="w-4 h-4 text-gold-500" />
              <span>Cloudgreen Wellness Spa</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 leading-tight">
              Holistic Healing &amp; Ayurvedic Serenity
            </h2>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Immerse yourself in deeply restorative wellness treatments tailored to dissolve travel fatigue. Inspired by both Vedic rejuvenation traditions and contemporary spa rituals, our certified therapists work with cold-pressed botanical oils and authentic hill herbs.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span>Certified wellness therapists with personalized consultation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span>Special local Mahabaleshwar Strawberry Honey scrubs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                <span>Private couple therapy suites with steam &amp; herbal baths</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/spa"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                View Complete Spa Menu
              </Button>
            </div>
          </motion.div>

          {/* Right Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between ${
                  index === 2 ? 'sm:col-span-2 sm:flex-row items-center' : ''
                }`}
              >
                <div className={`${index === 2 ? 'sm:w-1/2 h-56 sm:h-full' : 'h-48'} overflow-hidden relative`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-md text-gold-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </div>
                </div>

                <div className={`p-5 flex-1 flex flex-col justify-between ${index === 2 ? 'sm:w-1/2' : ''}`}>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-950">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-forest-700" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">Starts at</span>
                      <span className="font-serif text-lg font-bold text-forest-900">
                        ₹{service.price.toLocaleString()}
                      </span>
                    </div>
                    <Link
                      to="/spa"
                      className="text-xs font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1 group"
                    >
                      <span>Book Session</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
