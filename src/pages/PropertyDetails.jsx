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
  ChevronDown
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

      <div className="bg-cream-100 min-h-screen pt-24 sm:pt-28 pb-20">
        
        {/* Breadcrumbs & Eyebrow */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-forest-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/destinations" className="hover:text-forest-900 transition-colors">Destinations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-forest-900 font-semibold truncate">{property.shortName}</span>
          </nav>
        </div>

        {/* Main Property Header & Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-8 lg:p-10 shadow-soft border border-slate-200/80">
            
            {/* Top Badges & Property Code */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-forest-900 text-gold-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-xs">
                  {property.propertyCode}
                </span>
                <span className="px-3 py-1 rounded-full bg-gold-50 border border-gold-300/80 text-forest-900 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                  ★ {property.starEquivalent || "5 Star Boutique"}
                </span>
                {property.badge && (
                  <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] sm:text-xs font-medium">
                    {property.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold ml-1 text-slate-800">{property.rating}</span>
                </div>
                <span>({property.reviewCount} verified guest reviews)</span>
              </div>
            </div>

            {/* Title & Location Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
                  {property.name}
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gold-700 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{property.location}</span>
                  {property.altitude && (
                    <span className="text-slate-400 font-normal">
                      • {property.altitude}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl font-light leading-relaxed">
                  {property.tagline}
                </p>
              </div>

              {/* Price & Primary Header Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0 bg-cream-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-none border-slate-200">
                <div className="text-left lg:text-right">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-500 block">
                    Starting Tariff
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
                      ₹{property.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-normal">/ night</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Taxes applicable • Best rate direct</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <Button
                    to={`/booking?property=${property.id}`}
                    variant="gold"
                    size="sm"
                    className="px-5 py-2.5 text-xs font-bold shadow-md text-forest-950"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Check Dates</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Interactive Image Gallery */}
            <div className="space-y-3">
              {/* Main Featured Photo */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-forest-950 shadow-inner group">
                <img
                  src={property.images[activePhotoIdx] || property.images[0]}
                  alt={`${property.name} view ${activePhotoIdx + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                
                {/* Photo Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                  <span className="text-[11px] sm:text-xs tracking-wider uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Photo {activePhotoIdx + 1} of {property.images.length}
                  </span>
                </div>
              </div>

              {/* Photo Thumbnails */}
              {property.images.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all focus:outline-none ${
                        activePhotoIdx === idx 
                          ? 'border-gold-500 ring-2 ring-gold-400/30 scale-98 shadow-sm' 
                          : 'border-transparent opacity-75 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Content Section: 2 Columns */}
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

              {/* MODERN SHOWCASE: COFFEE SHOP & CAFE (For Flagship Property) */}
              {property.cafeInfo && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-amber-200/60 relative overflow-hidden">
                  
                  {/* Subtle warm amber ambient glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-900 text-amber-200 flex items-center justify-center shadow-xs shrink-0">
                        <Coffee className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                            {property.cafeInfo.name}
                          </h2>
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold tracking-wider uppercase">
                            {property.cafeInfo.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {property.cafeInfo.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-100 text-slate-700 text-xs font-semibold shrink-0">
                      <Clock className="w-3.5 h-3.5 text-amber-800" />
                      <span>{property.cafeInfo.timings}</span>
                    </div>
                  </div>

                  {/* Content Grid: Left details + Right modern imagery */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                    
                    {/* Left: Description & Modern Features (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                        {property.cafeInfo.description}
                      </p>

                      {/* 6 Modern Café Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {property.cafeInfo.features.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="p-3 rounded-2xl bg-cream-50/80 border border-amber-200/40 hover:border-amber-300 transition-colors"
                          >
                            <span className="text-xs font-bold text-forest-950 block mb-0.5">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 leading-snug block font-light">
                              {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Direct Café WhatsApp Action */}
                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about The Reveridge Café & Coffee Shop at ${property.name}. Please share menu, specialty coffees, and seating options.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-colors"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>Inquire Café Menu &amp; Specials</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Modern Aesthetic Photo Gallery (5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-2.5">
                      <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-white col-span-2 h-44 sm:h-48">
                        <img 
                          src={property.cafeInfo.images[0]} 
                          alt="Specialty Coffee Latte Art" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border-2 border-white h-28 sm:h-32">
                        <img 
                          src={property.cafeInfo.images[1]} 
                          alt="Boutique Cafe Interior Lounge" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-sm border-2 border-white h-28 sm:h-32">
                        <img 
                          src={property.cafeInfo.images[2]} 
                          alt="Fresh Croissants & Artisanal Brew" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* WEDDING AND BANQUET VENUES — INDOOR AND OUTDOOR */}
              {property.weddingVenuesInfo && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-rose-200/80 relative overflow-hidden">
                  
                  {/* Subtle warm rose/gold ambient glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-rose-900 text-rose-200 flex items-center justify-center shadow-xs shrink-0">
                        <Heart className="w-5 h-5 fill-rose-300/30 text-rose-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                            {property.weddingVenuesInfo.title}
                          </h2>
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-900 border border-rose-200 text-[10px] font-bold tracking-wider uppercase">
                            {property.weddingVenuesInfo.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {property.weddingVenuesInfo.tagline}
                        </p>
                      </div>
                    </div>

                    {property.weddingVenuesInfo.capacity && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-100 text-slate-700 text-xs font-semibold shrink-0">
                        <Users className="w-3.5 h-3.5 text-rose-800" />
                        <span>{property.weddingVenuesInfo.capacity}</span>
                      </div>
                    )}
                  </div>

                  {/* Description & Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6 relative z-10">
                    {property.weddingVenuesInfo.description}
                  </p>

                  {/* 4 Dedicated Venue Cards (Indoor & Outdoor) */}
                  {property.weddingVenuesInfo.venues && (
                    <div className="mb-6 relative z-10">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-forest-950 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold-500" />
                        <span>Featured Indoor &amp; Outdoor Event Venues</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {property.weddingVenuesInfo.venues.map((venue, vIdx) => (
                          <div 
                            key={vIdx}
                            className="p-4 rounded-2xl bg-cream-50/80 border border-rose-200/50 hover:border-rose-300 transition-colors flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span className="text-[10px] uppercase font-bold tracking-wider text-rose-800 bg-rose-100/60 px-2 py-0.5 rounded-md">
                                  {venue.type}
                                </span>
                                <span className="text-[11px] font-bold text-forest-900">
                                  {venue.capacity}
                                </span>
                              </div>
                              <h4 className="font-serif font-bold text-slate-900 text-sm mb-1.5">
                                {venue.name}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed font-light">
                                {venue.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Wedding & Banquet Services Features */}
                  {property.weddingVenuesInfo.features && (
                    <div className="pt-4 border-t border-slate-100 relative z-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
                        {property.weddingVenuesInfo.features.map((feat, fIdx) => (
                          <div key={fIdx} className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-900 block leading-tight">{feat.title}</span>
                              <span className="text-[11px] text-slate-500 block leading-snug mt-0.5 font-light">{feat.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery Grid */}
                  {property.weddingVenuesInfo.images && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 relative z-10">
                      {property.weddingVenuesInfo.images.map((imgUrl, imgIdx) => (
                        <div key={imgIdx} className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xs border-2 border-white">
                          <img 
                            src={imgUrl} 
                            alt={`Wedding & Banquet Venue ${imgIdx + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Direct WhatsApp Wedding & Banquet Inquiry Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10 bg-cream-50 p-4 rounded-2xl border border-rose-200/60">
                    <div>
                      <span className="text-xs font-bold text-forest-950 block">Planning a Destination Wedding or Grand Event?</span>
                      <span className="text-[11px] text-slate-500 font-light block">Contact our dedicated wedding coordination team for custom floor plans, menus, and dates.</span>
                    </div>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about booking Wedding & Banquet venues (Indoor & Outdoor) at ${property.name} for up to 120 guests. Please share available dates, catering packages, and venue floor plans.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-colors shrink-0"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Inquire Wedding &amp; Banquet Venues</span>
                    </a>
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
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                            selectedPlan === plan.key 
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

