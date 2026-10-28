import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon, Link as LinkIcon, X } from 'lucide-react';
import { uploadToCloudinary, CLOUDINARY_CONFIG } from '../../utils/cloudinary';

/**
 * Reusable Cloudinary Image Uploader
 * 
 * @param {Object} props
 * @param {string} [props.folder='cloudgreen/rooms'] - Target Cloudinary folder
 * @param {'image'|'video'|'auto'} [props.resourceType='image'] - Resource type
 * @param {Function} props.onUploadSuccess - Callback(secureUrl, fullResponse)
 * @param {string} [props.label='Upload Image to Cloudinary'] - Label text
 * @param {string} [props.buttonText='Upload'] - Button text
 * @param {boolean} [props.showUrlInput=true] - Whether to allow manual URL pasting
 */
export default function CloudinaryUploader({
  folder = 'cloudgreen/rooms',
  resourceType = 'image',
  onUploadSuccess,
  label = 'Upload Image to Cloudinary',
  buttonText = 'Upload',
  showUrlInput = true,
  className = ''
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [manualUrl, setManualUrl] = useState('');
  const [showManual, setShowManual] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = async (file) => {
    if (!file) return;

    // Reset states
    setError('');
    setSuccessMsg('');
    setUploadProgress(0);

    // Create local preview if image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }

    try {
      setIsUploading(true);
      const res = await uploadToCloudinary(file, {
        folder,
        resourceType,
        onProgress: (percent) => setUploadProgress(percent)
      });

      setSuccessMsg('Uploaded to Cloudinary successfully!');
      if (onUploadSuccess) {
        onUploadSuccess(res.secure_url, res);
      }

      // Reset preview after 2 seconds
      setTimeout(() => {
        setSuccessMsg('');
        setPreview(null);
        setUploadProgress(0);
      }, 3000);
    } catch (err) {
      console.error('Cloudinary upload error:', err);
      setError(err.message || 'Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualUrl.trim()) return;
    if (onUploadSuccess) {
      onUploadSuccess(manualUrl.trim(), { secure_url: manualUrl.trim() });
    }
    setSuccessMsg('URL added successfully!');
    setManualUrl('');
    setShowManual(false);
    setTimeout(() => setSuccessMsg(''), 2500);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-forest-900 flex items-center gap-1.5">
          <UploadCloud className="w-4 h-4 text-forest-700" />
          {label}
        </label>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
            Cloud: {CLOUDINARY_CONFIG.cloudName}
          </span>
          {showUrlInput && (
            <button
              type="button"
              onClick={() => setShowManual(!showManual)}
              className="text-xs text-forest-700 hover:text-forest-900 underline flex items-center gap-1"
            >
              <LinkIcon className="w-3 h-3" />
              {showManual ? 'Upload File' : 'Paste URL'}
            </button>
          )}
        </div>
      </div>

      {showManual ? (
        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            type="url"
            value={manualUrl}
            onChange={(e) => setManualUrl(e.target.value)}
            placeholder="https://res.cloudinary.com/... or https://..."
            className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-forest-800 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-forest-800 text-white text-sm font-semibold rounded-xl hover:bg-forest-900 transition-colors"
          >
            Add URL
          </button>
        </form>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? 'border-forest-600 bg-forest-50/50 scale-[0.99]'
              : 'border-slate-300 hover:border-forest-700 hover:bg-slate-50/70 bg-white'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={resourceType === 'video' ? 'video/*' : 'image/*'}
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            className="hidden"
            disabled={isUploading}
          />

          {isUploading ? (
            <div className="py-3 space-y-3">
              <div className="flex items-center justify-center gap-2 text-forest-800 font-semibold text-sm">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Uploading to Cloudinary... {uploadProgress}%</span>
              </div>
              <div className="w-full max-w-xs mx-auto bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-forest-700 h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-xs text-slate-500">Folder: {folder}</p>
            </div>
          ) : (
            <div className="space-y-2 py-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-forest-50 text-forest-800 flex items-center justify-center shadow-inner">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">
                Click or drag & drop to upload
              </p>
              <p className="text-xs text-slate-500">
                Direct Cloudinary upload &bull; Auto WebP &bull; High-res
              </p>
            </div>
          )}

          {preview && !isUploading && (
            <div className="mt-3 relative inline-block">
              <img
                src={preview}
                alt="Preview"
                className="h-20 w-auto rounded-xl object-cover border border-slate-200 shadow-sm mx-auto"
              />
            </div>
          )}
        </div>
      )}

      {/* Status Messages */}
      {successMsg && (
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-2 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
