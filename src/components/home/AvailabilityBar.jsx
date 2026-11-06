import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';

export default function AvailabilityBar({ className = '' }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Tomorrow as default check-in, day after as check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 1);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState("2 Adults");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="glass-card shadow-2xl rounded-3xl p-3.5 sm:p-6 border border-white/60 bg-white/95 backdrop-blur-xl transition-all hover:border-gold-400/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
          
          {/* Check-in Date */}
          <div className="flex items-center gap-2.5 sm:gap-3 bg-cream-100/90 hover:bg-cream-100 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 transition-colors">
            <div className="p-2 rounded-xl bg-forest-800/10 text-forest-800 shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="hero-check-in" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.checkIn}
              </label>
              <input
                id="hero-check-in"
                type="date"
                min={formatDate(today)}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (e.target.value >= checkOut) {
                    const next = new Date(e.target.value);
                    next.setDate(next.getDate() + 1);
                    setCheckOut(formatDate(next));
                  }
                }}
                className="w-full bg-transparent font-medium text-slate-800 text-xs sm:text-sm focus:outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="flex items-center gap-2.5 sm:gap-3 bg-cream-100/90 hover:bg-cream-100 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 transition-colors">
            <div className="p-2 rounded-xl bg-forest-800/10 text-forest-800 shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="hero-check-out" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.checkOut}
              </label>
              <input
                id="hero-check-out"
                type="date"
                min={checkIn || formatDate(tomorrow)}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent font-medium text-slate-800 text-xs sm:text-sm focus:outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-2.5 sm:gap-3 bg-cream-100/90 hover:bg-cream-100 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 transition-colors">
            <div className="p-2 rounded-xl bg-forest-800/10 text-forest-800 shrink-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <label htmlFor="hero-guests" className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.guests}
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent font-medium text-slate-800 text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults (Family)">4 Adults (Family)</option>
                <option value="5+ Guests (Group)">5+ Guests (Group)</option>
              </select>
            </div>
          </div>

          {/* Submit / Check CTA */}
          <div className="w-full">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full justify-center shadow-lg hover:shadow-xl font-bold text-forest-950 py-3 sm:py-3.5 text-xs sm:text-sm"
              icon={Search}
              iconPosition="left"
            >
              {t.checkAvailability}
            </Button>
          </div>

        </div>

        {/* Micro note underneath */}
        <div className="mt-3 pt-2.5 border-t border-slate-200/50 flex flex-col sm:flex-row items-center sm:justify-between gap-1.5 text-[10px] sm:text-[11px] text-slate-600 px-1 text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
            <span className="font-semibold text-forest-800">✓ Best Rate Guarantee</span>
            <span className="text-slate-300">•</span>
            <span>No Hidden Fees</span>
            <span className="text-slate-300">•</span>
            <span>Free Cancellation (48 hrs)</span>
          </div>
          <span className="text-forest-700 font-medium">Boutique Escapes Across Maharashtra</span>
        </div>
      </form>
    </div>
  );
}
