import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Star, 
  Users, 
  Maximize2, 
  Check, 
  X, 
  ArrowUp, 
  ArrowDown, 
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import CloudinaryUploader from './CloudinaryUploader';

export default function AdminRooms() {
  const { rooms, updateRoom, addRoom, deleteRoom } = useData();
  const [editingRoom, setEditingRoom] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('images'); // 'images' | 'details' | 'amenities'
  const [toastMessage, setToastMessage] = useState('');
  const [newAmenity, setNewAmenity] = useState('');
  const [newHighlight, setNewHighlight] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleOpenEdit = (room) => {
    setEditingRoom(JSON.parse(JSON.stringify(room)));
    setIsCreatingNew(false);
    setActiveModalTab('images');
  };

  const handleOpenCreate = () => {
    setEditingRoom({
      id: '',
      slug: '',
      name: 'New Luxury Room',
      category: 'Deluxe',
      tag: 'New',
      featured: true,
      price: 2499,
      originalPrice: 3199,
      size: '300 sq.ft',
      bedType: 'King Bed',
      occupancy: '2 Adults + 1 Child',
      view: 'Scenic Valley View',
      rating: 4.6,
      reviewCount: 1,
      description: 'Elegant hill-view room with modern amenities and peaceful mountain atmosphere.',
      overview: 'Designed for optimal rest, featuring premium bedding, panoramic windows, and complimentary Wi-Fi.',
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
      ],
      amenities: [
        'King Size Bed with Luxury Linens',
        'Complimentary High-Speed Wi-Fi',
        '32" Smart LED TV',
        '24/7 Hot Water Bath'
      ],
      highlights: ['Free Breakfast', 'Hill View', 'Wi-Fi']
    });
    setIsCreatingNew(true);
    setActiveModalTab('images');
  };

  const handleSave = () => {
    if (!editingRoom || !editingRoom.name.trim()) return;

    if (isCreatingNew) {
      addRoom(editingRoom);
      showToast('New room added successfully!');
    } else {
      updateRoom(editingRoom.id, editingRoom);
      showToast(`Updated "${editingRoom.name}" successfully!`);
    }

    setEditingRoom(null);
    setIsCreatingNew(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteRoom(id);
      showToast(`Deleted "${name}".`);
    }
  };

  // Image manipulation inside editing room
  const handleCloudinarySuccess = (uploadedUrl) => {
    if (!editingRoom) return;
    const currentImages = editingRoom.images || [];
    setEditingRoom({
      ...editingRoom,
      images: [...currentImages, uploadedUrl]
    });
    showToast('New image added to room gallery!');
  };

  const setAsCoverImage = (index) => {
    if (!editingRoom || index === 0) return;
    const images = [...editingRoom.images];
    const [selected] = images.splice(index, 1);
    images.unshift(selected);
    setEditingRoom({ ...editingRoom, images });
    showToast('Cover image updated! This will appear on room cards.');
  };

  const moveImage = (fromIdx, toIdx) => {
    if (!editingRoom || toIdx < 0 || toIdx >= editingRoom.images.length) return;
    const images = [...editingRoom.images];
    const [item] = images.splice(fromIdx, 1);
    images.splice(toIdx, 0, item);
    setEditingRoom({ ...editingRoom, images });
  };

  const removeImage = (index) => {
    if (!editingRoom) return;
    if (editingRoom.images.length <= 1) {
      alert('A room must have at least one image.');
      return;
    }
    const images = editingRoom.images.filter((_, idx) => idx !== index);
    setEditingRoom({ ...editingRoom, images });
  };

  // Amenities & Highlights helpers
  const handleAddAmenity = (e) => {
    e.preventDefault();
    if (!newAmenity.trim() || !editingRoom) return;
    setEditingRoom({
      ...editingRoom,
      amenities: [...(editingRoom.amenities || []), newAmenity.trim()]
    });
    setNewAmenity('');
  };

  const handleRemoveAmenity = (idx) => {
    if (!editingRoom) return;
    setEditingRoom({
      ...editingRoom,
      amenities: editingRoom.amenities.filter((_, i) => i !== idx)
    });
  };

  const handleAddHighlight = (e) => {
    e.preventDefault();
    if (!newHighlight.trim() || !editingRoom) return;
    setEditingRoom({
      ...editingRoom,
      highlights: [...(editingRoom.highlights || []), newHighlight.trim()]
    });
    setNewHighlight('');
  };

  const handleRemoveHighlight = (idx) => {
    if (!editingRoom) return;
    setEditingRoom({
      ...editingRoom,
      highlights: editingRoom.highlights.filter((_, i) => i !== idx)
    });
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
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
            Rooms & Suites Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Change room photos with Cloudinary, adjust nightly prices, update descriptions, and manage amenities.
          </p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Room</span>
        </button>
      </div>

      {/* Room list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.map((room) => {
          const coverImage = room.images?.[0] || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80';
          const isCloudinary = coverImage.includes('cloudinary');

          return (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image preview */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={coverImage}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                  {room.tag && (
                    <span className="bg-forest-900/90 text-gold-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-gold-500/30 backdrop-blur-md">
                      {room.tag}
                    </span>
                  )}
                  <span className="bg-white/90 text-forest-900 text-[11px] font-medium px-2 py-0.5 rounded-full backdrop-blur-md">
                    {room.category}
                  </span>
                </div>

                {/* Cloudinary indicator */}
                <div className="absolute top-3 right-3">
                  {isCloudinary ? (
                    <span className="bg-sky-950/80 text-sky-300 border border-sky-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md">
                      Cloudinary
                    </span>
                  ) : (
                    <span className="bg-slate-900/70 text-slate-300 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-md">
                      External
                    </span>
                  )}
                </div>

                {/* Image counter & Size */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs">
                  <span className="font-semibold drop-shadow">{room.size}</span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-medium">
                    {room.images?.length || 0} Photos
                  </span>
                </div>
              </div>

              {/* Room Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-forest-950 line-clamp-1">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-forest-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full shrink-0">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{room.rating}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5">
                    {room.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Occupancy</span>
                      <span className="font-medium text-forest-950">{room.occupancy}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Nightly Rate</span>
                      <span className="text-base font-bold text-forest-900 font-serif">₹{room.price}</span>
                      {room.originalPrice && (
                        <span className="text-[11px] text-slate-400 line-through ml-1">₹{room.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenEdit(room)}
                    className="flex-1 py-2 px-3 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Room & Images</span>
                  </button>
                  <button
                    onClick={() => handleDelete(room.id, room.name)}
                    title="Delete Room"
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-rose-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit Room Modal */}
      <AnimatePresence>
        {editingRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden my-auto"
            >
              {/* Modal Top Bar */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest-950">
                    {isCreatingNew ? 'Create New Room' : `Edit: ${editingRoom.name}`}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Upload images to Cloudinary, configure pricing, and room features
                  </p>
                </div>
                <button
                  onClick={() => setEditingRoom(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 px-6 bg-slate-50/30 gap-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveModalTab('images')}
                  className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeModalTab === 'images'
                      ? 'border-forest-800 text-forest-900 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 text-forest-700" />
                  <span>Images & Cloudinary ({editingRoom.images?.length || 0})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalTab('details')}
                  className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeModalTab === 'details'
                      ? 'border-forest-800 text-forest-900 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>Basic Details & Pricing</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalTab('amenities')}
                  className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeModalTab === 'amenities'
                      ? 'border-forest-800 text-forest-900 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>Amenities & Highlights</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                {/* TAB 1: IMAGES & CLOUDINARY */}
                {activeModalTab === 'images' && (
                  <div className="space-y-6">
                    {/* Cloudinary Uploader */}
                    <div className="bg-forest-50/40 p-5 rounded-2xl border border-forest-100">
                      <CloudinaryUploader
                        folder="cloudgreen/rooms"
                        label="Upload New Photo for this Room to Cloudinary"
                        onUploadSuccess={handleCloudinarySuccess}
                      />
                    </div>

                    {/* Current Images List */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Room Gallery ({editingRoom.images?.length || 0} images)
                        </label>
                        <span className="text-[11px] text-forest-800 font-medium bg-forest-50 px-2 py-0.5 rounded-full border border-forest-200">
                          ★ Image #1 is the Primary Cover Image
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {(editingRoom.images || []).map((imgUrl, idx) => (
                          <div
                            key={idx}
                            className={`relative rounded-2xl overflow-hidden border-2 bg-slate-900 group shadow-sm transition-all ${
                              idx === 0 ? 'border-forest-700 ring-2 ring-forest-500/30' : 'border-slate-200'
                            }`}
                          >
                            <img
                              src={imgUrl}
                              alt={`Room image ${idx + 1}`}
                              className="w-full h-36 object-cover"
                            />

                            {/* Badge */}
                            <div className="absolute top-2 left-2">
                              {idx === 0 ? (
                                <span className="bg-forest-900 text-gold-300 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-gold-500/40 flex items-center gap-1">
                                  <Star className="w-2.5 h-2.5 fill-gold-400" />
                                  Cover Image
                                </span>
                              ) : (
                                <span className="bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
                                  Photo #{idx + 1}
                                </span>
                              )}
                            </div>

                            {/* Actions overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                              <div className="flex justify-end gap-1">
                                <button
                                  type="button"
                                  onClick={() => removeImage(idx)}
                                  title="Delete image"
                                  className="p-1.5 bg-rose-600/90 hover:bg-rose-600 text-white rounded-lg transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="flex items-center justify-between gap-1">
                                {idx !== 0 && (
                                  <button
                                    type="button"
                                    onClick={() => setAsCoverImage(idx)}
                                    className="px-2 py-1 bg-forest-700 hover:bg-forest-600 text-white rounded-lg text-[10px] font-semibold flex items-center gap-1 shadow"
                                  >
                                    <Star className="w-3 h-3 text-gold-300" />
                                    <span>Make Cover</span>
                                  </button>
                                )}
                                <div className="flex gap-1 ml-auto">
                                  {idx > 0 && (
                                    <button
                                      type="button"
                                      onClick={() => moveImage(idx, idx - 1)}
                                      title="Move earlier"
                                      className="p-1 bg-white/20 hover:bg-white/40 text-white rounded-md text-xs"
                                    >
                                      <ArrowUp className="w-3 h-3" />
                                    </button>
                                  )}
                                  {idx < editingRoom.images.length - 1 && (
                                    <button
                                      type="button"
                                      onClick={() => moveImage(idx, idx + 1)}
                                      title="Move later"
                                      className="p-1 bg-white/20 hover:bg-white/40 text-white rounded-md text-xs"
                                    >
                                      <ArrowDown className="w-3 h-3" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: BASIC DETAILS & PRICING */}
                {activeModalTab === 'details' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Room Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={editingRoom.name}
                          onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Category / Type
                        </label>
                        <input
                          type="text"
                          value={editingRoom.category}
                          onChange={(e) => setEditingRoom({ ...editingRoom, category: e.target.value })}
                          placeholder="Family / Valley View / Double / Cottage"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Tag / Badge
                        </label>
                        <input
                          type="text"
                          value={editingRoom.tag || ''}
                          onChange={(e) => setEditingRoom({ ...editingRoom, tag: e.target.value })}
                          placeholder="Family Favorite / Best Value"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nightly Rate (₹) *
                        </label>
                        <input
                          type="number"
                          value={editingRoom.price}
                          onChange={(e) => setEditingRoom({ ...editingRoom, price: Number(e.target.value) })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm font-bold text-forest-900 focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Original / Strike Price (₹)
                        </label>
                        <input
                          type="number"
                          value={editingRoom.originalPrice || ''}
                          onChange={(e) => setEditingRoom({ ...editingRoom, originalPrice: Number(e.target.value) })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm text-slate-500 focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Room Size
                        </label>
                        <input
                          type="text"
                          value={editingRoom.size}
                          onChange={(e) => setEditingRoom({ ...editingRoom, size: e.target.value })}
                          placeholder="e.g. 460 sq.ft"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Bed Type
                        </label>
                        <input
                          type="text"
                          value={editingRoom.bedType}
                          onChange={(e) => setEditingRoom({ ...editingRoom, bedType: e.target.value })}
                          placeholder="e.g. 2 Queen Beds / 1 King Bed"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Max Occupancy
                        </label>
                        <input
                          type="text"
                          value={editingRoom.occupancy}
                          onChange={(e) => setEditingRoom({ ...editingRoom, occupancy: e.target.value })}
                          placeholder="e.g. 4 Adults + 2 Children"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        View Description
                      </label>
                      <input
                        type="text"
                        value={editingRoom.view}
                        onChange={(e) => setEditingRoom({ ...editingRoom, view: e.target.value })}
                        placeholder="e.g. Mountain & Strawberry Farm View"
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Short Description
                      </label>
                      <textarea
                        rows={2}
                        value={editingRoom.description}
                        onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Detailed Overview
                      </label>
                      <textarea
                        rows={3}
                        value={editingRoom.overview || ''}
                        onChange={(e) => setEditingRoom({ ...editingRoom, overview: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 3: AMENITIES & HIGHLIGHTS */}
                {activeModalTab === 'amenities' && (
                  <div className="space-y-6">
                    {/* Amenities */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Included Room Amenities
                      </label>
                      <form onSubmit={handleAddAmenity} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={newAmenity}
                          onChange={(e) => setNewAmenity(e.target.value)}
                          placeholder="e.g. Free Wi-Fi, King Bed, Rain Shower"
                          className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-semibold hover:bg-forest-900 transition-colors"
                        >
                          Add
                        </button>
                      </form>

                      <div className="flex flex-wrap gap-2">
                        {(editingRoom.amenities || []).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                          >
                            <Check className="w-3.5 h-3.5 text-forest-700" />
                            <span>{amenity}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveAmenity(idx)}
                              className="text-slate-400 hover:text-rose-600 ml-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="pt-4 border-t border-slate-100">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Key Highlights Tags
                      </label>
                      <form onSubmit={handleAddHighlight} className="flex gap-2 mb-3">
                        <input
                          type="text"
                          value={newHighlight}
                          onChange={(e) => setNewHighlight(e.target.value)}
                          placeholder="e.g. Free Breakfast for all, Sleeps up to 6"
                          className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-forest-800 text-white rounded-xl text-xs font-semibold hover:bg-forest-900 transition-colors"
                        >
                          Add
                        </button>
                      </form>

                      <div className="flex flex-wrap gap-2">
                        {(editingRoom.highlights || []).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-forest-50 border border-forest-200 text-forest-900 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                          >
                            <span>{highlight}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveHighlight(idx)}
                              className="text-forest-400 hover:text-rose-600 ml-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setEditingRoom(null)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-white transition-colors"
                >
                  Cancel
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-sm font-semibold shadow-md transition-all active:scale-95 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save & Publish Changes</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
