import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Star, 
  Bed, 
  Users, 
  ExternalLink, 
  Edit3, 
  Check, 
  X, 
  Sparkles, 
  Search, 
  Filter,
  CheckCircle2,
  Tag,
  ArrowUpRight,
  ShieldCheck,
  Eye,
  Utensils,
  Waves
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function AdminProperties({ onNavigateTab }) {
  const { properties, updateProperty, offers } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [editingPropId, setEditingPropId] = useState(null);
  const [editForm, setEditForm] = useState({
    startingPrice: '',
    rateText: '',
    badge: ''
  });
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Filter properties
  const filteredProperties = properties.filter((prop) => {
    const matchesSearch = 
      prop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.propertyCode.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'resort') return matchesSearch && (prop.category.toLowerCase().includes('resort') || prop.type.toLowerCase().includes('resort'));
    if (filterType === 'villa') return matchesSearch && (prop.category.toLowerCase().includes('villa') || prop.type.toLowerCase().includes('villa'));
    if (filterType === 'cottage') return matchesSearch && (prop.category.toLowerCase().includes('cottage') || prop.type.toLowerCase().includes('cottage'));
    return matchesSearch;
  });

  const startEdit = (prop) => {
    setEditingPropId(prop.id);
    setEditForm({
      startingPrice: prop.startingPrice,
      rateText: prop.rateText || `₹${prop.startingPrice.toLocaleString()} / night`,
      badge: prop.badge || ''
    });
  };

  const cancelEdit = () => {
    setEditingPropId(null);
  };

  const handleSave = (propId) => {
    updateProperty(propId, {
      startingPrice: Number(editForm.startingPrice) || 0,
      rateText: editForm.rateText,
      badge: editForm.badge
    });
    setEditingPropId(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-white p-6 sm:p-8 rounded-3xl border border-forest-700/60 shadow-soft-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5" />
            <span>Reveridge Hospitality Portfolio</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            All 5 Properties &amp; Escapes Management
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Monitor and manage live information, starting tariffs, and promotional badges across all 5 properties in Maharashtra: Flagship Resort, 2 Luxury Private Villas, Heritage Forest Cottage, and the Coastal Dapoli Resort.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/destinations"
              target="_blank"
              className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl text-xs inline-flex items-center gap-1.5 shadow-md transition-transform active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Destinations Directory</span>
            </Link>

            <button
              onClick={() => onNavigateTab && onNavigateTab('offers')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs inline-flex items-center gap-1.5 border border-white/20 transition-colors"
            >
              <Tag className="w-4 h-4 text-gold-400" />
              <span>Manage Offers &amp; Discounts</span>
            </button>
          </div>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Property details and tariff updated successfully! Changes reflect across the site.</span>
        </div>
      )}

      {/* Portfolio Quick Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total Portfolio</span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-forest-950 block mt-1">5 Properties</span>
          <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">100% Active</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Flagship Resort</span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-forest-950 block mt-1">20 Rooms</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">7 Categories • Spa &amp; Pool</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Private Villas</span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-forest-950 block mt-1">6 BHK &amp; 4 BHK</span>
          <span className="text-[10px] text-teal-700 font-medium block mt-0.5">24/7 Dedicated Chef</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Heritage Cottage</span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-forest-950 block mt-1">3 BHK</span>
          <span className="text-[10px] text-amber-700 font-medium block mt-0.5">Vehicle-Free Matheran</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Destination Resort</span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-forest-950 block mt-1">60 Rooms</span>
          <span className="text-[10px] text-indigo-700 font-medium block mt-0.5">24 Operational • 120 MICE</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search property, location, code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-forest-800"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {['all', 'resort', 'villa', 'cottage'].map((f) => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors shrink-0 ${
                filterType === f
                  ? 'bg-forest-800 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f === 'all' ? 'All (5)' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Properties List */}
      <div className="space-y-4">
        {filteredProperties.map((prop) => {
          const isEditing = editingPropId === prop.id;
          const propOffers = offers.filter(
            (o) => o.isActive && (o.applicableProperty === 'all' || o.applicableProperty === prop.id)
          );

          return (
            <div
              key={prop.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-5 sm:p-6 hover:border-gold-400/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* Left Thumbnail (3 cols) */}
                <div className="lg:col-span-3">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative group">
                    <img
                      src={prop.images[0]}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-forest-950/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {prop.propertyCode}
                    </div>
                    {prop.bhk && (
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-bold shadow-xs">
                        {prop.bhk}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{prop.rating}</span>
                      <span className="text-slate-400 font-normal">({prop.reviewCount} reviews)</span>
                    </span>
                    <span className="text-[11px] font-semibold text-forest-800 bg-forest-50 px-2 py-0.5 rounded-md">
                      {prop.starEquivalent || "Boutique Stay"}
                    </span>
                  </div>
                </div>

                {/* Middle Details (6 cols) */}
                <div className="lg:col-span-6 space-y-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-semibold">
                      {prop.type}
                    </span>
                    {prop.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-gold-50 text-gold-800 border border-gold-200 text-[10px] font-bold">
                        {prop.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-950">
                    {prop.name}
                  </h3>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{prop.location}</span>
                    {prop.altitude && <span className="text-slate-400">• {prop.altitude}</span>}
                  </p>

                  <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                    {prop.tagline}
                  </p>

                  {/* Quick specs grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-cream-50 border border-slate-200/60">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">Rooms / Size</span>
                      <span className="font-bold text-slate-800">{prop.size || prop.totalRooms}</span>
                    </div>

                    <div className="p-2 rounded-xl bg-cream-50 border border-slate-200/60">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">Capacity</span>
                      <span className="font-bold text-slate-800">{prop.capacity || "Multi-category"}</span>
                    </div>

                    <div className="p-2 rounded-xl bg-cream-50 border border-slate-200/60 col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">Chef / Meals</span>
                      <span className="font-bold text-slate-800 truncate block">
                        {prop.chef ? "24/7 Personal Chef" : (prop.id.includes('matheran') ? "Self-Use Kitchen" : "Restaurant")}
                      </span>
                    </div>
                  </div>

                  {/* Active Offers for this property */}
                  {propOffers.length > 0 && (
                    <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] uppercase font-bold text-rose-700 flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>Active Offers ({propOffers.length}):</span>
                      </span>
                      {propOffers.map((o) => (
                        <span
                          key={o.id}
                          className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold font-mono"
                          title={o.description}
                        >
                          {o.code} ({o.discountType === 'percentage' ? `${o.discountValue}% OFF` : `₹${o.discountValue} OFF`})
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Tariff & Actions (3 cols) */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full bg-slate-50/70 p-4 rounded-2xl border border-slate-200/70 space-y-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                      Live Starting Tariff
                    </span>

                    {isEditing ? (
                      <div className="space-y-2 mt-1.5">
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold block">Price (₹)</label>
                          <input
                            type="number"
                            value={editForm.startingPrice}
                            onChange={(e) => setEditForm({ ...editForm, startingPrice: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs font-bold text-forest-950 border border-forest-300 rounded-lg focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold block">Tariff Description</label>
                          <input
                            type="text"
                            value={editForm.rateText}
                            onChange={(e) => setEditForm({ ...editForm, rateText: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs text-slate-700 border border-slate-300 rounded-lg focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold block">Badge</label>
                          <input
                            type="text"
                            value={editForm.badge}
                            onChange={(e) => setEditForm({ ...editForm, badge: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs text-slate-700 border border-slate-300 rounded-lg focus:outline-none"
                          />
                        </div>

                        <div className="flex items-center gap-1.5 pt-1">
                          <button
                            onClick={() => handleSave(prop.id)}
                            className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-1">
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-2xl font-bold text-forest-900">
                            ₹{prop.startingPrice.toLocaleString()}
                          </span>
                          <span className="text-xs text-slate-500">/ night</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                          {prop.rateText || "Taxes applicable • Best direct"}
                        </p>
                      </div>
                    )}
                  </div>

                  {!isEditing && (
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <button
                        onClick={() => startEdit(prop)}
                        className="w-full py-2 px-3 rounded-xl bg-white hover:bg-cream-50 text-slate-700 hover:text-forest-900 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Tariff / Badge</span>
                      </button>

                      <Link
                        to={`/destinations/${prop.id}`}
                        target="_blank"
                        className="w-full py-2 px-3 rounded-xl bg-forest-900 hover:bg-forest-950 text-gold-400 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                      >
                        <span>Preview Live Page</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

