import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';

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
  const { siteConfig } = useData();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const { t } = useLanguage();

  return (
    <div className="relative h-screen min-h-[100dvh] w-full flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-forest-950">
      
      {/* Background Media Container - Full Screen Cinematic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Fallback Static Poster */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${siteConfig.media?.heroPoster || heroSlides[0].image})` }}
        />

        {/* Video Background (Always Muted, Full Screen Cover) */}
        <motion.div
          key="hero-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <video
            ref={videoRef}
            src={siteConfig.media?.heroVideo}
            poster={siteConfig.media?.heroPoster || heroSlides[0].image}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
          />
        </motion.div>

        {/* Cinematic Modern Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-forest-950/20 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Hero Center Content - Perfectly Centered in Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center justify-center">
        
        {/* Luxury Brand Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span>Reveridge Hospitality</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] max-w-5xl mx-auto drop-shadow-xl"
        >
          {t.tagline}
        </motion.h1>

        {/* Subtitle / Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-cream-100 font-medium text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase drop-shadow-md max-w-2xl"
        >
          Boutique Nature Escapes Across Maharashtra
        </motion.div>

      </div>

      {/* Elegant Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 pb-6 flex flex-col items-center justify-center pointer-events-none"
      >
        <span className="text-[10px] tracking-widest uppercase text-cream-300/80 mb-2 font-medium drop-shadow-sm">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1 backdrop-blur-xs">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>

    </div>
  );
}
