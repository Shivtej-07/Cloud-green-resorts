import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BedDouble, Search, ArrowRight } from 'lucide-react';
import { rooms } from '../../data/rooms';
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
  const [roomType, setRoomType] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests,
      roomType
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="glass-card shadow-2xl rounded-3xl p-4 sm:p-6 border border-white/60 bg-white/90 backdrop-blur-xl transition-all hover:border-gold-400/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          
          {/* Check-in Date */}
          <div className="flex items-center gap-3 bg-cream-100/90 hover:bg-cream-100 p-3 rounded-2xl border border-slate-200/80 transition-colors">
            <div className="p-2 rounded-xl bg-forest-800/10 text-forest-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <label htmlFor="hero-check-in" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.checkIn}
              </label>
              <input
                id="hero-check-in"
                type="date"
                min={formatDate(today)}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent font-medium text-slate-800 text-sm focus:outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="flex items-center gap-3 bg-cream-100/90 hover:bg-cream-100 p-3 rounded-2xl border border-slate-200/80 transition-colors">
            <div className="p-2 rounded-xl bg-forest-800/10 text-forest-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <label htmlFor="hero-check-out" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.checkOut}
              </label>
              <input
                id="hero-check-out"
                type="date"
                min={checkIn || formatDate(tomorrow)}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent font-medium text-slate-800 text-sm focus:outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 bg-cream-100/90 hover:bg-cream-100 p-3 rounded-2xl border border-slate-200/80 transition-colors">
            <div className="p-2 rounded-xl bg-forest-800/10 text-forest-800">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <label htmlFor="hero-guests" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.guests}
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent font-medium text-slate-800 text-sm focus:outline-none cursor-pointer"
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
              className="w-full justify-center shadow-lg hover:shadow-xl font-bold text-forest-950 py-3.5"
              icon={Search}
              iconPosition="left"
            >
              {t.checkAvailability}
            </Button>
          </div>

        </div>

        {/* Micro note underneath */}
        <div className="mt-3 pt-3 border-t border-slate-200/50 flex flex-wrap items-center justify-between text-[11px] text-slate-600 px-1">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-forest-800">✓ Best Rate Guarantee</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline">No Hidden Fees</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Free Cancellation (48 hrs)</span>
          </div>
          <span className="text-forest-700 font-medium">Starting ₹1,897 / night</span>
        </div>
      </form>
    </div>
  );
}
