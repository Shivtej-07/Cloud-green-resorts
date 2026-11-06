import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  X, 
  ArrowRight, 
  Sparkles, 
  Star
} from 'lucide-react';
import { destinations, destinationsSummary } from '../../data/destinations';
import DestinationIcon from './DestinationIcons';

export default function DestinationsDropdown({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[92vw] max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 text-slate-900"
    >
      {/* Header with Direct Link to /destinations */}
      <div className="px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between border-b border-slate-100 bg-white">
        <Link 
          to="/destinations" 
          onClick={onClose}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center text-teal-600 transition-colors">
            <MapPin className="w-4 h-4 fill-teal-600 text-teal-600" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-slate-800 group-hover:text-forest-900 uppercase transition-colors">
              {destinationsSummary.title}
            </span>
            <span className="hidden sm:inline-block ml-2 text-[11px] text-slate-400 font-normal">
              • Reveridge Hospitality
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/destinations"
            onClick={onClose}
            className="px-3 py-1 rounded-full text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 transition-colors flex items-center gap-1"
          >
            <span>{destinationsSummary.badgeText}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors ml-1"
            aria-label="Close destinations menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Column Grid: Click any destination to render direct page */}
      <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {destinations.map((item) => (
            <Link
              key={item.id}
              to={`/destinations/${item.id}`}
              onClick={onClose}
              className="group relative flex items-center gap-3.5 p-3.5 rounded-2xl border border-slate-100 hover:border-gold-400/60 hover:bg-cream-50/60 hover:shadow-soft transition-all duration-200 cursor-pointer text-left block"
            >
              {/* Illustrated icon container */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/90 group-hover:border-gold-500/50 group-hover:shadow-xs flex items-center justify-center p-2.5 shrink-0 transition-all duration-200">
                <DestinationIcon type={item.iconType} className="w-full h-full" />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-forest-900 transition-colors tracking-tight">
                    {item.shortName}
                  </h4>
                  {item.bhk && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-gold-50 text-gold-700 border border-gold-200">
                      {item.bhk}
                    </span>
                  )}
                  {item.badge && !item.bhk && (
                    <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-forest-900 text-gold-400">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                  {item.brandName}
                </p>

                <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-100">
                  <span className="text-[11px] font-medium text-teal-600 truncate">
                    {item.type}
                  </span>
                  <span className="text-[11px] font-bold text-forest-900 shrink-0">
                    From ₹{item.startingPrice.toLocaleString()}<span className="text-slate-400 font-normal">/nt</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Bar */}
      <div className="px-6 py-3.5 sm:px-8 sm:py-4 bg-slate-50/90 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2 text-slate-600 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-gold-500 shrink-0" />
          <span><strong className="text-slate-800 font-semibold">Reve (Growth) + Ridge (Mountain)</strong> — Nature is the amenity. Stillness is the luxury.</span>
        </div>

        <Link
          to="/destinations"
          onClick={onClose}
          className="font-bold text-forest-800 hover:text-gold-600 flex items-center gap-1 group shrink-0"
        >
          <span>View All 5 Escapes Directory</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
