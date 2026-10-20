import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Star, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import AvailabilityBar from './AvailabilityBar';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    title: "Escape to the Clouds",
    subtitle: "A Peaceful Hill-Station Haven in Mahabaleshwar–Panchgani"
  },
  {
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=85",
    title: "Refreshing Hillside Swimming Pool",
    subtitle: "Crystal mountain waters framed by tranquil Sahyadri forests"
  },
  {
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85",
    title: "Cozy Stays Starting at ₹1,897",
    subtitle: "Deluxe comfort with complimentary breakfast & warm hospitality"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-forest-950">
      
      {/* Background Slideshow with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Ambient Overlays: Deep Forest Gradient + Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
      </div>

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center my-auto">
        
        {/* Rating & Location Overline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full text-xs sm:text-sm text-cream-100 mb-6 shadow-lg"
        >
          <span className="flex items-center gap-1 text-gold-400 font-bold">
            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            <span>{siteConfig.rating} Google Rating</span>
          </span>
          <span className="text-white/40">•</span>
          <span className="text-cream-200">Metgutad, Panchgani - Mahabaleshwar Rd</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden sm:inline text-gold-300 font-semibold">From ₹1,897/night</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-md"
        >
          {t.tagline}
        </motion.h1>

        {/* Marathi / Hindi subtitle if English, or native tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 text-gold-400 font-medium text-sm sm:text-base tracking-widest uppercase"
        >
          {siteConfig.nativeName} • Metgutad
        </motion.div>

        {/* Hero Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-cream-200/90 max-w-2xl leading-relaxed font-light drop-shadow-sm"
        >
          {t.heroDesc}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            to="/booking"
            variant="gold"
            size="lg"
            icon={Calendar}
            className="shadow-gold-glow/50 text-forest-950 font-bold px-8 py-4"
          >
            {t.bookNow}
          </Button>

          <Button
            href={`tel:${siteConfig.contact.phone}`}
            variant="outlineWhite"
            size="lg"
            icon={Phone}
            iconPosition="left"
            className="px-8 py-4"
          >
            {t.callNow} ({siteConfig.contact.phoneDisplay})
          </Button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Floating Availability Bar at Bottom of Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-20 px-4 sm:px-6 lg:px-8 mt-6"
      >
        <AvailabilityBar />
      </motion.div>

    </div>
  );
}
