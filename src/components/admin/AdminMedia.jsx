import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UploadCloud, 
  Copy, 
  Check, 
  Download, 
  Upload, 
  RotateCcw, 
  CheckCircle2, 
  Server, 
  Folder, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { CLOUDINARY_CONFIG } from '../../utils/cloudinary';
import { useData } from '../../context/DataContext';
import CloudinaryUploader from './CloudinaryUploader';

export default function AdminMedia() {
  const { rooms, siteConfig, gallery, resetToDefaults, exportData, importData } = useData();
  const [targetFolder, setTargetFolder] = useState('cloudgreen/rooms');
  const [resourceType, setResourceType] = useState('image');
  const [uploadedAssets, setUploadedAssets] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [importJson, setImportJson] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleUploadSuccess = (url, fullRes) => {
    setUploadedAssets(prev => [
      {
        url,
        publicId: fullRes.public_id,
        format: fullRes.format,
        bytes: fullRes.bytes,
        folder: targetFolder,
        time: new Date().toLocaleTimeString()
      },
      ...prev
    ]);
    showToast('Asset uploaded to Cloudinary successfully!');
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    showToast('Cloudinary URL copied to clipboard!');
    setTimeout(() => setCopiedUrl(''), 2500);
  };

  const handleDownloadBackup = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cloudgreen-resort-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Backup JSON downloaded successfully!');
  };

  const handleImportSubmit = (e) => {
    e.preventDefault();
    if (!importJson.trim()) return;
    const res = importData(importJson.trim());
    if (res.success) {
      showToast('Data restored from JSON backup!');
      setShowImportModal(false);
      setImportJson('');
    } else {
      alert(`Import failed: ${res.error}`);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all modifications back to default? Any changes saved in localStorage will be cleared.')) {
      resetToDefaults();
      showToast('All settings reset to default code values.');
    }
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

      {/* Cloudinary Status Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-forest-950 text-white p-6 rounded-3xl shadow-soft border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-800/80 border border-forest-600/50 flex items-center justify-center text-gold-400">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-serif font-bold text-lg">
                  Cloudinary CDN Active
                </h3>
                <span className="text-[11px] bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                  Cloud: {CLOUDINARY_CONFIG.cloudName}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                API Key: {CLOUDINARY_CONFIG.apiKey ? '••••••••' + CLOUDINARY_CONFIG.apiKey.slice(-4) : 'Configured'} &bull; Signed Uploads: Active
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadBackup}
              className="px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON Backup</span>
            </button>
            <button
              onClick={() => setShowImportModal(true)}
              className="px-3.5 py-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import JSON</span>
            </button>
            <button
              onClick={handleReset}
              title="Reset all settings to default"
              className="p-2 bg-rose-950/60 hover:bg-rose-900 border border-rose-800/60 text-rose-300 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Upload Tool */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-5">
        <div>
          <h3 className="text-lg font-bold text-forest-950 font-serif">
            Direct Cloudinary Uploader
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Upload images or videos directly to Cloudinary storage. Once uploaded, copy the URL to use anywhere in rooms, gallery, or site config.
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
              <Folder className="w-3.5 h-3.5 text-forest-700" />
              <span>Target Cloudinary Folder</span>
            </label>
            <select
              value={targetFolder}
              onChange={(e) => setTargetFolder(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none bg-white font-mono text-xs"
            >
              <option value="cloudgreen/rooms">cloudgreen/rooms (Room photos)</option>
              <option value="cloudgreen/gallery">cloudgreen/gallery (Gallery pictures)</option>
              <option value="cloudgreen/hero">cloudgreen/hero (Hero videos & posters)</option>
              <option value="cloudgreen/resort">cloudgreen/resort (General resort assets)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Resource Type
            </label>
            <select
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-800 focus:outline-none bg-white"
            >
              <option value="image">Image (jpg, png, webp, avif)</option>
              <option value="video">Video (mp4, webm, mov)</option>
            </select>
          </div>
        </div>

        {/* Uploader Box */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <CloudinaryUploader
            folder={targetFolder}
            resourceType={resourceType}
            label={`Upload to folder: ${targetFolder}`}
            onUploadSuccess={handleUploadSuccess}
          />
        </div>
      </div>

      {/* Uploaded Assets History */}
      {uploadedAssets.length > 0 && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
          <h3 className="text-base font-bold text-forest-950 font-serif">
            Recently Uploaded in this Session ({uploadedAssets.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uploadedAssets.map((asset, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-colors"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-slate-200">
                  {asset.url.endsWith('.mp4') ? (
                    <video src={asset.url} className="w-full h-full object-cover" />
                  ) : (
                    <img src={asset.url} alt="Uploaded" className="w-full h-full object-cover" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono font-medium text-forest-950 truncate">
                    {asset.publicId}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Folder: {asset.folder} &bull; {asset.time}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate font-mono mt-0.5">
                    {asset.url}
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(asset.url)}
                  title="Copy URL"
                  className={`p-2 rounded-xl transition-colors ${
                    copiedUrl === asset.url
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {copiedUrl === asset.url ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl border border-slate-200">
            <h3 className="font-serif text-lg font-bold text-forest-950">
              Import JSON Configuration
            </h3>
            <p className="text-xs text-slate-500">
              Paste the exported JSON backup text below to restore all rooms, siteConfig, and gallery photos.
            </p>
            <form onSubmit={handleImportSubmit} className="space-y-4">
              <textarea
                rows={8}
                required
                value={importJson}
                onChange={(e) => setImportJson(e.target.value)}
                placeholder='{"version": "1.0", "rooms": [...], ...}'
                className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-forest-800 focus:outline-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowImportModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-forest-800 text-white rounded-xl text-xs font-semibold shadow hover:bg-forest-900"
                >
                  Restore Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
