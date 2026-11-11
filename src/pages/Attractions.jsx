import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navigation,
  Clock,
  MapPin,
  ExternalLink,
  Compass,
  Mountain,
  Trees,
  Waves,
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { attractions, attractionRegions } from '../data/attractions';
import Button from '../components/common/Button';

const REGION_ICONS = {
  all: Compass,
  mahabaleshwar: Mountain,
  matheran: Trees,
  dapoli: Waves
};

function AttractionCard({ spot, index }) {
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    spot.mapsQuery || `${spot.name} ${spot.regionLabel} Maharashtra`
  )}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Image with Distance & Region Overlays */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-forest-950">
          <img
            src={spot.image}
            alt={spot.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

          <div className="absolute top-3 left-3 bg-forest-950/90 backdrop-blur-md text-gold-400 border border-gold-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
            <Navigation className="w-3.5 h-3.5 text-gold-400" />
            <span>{spot.distance}</span>
          </div>

          <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15">
            {spot.regionLabel}
          </div>

          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-cream-100 text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-300" />
            <span>{spot.driveTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-[10px] uppercase font-bold tracking-wider text-forest-700 bg-forest-50 border border-forest-200/60 px-2.5 py-0.5 rounded-full">
            {spot.category}
          </span>

          <h3 className="font-serif text-xl font-bold text-forest-950 mt-2.5 group-hover:text-forest-800 transition-colors">
            {spot.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            {spot.description}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-start gap-1.5">
              <strong className="text-forest-900 shrink-0">Highlight:</strong>
              <span>{spot.highlight}</span>
            </div>
            <div className="flex items-start gap-1.5">
              <strong className="text-forest-900 shrink-0">Best Time:</strong>
              <span>{spot.bestTime}</span>
            </div>
          </div>

          {/* Tag badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {spot.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Directions & Stay Links */}
      <div className="px-6 pb-6 pt-2 flex items-center gap-2">
        <a
          href={googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-cream-100 hover:bg-forest-800 hover:text-white text-forest-900 py-2.5 px-3 rounded-full text-xs font-bold border border-slate-200 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>Directions</span>
          <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
        </a>

        <Link
          to={`/destinations/${spot.propertyId}`}
          className="px-3.5 py-2.5 rounded-full bg-forest-50 hover:bg-gold-500/20 border border-forest-200 text-forest-900 text-xs font-bold transition-colors shrink-0"
          title={`View nearby Reveridge stay`}
        >
          Nearby Stay
        </Link>
      </div>
    </motion.div>
  );
}

export default function Attractions() {
  const [activeRegion, setActiveRegion] = useState('all');

  const visibleRegions = useMemo(() => {
    const specificRegions = attractionRegions.filter((r) => r.id !== 'all');
    if (activeRegion === 'all') return specificRegions;
    return specificRegions.filter((r) => r.id === activeRegion);
  }, [activeRegion]);

  return (
    <>
      <Helmet>
        <title>Nearby Attractions &amp; Sightseeing | Mahabaleshwar, Matheran &amp; Dapoli | Reveridge</title>
        <meta
          name="description"
          content="Explore nearby attractions across all Reveridge destinations: Mahabaleshwar (Arthur's Seat, Wilson Point, Venna Lake, Mapro Garden, Lingmala Waterfall), Matheran (Echo Point, Panorama Point, Charlotte Lake), and Dapoli (Harnai, Murud, Anjarle beaches, Suvarnadurg Fort)."
        />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 border border-gold-500/35 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4 shadow-md"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Mahabaleshwar • Matheran • Dapoli</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Nearby Attractions &amp; Sightseeing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light"
          >
            From Sahyadri sunrise peaks and misty Lingmala cascades to Matheran’s vehicle-free horse trails and Dapoli’s secluded Konkan beaches and 17th-century sea forts.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Framer Motion Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {attractionRegions.map((region) => {
              const isActive = activeRegion === region.id;
              const IconComp = REGION_ICONS[region.id] || Compass;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setActiveRegion(region.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-2 ${
                    isActive
                      ? 'text-white'
                      : 'bg-white text-slate-700 hover:bg-forest-50 hover:text-forest-900 border border-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="attractionRegionTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-forest-900 shadow-md -z-0"
                    />
                  )}
                  <IconComp className={`w-4 h-4 relative z-10 ${isActive ? 'text-gold-400' : 'text-forest-700'}`} />
                  <span className="relative z-10">{region.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Regional Sightseeing Sections */}
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {visibleRegions.map((region) => {
                  const regionSpots = attractions.filter((item) => item.region === region.id);
                  const RegionIcon = REGION_ICONS[region.id] || Compass;

                  return (
                    <div key={region.id} className="space-y-8">
                      {/* Region Header Card */}
                      <div className="rounded-3xl bg-forest-950 text-cream-100 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl border border-gold-500/20">
                        <div className="space-y-2 max-w-2xl">
                          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400">
                            <RegionIcon className="w-4 h-4" />
                            <span>Nearby Attractions — {region.label}</span>
                            <span className="text-cream-300/60">•</span>
                            <span className="text-teal-300">{region.badge}</span>
                          </div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                            {region.label} Sightseeing Circuit ({regionSpots.length} Locations)
                          </h2>
                          <p className="text-xs sm:text-sm text-cream-200/80 font-light leading-relaxed">
                            {region.subtitle}
                          </p>
                        </div>

                        {region.stayPath && (
                          <Link
                            to={region.stayPath}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs font-bold transition-colors shadow-md shrink-0"
                          >
                            <span>{region.stayLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>

                      {/* Attractions Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {regionSpots.map((spot, index) => (
                          <AttractionCard key={spot.id} spot={spot} index={index} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Curated Sightseeing Circuits across all 3 Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-soft"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-gold-600 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated In-House Sightseeing</span>
              </span>
              <h3 className="font-serif text-3xl font-bold text-forest-950">
                Suggested Destination Trails
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Our reservation desk and private transport teams curate effortless full-day loops from every Reveridge stay.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Circuit 1: Mahabaleshwar */}
              <div className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-forest-800 text-gold-400 font-bold flex items-center justify-center text-xs shrink-0">
                    01
                  </span>
                  <h4 className="font-serif text-lg font-bold text-forest-950">
                    Mahabaleshwar Peaks &amp; Waterfall Trail
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li><strong className="text-forest-900">Sunrise (~4 km):</strong> Start at Wilson Point before misty valley drives to Arthur’s Seat (~6 km) &amp; Elephant’s Head Point (~7 km).</li>
                  <li><strong className="text-forest-900">Midday (~4–8 km):</strong> Explore Kate’s Point overlooking Dhom Dam, Lingmala Waterfall (~4 km), and fresh strawberry cream at Mapro Garden (~7 km).</li>
                  <li><strong className="text-forest-900">Evening (~5–20 km):</strong> Boating at Venna Lake (~5 km) or venture up to Panchgani’s Table Land plateau (~20 km).</li>
                </ul>
              </div>

              {/* Circuit 2: Matheran */}
              <div className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-forest-800 text-teal-300 font-bold flex items-center justify-center text-xs shrink-0">
                    02
                  </span>
                  <h4 className="font-serif text-lg font-bold text-forest-950">
                    Matheran Vehicle-Free Forest Walk
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li><strong className="text-forest-900">Morning Peace:</strong> Begin directly on forest Horse Trails or wander beside tranquil Charlotte Lake shaded by heritage canopies.</li>
                  <li><strong className="text-forest-900">360° Clifftops:</strong> Ride or walk across Panorama Point and One Tree Hill Point along pollution-free red-earth woodland paths.</li>
                  <li><strong className="text-forest-900">Acoustic Sunsets:</strong> Call across canyons at Echo Point before catching golden sunset light at Louisa Point.</li>
                </ul>
              </div>

              {/* Circuit 3: Dapoli */}
              <div className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-forest-800 text-gold-400 font-bold flex items-center justify-center text-xs shrink-0">
                    03
                  </span>
                  <h4 className="font-serif text-lg font-bold text-forest-950">
                    Dapoli Beaches &amp; Konkan Heritage
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li><strong className="text-forest-900">Coast &amp; Island Fort:</strong> Boat out to historic 17th-century Suvarnadurg Fort from Harnai Beach fishing harbour, then stroll secluded Murud &amp; Anjarle Beaches.</li>
                  <li><strong className="text-forest-900">Sacred &amp; Ancient:</strong> Walk shaded betel groves to Keshavraj Temple and visit 3rd-century Buddhist Panhalekaji Caves.</li>
                  <li><strong className="text-forest-900">Sunset Cliffside:</strong> Return up to Reveridge Dapoli for poolside sundowners overlooking the Arabian Sea.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button to="/booking" variant="gold" size="lg" icon={Calendar}>
                Plan Your Stay &amp; Private Sightseeing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
