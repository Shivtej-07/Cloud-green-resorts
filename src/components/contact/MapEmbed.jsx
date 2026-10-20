import React from 'react';
import { MapPin, Navigation, Car, ExternalLink, Bus } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function MapEmbed() {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address.full)}`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft">
      {/* Map iframe */}
      <div className="relative h-80 sm:h-96 w-full bg-slate-100">
        <iframe
          src={siteConfig.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cloudgreen Resort & Spa Google Map Location"
          className="w-full h-full"
        ></iframe>

        {/* Floating Direction Button on top of map */}
        <div className="absolute top-4 right-4 z-10">
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/95 backdrop-blur-md text-forest-900 px-4 py-2 rounded-2xl shadow-lg border border-slate-200 text-xs font-bold hover:bg-forest-800 hover:text-white transition-colors"
          >
            <Navigation className="w-4 h-4 text-forest-700" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* Route & Landmark Details */}
      <div className="p-6 sm:p-8 bg-cream-50/70 space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-forest-800 text-cream-100 shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-forest-950">
              Address &amp; Landmark
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
              {siteConfig.address.full}
            </p>
            <p className="text-xs text-forest-700 font-medium mt-1">
              📍 Landmark: {siteConfig.address.landmark}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
          <div className="flex items-start gap-2.5">
            <Car className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800 block">By Road from Pune / Mumbai:</strong>
              <span>Drive via Wai &amp; Pasarni Ghat onto Panchgani-Mahabaleshwar Road. Metgutad is ~10 km past Panchgani market.</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Bus className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800 block">By Bus or Private Cab:</strong>
              <span>State transport (MSRTC) and private sleeper coaches drop directly at Metgutad stop on request.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
