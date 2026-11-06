import React from 'react';

/**
 * Line-art SVG icons matching the exact minimalist aesthetic in the reference screenshot:
 * - Crisp slate-800 line art
 * - Distinctive teal/cyan accent dots and highlights
 * - Handcrafted for Mahabaleshwar Resort, Villa, Lingmala, Matheran, and Dapoli
 */

export function MahabaleshwarIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Mountain Contours */}
      <path d="M6 34L17 22L27 33" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 32L47 21L58 33" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Main Resort Building Outline */}
      <rect x="15" y="16" width="34" height="40" rx="2" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      
      {/* Architectural Crown / Roofline */}
      <path d="M12 16H52" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 11H38V16H26V11Z" stroke="#1e293b" strokeWidth="1.8" />
      
      {/* Teal Flag / Finial Accent */}
      <circle cx="32" cy="7.5" r="2.2" fill="#0d9488" />
      
      {/* Window Columns */}
      <line x1="26" y1="21" x2="26" y2="46" stroke="#1e293b" strokeWidth="1.8" />
      <line x1="38" y1="21" x2="38" y2="46" stroke="#1e293b" strokeWidth="1.8" />
      
      {/* Window Panes with Teal Accents */}
      <rect x="18" y="22" width="5" height="4" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="29.5" y="22" width="5" height="4" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="41" y="22" width="5" height="4" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />

      <rect x="18" y="30" width="5" height="4" rx="0.5" fill="#0d9488" fillOpacity="0.8" />
      <rect x="29.5" y="30" width="5" height="4" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="41" y="30" width="5" height="4" rx="0.5" fill="#0d9488" fillOpacity="0.8" />

      <rect x="18" y="38" width="5" height="4" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="29.5" y="38" width="5" height="4" rx="0.5" fill="#0d9488" fillOpacity="0.8" />
      <rect x="41" y="38" width="5" height="4" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />

      {/* Resort Grand Archway / Entrance */}
      <path d="M28 56V48C28 46 30 45 32 45C34 45 36 46 36 48V56" stroke="#1e293b" strokeWidth="1.8" />
      <line x1="7" y1="56" x2="57" y2="56" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function VillaIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Luxury 6 BHK Villa Architecture */}
      <path d="M8 28L26 13L44 28" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 22L54 22L54 48H10V28" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Modern Balcony Terrace */}
      <line x1="16" y1="36" x2="36" y2="36" stroke="#1e293b" strokeWidth="1.8" />
      <line x1="16" y1="36" x2="16" y2="40" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="22.5" y1="36" x2="22.5" y2="40" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="29.5" y1="36" x2="29.5" y2="40" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="36" y1="36" x2="36" y2="40" stroke="#1e293b" strokeWidth="1.5" />

      {/* Glass Sliding Villa Doors */}
      <rect x="18" y="24" width="6" height="8" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="28" y="24" width="6" height="8" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      
      {/* Large Glass Facade on Wing */}
      <rect x="42" y="28" width="8" height="15" rx="0.5" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="46" y1="28" x2="46" y2="43" stroke="#1e293b" strokeWidth="1" />

      {/* Private Swimming Pool in Foreground with Teal Water */}
      <path d="M12 50C12 48.5 24 48.5 32 48.5C40 48.5 52 48.5 52 50C52 53 45 55 32 55C19 55 12 53 12 50Z" stroke="#1e293b" strokeWidth="1.5" />
      <path d="M18 51.5C24 53 40 53 46 51.5" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Teal Accent Dot (Pool lounger / Garden light) */}
      <circle cx="50" cy="18" r="2.5" fill="#0d9488" />
      <circle cx="10" cy="48" r="1.8" fill="#0d9488" />
    </svg>
  );
}

export function WaterfallIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mountain Crests */}
      <path d="M6 46L19 18L30 38" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 32L38 14L58 46" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Mountain Ridge Accent Lines */}
      <path d="M19 18L19 46" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M38 14L41 46" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />

      {/* Cascading Lingmala Waterfall Flow */}
      <path d="M29 34C29 39 27 43 28 50" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 33C34 38 32 43 33 50" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 36L31 52" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
      
      {/* Waterfall Pool at Base */}
      <path d="M22 53C26 55.5 35 55.5 40 53" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 56C24 58 38 58 44 56" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />

      {/* Pine Trees with Teal Accents */}
      <path d="M11 40L14 34L17 40H11Z" stroke="#1e293b" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="14" cy="33" r="1.8" fill="#0d9488" />

      <path d="M48 42L51 35L54 42H48Z" stroke="#1e293b" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="51" cy="34" r="1.8" fill="#0d9488" />
      
      {/* Cloud / Mist Dot */}
      <circle cx="49" cy="18" r="2.2" fill="#0d9488" />
    </svg>
  );
}

export function CottageIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Hill Range */}
      <path d="M7 40C16 30 26 28 35 34C44 40 52 32 58 36" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Heritage Cottage Roof & Chimney */}
      <path d="M14 36L32 19L50 36" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 23V16H45V28" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Chimney Smoke Dot Accent */}
      <circle cx="42.5" cy="11.5" r="2" fill="#0d9488" />
      
      {/* Cottage Walls */}
      <path d="M18 36V53H46V36" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Traditional Verandah Pillars */}
      <line x1="23" y1="41" x2="23" y2="53" stroke="#1e293b" strokeWidth="1.5" />
      <line x1="41" y1="41" x2="41" y2="53" stroke="#1e293b" strokeWidth="1.5" />
      
      {/* Cottage Door */}
      <rect x="29" y="42" width="6" height="11" stroke="#1e293b" strokeWidth="1.6" />
      
      {/* Attic Dormer Window */}
      <rect x="29.5" y="27" width="5" height="5" rx="0.5" stroke="#1e293b" strokeWidth="1.4" />
      <line x1="32" y1="27" x2="32" y2="32" stroke="#0d9488" strokeWidth="1.2" />

      {/* Matheran Forest Pine Tree with Teal Dot */}
      <path d="M51 53V44M48 48L51 43L54 48H48Z" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="51" cy="40.5" r="1.8" fill="#0d9488" />

      {/* Red Soil Trail Base */}
      <line x1="8" y1="53" x2="56" y2="53" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 56C28 57.5 36 57.5 42 56" stroke="#0d9488" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BeachIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Radiant Sun with Teal Center */}
      <circle cx="21" cy="20" r="4" stroke="#1e293b" strokeWidth="1.8" />
      <circle cx="21" cy="20" r="2.2" fill="#0d9488" />
      {/* Sun rays */}
      <line x1="21" y1="12" x2="21" y2="14" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="21" y1="26" x2="21" y2="28" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="20" x2="15" y2="20" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="20" x2="29" y2="20" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.5" y1="14.5" x2="17" y2="16" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="24" x2="26.5" y2="25.5" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

      {/* Swaying Coconut Palm Tree 1 */}
      <path d="M42 52C42 43 40 33 36 24" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />
      {/* Palm Fronds 1 */}
      <path d="M36 24C32 20 25 21 23 25" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M36 24C36 18 43 17 47 20" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M36 24C30 25 28 30 29 33" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M36 24C41 24 45 27 45 32" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Second Smaller Palm Tree */}
      <path d="M49 52C49 46 51 38 52 33" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M52 33C50 29 46 29 44 32" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 33C54 29 58 29 59 32" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

      {/* Teal Coconut Accents */}
      <circle cx="37" cy="25" r="1.6" fill="#0d9488" />
      <circle cx="34.5" cy="26" r="1.6" fill="#0d9488" />

      {/* Sandy Beach Shore Mound */}
      <path d="M6 52C16 50 32 49 58 52" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
      
      {/* Dapoli Ocean Waves */}
      <path d="M8 56C12 54.5 16 57.5 20 56C24 54.5 28 57.5 32 56C36 54.5 40 57.5 44 56C48 54.5 52 57.5 56 56" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Universal component that renders the icon matching the item's iconType
 */
export default function DestinationIcon({ type, className = "w-full h-full" }) {
  switch (type) {
    case 'resort':
      return <MahabaleshwarIcon className={className} />;
    case 'villa':
      return <VillaIcon className={className} />;
    case 'waterfall':
      return <WaterfallIcon className={className} />;
    case 'cottage':
      return <CottageIcon className={className} />;
    case 'beach':
      return <BeachIcon className={className} />;
    default:
      return <MahabaleshwarIcon className={className} />;
  }
}

