import React from 'react';

export default function Loader({ message = "Loading Cloudgreen Experience..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <div className="relative w-20 h-20 mb-6">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border-4 border-forest-800/20 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border-4 border-gold-500/40 animate-pulse"></div>
        <div className="absolute inset-4 rounded-full bg-forest-800 flex items-center justify-center text-cream-100 shadow-md">
          <span className="font-serif text-xl font-bold text-gold-400">CG</span>
        </div>
      </div>
      <p className="font-serif text-lg text-forest-900 tracking-wide">{message}</p>
      <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Metgutad • Mahabaleshwar</p>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft">
      <div className="h-64 animate-shimmer"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 w-3/4 animate-shimmer rounded"></div>
        <div className="h-4 w-1/2 animate-shimmer rounded"></div>
        <div className="h-10 w-full animate-shimmer rounded-full mt-4"></div>
      </div>
    </div>
  );
}
