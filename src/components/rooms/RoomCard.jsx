import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Maximize2, 
  Bed, 
  Check, 
  Star, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';
import { buildRoomEnquiryLink } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function RoomCard({ room }) {
  const whatsappUrl = buildRoomEnquiryLink(room.name, room.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col group"
    >
      {/* Image container */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {room.tag && (
            <span className="bg-forest-900/90 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/40 backdrop-blur-md">
              {room.tag}
            </span>
          )}
          <span className="bg-white/90 text-forest-900 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
            {room.category}
          </span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-forest-950 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          <span>{room.rating}</span>
        </div>

        {/* View title on bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
          <span className="truncate drop-shadow">{room.view}</span>
          <span className="text-[11px] text-cream-200 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
            {room.size}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link to={`/rooms/${room.slug}`}>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                {room.name}
              </h3>
            </Link>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {room.description}
          </p>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-3 gap-2 py-3.5 my-3 border-y border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-forest-700 shrink-0" />
              <span className="truncate">{room.occupancy}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-forest-700 shrink-0" />
              <span className="truncate">{room.bedType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4 text-forest-700 shrink-0" />
              <span>{room.size}</span>
            </div>
          </div>

          {/* Quick Amenities preview */}
          <div className="space-y-1.5">
            {room.amenities.slice(0, 3).map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span className="truncate">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing and Actions Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">Starts from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-forest-900">
                ₹{room.price.toLocaleString()}
              </span>
              <span className="text-xs text-slate-500">/ night</span>
              {room.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{room.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Quick WhatsApp Enquiry"
              aria-label={`Enquire on WhatsApp about ${room.name}`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Button
              to={`/rooms/${room.slug}`}
              variant="primary"
              size="sm"
              icon={ArrowRight}
            >
              Details
            </Button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
