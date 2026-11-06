import React, { useState, useRef, useEffect } from 'react';
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

  // Ensure video autoplays muted seamlessly on iOS and Android mobile devices
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Browser policy blocked silent autoplay; fallback poster remains active
          });
      }
    }
  }, []);

  const scrollToAvailability = () => {
    const el = document.getElementById('check-availability');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen h-[100dvh] min-h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-5 sm:pb-7 overflow-hidden bg-forest-950">
      
      {/* Background Media Container - True Full-Screen Cinematic Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Fallback Static Poster (Shown instantly while video loads) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${siteConfig.media?.heroPoster || heroSlides[0].image})` }}
        />

        {/* Video Background (Always Muted, Full Viewport Cover on all devices) */}
        <motion.div
          key="hero-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0.6 }}
          transition={{ duration: 1.2 }}
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
            webkit-playsinline="true"
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
            onPlay={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
          />
        </motion.div>

        {/* Cinematic Modern Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-forest-950/25 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Hero Center Content - Perfectly Centered in Viewport */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center justify-center">
        
        {/* Luxury Brand Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-gold-500/35 text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4 shadow-xl"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span>Reveridge Hospitality</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.06] max-w-4xl mx-auto drop-shadow-2xl"
        >
          {t.tagline}
        </motion.h1>

        {/* Subtitle / Brand Tag */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 sm:mt-4 text-cream-100 font-medium text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase drop-shadow-md max-w-2xl px-2"
        >
          Boutique Nature Escapes Across Maharashtra
        </motion.p>

      </div>

      {/* Elegant Luxury Scroll Indicator (At bottom of 100vh hero) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 pb-2 sm:pb-3 flex flex-col items-center justify-center"
      >
        <button
          type="button"
          onClick={scrollToAvailability}
          className="flex flex-col items-center group focus:outline-none cursor-pointer"
          aria-label="Scroll down to check availability"
        >
          <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-cream-200/85 mb-1.5 font-medium drop-shadow-sm group-hover:text-gold-400 transition-colors">
            Scroll to Explore
          </span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/40 group-hover:border-gold-400 flex items-start justify-center p-0.5 sm:p-1 backdrop-blur-xs transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-gold-400"
            />
          </div>
        </button>
      </motion.div>

    </div>
  );
}
