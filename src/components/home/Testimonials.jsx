import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import { testimonials, ratingOverview } from '../../data/testimonials';
import SectionTitle from '../common/SectionTitle';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          subtitle="Real Guest Stories"
          title="Loved by Nature Seekers & Families"
          description="Rated 4.3 Stars on Google across 123 verified traveler reviews from Mumbai, Pune, and beyond."
        />

        {/* Rating summary strip */}
        <div className="max-w-4xl mx-auto mb-16 bg-cream-100 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            
            {/* Overall Score */}
            <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold text-forest-950">4.3</span>
                <span className="text-slate-500 font-medium">/ 5.0</span>
              </div>
              <div className="flex items-center text-gold-500 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Based on 123 verified Google reviews
              </p>
            </div>

            {/* Category breakdown bars */}
            <div className="md:col-span-2 space-y-2.5">
              {ratingOverview.categories.slice(0, 3).map((cat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <span className="w-36 text-slate-700 font-medium truncate text-left">{cat.label}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-forest-800 h-full rounded-full"
                      style={{ width: `${cat.percent}%` }}
                    />
                  </div>
                  <span className="w-8 font-bold text-forest-900 text-right">{cat.rating}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Testimonials Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-cream-200 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-soft relative"
            >
              <Quote className="w-12 h-12 text-forest-800/15 absolute top-6 right-8" />

              <div className="flex items-center gap-1 text-gold-500 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-3">
                "{current.title}"
              </h4>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6 italic">
                "{current.review}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-forest-800/30"
                  />
                  <div>
                    <h5 className="font-serif text-base font-bold text-forest-950">
                      {current.name}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{current.city}</span>
                      <span>•</span>
                      <span>{current.stayType}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Guest</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-forest-800' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                className="p-3 rounded-full bg-white hover:bg-forest-800 hover:text-white text-forest-900 border border-slate-200 shadow-sm transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-white hover:bg-forest-800 hover:text-white text-forest-900 border border-slate-200 shadow-sm transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Read all reviews link */}
        <div className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-forest-800 hover:text-forest-950 underline underline-offset-8 transition-colors group"
          >
            <span>Read All 123 Guest Reviews &amp; Ratings</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
