import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Star,
  Calendar,
  Clock,
  Phone,
  Car,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  Sparkles,
  Eye,
  Coffee,
  Heart,
  Utensils,
  Waves,
  Wifi,
  ShieldCheck,
  Flame,
  Mountain,
  Users,
  Bed,
  Maximize2,
  Plane,
  Navigation,
  ArrowRight,
  Layers,
  Flower2
} from 'lucide-react';
import { destinations, getPropertyById } from '../data/destinations';
import { siteConfig } from '../data/siteConfig';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import Button from '../components/common/Button';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('withBreakfast'); // roomOnly, withBreakfast, bLd, allMeals
  const [selectedCategoryModal, setSelectedCategoryModal] = useState(null);

  // Look up property by id or fallback to flagship
  const property = getPropertyById(id) || destinations[0];

  // Scroll to top when property changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePhotoIdx(0);
  }, [property.id]);

  const images = property?.images?.length ? property.images : [];

  // Continuous background image auto-play with Framer Motion (5s interval)
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about staying at ${property.name}. Please share tariffs and availability.`)}`;
  const callUrl = `tel:${siteConfig.contact.phone}`;

  // Other 4 properties for bottom cross-links
  const otherProperties = destinations.filter(p => p.id !== property.id);

  const planLabels = [
    { key: 'roomOnly', label: 'Room Only', sub: 'Standard Tariff' },
    { key: 'withBreakfast', label: 'With Breakfast', sub: 'Popular Choice', recommended: true },
    { key: 'bLd', label: 'B + L/D', sub: 'Breakfast + Lunch or Dinner' },
    { key: 'allMeals', label: 'All Meals', sub: 'Full Board (B+L+D)' }
  ];

  return (
    <>
      <Helmet>
        <title>{property.name} | Reveridge Boutique Escapes</title>
        <meta name="description" content={`${property.name} — ${property.subtitle}. ${property.tagline}. Located in ${property.location}. Explore rooms, tariffs, amenities and packages.`} />
        <link rel="canonical" href={`https://reveridge.com/destinations/${property.id}`} />
      </Helmet>

      {/* Full-Screen 100dvh Editorial Cinematic Hero (Unobstructed Center Photography + Corner-Balanced Framing) */}
      <section 
        className="relative min-h-[100dvh] lg:h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-7 sm:pb-10 overflow-hidden bg-forest-950 text-white"
      >
        {/* Full-Bleed Background Image Slider using Framer Motion */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="sync">
            <motion.div
              key={`${property.id}-${activePhotoIdx}`}
              initial={{ opacity: 0, scale: 1.07 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[activePhotoIdx] || images[0]})` }}
            />
          </AnimatePresence>

          {/* Subtle Perimeter Scrims — Leaves Center Photography Open & Vibrant */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-forest-950/95 via-forest-950/65 to-transparent" />
        </div>

        {/* Upper Zone: Minimal Top Breadcrumb & Rating Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={`top-${property.id}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-between gap-3"
          >
            {/* Left: Breadcrumbs + Compact Property Identity Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-cream-200/85 font-medium bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-cream-300/60" />
                <Link to="/destinations" className="hover:text-gold-300 transition-colors">Destinations</Link>
                <ChevronRight className="w-3 h-3 text-cream-300/60" />
                <span className="text-gold-400 font-semibold truncate">{property.shortName}</span>
              </nav>

              <span className="px-3 py-1.5 rounded-full bg-forest-900/85 text-gold-400 border border-gold-500/35 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase backdrop-blur-md">
                {property.propertyCode}
              </span>
              <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-black/35 border border-gold-400/35 text-cream-100 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
                ★ {property.starEquivalent || "5 Star Boutique"}
              </span>
              {property.bhk && (
                <span className="px-3 py-1.5 rounded-full bg-gold-500 text-forest-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  {property.bhk}
                </span>
              )}
              {property.badge && (
                <span className="hidden md:inline-flex px-3 py-1.5 rounded-full bg-teal-900/65 border border-teal-400/35 text-teal-200 text-[11px] font-medium backdrop-blur-md">
                  {property.badge}
                </span>
              )}
            </div>

            {/* Right: Verified Guest Rating Pill */}
            <div className="inline-flex items-center gap-1.5 text-xs text-cream-100 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{property.rating}</span>
              <span className="text-cream-300/80 hidden sm:inline">({property.reviewCount} verified reviews)</span>
              <span className="text-cream-300/80 sm:hidden">({property.reviewCount})</span>
            </div>
          </motion.div>
        </div>

        {/* Lower Zone: Editorial Two-Corner Typography & Actions Arrangement */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-12 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">

            {/* Bottom-Left Column: Location Eyebrow + Serif Display Title */}
            <motion.div
              key={`bottom-left-${property.id}`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Location & Elevation Eyebrow */}
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 mb-3">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{property.location}</span>
                {property.altitude && (
                  <span className="hidden sm:inline text-cream-200/75 font-normal normal-case tracking-normal">
                    • {property.altitude}
                  </span>
                )}
              </div>

              {/* Bold Editorial Serif Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl xl:text-[3.65rem] font-bold text-white tracking-tight leading-[1.06] drop-shadow-2xl max-w-2xl">
                {property.name}
              </h1>
            </motion.div>

            {/* Bottom-Right Column: Narrative Description + Editorial Tariff & Luxury CTA Pill Row */}
            <motion.div
              key={`bottom-right-${property.id}`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col items-start lg:items-end lg:text-right"
            >
              <p className="text-sm sm:text-[15px] text-cream-100/90 leading-relaxed font-light max-w-md drop-shadow-sm">
                {property.tagline}
              </p>

              {/* Subtle Divider + Tariff Readout */}
              <div className="mt-4 pt-3.5 border-t border-white/15 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-400 block">
                    Starting Tariff
                  </span>
                  <div className="flex items-baseline gap-1.5 lg:justify-end mt-0.5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-white leading-none">
                      ₹{property.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-cream-200/80 font-normal">/ night</span>
                  </div>
                  <span className="text-[11px] text-cream-300/75 block mt-1">
                    Taxes applicable • Best rate direct
                  </span>
                </div>

                {/* High-Contrast Pill CTAs */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/12 hover:bg-[#25D366] text-white backdrop-blur-md border border-white/25 hover:border-[#25D366] text-xs font-semibold shadow-lg transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.a>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to={`/booking?property=${property.id}`}
                      className="inline-flex items-center gap-2.5 pl-5 pr-2 py-1.5 rounded-full bg-cream-100 hover:bg-white text-forest-950 text-xs sm:text-sm font-bold shadow-xl transition-colors group"
                    >
                      <span>Check Dates</span>
                      <span className="w-7 h-7 rounded-full bg-forest-950 text-gold-400 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div id="property-content" className="bg-cream-100 min-h-screen py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left 8 Cols: Overview Specs, Description, Rooms & Pricing, Facilities, Packages, Experiences */}
            <div className="lg:col-span-8 space-y-10">

              {/* SECTION 1: PROPERTY OVERVIEW SPECS (Verbatim) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                      Property Overview
                    </h2>
                    <p className="text-xs text-slate-500">Key specifications and essentials</p>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Property Type</span>
                      <span className="font-bold text-slate-800">{property.type}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Location</span>
                      <span className="font-bold text-slate-800">{property.location}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                    <Bed className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Size / Rooms</span>
                      <span className="font-bold text-slate-800">{property.size || property.totalRooms}</span>
                    </div>
                  </div>

                  {property.capacity && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Users className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Capacity</span>
                        <span className="font-bold text-slate-800">{property.capacity}</span>
                      </div>
                    </div>
                  )}

                  {property.rateText && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Rate</span>
                        <span className="font-bold text-forest-900">{property.rateText}</span>
                      </div>
                    </div>
                  )}

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                    <Star className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Star Equivalent</span>
                      <span className="font-bold text-slate-800">{property.starEquivalent}</span>
                    </div>
                  </div>

                  {property.altitude && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Mountain className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Altitude</span>
                        <span className="font-bold text-slate-800">{property.altitude}</span>
                      </div>
                    </div>
                  )}

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Check-In / Check-Out</span>
                      <span className="font-bold text-slate-800">{property.checkIn} / {property.checkOut}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                    <Car className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Parking</span>
                      <span className="font-bold text-slate-800">{property.parking}</span>
                    </div>
                  </div>

                  {property.lift && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <ArrowUpRight className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Lift / Elevator</span>
                        <span className="font-bold text-slate-800">{property.lift}</span>
                      </div>
                    </div>
                  )}

                  {property.minimumStay && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Minimum Stay</span>
                        <span className="font-bold text-slate-800">{property.minimumStay}</span>
                      </div>
                    </div>
                  )}

                  {property.view && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Eye className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">View</span>
                        <span className="font-bold text-slate-800">{property.view}</span>
                      </div>
                    </div>
                  )}

                  {property.chef && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3 sm:col-span-2">
                      <Utensils className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Dedicated Chef</span>
                        <span className="font-bold text-slate-800">{property.chef}</span>
                      </div>
                    </div>
                  )}

                  {property.housekeeping && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Housekeeping</span>
                        <span className="font-bold text-slate-800">{property.housekeeping}</span>
                      </div>
                    </div>
                  )}

                  {property.pool && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Waves className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Pool</span>
                        <span className="font-bold text-slate-800">{property.pool}</span>
                      </div>
                    </div>
                  )}

                  {property.specialNote && (
                    <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300/80 flex items-start gap-3 sm:col-span-2">
                      <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">Special Note</span>
                        <span className="font-medium text-amber-950 text-xs sm:text-sm">{property.specialNote}</span>
                      </div>
                    </div>
                  )}

                  {property.eventCapacity && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3">
                      <Users className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Event Capacity</span>
                        <span className="font-bold text-slate-800">{property.eventCapacity}</span>
                      </div>
                    </div>
                  )}

                  {property.bestKnownFor && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3 sm:col-span-2">
                      <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Best Known For</span>
                        <span className="font-bold text-forest-900">{property.bestKnownFor}</span>
                      </div>
                    </div>
                  )}

                  {property.includes && (
                    <div className="p-3.5 rounded-2xl bg-cream-50 border border-slate-200/70 flex items-start gap-3 sm:col-span-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">Tariff Includes</span>
                        <span className="font-bold text-emerald-900">{property.includes}</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Distances Sub-grid */}
                {property.distances && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-3 flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-forest-800" />
                      <span>Road Distances &amp; Connectivity</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-medium">From Pune</span>
                        <span className="font-semibold text-slate-800">{property.distances.pune}</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-medium">From Mumbai</span>
                        <span className="font-semibold text-slate-800">{property.distances.mumbai}</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px] uppercase font-medium">Nearest Airport</span>
                        <span className="font-semibold text-slate-800">{property.distances.nearestAirport}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION 2: PROPERTY DESCRIPTION */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                  <span>Property Description</span>
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                  {property.description.split('\n\n').map((para, idx) => (
                    <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-forest-900">
                      {para}
                    </p>
                  ))}
                </div>

                {/* View Details Callout Box */}
                {property.viewDetails && property.viewDetails.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h3 className="font-serif text-sm sm:text-base font-bold text-forest-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gold-500" />
                      <span>View Details</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {property.viewDetails.map((viewItem, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-forest-950/5 border border-forest-900/10 flex items-start gap-2.5">
                          <span className="text-gold-600 font-bold mt-0.5">•</span>
                          <div>
                            <strong className="text-forest-950 font-semibold">{viewItem.type}: </strong>
                            <span className="text-slate-600">{viewItem.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* IMPORTANT INFORMATION FOR LISTING */}
              {property.importantInfo && (
                <div className="bg-amber-50/90 rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-soft">
                  <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-amber-200">
                    <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg sm:text-xl font-bold text-amber-950">
                        Important Information for Listing
                      </h2>
                      <p className="text-xs text-amber-800">Vehicle-Free Eco-Sensitive Zone Guidelines</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-light">
                    {property.importantInfo}
                  </p>
                </div>
              )}

              {/* IDEAL GUEST PROFILE */}
              {property.idealGuestProfile && property.idealGuestProfile.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                  <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        Ideal Guest Profile
                      </h2>
                      <p className="text-xs text-slate-500">Who will love staying at this property</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.idealGuestProfile.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-cream-50/70 border border-slate-200/70 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 3: ROOM CATEGORIES & PRICING */}
              {property.roomCategories && property.roomCategories.length > 0 && (
                <div id="room-pricing" className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-100">
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        Room Categories &amp; Pricing
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {property.totalRooms} • All prices per room per night
                      </p>
                    </div>

                    {/* Meal Plan Pill Switcher for Quick Comparison */}
                    <div className="flex items-center gap-1 bg-cream-100 p-1 rounded-2xl overflow-x-auto max-w-full">
                      {planLabels.map((plan) => (
                        <button
                          key={plan.key}
                          type="button"
                          onClick={() => setSelectedPlan(plan.key)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${selectedPlan === plan.key
                              ? 'bg-forest-800 text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                          {plan.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Micro Disclaimer Note */}
                  <div className="mb-6 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                    <strong>Note:</strong> {property.pricingNote || "All prices per room per night. Taxes applicable. Balcony rooms have direct valley and sunset views. B + L/D = Breakfast + Lunch or Dinner (guest's choice). Panorama Suite meal plan rates are indicative — confirm with reservations team."}
                  </div>

                  {/* Room Categories Cards / Table */}
                  <div className="space-y-4">
                    {property.roomCategories.map((cat, idx) => {
                      const currentPrice = cat.pricing[selectedPlan];
                      return (
                        <div
                          key={cat.id || idx}
                          className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-gold-400/60 bg-white transition-all shadow-2xs hover:shadow-soft"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">

                            {/* Image Thumbnail */}
                            <div className="md:col-span-3">
                              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 relative">
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                {cat.roomCount && (
                                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-semibold text-white">
                                    {cat.roomCount} {cat.roomCount === 1 ? 'Suite' : 'Rooms'}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Details & Features */}
                            <div className="md:col-span-5 space-y-1.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-serif text-base sm:text-lg font-bold text-forest-950">
                                  {cat.name}
                                </h3>
                                {cat.balcony && (
                                  <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 text-[10px] font-semibold">
                                    Balcony
                                  </span>
                                )}
                                {cat.hasJacuzzi && (
                                  <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 text-[10px] font-semibold">
                                    Jacuzzi
                                  </span>
                                )}
                              </div>

                              <p className="text-xs text-gold-700 font-medium flex items-center gap-1.5">
                                <Eye className="w-3.5 h-3.5 text-gold-600" />
                                <span>{cat.view}</span>
                              </p>

                              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-500">
                                {cat.features?.slice(0, 3).map((f, fIdx) => (
                                  <span key={fIdx} className="bg-slate-100 px-2 py-0.5 rounded-md">
                                    {f}
                                  </span>
                                ))}
                              </div>

                              {cat.note && (
                                <p className="text-[10px] text-amber-700 italic pt-1">
                                  * {cat.note}
                                </p>
                              )}
                            </div>

                            {/* Pricing & CTA Column */}
                            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">

                              <div className="text-left md:text-right">
                                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                                  {planLabels.find(p => p.key === selectedPlan)?.label} Tariff
                                </span>
                                <div className="flex items-baseline gap-1">
                                  <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                                    ₹{currentPrice.toLocaleString()}
                                  </span>
                                  <span className="text-xs text-slate-500 font-normal">/ night</span>
                                </div>
                                <span className="text-[10px] text-slate-400 block">+ Applicable Taxes</span>
                              </div>

                              <div className="flex items-center gap-2 w-full md:w-auto">
                                <a
                                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about booking ${cat.name} at ${property.name} with ${planLabels.find(p => p.key === selectedPlan)?.label} plan.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-[#25D366] hover:text-white border border-emerald-200 transition-colors"
                                  title="Inquire this room on WhatsApp"
                                >
                                  <WhatsAppIcon className="w-4 h-4" />
                                </a>
                                <Button
                                  to={`/booking?property=${property.id}&room=${encodeURIComponent(cat.name)}`}
                                  variant="primary"
                                  size="sm"
                                  className="flex-1 md:flex-none text-xs font-bold py-2.5 px-4"
                                >
                                  Select Room
                                </Button>
                              </div>

                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

              {/* MODERN LUXURY SHOWCASE: COFFEE SHOP & CAFE (For Flagship Property) — Enhanced with Framer Motion */}
              {property.cafeInfo && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gradient-to-b from-white via-amber-50/30 to-white rounded-3xl p-6 sm:p-10 shadow-soft-lg border border-amber-200/70 relative overflow-hidden"
                >
                  {/* Ambient Glows */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Section Header Matching Luxury Editorial Design */}
                  <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-[11px] font-bold uppercase tracking-widest mb-3.5 shadow-2xs"
                    >
                      <Coffee className="w-3.5 h-3.5 text-amber-800" />
                      <span>{property.cafeInfo.badge || 'Artisanal Coffee & Hillside Patisserie'}</span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight leading-tight"
                    >
                      {property.cafeInfo.name}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                      {property.cafeInfo.tagline}
                    </motion.p>

                    {/* Badges / Timings Bar with Framer Motion */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-5 inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xs text-slate-600"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-amber-200/80 shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        <span className="font-semibold text-slate-800">{property.cafeInfo.timings}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-amber-200/80 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>Single-Origin Arabica &amp; Pour-Overs</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-amber-200/80 shadow-2xs">
                        <Wifi className="w-3.5 h-3.5 text-forest-700" />
                        <span>Scenic Valley Wi-Fi Lounge</span>
                      </span>
                    </motion.div>
                  </div>

                  {/* 3 Modern Luxury Vertical Photo Cards with Framer Motion — Pure Photography */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10 relative z-10">
                    {[
                      {
                        alt: 'Artisanal Espresso Bar at The Reveridge Café',
                        image: property.cafeInfo.images[0] || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80'
                      },
                      {
                        alt: 'Mountain Mist Valley Deck Lounge at The Reveridge Café',
                        image: property.cafeInfo.images[1] || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80'
                      },
                      {
                        alt: 'Strawberry Patisserie & Coffee at The Reveridge Café',
                        image: property.cafeInfo.images[2] || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80'
                      }
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.12 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg hover:shadow-2xl transition-all duration-500 border border-amber-200/60 hover:border-amber-400"
                      >
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* 6 Café Highlights / Features Grid with Motion Hover */}
                  {property.cafeInfo.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 relative z-10">
                      {property.cafeInfo.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.06 }}
                          whileHover={{ y: -3, transition: { duration: 0.2 } }}
                          className="p-3.5 rounded-2xl bg-white/95 border border-amber-200/70 shadow-2xs hover:border-amber-400 hover:shadow-soft transition-all flex items-start gap-3"
                        >
                          <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <CheckCircle2 className="w-4 h-4 text-amber-700" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-forest-950 block">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 font-light leading-snug mt-0.5 block">
                              {item.desc}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Café Banner & Direct Inquiry Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10 bg-forest-950 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-500/30 shadow-soft"
                  >
                    <div className="text-center sm:text-left">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Coffee className="w-4 h-4 text-gold-400" />
                        <h4 className="font-serif text-base sm:text-lg font-bold text-cream-100">
                          Visiting Mahabaleshwar? Drop In For Artisanal Coffee &amp; Views
                        </h4>
                      </div>
                      <p className="text-xs text-cream-200/70 font-light mt-1">
                        Open to both resort residents and hill-station day visitors • Complimentary parking and scenic valley seating
                      </p>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about The Reveridge Café & Coffee Shop at ${property.name}. Please share menu, specialty coffees, and table availability.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md transition-all shrink-0 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Inquire Café Menu &amp; Specials</span>
                    </motion.a>
                  </motion.div>
                </motion.section>
              )}

              {/* MODERN LUXURY SHOWCASE: WELLNESS SPA (Mahabaleshwar & Dapoli) — Framer Motion */}
              {property.spaInfo && (
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gradient-to-b from-white via-emerald-50/35 to-white rounded-3xl p-6 sm:p-10 shadow-soft-lg border border-emerald-200/70 relative overflow-hidden"
                >
                  {/* Ambient Glows */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Section Header */}
                  <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-[11px] font-bold uppercase tracking-widest mb-3.5 shadow-2xs"
                    >
                      <Flower2 className="w-3.5 h-3.5 text-emerald-800" />
                      <span>{property.spaInfo.badge || 'Wellness Spa • Mahabaleshwar & Dapoli'}</span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight leading-tight"
                    >
                      {property.spaInfo.name}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                      {property.spaInfo.tagline}
                    </motion.p>

                    {/* Badges / Highlights Bar with Framer Motion */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-5 inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xs text-slate-600"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200/80 shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="font-semibold text-slate-800">{property.spaInfo.timings}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200/80 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>Massage, Treatments &amp; Therapies</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200/80 shadow-2xs">
                        <Flame className="w-3.5 h-3.5 text-amber-600" />
                        <span>Thermal Steam &amp; Sauna Suites</span>
                      </span>
                    </motion.div>
                  </div>

                  {/* 3 Modern Luxury Vertical Photo Cards with Framer Motion — Pure Photography */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10 relative z-10">
                    {[
                      {
                        alt: 'Signature Holistic Massage at The Reveridge Wellness Spa',
                        image: property.spaInfo.images?.[0] || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
                      },
                      {
                        alt: 'Ayurvedic Treatments & Therapies Sanctuary',
                        image: property.spaInfo.images?.[1] || 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80'
                      },
                      {
                        alt: 'Aromatherapy, Steam & Sauna Rejuvenation',
                        image: property.spaInfo.images?.[2] || 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80'
                      }
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.12 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg hover:shadow-2xl transition-all duration-500 border border-emerald-200/60 hover:border-emerald-400"
                      >
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* 6 Wellness Spa Features Grid with Motion Hover */}
                  {property.spaInfo.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 relative z-10">
                      {property.spaInfo.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.06 }}
                          whileHover={{ y: -3, transition: { duration: 0.2 } }}
                          className="p-3.5 rounded-2xl bg-white/95 border border-emerald-200/70 shadow-2xs hover:border-emerald-400 hover:shadow-soft transition-all flex items-start gap-3"
                        >
                          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-forest-950 block">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 font-light leading-snug mt-0.5 block">
                              {item.desc}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Spa Booking & Exploration Banner */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10 bg-forest-950 text-white rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 border border-emerald-500/30 shadow-soft"
                  >
                    <div className="text-center lg:text-left">
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Flower2 className="w-4 h-4 text-gold-400" />
                        <h4 className="font-serif text-base sm:text-lg font-bold text-cream-100">
                          Wellness Spa (Mahabaleshwar &amp; Dapoli)
                        </h4>
                      </div>
                      <p className="text-xs text-cream-200/75 font-light mt-1">
                        Massage, treatments, holistic therapies, aromatic steam &amp; cedarwood sauna • Private and couple therapy suites
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
                      <Link
                        to="/spa"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 border border-white/20 text-xs font-semibold transition-all"
                      >
                        <span>Explore Spa Menu</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I would like to book a Wellness Spa session (massage, treatments, therapies, steam & sauna) at ${property.name}. Please share available slots.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Book Spa Session</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.section>
              )}

              {/* MODERN LUXURY SHOWCASE: WEDDING AND BANQUET VENUES */}
              {property.weddingVenuesInfo && (
                <section className="bg-gradient-to-b from-white via-cream-50/50 to-white rounded-3xl p-6 sm:p-10 shadow-soft-lg border border-rose-200/70 relative overflow-hidden">
                  {/* Ambient Glows */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Section Header Matching Luxury Editorial Design */}
                  <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-300 text-rose-950 text-[11px] font-bold uppercase tracking-widest mb-3 shadow-2xs">
                      <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                      <span>{property.weddingVenuesInfo.badge || 'Premier Konkan Coast Wedding Destination'}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight leading-tight">
                      {property.weddingVenuesInfo.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                      {property.weddingVenuesInfo.tagline}
                    </p>

                    {/* Badges Bar */}
                    <div className="mt-4 inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 text-xs text-slate-600">
                      {property.weddingVenuesInfo.capacity && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                          <Users className="w-3.5 h-3.5 text-rose-700" />
                          <span className="font-semibold text-slate-800">{property.weddingVenuesInfo.capacity}</span>
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                        <span>Full Resort Buyout &amp; 60 Sea-View Rooms</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                        <Waves className="w-3.5 h-3.5 text-teal-700" />
                        <span>180° Arabian Sea Sunset Backdrops</span>
                      </span>
                    </div>
                  </div>

                  {/* 3 Modern Luxury Vertical Photo Cards with Framer Motion — Pure Photography */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10 relative z-10">
                    {[
                      {
                        alt: 'Arabian Sea Sunset Lawn',
                        image: property.weddingVenuesInfo.images?.[0] || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
                      },
                      {
                        alt: 'Grand Horizon Ballroom',
                        image: property.weddingVenuesInfo.images?.[1] || 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80'
                      },
                      {
                        alt: 'Poolside Patio & Resort Buyout',
                        image: property.weddingVenuesInfo.images?.[2] || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80'
                      }
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.12 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg hover:shadow-2xl transition-all duration-500 border border-rose-200/60 hover:border-rose-400"
                      >
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* 4 Dedicated Venue Capacity Cards */}
                  {property.weddingVenuesInfo.venues && (
                    <div className="mb-8 relative z-10">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-forest-950 mb-3.5 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold-600" />
                        <span>Indoor &amp; Outdoor Venues at a Glance</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {property.weddingVenuesInfo.venues.map((venue, vIdx) => (
                          <div
                            key={vIdx}
                            className="p-4 rounded-2xl bg-white/90 border border-rose-200/60 shadow-2xs hover:border-rose-300 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <span className="text-[10px] uppercase font-bold tracking-wider text-rose-800 bg-rose-100/70 px-2 py-0.5 rounded-md inline-block mb-2">
                                {venue.type}
                              </span>
                              <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 leading-snug">
                                {venue.name}
                              </h4>
                              <p className="text-[11px] text-slate-600 font-light leading-relaxed line-clamp-3">
                                {venue.desc}
                              </p>
                            </div>
                            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                              <span className="text-slate-500 font-medium text-[11px]">Capacity</span>
                              <span className="font-bold text-forest-950 text-xs">{venue.capacity}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 6 Wedding & Banquet Services Features */}
                  {property.weddingVenuesInfo.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 relative z-10">
                      {property.weddingVenuesInfo.features.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/70 shadow-2xs hover:border-rose-300 transition-colors flex items-start gap-3"
                        >
                          <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-900 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-rose-700" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-forest-950 block">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 font-light leading-snug mt-0.5 block">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Wedding Consultation Banner */}
                  <div className="relative z-10 bg-forest-950 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-rose-400/30 shadow-soft">
                    <div className="text-center sm:text-left">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                        <h4 className="font-serif text-base sm:text-lg font-bold text-cream-100">
                          Planning a Destination Wedding or Milestone Celebration?
                        </h4>
                      </div>
                      <p className="text-xs text-cream-200/70 font-light mt-1">
                        Custom floor plans, decorator coordination, chef-curated banquet tastings &amp; private group bookings
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about booking Wedding & Banquet venues (Indoor & Outdoor) at ${property.name} for up to 120 guests. Please share available dates, catering packages, and venue floor plans.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md hover:scale-102 transition-all shrink-0 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Inquire Wedding &amp; Banquet Venues</span>
                    </a>
                  </div>
                </section>
              )}

              {/* SECTION 4: FACILITIES — COMPLETE LIST (16 Items) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                      Facilities — Complete List
                    </h2>
                    <p className="text-xs text-slate-500">Every amenity provided on property</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.facilitiesList.map((fac, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-cream-50/70 border border-slate-200/70 flex items-start gap-3 hover:bg-cream-100 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        {fac}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 5: PACKAGES OFFERED (6 Curated Packages) */}
              {property.packages && property.packages.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                  <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        Packages Offered
                      </h2>
                      <p className="text-xs text-slate-500">Curated boutique getaways &amp; seasonal offers</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.packages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-cream-50 border border-slate-200 hover:border-gold-400 flex flex-col justify-between transition-all shadow-2xs hover:shadow-soft"
                      >
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full bg-forest-800 text-gold-400 text-[10px] font-bold tracking-wider uppercase mb-2 inline-block">
                            {pkg.badge || "Curated Package"}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-forest-950 mb-1">
                            {pkg.name}
                          </h3>
                          <p className="text-xs text-slate-500 mb-3">
                            {pkg.tagline}
                          </p>
                          <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 mb-4">
                            <span className="text-[10px] uppercase font-semibold text-gold-700 block mb-0.5">Includes:</span>
                            {pkg.inclusions}
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about the ${pkg.name} package for ${property.name}. Please share details and pricing.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-semibold transition-colors"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          <span>Inquire {pkg.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 6: EXPERIENCES OFFERED (4 Experiences) */}
              {property.experiences && property.experiences.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                  <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        Experiences Offered
                      </h2>
                      <p className="text-xs text-slate-500">Curated in-house activities and guided outings</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.experiences.map((exp, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-cream-50 border border-slate-200">
                        <span className="text-gold-700 text-xs font-semibold uppercase tracking-wider block mb-1">
                          {exp.subtitle || "Signature Experience"}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-forest-950 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 7: NEARBY ATTRACTIONS (8 Attractions with Distances) */}
              {property.nearbyAttractions && property.nearbyAttractions.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
                  <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                        Nearby Attractions
                      </h2>
                      <p className="text-xs text-slate-500">Key sightseeing points with approximate distances</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {property.nearbyAttractions.map((att, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-cream-50/80 border border-slate-200/80 flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-slate-900 text-sm">{att.name}</h4>
                            <span className="text-xs font-bold text-gold-700 bg-gold-100/60 px-2 py-0.5 rounded-full shrink-0">
                              {att.distance}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-snug">
                            {att.description || att.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Cols: Sticky Direct Reservation Console */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">

              {/* Direct Booking & Assistance Card */}
              <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200/80">
                <span className="px-3 py-1 rounded-full bg-forest-900 text-gold-400 text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                  Direct Reservations
                </span>

                <h3 className="font-serif text-xl font-bold text-forest-950 mb-1">
                  Reserve {property.shortName}
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Best rate guaranteed directly with Reveridge Hospitality
                </p>

                <div className="space-y-3 mb-6 text-xs text-slate-600 bg-cream-50 p-4 rounded-2xl border border-slate-200/80">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-400">Check-in</span>
                    <span className="font-bold text-slate-800">{property.checkIn}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-400">Check-out</span>
                    <span className="font-bold text-slate-800">{property.checkOut}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-400">Cancellation</span>
                    <span className="font-bold text-emerald-700">Free (up to 48 hrs)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Breakfast</span>
                    <span className="font-bold text-slate-800">Included on select plans</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    to={`/booking?property=${property.id}`}
                    variant="gold"
                    size="lg"
                    className="w-full justify-center font-bold text-forest-950 shadow-md py-3.5 text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Check Dates &amp; Book</span>
                  </Button>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Chat with Front Desk</span>
                  </a>

                  <a
                    href={callUrl}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-500" />
                    <span>Call Concierge: {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <span className="text-[11px] text-slate-400">
                    Need customized meals, group bookings or corporate events? Speak directly to our reservations manager.
                  </span>
                </div>
              </div>

              {/* Brand Philosophy Micro-Card */}
              <div className="bg-forest-900 text-cream-100 rounded-3xl p-6 shadow-soft border border-gold-500/20">
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-widest block mb-2">
                  The Reveridge Standard
                </span>
                <p className="font-serif text-base italic text-white leading-relaxed mb-3">
                  "{siteConfig.natureQuote || "Nature is the amenity. Stillness is the luxury."}"
                </p>
                <p className="text-xs text-cream-200/80 font-light leading-relaxed">
                  Every Reveridge property is boutique by design, personal by nature, and five-star in feeling without the formality of a traditional luxury brand.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 8: EXPLORE OTHER REVERIDGE PROPERTIES STRIP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-1">
                More Nature Escapes
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                Explore Other Reveridge Properties
              </h2>
            </div>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest-800 hover:text-gold-600 transition-colors"
            >
              <span>View All 5 Escapes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProperties.map((other) => (
              <Link
                key={other.id}
                to={`/destinations/${other.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-gold-400/60 shadow-2xs hover:shadow-soft transition-all flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={other.images[0]}
                    alt={other.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white tracking-wider uppercase">
                      {other.propertyCode}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-gold-700 block">
                      {other.location}
                    </span>
                    <h3 className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                      {other.shortName}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {other.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">From</span>
                      <span className="font-serif text-sm font-bold text-forest-900">
                        ₹{other.startingPrice.toLocaleString()}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-forest-800 group-hover:text-gold-600">
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

