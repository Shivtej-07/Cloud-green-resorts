import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mountain, Sprout, Compass, ArrowUpRight, Heart, Feather } from 'lucide-react';
import { brandDetails } from '../../data/destinations';

export default function BrandPhilosophy({ className = "" }) {
  return (
    <section className={`py-16 sm:py-24 bg-forest-950 text-cream-100 relative overflow-hidden ${className}`}>
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gold-500/50 shadow-xl mx-auto mb-5 bg-forest-950">
            <img src="/reveridge-logo.jpg" alt="Reveridge Logo" className="w-full h-full object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Brand Philosophy &amp; Ethos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            What Reveridge Is
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
        </div>

        {/* 2-Column Grid: What Reveridge Is & Brand Name Origin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: What Reveridge Is (7 cols) */}
          <div className="lg:col-span-7 bg-forest-900/70 border border-forest-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md flex flex-col justify-between shadow-soft-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-teal-400" />
                <span>The Reveridge Collection</span>
              </div>

              <p className="text-base sm:text-lg text-cream-100 leading-relaxed font-light">
                {brandDetails.whatIs.paragraph1}
              </p>

              <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed font-light">
                {brandDetails.whatIs.paragraph2}
              </p>
            </div>

            {/* Signature Quote Banner */}
            <div className="mt-8 pt-6 border-t border-forest-800/80 bg-forest-950/60 rounded-2xl p-5 border border-gold-500/20">
              <div className="flex items-start gap-3">
                <Feather className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                <div>
                  <p className="font-serif italic text-base sm:text-lg text-gold-300 leading-snug">
                    "{brandDetails.natureQuote}"
                  </p>
                  <p className="text-xs text-cream-300/70 uppercase tracking-widest mt-1.5 font-medium">
                    The Reveridge Promise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Name Origin (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-forest-900/90 to-forest-950 border border-gold-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md flex flex-col justify-between shadow-soft-xl">
            <div>
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Brand Name Origin</span>
              </div>

              {/* Etymology Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Reve */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 mx-auto flex items-center justify-center mb-2">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white block">
                    {brandDetails.nameOrigin.prefix}
                  </span>
                  <span className="text-xs text-teal-300 font-semibold uppercase tracking-wider block mt-0.5">
                    {brandDetails.nameOrigin.prefixMeaning}
                  </span>
                  <span className="text-[11px] text-cream-300/70 block mt-1">
                    Renewal &amp; flourishing
                  </span>
                </div>

                {/* Ridge */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-300 mx-auto flex items-center justify-center mb-2">
                    <Mountain className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white block">
                    {brandDetails.nameOrigin.suffix}
                  </span>
                  <span className="text-xs text-gold-300 font-semibold uppercase tracking-wider block mt-0.5">
                    {brandDetails.nameOrigin.suffixMeaning}
                  </span>
                  <span className="text-[11px] text-cream-300/70 block mt-1">
                    Heights &amp; sanctuary
                  </span>
                </div>
              </div>

              {/* Origin Story */}
              <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-light">
                {brandDetails.nameOrigin.description}
              </p>
            </div>

            {/* Elevation in Every Sense Banner */}
            <div className="mt-8 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">
                    Brand Essence
                  </span>
                  <span className="font-serif text-base font-bold text-white">
                    {brandDetails.tagline}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-cream-300/60 block">
                    Collection
                  </span>
                  <span className="text-xs font-bold text-teal-300">
                    5 Stays • 4 Locations
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

