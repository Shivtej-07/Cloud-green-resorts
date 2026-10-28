import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  MapPin, 
  Video, 
  Share2, 
  Check, 
  CheckCircle2, 
  UploadCloud,
  FileText
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import CloudinaryUploader from './CloudinaryUploader';

export default function AdminResortInfo() {
  const { siteConfig, updateSiteConfig } = useData();
  const [formData, setFormData] = useState(() => JSON.parse(JSON.stringify(siteConfig)));
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' | 'branding' | 'media' | 'address' | 'socials'
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    updateSiteConfig(formData);
    showToast('Resort information updated successfully!');
  };

  const handleVideoUploadSuccess = (url) => {
    setFormData(prev => ({
      ...prev,
      media: {
        ...prev.media,
        heroVideo: url
      }
    }));
    showToast('Hero video updated via Cloudinary!');
  };

  const handlePosterUploadSuccess = (url) => {
    setFormData(prev => ({
      ...prev,
      media: {
        ...prev.media,
        heroPoster: url
      }
    }));
    showToast('Hero poster image updated via Cloudinary!');
  };

  return (
    <div className="space-y-6">
      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 bg-forest-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-forest-700 text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft">
        <div>
          <h2 className="text-xl font-bold text-forest-950 font-serif">
            Resort & Contact Information
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Update phone numbers, WhatsApp link, address, hero background video & poster, and branding details.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-5 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
        >
          <Check className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white px-6 rounded-2xl shadow-soft gap-4 text-xs font-semibold overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('contact')}
          className={`py-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'contact'
              ? 'border-forest-800 text-forest-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Phone className="w-4 h-4 text-forest-700" />
          <span>Contact & WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('media')}
          className={`py-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'media'
              ? 'border-forest-800 text-forest-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Video className="w-4 h-4 text-forest-700" />
          <span>Hero Video & Poster</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('branding')}
          className={`py-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'branding'
              ? 'border-forest-800 text-forest-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Building2 className="w-4 h-4 text-forest-700" />
          <span>Resort Branding & Rates</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('address')}
          className={`py-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'address'
              ? 'border-forest-800 text-forest-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <MapPin className="w-4 h-4 text-forest-700" />
          <span>Location & Maps</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('socials')}
          className={`py-3.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'socials'
              ? 'border-forest-800 text-forest-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Share2 className="w-4 h-4 text-forest-700" />
          <span>Social Media Links</span>
        </button>
      </div>

      {/* Form Content */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-soft">
        {/* TAB 1: CONTACT & WHATSAPP */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
              <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-900 leading-relaxed">
                Updating your <strong>WhatsApp Number</strong> will instantly update all WhatsApp booking buttons, inquiry modals, and direct chat links across the entire website.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Number (with country code, digits only) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact?.whatsapp || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    contact: { ...formData.contact, whatsapp: e.target.value.replace(/[^0-9]/g, '') }
                  })}
                  placeholder="e.g. 919420633577"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm font-mono font-bold text-forest-950 focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Example: 919420633577 for India (+91)
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Phone Display *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact?.phoneDisplay || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    contact: { ...formData.contact, phoneDisplay: e.target.value, phone: e.target.value }
                  })}
                  placeholder="+91 94206 33577"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alternate Contact Phone
                </label>
                <input
                  type="text"
                  value={formData.contact?.altPhone || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    contact: { ...formData.contact, altPhone: e.target.value }
                  })}
                  placeholder="+91 94206 33578"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Reservations Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.contact?.email || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    contact: { ...formData.contact, email: e.target.value }
                  })}
                  placeholder="reservations@cloudgreenresort.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Support / Info Email
                </label>
                <input
                  type="email"
                  value={formData.contact?.supportEmail || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    contact: { ...formData.contact, supportEmail: e.target.value }
                  })}
                  placeholder="info@cloudgreenresort.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HERO VIDEO & POSTER */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 flex items-start gap-3">
              <Video className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
              <p className="text-xs text-sky-900 leading-relaxed">
                The <strong>Hero Video</strong> plays in the background of the homepage header with high-quality streaming from Cloudinary. You can upload a new video or background poster image directly.
              </p>
            </div>

            {/* Video Uploader */}
            <div className="border border-slate-200 rounded-2xl p-5 space-y-4">
              <h4 className="font-semibold text-sm text-forest-950 flex items-center gap-2">
                <Video className="w-4 h-4 text-forest-700" />
                <span>Homepage Hero Video</span>
              </h4>

              <div className="bg-slate-50 p-4 rounded-xl">
                <CloudinaryUploader
                  folder="cloudgreen/hero"
                  resourceType="video"
                  label="Upload New Hero Video to Cloudinary"
                  onUploadSuccess={handleVideoUploadSuccess}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Current Hero Video URL
                </label>
                <input
                  type="text"
                  value={formData.media?.heroVideo || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    media: { ...formData.media, heroVideo: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              {formData.media?.heroVideo && (
                <div className="max-w-md rounded-2xl overflow-hidden border border-slate-300 bg-black aspect-video">
                  <video
                    src={formData.media.heroVideo}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Poster Uploader */}
            <div className="border border-slate-200 rounded-2xl p-5 space-y-4">
              <h4 className="font-semibold text-sm text-forest-950 flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-forest-700" />
                <span>Hero Poster Fallback Image</span>
              </h4>

              <div className="bg-slate-50 p-4 rounded-xl">
                <CloudinaryUploader
                  folder="cloudgreen/hero"
                  label="Upload Hero Poster to Cloudinary"
                  onUploadSuccess={handlePosterUploadSuccess}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Current Poster Image URL
                </label>
                <input
                  type="text"
                  value={formData.media?.heroPoster || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    media: { ...formData.media, heroPoster: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              {formData.media?.heroPoster && (
                <div className="max-w-md rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 aspect-video">
                  <img
                    src={formData.media.heroPoster}
                    alt="Hero Poster"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: BRANDING & RATES */}
        {activeTab === 'branding' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Resort Name *
                </label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Native Marathi Name
                </label>
                <input
                  type="text"
                  value={formData.marathiName || ''}
                  onChange={(e) => setFormData({ ...formData, marathiName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={formData.tagline || ''}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={formData.subtitle || ''}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Starting Nightly Rate (₹)
                </label>
                <input
                  type="number"
                  value={formData.startingPrice || 1897}
                  onChange={(e) => setFormData({ ...formData, startingPrice: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm font-bold text-forest-900 focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Star Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.rating || 4.3}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Check-in Time
                </label>
                <input
                  type="text"
                  value={formData.checkIn || '2:00 PM'}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Check-out Time
                </label>
                <input
                  type="text"
                  value={formData.checkOut || '11:00 AM'}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ADDRESS & MAPS */}
        {activeTab === 'address' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Street / Road *
                </label>
                <input
                  type="text"
                  value={formData.address?.street || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, street: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Landmark
                </label>
                <input
                  type="text"
                  value={formData.address?.landmark || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, landmark: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.address?.city || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, city: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  value={formData.address?.state || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, state: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  value={formData.address?.pincode || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    address: { ...formData.address, pincode: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Address String
              </label>
              <input
                type="text"
                value={formData.address?.full || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, full: e.target.value }
                })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Google Maps Embed URL
              </label>
              <input
                type="text"
                value={formData.googleMapsEmbedUrl || ''}
                onChange={(e) => setFormData({ ...formData, googleMapsEmbedUrl: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-forest-800 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* TAB 5: SOCIALS */}
        {activeTab === 'socials' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Instagram Profile URL
                </label>
                <input
                  type="url"
                  value={formData.socials?.instagram || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socials: { ...formData.socials, instagram: e.target.value }
                  })}
                  placeholder="https://instagram.com/cloudgreenresort"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Facebook Page URL
                </label>
                <input
                  type="url"
                  value={formData.socials?.facebook || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socials: { ...formData.socials, facebook: e.target.value }
                  })}
                  placeholder="https://facebook.com/cloudgreenresort"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Google Reviews Link
                </label>
                <input
                  type="url"
                  value={formData.socials?.googleReviews || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socials: { ...formData.socials, googleReviews: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  TripAdvisor Link
                </label>
                <input
                  type="url"
                  value={formData.socials?.tripadvisor || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socials: { ...formData.socials, tripadvisor: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Save button footer */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-sm font-semibold shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Save All Resort Information</span>
          </button>
        </div>
      </div>
    </div>
  );
}
