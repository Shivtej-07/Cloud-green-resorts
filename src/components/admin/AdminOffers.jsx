import React, { useState } from 'react';
import { 
  Tag, 
  Percent, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  Copy, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  AlertCircle,
  ToggleLeft,
  ToggleRight,
  Share2,
  ExternalLink
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import WhatsAppIcon from '../common/WhatsAppIcon';
import Button from '../common/Button';

export default function AdminOffers() {
  const { offers, addOffer, updateOffer, deleteOffer, toggleOfferStatus, properties, siteConfig } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOfferId, setEditingOfferId] = useState(null);
  const [copiedCode, setCopiedCode] = useState(null);
  const [filterProperty, setFilterProperty] = useState('all');

  const [formData, setFormData] = useState({
    code: '',
    title: '',
    description: '',
    discountType: 'percentage', // 'percentage' | 'flat'
    discountValue: 10,
    applicableProperty: 'all',
    validTill: '2026-12-31',
    badge: 'Limited Offer',
    isActive: true
  });

  const openCreateModal = () => {
    setEditingOfferId(null);
    setFormData({
      code: '',
      title: '',
      description: '',
      discountType: 'percentage',
      discountValue: 10,
      applicableProperty: 'all',
      validTill: '2026-12-31',
      badge: 'Limited Offer',
      isActive: true
    });
    setIsModalOpen(true);
  };

  const openEditModal = (offer) => {
    setEditingOfferId(offer.id);
    setFormData({
      code: offer.code,
      title: offer.title,
      description: offer.description,
      discountType: offer.discountType,
      discountValue: offer.discountValue,
      applicableProperty: offer.applicableProperty,
      validTill: offer.validTill,
      badge: offer.badge,
      isActive: offer.isActive
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingOfferId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.code || !formData.title) return;

    if (editingOfferId) {
      updateOffer(editingOfferId, formData);
    } else {
      addOffer(formData);
    }
    closeModal();
  };

  const handleCopy = (offer) => {
    const propertyObj = properties.find(p => p.id === offer.applicableProperty);
    const propertyName = propertyObj ? propertyObj.name : "all Reveridge properties";
    const discountText = offer.discountType === 'percentage' ? `${offer.discountValue}% OFF` : `₹${offer.discountValue.toLocaleString()} FLAT OFF`;
    
    const promoShareText = `🌟 Reveridge Hospitality Exclusive Offer! 🌟\n\nUse Promo Code: *${offer.code}* to get *${discountText}* on your booking for ${propertyName}!\n\nOffer: ${offer.title}\nDetails: ${offer.description}\nValid Till: ${offer.validTill}\n\nReserve now directly via WhatsApp: https://wa.me/${siteConfig.contact.whatsapp}`;
    
    navigator.clipboard.writeText(promoShareText);
    setCopiedCode(offer.id);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const filteredOffers = offers.filter(o => {
    if (filterProperty === 'all') return true;
    return o.applicableProperty === 'all' || o.applicableProperty === filterProperty;
  });

  const activeCount = offers.filter(o => o.isActive).length;
  const maxDiscount = Math.max(...offers.filter(o => o.isActive && o.discountType === 'percentage').map(o => o.discountValue), 0);

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-white p-6 sm:p-8 rounded-3xl border border-forest-700/60 shadow-soft-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-400 text-xs font-semibold backdrop-blur-md">
            <Tag className="w-3.5 h-3.5" />
            <span>Offer &amp; Discount Management Facility</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Promotional Offers, Coupons &amp; Seasonal Discounts
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Create and control discount rates across the portfolio. Set site-wide coupons or property-specific offers (percentage or flat discounts) with instant WhatsApp sharing and live availability.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={openCreateModal}
              className="px-4 py-2.5 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold rounded-xl text-xs inline-flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Discount Offer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total Active Offers</span>
          <span className="text-2xl font-serif font-bold text-forest-950 block mt-1">{activeCount} Active</span>
          <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">Out of {offers.length} total</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Peak Percentage Discount</span>
          <span className="text-2xl font-serif font-bold text-rose-600 block mt-1">{maxDiscount}% OFF</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">Long stay &amp; seasonal</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Property Coverage</span>
          <span className="text-2xl font-serif font-bold text-forest-950 block mt-1">5 Properties</span>
          <span className="text-[11px] text-teal-700 font-medium block mt-0.5">Resorts, Villas &amp; Cottage</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Booking Integration</span>
          <span className="text-2xl font-serif font-bold text-forest-950 block mt-1">WhatsApp Direct</span>
          <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">Verified Discount Format</span>
        </div>
      </div>

      {/* Filter by Property Strip */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <Building2 className="w-4 h-4 text-forest-800" />
          <span>Filter Offers by Applicable Property:</span>
        </div>

        <select
          value={filterProperty}
          onChange={(e) => setFilterProperty(e.target.value)}
          className="w-full sm:w-auto px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-cream-50 focus:outline-none focus:border-forest-800 cursor-pointer"
        >
          <option value="all">All Offers (Entire Portfolio)</option>
          {properties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.propertyCode} — {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Offers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredOffers.map((offer) => {
          const propertyObj = properties.find(p => p.id === offer.applicableProperty);
          const propertyLabel = propertyObj ? `${propertyObj.propertyCode}: ${propertyObj.shortName}` : "All 5 Properties";
          const isCopied = copiedCode === offer.id;

          return (
            <div
              key={offer.id}
              className={`bg-white rounded-3xl border p-5 sm:p-6 transition-all shadow-soft flex flex-col justify-between ${
                offer.isActive 
                  ? 'border-slate-200/90 hover:border-gold-400/60' 
                  : 'border-slate-200 opacity-60 bg-slate-50'
              }`}
            >
              <div>
                {/* Header row: Promo code pill + Badge + Status toggle */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-xl bg-forest-900 text-gold-400 font-mono text-xs font-bold tracking-wider shadow-2xs border border-gold-500/30">
                      {offer.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold">
                      {offer.discountType === 'percentage' ? `${offer.discountValue}% OFF` : `₹${offer.discountValue.toLocaleString()} OFF`}
                    </span>
                    {offer.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-gold-50 text-gold-800 border border-gold-200 text-[10px] font-semibold">
                        {offer.badge}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleOfferStatus(offer.id)}
                    title={offer.isActive ? "Deactivate Offer" : "Activate Offer"}
                    className="p-1 text-slate-400 hover:text-forest-900 cursor-pointer transition-colors"
                  >
                    {offer.isActive ? (
                      <ToggleRight className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <ToggleLeft className="w-6 h-6 text-slate-300" />
                    )}
                  </button>
                </div>

                {/* Offer Title & Description */}
                <h3 className="font-serif text-lg font-bold text-forest-950 mb-1">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-4">
                  {offer.description}
                </p>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="p-2.5 rounded-xl bg-cream-50 border border-slate-200/70">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Applies To</span>
                    <span className="font-bold text-forest-900 truncate block mt-0.5">{propertyLabel}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-cream-50 border border-slate-200/70">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">Validity Date</span>
                    <span className="font-bold text-slate-800 block mt-0.5">{offer.validTill}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopy(offer)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isCopied 
                      ? 'bg-emerald-600 text-white shadow-xs' 
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied WhatsApp Promo!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy WhatsApp Promo</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openEditModal(offer)}
                    className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-forest-900 transition-colors cursor-pointer"
                    title="Edit Offer"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => deleteOffer(offer.id)}
                    className="p-1.5 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                    title="Delete Offer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* CREATE / EDIT OFFER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={closeModal} />
          
          <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center font-bold">
                  %
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest-950">
                    {editingOfferId ? 'Edit Discount Offer' : 'Create New Discount Offer'}
                  </h3>
                  <p className="text-xs text-slate-500">Configure discount value &amp; property applicability</p>
                </div>
              </div>

              <button onClick={closeModal} className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Promo Code & Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                    Promo / Coupon Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MONSOON20"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-mono font-bold text-forest-900 focus:outline-none focus:border-forest-800 uppercase"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                    Badge Tagline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Early Bird Special"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-forest-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Offer Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Weekend Flash Sale 20% OFF"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-900 focus:outline-none focus:border-forest-800"
                />
              </div>

              {/* Discount Type & Value */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                    Discount Type
                  </label>
                  <select
                    value={formData.discountType}
                    onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:border-forest-800"
                  >
                    <option value="percentage">Percentage (%)</option>
                    <option value="flat">Flat Amount (₹)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                    Discount Value ({formData.discountType === 'percentage' ? '%' : '₹'}) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder={formData.discountType === 'percentage' ? "e.g. 15" : "e.g. 2000"}
                    value={formData.discountValue}
                    onChange={(e) => setFormData({ ...formData, discountValue: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-bold text-forest-900 focus:outline-none focus:border-forest-800"
                  />
                </div>
              </div>

              {/* Applicable Property */}
              <div>
                <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Applicable Hotel / Property
                </label>
                <select
                  value={formData.applicableProperty}
                  onChange={(e) => setFormData({ ...formData, applicableProperty: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-forest-800"
                >
                  <option value="all">All 5 Properties (Portfolio-wide)</option>
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.propertyCode} — {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Validity Date */}
              <div>
                <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Valid Until Date
                </label>
                <input
                  type="date"
                  value={formData.validTill}
                  onChange={(e) => setFormData({ ...formData, validTill: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-medium text-slate-800 focus:outline-none focus:border-forest-800"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-slate-600 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Offer Description &amp; Terms
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Valid on stays of 2 nights or more. Cannot be combined with other offers."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-light text-slate-700 focus:outline-none focus:border-forest-800"
                />
              </div>

              {/* Active Toggle */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="offer-active"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="rounded text-forest-800 focus:ring-forest-800 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="offer-active" className="text-xs font-semibold text-slate-800 cursor-pointer">
                  Activate this offer immediately for guests
                </label>
              </div>

              {/* CTA buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-forest-900 hover:bg-forest-950 text-gold-400 text-xs font-bold shadow-sm"
                >
                  {editingOfferId ? 'Update Offer' : 'Publish Offer'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

