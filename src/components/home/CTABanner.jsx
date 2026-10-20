import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-24 bg-forest-950 relative overflow-hidden text-cream-100">
      
      {/* Background imagery with dark forest gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-900/90 to-forest-950" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 border border-gold-400/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Special Direct Booking Perks</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to Unwind in the Sahyadri Clouds?
        </h2>

        <p className="text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
          Book directly with us for best guaranteed rates, flexible cancellation, early check-in assistance, and complimentary wholesome breakfast. Double rooms start from just ₹1,897 / night.
        </p>

        {/* Perks checklist */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-cream-300">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold-400" />
            <span>Zero Booking Fees</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold-400" />
            <span>Complimentary Breakfast</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold-400" />
            <span>Pet Friendly Grounds</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold-400" />
            <span>Free High Speed Wi-Fi</span>
          </span>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/booking"
            variant="gold"
            size="lg"
            icon={Calendar}
            className="shadow-gold-glow/50 px-8 py-4 text-forest-950 font-bold"
          >
            Check Instant Availability
          </Button>

          <Button
            href={`tel:${siteConfig.contact.phone}`}
            variant="outlineWhite"
            size="lg"
            icon={Phone}
            iconPosition="left"
            className="px-8 py-4"
          >
            Call {siteConfig.contact.phoneDisplay}
          </Button>
        </div>

      </div>
    </section>
  );
}
