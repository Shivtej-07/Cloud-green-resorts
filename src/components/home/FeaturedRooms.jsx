import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FeaturedRooms() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Exactly the cards matching the user's reference screenshots with steady, dedicated images
  const hospitalityCards = [
    {
      id: 'special-packages',
      tag: 'EXCLUSIVE OFFERS',
      title: 'Special Stay Packages',
      description: 'Explore seasonal offers, family packages, romantic getaways, and exclusive deals designed for memorable luxury experiences at every stay.',
      linkText: 'EXPLORE ACTIVITIES',
      link: '/destinations',
      badge: 'Curated Offers',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'luxury-stay',
      tag: 'PREMIUM COMFORT',
      title: 'Luxury Stay Experience',
      description: 'Enjoy elegant rooms, scenic views, premium amenities, and thoughtfully designed spaces for relaxation, family vacations, and memorable escapes.',
      linkText: 'EXPLORE LOCATION',
      link: '/destinations',
      badge: 'Boutique Stays',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'exceptional-hospitality',
      tag: 'PERSONALIZED SERVICE',
      title: 'Exceptional Hospitality',
      description: 'Experience warm service, 24/7 guest support, curated stays, and seamless hospitality designed to make every visit comfortable and unforgettable.',
      linkText: 'VIEW FACILITIES',
      link: '/about',
      badge: 'Personalized Care',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'relaxation-retreats',
      tag: 'WELLNESS & LEISURE',
      title: 'Relaxation & Retreats',
      description: 'Rejuvenate your senses with holistic spa rituals, herbal therapies, steam, sauna, and restorative wellness escapes in tranquil nature.',
      linkText: 'EXPLORE ACTIVITIES',
      link: '/spa',
      badge: 'Spa & Wellness',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'weddings-gatherings',
      tag: 'CELEBRATIONS & EVENTS',
      title: 'Weddings & Gatherings',
      description: 'Host destination weddings, family celebrations, corporate events, and special occasions in elegant spaces with unforgettable scenic backdrops.',
      linkText: 'CHECK OUT',
      link: '/destinations/dapoli',
      badge: 'Up to 120 Guests',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'nature-luxury-views',
      tag: 'SCENIC DESTINATIONS',
      title: 'Nature & Luxury Views',
      description: 'Immerse yourself in breathtaking mountain mist, lush Sahyadri valleys, and elevated Arabian Sea horizons from sunrise to sunset.',
      linkText: 'EXPLORE DESTINATIONS',
      link: '/destinations',
      badge: 'Scenic Views',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'cafe-coffee-shop',
      tag: 'ARTISANAL DINING',
      title: 'The Reveridge Café & Coffee Shop',
      description: 'Single-origin Arabica roasts, scenic mountain mist decks, freshly baked viennoiserie, and farm-fresh Mahabaleshwar strawberries.',
      linkText: 'EXPLORE CAFÉ',
      link: '/destinations/mahabaleshwar',
      badge: 'Open Daily 7:30 AM',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const totalCards = hospitalityCards.length;
  const gap = 24; // gap-6 = 24px

  // Compute item width and visible items count based on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const count = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
        setVisibleCount(count);
        const cardW = (width - (count - 1) * gap) / count;
        setItemWidth(cardW);
      }
    };

    updateDimensions();
    const timer = setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Seamless forward loop using cloned card track
  const extendedCards = [...hospitalityCards, ...hospitalityCards];

  // Auto-advance cards continuously every 3.5 seconds; pauses only when hovering a specific card to read it
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle seamless infinite loop reset
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;

    if (currentSlide >= totalCards) {
      setIsTransitioning(false);
      setCurrentSlide(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
      {/* Subtle Warm Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching Exact Reference Design */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-400/50 text-forest-950 text-[11px] font-semibold uppercase tracking-widest mb-3.5 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Reveridge Hospitality Collection</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-forest-950 tracking-tight leading-tight"
          >
            Discover Our Hospitality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3.5 text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
          >
            From misty mountain retreats and artisanal coffee roasts to private pool villas and wellness sanctuaries — experience handcrafted boutique escapes across Maharashtra.
          </motion.p>
        </div>

        {/* Automatic Sliding Carousel Track — Auto-Rotates with Infinite Seamless Motion */}
        <div ref={containerRef} className="overflow-hidden relative w-full">
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${currentSlide * (itemWidth + gap)}px)`,
              transition: isTransitioning ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
            }}
          >
            {extendedCards.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                style={{
                  width: itemWidth ? `${itemWidth}px` : 'auto',
                  flexShrink: 0
                }}
              >
                <Link
                  to={card.link}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 sm:p-7 cursor-pointer block border border-slate-200/80 hover:border-gold-500/80"
                >
                  {/* Dedicated Constant Photography with Smooth Hover Zoom */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Multi-Stop Dark Gradient Overlay: subtle at rest, deepens on hover for crisp legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/75 group-hover:to-black/30 transition-all duration-500 z-1" />

                  {/* Top Floating Badge Bar */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-300 border border-gold-500/40 shadow-xs">
                      {card.badge}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-gold-500 group-hover:text-forest-950 text-white flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 text-white text-left transition-transform duration-500">
                    {/* Bold Uppercase Category Tag */}
                    <span className="text-[11px] font-bold tracking-widest uppercase text-gold-400 group-hover:text-gold-300 block mb-1 drop-shadow-sm transition-colors">
                      {card.tag}
                    </span>

                    {/* Elegant Serif Title — Always visible */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight drop-shadow-md group-hover:text-gold-200 transition-colors">
                      {card.title}
                    </h3>

                    {/* Hidden by Default — Expands & Reveals Information on Hover */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {/* Paragraph Description */}
                      <p className="text-white/90 text-xs sm:text-sm font-light leading-relaxed mt-2.5 mb-3.5 line-clamp-3">
                        {card.description}
                      </p>

                      {/* Underlined Action Link */}
                      <div className="pt-1">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-gold-300 underline underline-offset-8 decoration-gold-400/80 group-hover:decoration-gold-300 group-hover:text-white transition-all inline-flex items-center gap-1.5">
                          <span>{card.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5 inline group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Indicator Dots Matching Reference Design — Click to Jump */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
          {hospitalityCards.map((_, dotIdx) => {
            const activeIndex = currentSlide % totalCards;
            return (
              <button
                key={dotIdx}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(dotIdx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === dotIdx
                    ? 'w-7 bg-forest-900 shadow-xs'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
