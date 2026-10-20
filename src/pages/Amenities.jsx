import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Sparkles, 
  Utensils, 
  Wifi, 
  Car, 
  HeartHandshake, 
  Shirt, 
  Flame, 
  Check, 
  Clock, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { amenitiesData } from '../data/amenities';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const iconMap = {
  Waves,
  Sparkles,
  Utensils,
  Wifi,
  Car,
  HeartHandshake,
  Shirt,
  Flame
};

export default function Amenities() {
  return (
    <>
      <Helmet>
        <title>Amenities &amp; Facilities | Cloudgreen Resort &amp; Spa Mahabaleshwar</title>
        <meta name="description" content="Discover resort amenities at Cloudgreen Resort & Spa Metgutad: outdoor swimming pool, complimentary breakfast, free parking, high-speed Wi-Fi, laundry, and pet-friendly facilities." />
      </Helmet>

      {/* Header */}
      <section className="pt-36 pb-20 bg-forest-950 text-cream-100 relative text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-3">
            Designed for Leisure &amp; Well-Being
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Resort Amenities &amp; Facilities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl mx-auto leading-relaxed font-light">
            Enjoy modern conveniences thoughtfully integrated into tranquil nature, ensuring your hill-station retreat is refreshing and carefree.
          </p>
        </div>
      </section>

      {/* Detailed Amenities Grid */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {amenitiesData.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 h-72 sm:h-96 rounded-2xl overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-forest-700 bg-forest-50 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gold-600 font-bold ml-auto">{item.tag}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                    {item.title}
                  </h3>

                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-2">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pet-Friendly Special Showcase */}
      <section className="py-16 bg-forest-950 text-cream-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 bg-forest-900 border border-gold-500/40 rounded-2xl flex items-center justify-center mx-auto text-rose-400">
            <Heart className="w-7 h-7" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            We Are Proudly 100% Pet Friendly
          </h2>

          <p className="text-cream-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Never leave your beloved dogs or cats behind when holidaying in Mahabaleshwar. At Cloudgreen, our spacious garden pathways, manicured grass, and compassionate staff ensure your pet enjoys every moment of the fresh mountain air.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-left max-w-3xl mx-auto">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <strong className="text-gold-400 block mb-1">Open Green Lawns</strong>
              <p className="text-cream-300">Spacious natural gardens for safe morning strolls and gentle exercise.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <strong className="text-gold-400 block mb-1">Fresh Food Support</strong>
              <p className="text-cream-300">Boiled chicken, rice, or milk can be prepared by our kitchen upon prior request.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <strong className="text-gold-400 block mb-1">Zero Extra Stress</strong>
              <p className="text-cream-300">Kindly inform us at the time of booking so we allocate ideal garden-facing rooms.</p>
            </div>
          </div>

          <div className="pt-6">
            <Button to="/booking" variant="gold" size="lg">
              Book Pet-Friendly Stay
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
