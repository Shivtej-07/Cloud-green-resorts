import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  X, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  MessageCircle,
  Home as HomeIcon
} from 'lucide-react';
import { destinations, destinationsSummary } from '../../data/destinations';
import DestinationIcon from './DestinationIcons';
import { siteConfig } from '../../data/siteConfig';

export default function DestinationsDropdown({ isOpen, onClose }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCardClick = (destination) => {
    // Open the property preview modal
    setSelectedProperty(destination);
  };

  const handleBookProperty = (destination) => {
    setSelectedProperty(null);
    onClose();
    if (destination.isPrimaryResort) {
      navigate('/rooms');
    } else {
      navigate(`/booking?property=${destination.id}`);
    }
  };

  return (
    <>
      {/* Dropdown Menu Container */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[92vw] max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 text-slate-900"
      >
        {/* Header matching user reference image */}
        <div className="px-6 py-4.5 sm:px-8 sm:py-5 flex items-center justify-between border-b border-slate-100 bg-white">
          <div className="flex items-center gap-2.5">
            {/* Teal location pin icon */}
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
              <MapPin className="w-4 h-4 fill-teal-600 text-teal-600" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                {destinationsSummary.title}
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] text-slate-400 font-normal">
                • Reveridge Hospitality
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Pill counter matching user reference screenshot */}
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200/80">
              {destinationsSummary.badgeText}
            </span>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors ml-1"
              aria-label="Close destinations menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Grid matching reference image */}
        <div className="p-5 sm:p-7 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {destinations.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group relative flex items-center gap-4 p-3 rounded-2xl border border-slate-100 hover:border-teal-500/40 hover:bg-teal-50/20 hover:shadow-sm transition-all duration-200 cursor-pointer text-left"
              >
                {/* Illustrated icon container */}
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-white border border-slate-200/90 group-hover:border-teal-500/50 group-hover:shadow-sm flex items-center justify-center p-2.5 shrink-0 transition-all duration-200">
                  <DestinationIcon type={item.iconType} className="w-full h-full" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-teal-900 transition-colors tracking-tight">
                      {item.shortName}
                    </h4>
                    {item.bhk && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-gold-50 text-gold-700 border border-gold-200">
                        {item.bhk}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                    {item.brandName}
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] font-medium text-teal-600 truncate">
                      {item.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold group-hover:text-teal-700 transition-colors shrink-0 flex items-center gap-0.5">
                      View <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3.5 sm:px-8 sm:py-4 bg-slate-50/90 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-slate-600 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span><strong className="text-slate-800 font-semibold">Reve (Growth) + Ridge (Mountain)</strong> — Nature is the amenity. Stillness is the luxury.</span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/destinations"
              onClick={onClose}
              className="font-semibold text-teal-700 hover:text-teal-900 hover:underline flex items-center gap-1"
            >
              <span>Explore All 5 Stays Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Property Preview Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Modal Image Header */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
                <img
                  src={selectedProperty.images[0]}
                  alt={selectedProperty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Property Code Badge */}
                <div className="absolute top-3 left-3 bg-teal-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedProperty.propertyCode}
                </div>

                {/* Header Content */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-gold-500/90 text-slate-950 font-bold px-2 py-0.5 rounded">
                      {selectedProperty.badge}
                    </span>
                    <span className="text-xs flex items-center gap-1 text-gold-300">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <span>{selectedProperty.rating} ({selectedProperty.reviewCount} reviews)</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                    {selectedProperty.name}
                  </h3>
                  <p className="text-xs text-cream-200/90 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                    <span>{selectedProperty.location}</span>
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-700">
                {/* Tagline / Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{selectedProperty.tagline}"
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  {selectedProperty.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Property Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProperty.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Booking Banner */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Tariff</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-bold text-lg text-forest-900">
                        ₹{selectedProperty.startingPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500">/ night</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Reveridge! I am inquiring about booking ${selectedProperty.name}. Please share tariffs and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Modal Actions Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-forest-900 px-3 py-2 rounded-xl border border-slate-200 hover:bg-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  <span>Call Us</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProperty(null)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800 px-3 py-2 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleBookProperty(selectedProperty)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold transition-colors shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Reserve / Book</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

