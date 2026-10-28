import React from 'react';
import { 
  Bed, 
  Image as ImageIcon, 
  Phone, 
  ExternalLink, 
  Server, 
  Sparkles, 
  ArrowRight, 
  UploadCloud, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { CLOUDINARY_CONFIG } from '../../utils/cloudinary';

export default function AdminDashboard({ onNavigateTab }) {
  const { rooms, siteConfig, gallery } = useData();

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-white p-6 sm:p-8 rounded-3xl border border-forest-700/60 shadow-soft-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cloudgreen Resort & Spa Control Center</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Manage Rooms, Images & Resort Information
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All updates made here—including images uploaded to your Cloudinary cloud 
            <span className="font-mono text-gold-300 ml-1 font-semibold">{CLOUDINARY_CONFIG.cloudName}</span>
            —are published live across the website instantly.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigateTab('rooms')}
              className="px-4 py-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition-transform active:scale-95"
            >
              <Bed className="w-4 h-4" />
              <span>Manage Rooms & Photos</span>
            </button>
            <button
              onClick={() => onNavigateTab('media')}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 border border-white/20 transition-colors"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Cloudinary Direct Uploader</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Configured Rooms
            </span>
            <p className="text-2xl font-bold font-serif text-forest-950 mt-1">
              {rooms.length} Suites
            </p>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>All Active & Bookable</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center">
            <Bed className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Gallery Photos
            </span>
            <p className="text-2xl font-bold font-serif text-forest-950 mt-1">
              {gallery.length} Photos
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Across 5 Categories
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-800 flex items-center justify-center">
            <ImageIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Starting Price
            </span>
            <p className="text-2xl font-bold font-serif text-forest-950 mt-1">
              ₹{siteConfig.startingPrice}
              <span className="text-xs font-sans text-slate-400 font-normal">/night</span>
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Deluxe Double Room
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xl">
            ₹
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Cloudinary Storage
            </span>
            <p className="text-sm font-bold font-mono text-forest-950 mt-1 truncate">
              {CLOUDINARY_CONFIG.cloudName}
            </p>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Signed CDN Connected</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-800 flex items-center justify-center">
            <Server className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
        <h3 className="font-serif text-lg font-bold text-forest-950">
          Quick Shortcuts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div
            onClick={() => onNavigateTab('rooms')}
            className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-forest-50/50 hover:border-forest-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <Bed className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-forest-800 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-semibold text-sm text-forest-950 mt-3">
              Change Room Images
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Upload photos for Mountain View Family Suite or other rooms using Cloudinary.
            </p>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigateTab('gallery')}
            className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-forest-50/50 hover:border-forest-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-forest-800 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-semibold text-sm text-forest-950 mt-3">
              Add Gallery Pictures
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Upload new high-resolution photos of amenities, views, and cottages.
            </p>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onNavigateTab('resort')}
            className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-forest-50/50 hover:border-forest-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-forest-800 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-semibold text-sm text-forest-950 mt-3">
              Update WhatsApp & Contact
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Change the reservations phone number, WhatsApp link, and address details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
