import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  Maximize2, 
  Bed, 
  Check, 
  Star, 
  Calendar, 
  MessageCircle, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Coffee, 
  ChevronRight 
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { buildRoomEnquiryLink } from '../utils/whatsapp';
import Button from '../components/common/Button';

export default function RoomDetails() {
  const { id } = useParams();
  const { rooms, siteConfig } = useData();
  const room = rooms.find(r => r.slug === id || r.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  const whatsappUrl = buildRoomEnquiryLink(room.name, room.price);
  const otherRooms = rooms.filter(r => r.id !== room.id).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{room.name} | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content={`Book the ${room.name} at Cloudgreen Resort, Metgutad, Mahabaleshwar. ₹${room.price}/night with ${room.size}, free breakfast, pool access and mountain views.`} />
      </Helmet>

      {/* Breadcrumb Header */}
      <section className="pt-32 pb-8 bg-forest-950 text-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-cream-300/70 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/rooms" className="hover:text-white">Rooms</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold-400 font-medium">{room.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-forest-900 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/40">
                  {room.category}
                </span>
                <span className="text-xs text-cream-200/80">• {room.view}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {room.name}
              </h1>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-cream-300 block uppercase tracking-wider">Tariff per night</span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                  ₹{room.price.toLocaleString()}
                </span>
                <span className="text-sm text-cream-200">/ night</span>
                {room.originalPrice && (
                  <span className="text-sm text-cream-400 line-through">
                    ₹{room.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Cols: Image Gallery + Details */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Photo Showcase */}
              <div className="space-y-4">
                <div className="h-80 sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={room.images[activeImageIndex]}
                    alt={`${room.name} view ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {activeImageIndex + 1} / {room.images.length} Photos
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {room.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-20 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? 'border-forest-800 scale-95 shadow-md' : 'border-white opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Overview & Description */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                    About This Room
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    {room.overview || room.description}
                  </p>
                </div>

                {/* Room Specs Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-slate-100 text-center">
                  <div className="p-3 bg-cream-50 rounded-2xl">
                    <Maximize2 className="w-5 h-5 text-forest-800 mx-auto mb-1" />
                    <span className="text-[11px] text-slate-500 uppercase block">Room Size</span>
                    <strong className="text-sm text-forest-950">{room.size}</strong>
                  </div>

                  <div className="p-3 bg-cream-50 rounded-2xl">
                    <Bed className="w-5 h-5 text-forest-800 mx-auto mb-1" />
                    <span className="text-[11px] text-slate-500 uppercase block">Bed Type</span>
                    <strong className="text-sm text-forest-950">{room.bedType}</strong>
                  </div>

                  <div className="p-3 bg-cream-50 rounded-2xl">
                    <Users className="w-5 h-5 text-forest-800 mx-auto mb-1" />
                    <span className="text-[11px] text-slate-500 uppercase block">Occupancy</span>
                    <strong className="text-sm text-forest-950">{room.occupancy}</strong>
                  </div>

                  <div className="p-3 bg-cream-50 rounded-2xl">
                    <Star className="w-5 h-5 text-gold-500 mx-auto mb-1 fill-gold-500" />
                    <span className="text-[11px] text-slate-500 uppercase block">Guest Rating</span>
                    <strong className="text-sm text-forest-950">{room.rating} / 5.0</strong>
                  </div>
                </div>

                {/* All Room Amenities */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-forest-950 mb-4">
                    Included In-Room Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 bg-cream-50/70 p-3 rounded-xl border border-slate-100">
                        <Check className="w-4 h-4 text-forest-700 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policies Accordion / Info */}
                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <h4 className="font-serif text-base font-bold text-forest-950">
                    Stay &amp; Cancellation Policies
                  </h4>
                  <ul className="space-y-1.5 list-disc pl-5">
                    <li><strong>Check-in:</strong> 2:00 PM | <strong>Check-out:</strong> 11:00 AM (flexible on advance request).</li>
                    <li><strong>Free Cancellation:</strong> Up to 48 hours prior to arrival with full refund.</li>
                    <li><strong>Pet Friendly:</strong> Up to 2 pets allowed with prior intimation.</li>
                    <li><strong>Complimentary Breakfast:</strong> Served 8:00 AM to 10:30 AM in the restaurant lawn.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Right 4 Cols: Sticky Quick Reservation Box */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-xl border-2 border-forest-800/20 sticky top-28 space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">Instant Booking</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="font-serif text-3xl font-bold text-forest-950">
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Best Direct Tariff
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">per night (exclusive of nominal GST)</span>
                </div>

                {/* Perks Strip */}
                <div className="space-y-2 text-xs text-slate-600 bg-cream-50 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 font-medium text-forest-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Breakfast for 2 Guests Included</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-forest-800">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Cancellation up to 48 Hours</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-forest-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No Advance Payment Required</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    to={`/booking?room=${room.id}`}
                    variant="gold"
                    size="lg"
                    className="w-full justify-center py-4 text-forest-950 font-bold shadow-lg"
                    icon={Calendar}
                  >
                    Book This Room Online
                  </Button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-full text-sm font-semibold transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Inquiry</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="w-full flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 px-4 rounded-full text-xs font-semibold transition-colors"
                  >
                    <span>Or Call Front Desk: {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <Link
                    to="/rooms"
                    className="inline-flex items-center gap-1.5 text-xs text-forest-800 hover:underline font-semibold"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to all rooms</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Other Rooms You Might Like */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="font-serif text-2xl font-bold text-forest-950 mb-8 text-center">
              More Rooms at Cloudgreen Resort
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherRooms.map((r) => (
                <div key={r.id} className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row gap-5 items-center">
                  <img src={r.images[0]} alt={r.name} className="w-full sm:w-40 h-32 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-semibold text-forest-700">{r.category}</span>
                    <h4 className="font-serif text-lg font-bold text-forest-950 mt-0.5">{r.name}</h4>
                    <span className="text-xs text-slate-500 block">{r.size} • {r.occupancy}</span>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
                      <span className="font-serif text-lg font-bold text-forest-900">₹{r.price.toLocaleString()}</span>
                      <Link to={`/rooms/${r.slug}`} className="text-xs font-bold text-forest-800 hover:underline">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
