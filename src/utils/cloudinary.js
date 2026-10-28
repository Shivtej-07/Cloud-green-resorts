/**
 * Cloudinary Client Upload Utility
 * Supports direct signed uploads via Cloudinary REST API with Web Crypto SHA-1 signatures,
 * upload progress tracking, and URL optimization helpers.
 */

export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dswtemx8x',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '644664888297971',
  apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET || 'ou0RTBZngfSQcWH7VEam5uujHNg',
};

/**
 * Generate SHA-1 hex digest using native Web Crypto API with a lightweight pure JS fallback.
 */
async function generateSha1(message) {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    try {
      const msgUint8 = new TextEncoder().encode(message);
      const hashBuffer = await window.crypto.subtle.digest('SHA-1', msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch {
      // Fall through to JS fallback
    }
  }

  // Pure JS SHA-1 fallback
  return jsSha1(message);
}

// Lightweight JS SHA-1 implementation
function jsSha1(str) {
  function rotl(n, s) { return (n << s) | (n >>> (32 - s)); }
  function toHex(n) {
    let s = '';
    for (let i = 7; i >= 0; i--) {
      const v = (n >>> (i * 4)) & 0xf;
      s += v.toString(16);
    }
    return s;
  }

  const utf8 = unescape(encodeURIComponent(str));
  const words = [];
  for (let i = 0; i < utf8.length; i++) {
    words[i >> 2] |= (utf8.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
  }
  const bits = utf8.length * 8;
  words[bits >> 5] |= 0x80 << (24 - (bits % 32));
  words[(((bits + 64) >> 9) << 4) + 15] = bits;

  let [h0, h1, h2, h3, h4] = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  const w = new Array(80);

  for (let i = 0; i < words.length; i += 16) {
    let [a, b, c, d, e] = [h0, h1, h2, h3, h4];
    for (let j = 0; j < 80; j++) {
      if (j < 16) {
        w[j] = words[i + j] || 0;
      } else {
        w[j] = rotl(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      }
      let f, k;
      if (j < 20) {
        f = (b & c) | ((~b) & d);
        k = 0x5a827999;
      } else if (j < 40) {
        f = b ^ c ^ d;
        k = 0x6ed9eba1;
      } else if (j < 60) {
        f = (b & c) | (b & d) | (c & d);
        k = 0x8f1bbcdc;
      } else {
        f = b ^ c ^ d;
        k = 0xca62c1d6;
      }
      const temp = (rotl(a, 5) + f + e + k + w[j]) | 0;
      e = d;
      d = c;
      c = rotl(b, 30);
      b = a;
      a = temp;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
  }
  return [toHex(h0), toHex(h1), toHex(h2), toHex(h3), toHex(h4)].join('');
}

/**
 * Upload a File, Blob, or base64 string to Cloudinary with real-time progress callbacks.
 * 
 * @param {File|Blob|string} file - The file to upload
 * @param {Object} options
 * @param {string} [options.folder='cloudgreen'] - Cloudinary target folder
 * @param {'image'|'video'|'auto'} [options.resourceType='image'] - Resource type
 * @param {string} [options.uploadPreset] - Optional unsigned upload preset
 * @param {Function} [options.onProgress] - Callback (progressPercent: number) => void
 * @returns {Promise<{success: boolean, secure_url: string, public_id: string, [key: string]: any}>}
 */
export async function uploadToCloudinary(file, options = {}) {
  const {
    folder = 'cloudgreen',
    resourceType = 'image',
    uploadPreset,
    onProgress
  } = options;

  const cloudName = CLOUDINARY_CONFIG.cloudName;
  const apiKey = CLOUDINARY_CONFIG.apiKey;
  const apiSecret = CLOUDINARY_CONFIG.apiSecret;

  if (!cloudName) {
    throw new Error('Cloudinary Cloud Name is not configured. Please check your .env settings.');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const formData = new FormData();
  formData.append('file', file);

  if (uploadPreset) {
    // Unsigned upload mode
    formData.append('upload_preset', uploadPreset);
    if (folder) formData.append('folder', folder);
  } else if (apiKey && apiSecret) {
    // Signed upload mode
    // Cloudinary sign parameters must be alphabetically sorted
    let stringToSign = '';
    if (folder) {
      stringToSign = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
      formData.append('folder', folder);
    } else {
      stringToSign = `timestamp=${timestamp}${apiSecret}`;
    }

    const signature = await generateSha1(stringToSign);
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp.toString());
    formData.append('signature', signature);
  } else {
    throw new Error('Either Cloudinary API Key & Secret or an Upload Preset is required for uploading.');
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint);

    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          onProgress(percent);
        }
      };
    }

    xhr.onload = () => {
      try {
        const response = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            success: true,
            secure_url: response.secure_url,
            url: response.url,
            public_id: response.public_id,
            format: response.format,
            width: response.width,
            height: response.height,
            bytes: response.bytes,
            created_at: response.created_at,
            original_filename: response.original_filename
          });
        } else {
          const errorMsg = response.error?.message || `Upload failed with HTTP ${xhr.status}`;
          reject(new Error(errorMsg));
        }
      } catch (err) {
        reject(new Error(`Failed to parse Cloudinary response: ${err.message}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network error occurred while uploading to Cloudinary. Check your internet connection.'));
    };

    xhr.send(formData);
  });
}

/**
 * Optimize an existing Cloudinary URL with transformations (e.g. w_800, c_fill, f_auto, q_auto).
 */
export function getOptimizedCloudinaryUrl(url, { width, height, crop = 'fill', quality = 'auto', format = 'auto' } = {}) {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }

  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;

  const transforms = [];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop && (width || height)) transforms.push(`c_${crop}`);
  if (quality) transforms.push(`q_${quality}`);
  if (format) transforms.push(`f_${format}`);

  if (transforms.length === 0) return url;

  return `${parts[0]}/upload/${transforms.join(',')}/${parts[1]}`;
}
