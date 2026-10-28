import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Bed, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Calculator, 
  Phone, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function EnquiryForm() {
  const { rooms, siteConfig } = useData();
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [submittedWhatsApp, setSubmittedWhatsApp] = useState(false);

  // Read initial values from URL search params if navigated from Hero Availability Bar
  const initialCheckIn = searchParams.get('checkIn') || '';
  const initialCheckOut = searchParams.get('checkOut') || '';
  const initialGuests = searchParams.get('guests') || '2 Adults';
  const initialRoom = searchParams.get('room') || rooms[0].id;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      roomType: initialRoom,
      checkIn: initialCheckIn || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      checkOut: initialCheckOut || new Date(Date.now() + 172800000).toISOString().split('T')[0],
      guests: initialGuests,
      roomsCount: 1,
      specialRequests: ''
    }
  });

  const selectedRoomId = watch('roomType');
  const checkInDate = watch('checkIn');
  const checkOutDate = watch('checkOut');
  const roomsCount = watch('roomsCount') || 1;

  // Selected room object
  const currentRoom = rooms.find(r => r.id === selectedRoomId) || rooms[0];

  // Calculate estimated nights and price
  const calculateStay = () => {
    if (!checkInDate || !checkOutDate) return { nights: 1, total: currentRoom.price * roomsCount };
    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    const diffTime = d2.getTime() - d1.getTime();
    const nights = Math.max(1, Math.round(diffTime / (1000 * 3600 * 24)));
    const total = nights * currentRoom.price * Number(roomsCount);
    return { nights, total };
  };

  const { nights, total } = calculateStay();

  const generateWhatsAppUrl = (data) => {
    return buildWhatsAppLink({
      name: data.name,
      phone: data.phone,
      email: data.email,
      roomType: currentRoom.name,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      roomsCount: data.roomsCount,
      specialRequests: data.specialRequests,
      source: "Online Booking Enquiry Form"
    });
  };

  const onSubmit = (data) => {
    const url = generateWhatsAppUrl(data);
    setSubmittedWhatsApp(true);
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    const data = watch();
    const url = generateWhatsAppUrl(data);
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80">
      <div className="mb-8 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Fast WhatsApp Booking Desk</span>
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
            Reserve Your Hill Haven
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Fill the details below to generate a verified reservation inquiry directly sent to our manager on WhatsApp.
          </p>
        </div>

        {/* Live Estimate Badge */}
        <div className="bg-cream-100 border border-gold-500/40 rounded-2xl p-4 text-right shrink-0">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
            Estimated Tariff ({nights} {nights === 1 ? 'Night' : 'Nights'}, {roomsCount} {roomsCount == 1 ? 'Room' : 'Rooms'})
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 block mt-0.5">
            ₹{total.toLocaleString()}
          </span>
          <span className="text-[11px] text-emerald-700 font-medium">Includes Complimentary Breakfast</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Row 1: Guest Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Guest Name <span className="text-red-500">*</span>
            </label>
            <input
              id="enquiry-name"
              type="text"
              placeholder="e.g. Aditi Kulkarni"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium bg-cream-50 focus:bg-white focus:outline-none transition-colors ${
                errors.name ? 'border-red-400' : 'border-slate-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-100'
              }`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              WhatsApp / Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              placeholder="e.g. 09876543210"
              {...register("phone", { required: "Mobile number is required" })}
              className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium bg-cream-50 focus:bg-white focus:outline-none transition-colors ${
                errors.phone ? 'border-red-400' : 'border-slate-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-100'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="enquiry-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address
            </label>
            <input
              id="enquiry-email"
              type="email"
              placeholder="e.g. aditi@example.com"
              {...register("email")}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: Room Selection & Count */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="enquiry-room-type" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Select Preferred Accommodation <span className="text-red-500">*</span>
            </label>
            <select
              id="enquiry-room-type"
              {...register("roomType")}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none cursor-pointer"
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} — ₹{room.price.toLocaleString()}/night ({room.occupancy})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="enquiry-rooms-count" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              No. of Rooms
            </label>
            <select
              id="enquiry-rooms-count"
              {...register("roomsCount")}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none cursor-pointer"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms (Group)</option>
            </select>
          </div>
        </div>

        {/* Row 3: Check-in, Check-out, Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="enquiry-check-in" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Check-in Date <span className="text-red-500">*</span>
            </label>
            <input
              id="enquiry-check-in"
              type="date"
              {...register("checkIn", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="enquiry-check-out" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Check-out Date <span className="text-red-500">*</span>
            </label>
            <input
              id="enquiry-check-out"
              type="date"
              {...register("checkOut", { required: true })}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="enquiry-guests" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Guests Count
            </label>
            <select
              id="enquiry-guests"
              {...register("guests")}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none cursor-pointer"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
              <option value="3 Adults">3 Adults</option>
              <option value="4 Adults (Family)">4 Adults (Family)</option>
              <option value="5+ Adults (Group)">5+ Adults (Group)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Special requests / Pet info */}
        <div>
          <label htmlFor="enquiry-special-requests" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Special Requests / Traveling with Pets? / Arrival Time
          </label>
          <textarea
            id="enquiry-special-requests"
            rows={2}
            placeholder="e.g. Traveling with 1 Golden Retriever, requesting valley-facing balcony, approx 2 PM arrival..."
            {...register("specialRequests")}
            className="w-full p-4 rounded-2xl border border-slate-200 text-sm font-medium bg-cream-50 focus:bg-white focus:border-forest-800 focus:ring-2 focus:ring-forest-100 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full sm:flex-1 justify-center py-4 text-forest-950 font-bold shadow-lg"
            icon={MessageCircle}
          >
            Send Booking Inquiry on WhatsApp
          </Button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-medium inline-flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
            <span>{copied ? "Link Copied!" : "Copy Inquiry Link"}</span>
          </button>
        </div>

        {/* Security / Policy footnote */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct resort reservation — no extra service fees</span>
          </span>
          <span>Standard Check-in: 2:00 PM | Check-out: 11:00 AM</span>
        </div>

      </form>
    </div>
  );
}
