import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { rooms } from '../data/rooms';
import SectionTitle from '../components/common/SectionTitle';
import RoomCard from '../components/rooms/RoomCard';
import RoomFilter from '../components/rooms/RoomFilter';
import { 
  ShieldCheck, 
  Clock, 
  Utensils, 
  Wifi, 
  Waves, 
  Car, 
  HeartHandshake 
} from 'lucide-react';

const roomCategories = ["All Rooms", "Double", "Valley View", "Family", "Cottage"];

export default function Rooms() {
  const [activeCategory, setActiveCategory] = useState("All Rooms");

  const filteredRooms = activeCategory === "All Rooms"
    ? rooms
    : rooms.filter(r => r.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <>
      <Helmet>
        <title>Rooms &amp; Suites | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content="Explore Deluxe Double Rooms, Valley View Rooms, and Family Suites at Cloudgreen Resort Metgutad. Starting ₹1,897/night with free breakfast & pool access." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-16 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-3">
            Handcrafted Hill Station Comfort
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Rooms &amp; Valley Suites
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Each stay features comfortable bedding, scenic garden or Sahyadri valley views, hot showers, and complimentary breakfast.
          </p>
        </div>
      </section>

      {/* Main Room Listing */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <RoomFilter
            categories={roomCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Complimentary Stay Benefits Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-forest-950 text-center mb-6">
              Included With Every Room Booking at Cloudgreen
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Free Breakfast</span>
                <span className="text-[11px] text-slate-500">Maharashtrian spread</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <Waves className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Pool Access</span>
                <span className="text-[11px] text-slate-500">Outdoor hill pool</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <Wifi className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-800">High-Speed Wi-Fi</span>
                <span className="text-[11px] text-slate-500">Optical fiber network</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <Car className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Free Parking</span>
                <span className="text-[11px] text-slate-500">Guarded on-site lot</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Pet Welcoming</span>
                <span className="text-[11px] text-slate-500">Open lawns &amp; paths</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Flexible Timings</span>
                <span className="text-[11px] text-slate-500">2 PM in / 11 AM out</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
