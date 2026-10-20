import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Navigation, 
  Clock, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Compass, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { attractions } from '../data/attractions';
import { siteConfig } from '../data/siteConfig';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

export default function Attractions() {
  return (
    <>
      <Helmet>
        <title>Nearby Attractions | Sightseeing around Cloudgreen Resort Metgutad</title>
        <meta name="description" content="Explore popular Mahabaleshwar & Panchgani attractions near Cloudgreen Resort: Venna Lake (7.8 km), Mapro Garden (3.2 km), strawberry farms (0.5 km), Table Land, and scenic viewpoints." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Mahabaleshwar–Panchgani Hill Circuit</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Nearby Attractions &amp; Sightseeing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Stay in the middle of it all. Our Metgutad location places you within minutes of iconic strawberry plantations, high-altitude plateaus, and waterfalls.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((spot, index) => {
              const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${spot.name} Mahabaleshwar Maharashtra`)}`;

              return (
                <motion.div
                  key={spot.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image with Distance Overlays */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={spot.image}
                        alt={spot.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-3 left-3 bg-forest-950/90 backdrop-blur-md text-gold-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                        <Navigation className="w-3.5 h-3.5 text-gold-400" />
                        <span>{spot.distance}</span>
                      </div>

                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cream-200" />
                        <span>{spot.driveTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-forest-700 bg-forest-50 px-2.5 py-0.5 rounded-full">
                        {spot.category}
                      </span>

                      <h3 className="font-serif text-xl font-bold text-forest-950 mt-2">
                        {spot.name}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {spot.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                        <div className="flex items-start gap-1.5">
                          <strong className="text-forest-900 shrink-0">Highlights:</strong>
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

                  {/* Card Footer with Directions Link */}
                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-cream-100 hover:bg-forest-800 hover:text-white text-forest-900 py-2.5 rounded-full text-xs font-bold border border-slate-200 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Directions on Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Suggested 2-Day Hill Station Itinerary */}
          <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-soft">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-600 block mb-2">Local Travel Advice</span>
              <h3 className="font-serif text-3xl font-bold text-forest-950">
                Recommended 2-Day Weekend Itinerary
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Make the most of your vacation with our curated schedule starting right from your doorstep in Metgutad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Day 1 */}
              <div className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-forest-800 text-gold-400 font-bold flex items-center justify-center text-xs">
                    01
                  </span>
                  <h4 className="font-serif text-xl font-bold text-forest-950">Day 1: Strawberries, Waterfalls &amp; Sunset Lake</h4>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">9:00 AM:</span>
                    <span>Complimentary breakfast at Cloudgreen, followed by a quick 5-minute stroll through neighbor Metgutad strawberry fields.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">11:00 AM:</span>
                    <span>Visit Mapro Garden (6 mins drive) for strawberry ice cream and artisanal chocolates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">2:30 PM:</span>
                    <span>Nature walk down to Lingmala Waterfall through the forest canopy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">5:00 PM:</span>
                    <span>Boating and roasted masala corn snacks at Venna Lake as twilight sets in.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">8:00 PM:</span>
                    <span>Warm bonfire evening &amp; dinner at Cloudgreen lawns.</span>
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-forest-800 text-gold-400 font-bold flex items-center justify-center text-xs">
                    02
                  </span>
                  <h4 className="font-serif text-xl font-bold text-forest-950">Day 2: High Viewpoints &amp; Spa Rejuvenation</h4>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">8:30 AM:</span>
                    <span>Scenic morning drive to Arthur's Seat &amp; Kate's Point for sweeping gorge views before afternoon mist gathers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">12:30 PM:</span>
                    <span>Panchgani Table Land exploration with horse riding across the volcanic plateau.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">4:00 PM:</span>
                    <span>Return to resort for a relaxing swim in the open-air pool.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-forest-800 shrink-0">6:00 PM:</span>
                    <span>60-minute Ayurvedic Abhyanga massage at Cloudgreen Wellness Spa.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button to="/booking" variant="gold" size="lg">
                Plan Your Stay Around These Attractions
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
