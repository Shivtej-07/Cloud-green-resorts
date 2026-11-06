import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Sprout, 
  Mountain, 
  Feather,
  CheckCircle2
} from 'lucide-react';
import Button from '../common/Button';

export default function AboutPreview() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28 bg-cream-200 relative overflow-hidden">
      {/* Subtle ambient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Nature & Stays Visual Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main large image (Mountain resort) */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Reveridge Boutique Nature Escape"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Smaller overlapping image (Coastal / Villa) */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
                  alt="Reveridge Luxury Private Villa"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating Collection Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -left-4 sm:-left-6 bg-forest-950 text-cream-100 p-4 rounded-2xl shadow-xl border border-gold-500/40"
              >
                <div className="flex items-center gap-1.5 text-gold-400 font-bold text-base">
                  <Sparkles className="w-4 h-4 fill-gold-400 text-gold-400" />
                  <span>5 Boutique Stays</span>
                </div>
                <p className="text-xs text-cream-300 mt-0.5">4 Distinct Destinations</p>
                <p className="text-[10px] text-teal-300 font-medium uppercase tracking-wider mt-1">Maharashtra Escapes</p>
              </motion.div>

              {/* Philosophy Tag Badge */}
              <div className="absolute -bottom-4 left-6 bg-forest-900 text-gold-300 font-serif italic px-4 py-2 rounded-xl shadow-lg border border-gold-500/30 text-xs sm:text-sm">
                "Nature is the amenity. Stillness is the luxury."
              </div>
            </div>
          </motion.div>

          {/* Right Column: WHAT REVERIDGE IS & BRAND NAME ORIGIN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-forest-800">
              <span className="w-6 h-[1.5px] bg-gold-500 rounded-full inline-block"></span>
              <span>Boutique Nature Escapes</span>
            </div>

            {/* WHAT REVERIDGE IS */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 leading-tight mb-4">
                What Reveridge Is
              </h2>

              <p className="text-slate-800 leading-relaxed text-base sm:text-lg font-normal mb-3">
                Reveridge is a curated collection of boutique nature escapes across Maharashtra — spanning mountains, forests, and coastlines. Five properties across four distinct destinations, each chosen for its location, its character, and its ability to deliver a genuine elevated escape to every guest.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light">
                Reveridge is not a hotel chain. It is boutique by design, personal by nature, and five-star in feeling without the formality of a traditional luxury brand. Nature is the amenity. Stillness is the luxury. Every guest leaves not just satisfied but quietly planning their return.
              </p>
            </div>

            {/* BRAND NAME ORIGIN Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>Brand Name Origin</span>
              </div>

              {/* Reve & Ridge cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 mx-auto flex items-center justify-center mb-1.5">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 block">Reve</span>
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Growth</span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 text-center">
                  <div className="w-8 h-8 rounded-xl bg-gold-50 text-gold-700 mx-auto flex items-center justify-center mb-1.5">
                    <Mountain className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-slate-900 block">Ridge</span>
                  <span className="text-xs font-semibold text-gold-700 uppercase tracking-wider">Mountain</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                Reve — growth. Ridge — mountain. Together they represent what Reveridge stands for: <strong>elevation in every sense</strong>. A higher standard of experience, a deeper connection with the surroundings, and a stay that stays with you.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to="/destinations"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Explore All 5 Destinations
              </Button>

              <Button
                to="/about"
                variant="outline"
                size="md"
              >
                Our Story &amp; Ethos
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
