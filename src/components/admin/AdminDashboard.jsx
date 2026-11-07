import React from 'react';
import { 
  Building2,
  Tag,
  Bed, 
  Image as ImageIcon, 
  Phone, 
  ExternalLink, 
  Server, 
  Sparkles, 
  ArrowRight, 
  UploadCloud, 
  Eye,
  CheckCircle2,
  Percent
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { CLOUDINARY_CONFIG } from '../../utils/cloudinary';

export default function AdminDashboard({ onNavigateTab }) {
  const { rooms, siteConfig, gallery, properties = [], offers = [] } = useData();
  const activeOffersCount = offers.filter(o => o.isActive).length;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-white p-6 sm:p-8 rounded-3xl border border-forest-700/60 shadow-soft-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reveridge Hospitality Portfolio Control Center</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Manage All 5 Properties, Discount Offers &amp; Content
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Oversee your complete collection of boutique nature escapes across Maharashtra. Update live tariffs, launch promotional discount coupons, manage rooms, and upload Cloudinary assets live.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigateTab('properties')}
              className="px-4 py-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>View All 5 Properties</span>
            </button>

            <button
              onClick={() => onNavigateTab('offers')}
              className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              <Tag className="w-4 h-4" />
              <span>Offers &amp; Discounts ({activeOffersCount} Active)</span>
            </button>

            <button
              onClick={() => onNavigateTab('rooms')}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 border border-white/20 transition-colors cursor-pointer"
            >
              <Bed className="w-4 h-4" />
              <span>Manage Rooms &amp; Photos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Properties */}
        <div 
          onClick={() => onNavigateTab('properties')}
          className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between cursor-pointer hover:border-gold-400/60 transition-all group"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Live Properties
            </span>
            <p className="text-2xl font-bold font-serif text-forest-950 mt-1 group-hover:text-gold-700 transition-colors">
              {properties.length || 5} Escapes
            </p>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>100% Online &amp; Bookable</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2: Offers & Discounts */}
        <div 
          onClick={() => onNavigateTab('offers')}
          className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between cursor-pointer hover:border-rose-400/60 transition-all group"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Discount Facility
            </span>
            <p className="text-2xl font-bold font-serif text-rose-600 mt-1">
              {activeOffersCount} Offers Active
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Up to 25% OFF Coupons
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Tag className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3: Flagship Rooms */}
        <div 
          onClick={() => onNavigateTab('rooms')}
          className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between cursor-pointer hover:border-forest-400/60 transition-all group"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Flagship Rooms
            </span>
            <p className="text-2xl font-bold font-serif text-forest-950 mt-1">
              {rooms.length} Categories
            </p>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Starting from ₹2,500/night
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Bed className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 4: Cloudinary */}
        <div 
          onClick={() => onNavigateTab('media')}
          className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex items-center justify-between cursor-pointer hover:border-sky-400/60 transition-all group"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Cloudinary Storage
            </span>
            <p className="text-sm font-bold font-mono text-forest-950 mt-1 truncate">
              {CLOUDINARY_CONFIG.cloudName}
            </p>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CDN Connected</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-800 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Server className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
        <h3 className="font-serif text-lg font-bold text-forest-950">
          Admin Quick Shortcuts
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1: Properties */}
          <div
            onClick={() => onNavigateTab('properties')}
            className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-forest-50/50 hover:border-forest-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-forest-800 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-semibold text-sm text-forest-950 mt-3">
              All 5 Properties
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              View Mahabaleshwar resort, 6 BHK villa, 4 BHK Lingmala, 3 BHK Matheran &amp; Dapoli resort.
            </p>
          </div>

          {/* Card 2: Offers */}
          <div
            onClick={() => onNavigateTab('offers')}
            className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-rose-50/50 hover:border-rose-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-rose-700 text-white flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-700 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-semibold text-sm text-forest-950 mt-3">
              Offers &amp; Discounts
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Launch discount promo codes, set % or flat discounts, and copy WhatsApp marketing text.
            </p>
          </div>

          {/* Card 3: Room Photos */}
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
              Room Categories
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Update room amenities, descriptions, prices and gallery photos.
            </p>
          </div>

          {/* Card 4: Contact & WhatsApp */}
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
              WhatsApp &amp; Contact
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Change reservations hotline, WhatsApp concierge number and address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
