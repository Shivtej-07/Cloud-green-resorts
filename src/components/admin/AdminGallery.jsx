import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit3, Image as ImageIcon, X, Check, CheckCircle2 } from 'lucide-react';
import { useData } from '../../context/DataContext';
import CloudinaryUploader from './CloudinaryUploader';

export default function AdminGallery() {
  const { gallery, galleryCategories, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Rooms',
    caption: '',
    aspect: 'wide',
    image: ''
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Rooms',
      caption: '',
      aspect: 'wide',
      image: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      category: item.category || 'Rooms',
      caption: item.caption || '',
      aspect: item.aspect || 'wide',
      image: item.image || ''
    });
    setIsModalOpen(true);
  };

  const handleCloudinarySuccess = (url) => {
    setFormData(prev => ({ ...prev, image: url }));
    showToast('Image uploaded to Cloudinary successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert('Please upload an image or provide an image URL.');
      return;
    }

    if (editingItem) {
      updateGalleryItem(editingItem.id, formData);
      showToast('Gallery item updated successfully!');
    } else {
      addGalleryItem(formData);
      showToast('New photo added to gallery!');
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Delete "${title || 'this photo'}" from gallery?`)) {
      deleteGalleryItem(id);
      showToast('Photo removed from gallery.');
    }
  };

  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

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
            Resort Gallery Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Upload resort, rooms, dining, and scenic landscape photos directly to Cloudinary CDN.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Upload New Photo</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
            selectedCategory === 'All'
              ? 'bg-forest-800 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          All Photos ({gallery.length})
        </button>
        {galleryCategories?.map((cat) => {
          const catName = typeof cat === 'string' ? cat : cat.id;
          const catLabel = typeof cat === 'string' ? cat : cat.label;
          if (catName === 'All') return null;
          const count = gallery.filter(item => item.category === catName).length;
          return (
            <button
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === catName
                  ? 'bg-forest-800 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {catLabel} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all group flex flex-col"
          >
            <div className="relative h-44 overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.title || 'Resort Photo'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-forest-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md border border-white/20">
                  {item.category}
                </span>
              </div>
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg transition-colors backdrop-blur-md"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item.id, item.title)}
                  className="p-1.5 bg-rose-600/90 hover:bg-rose-600 text-white rounded-lg transition-colors backdrop-blur-md"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-xs text-forest-950 line-clamp-1">
                  {item.title || 'Untitled'}
                </h4>
                {item.caption && (
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                )}
              </div>
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                <span className="capitalize">{item.aspect || 'wide'} ratio</span>
                {item.image?.includes('cloudinary') && (
                  <span className="text-sky-600 font-medium">Cloudinary</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Add / Edit Photo */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden my-auto"
            >
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="font-serif text-lg font-bold text-forest-950">
                  {editingItem ? 'Edit Gallery Photo' : 'Upload Photo to Gallery'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Cloudinary Uploader */}
                <div className="bg-forest-50/50 p-4 rounded-2xl border border-forest-100">
                  <CloudinaryUploader
                    folder="cloudgreen/gallery"
                    label="Upload Photo to Cloudinary"
                    onUploadSuccess={handleCloudinarySuccess}
                  />
                </div>

                {formData.image && (
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Current Selected Photo
                    </label>
                    <div className="h-32 rounded-xl overflow-hidden border border-slate-200 relative bg-slate-900">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Photo Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Misty Morning Sunrise over Valley"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none bg-white"
                    >
                      <option value="Rooms">Rooms</option>
                      <option value="Exterior">Exterior</option>
                      <option value="Dining">Dining</option>
                      <option value="Spa">Spa & Wellness</option>
                      <option value="Nature">Nature & Hills</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Card Aspect
                    </label>
                    <select
                      value={formData.aspect}
                      onChange={(e) => setFormData({ ...formData, aspect: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none bg-white"
                    >
                      <option value="wide">Wide (16:9)</option>
                      <option value="square">Square (1:1)</option>
                      <option value="tall">Tall / Portrait</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Caption / Description
                  </label>
                  <textarea
                    rows={2}
                    value={formData.caption}
                    onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                    placeholder="Optional short story or note about this view..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-forest-800 hover:bg-forest-900 text-white rounded-xl text-xs font-semibold shadow-md flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{editingItem ? 'Save Photo' : 'Add to Gallery'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
