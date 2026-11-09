import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  Check, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Users, 
  Bed, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { destinations, destinationsSummary, brandDetails } from '../data/destinations';
import DestinationIcon from '../components/common/DestinationIcons';
import BrandPhilosophy from '../components/common/BrandPhilosophy';
import { siteConfig } from '../data/siteConfig';
import WhatsAppIcon from '../components/common/WhatsAppIcon';

/**
 * Modern Interactive Image Slider for each destination card using Framer Motion
 */
function DestinationCardSlider({ prop }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = prop.images && prop.images.length > 0 ? prop.images : [];

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  return (
    <Link to={`/destinations/${prop.id}`} className="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px] overflow-hidden group block bg-forest-950">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeIdx}
          src={images[activeIdx] || images[0]}
          alt={`${prop.name} photo ${activeIdx + 1}`}
          initial={{ opacity: 0.4, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

      {/* Property Code Badge */}
      <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-md text-gold-400 border border-gold-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
        {prop.propertyCode}
      </div>

      {/* BHK or Resort Badge */}
      <div className="absolute top-4 right-4 z-10">
        {prop.bhk ? (
          <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {prop.bhk}
          </span>
        ) : (
          <span className="bg-forest-900/90 backdrop-blur-md border border-teal-500/40 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Resort
          </span>
        )}
      </div>

      {/* Prev / Next Controls on Card */}
      {images.length > 1 && (
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all pointer-events-auto transform hover:scale-110 shadow-lg border border-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all pointer-events-auto transform hover:scale-110 shadow-lg border border-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Bottom info on image: Rating & Slide Counter */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white z-10">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
          <span className="font-bold">{prop.rating}</span>
          <span className="text-white/70">({prop.reviewCount})</span>
        </div>

        {images.length > 1 && (
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-cream-200">
            <span>{activeIdx + 1}</span>
            <span>/</span>
            <span>{images.length}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Background slides composed from all 5 destinations
  const heroSlides = destinations.map((dest) => ({
    id: dest.id,
    image: dest.images[0],
    name: dest.name,
    shortName: dest.shortName,
    propertyCode: dest.propertyCode,
    location: dest.location,
    badge: dest.badge,
    type: dest.type
  }));

  // Auto slide background every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const categories = [
    { id: 'all', label: 'All 5 Properties' },
    { id: 'Resort & Spa', label: 'Resorts & Spa' },
    { id: 'Private Luxury Villa', label: 'Private Villas (4 & 6 BHK)' },
    { id: 'Heritage Cottage', label: 'Heritage Cottages' }
  ];

  const filteredDestinations = activeFilter === 'all'
    ? destinations
    : destinations.filter(d => d.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our 5 Destinations &amp; Luxury Stays | Reveridge Hospitality</title>
        <meta 
          name="description" 
          content="Explore all 5 Reveridge properties across Maharashtra: Mahabaleshwar Resort & Spa, Mahabaleshwar 6 BHK Villa, Lingmala 4 BHK Villa, Matheran 3 BHK Cottage, and Dapoli Coastal Resort & Spa." 
        />
      </Helmet>

      {/* Hero Header with Framer Motion Sliding Background */}
      <section 
        className="pt-36 pb-24 bg-forest-950 text-cream-100 relative text-center overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Animated Background Slider using Framer Motion */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={heroSlides[currentSlide].id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
          </AnimatePresence>

          {/* Cinematic Luxury Dark Overlays for maximum legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/55" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/70 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-md">
            <Compass className="w-4 h-4 text-teal-400" />
            <span>Reveridge Hospitality Collection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
            Our Handpicked Destinations
          </h1>

          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            From misty Sahyadri ridges and roaring waterfalls to tranquil automobile-free hill stations and sun-drenched Konkan beaches.
          </p>

          {/* Quick Counter Strip */}
          <div className="mt-8 inline-flex items-center gap-4 sm:gap-8 bg-forest-900/90 border border-gold-500/30 px-6 py-3 rounded-2xl backdrop-blur-md text-xs sm:text-sm shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-white font-bold">5 Distinct Properties</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-cream-200">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Mahabaleshwar • Matheran • Dapoli</span>
            </div>
          </div>

          {/* Modern Slide Controls & Active Property Indicator */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Prev/Next arrows & dots */}
            <div className="flex items-center gap-2 bg-forest-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/30 shadow-md">
              <button
                onClick={handlePrevSlide}
                className="p-1 rounded-full text-cream-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous destination background"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {heroSlides.map((slide, sIdx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(sIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === sIdx ? 'w-6 bg-gold-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Slide to ${slide.name}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                className="p-1 rounded-full text-cream-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next destination background"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Link Tag for Currently Shown Destination */}
            <Link
              to={`/destinations/${heroSlides[currentSlide].id}`}
              className="group inline-flex items-center gap-2 text-xs text-cream-100 bg-forest-900/85 hover:bg-forest-900 backdrop-blur-md border border-gold-500/40 px-4 py-2 rounded-full transition-all shadow-md"
            >
              <span className="text-gold-400 font-bold uppercase tracking-wider">{heroSlides[currentSlide].propertyCode}:</span>
              <span className="font-semibold text-white group-hover:text-gold-300 transition-colors">{heroSlides[currentSlide].shortName}</span>
              <span className="text-cream-300/70 text-[11px] hidden md:inline">• {heroSlides[currentSlide].badge}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform ml-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Reveridge Is & Brand Name Origin */}
      <BrandPhilosophy className="py-14 sm:py-20 border-b border-forest-900" />

      {/* Main Content Area */}
      <section className="py-14 sm:py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-forest-800 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-forest-50 hover:text-forest-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Destination Cards List */}
          <div className="space-y-12">
            {filteredDestinations.map((prop, idx) => (
              <motion.div
                key={prop.id}
                id={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft-lg border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 hover:border-gold-500/50 transition-all duration-300"
              >
                {/* Left/Top: Interactive Photo Gallery Carousel using Framer Motion */}
                <DestinationCardSlider prop={prop} />

                {/* Right: Property Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                            {prop.type}
                          </span>
                          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-gold-500" />
                            {prop.location}
                          </span>
                        </div>
                        <Link to={`/destinations/${prop.id}`} className="hover:text-forest-800 transition-colors">
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 tracking-tight leading-tight">
                            {prop.name}
                          </h2>
                        </Link>
                      </div>

                      {/* Line-art Icon Container */}
                      <div className="w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] max-w-[3.5rem] max-h-[3.5rem] rounded-2xl bg-slate-50 border border-slate-200 p-2.5 shrink-0 hidden sm:flex items-center justify-center">
                        <DestinationIcon type={prop.iconType} className="w-full h-full object-contain" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="mt-3 text-sm text-slate-600 font-light leading-relaxed">
                      {prop.tagline}
                    </p>

                    {/* Quick Specs Strip */}
                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-cream-50 p-3.5 rounded-2xl border border-slate-200/80 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Accommodation</span>
                        <span className="font-semibold text-forest-950">
                          {prop.totalRooms || prop.size}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Starting Rate</span>
                        <span className="font-semibold text-gold-700">
                          ₹{prop.startingPrice.toLocaleString()} / night
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Signature Vibe</span>
                        <span className="font-semibold text-teal-700 truncate block">
                          {prop.badge}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Rating</span>
                        <span className="font-semibold text-amber-600 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-500" />
                          <span>{prop.rating}</span>
                        </span>
                      </div>
                    </div>

                    {/* Amenities Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {prop.amenities.map((amenity, aIdx) => (
                        <span 
                          key={aIdx} 
                          className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Starting tariff</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                          ₹{prop.startingPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 font-normal">/ night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about booking ${prop.name}. Please share tariffs and availability.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>

                      <Link
                        to={`/destinations/${prop.id}`}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <span>View Property Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/booking?property=${prop.id}`}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 text-xs font-bold transition-colors shadow-sm"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Need Assistance Bar */}
          <div className="mt-16 bg-forest-900 text-cream-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-gold-500/20">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gold-400 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Reservation Concierge</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Need Help Selecting Your Ideal Escape?
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
                Speak directly with our reservation managers for customized wedding packages, whole villa buyouts, or seasonal promotional tariffs.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest-800 hover:bg-forest-950 border border-gold-500/40 text-cream-100 text-xs font-bold transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Reveridge! I need guidance selecting the best property for my dates and party size.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat Concierge</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

