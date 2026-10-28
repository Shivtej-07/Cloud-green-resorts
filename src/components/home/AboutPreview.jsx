import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  MapPin, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Coffee 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function AboutPreview() {
  const { siteConfig } = useData();
  const points = [
    "Perfect midpoint location on Panchgani-Mahabaleshwar Highway",
    "Surrounded by Metgutad strawberry farms and Sahyadri valleys",
    "Outdoor mountain swimming pool with dedicated kids zone",
    "Ayurvedic and modern relaxation spa with certified therapists",
    "Pet-friendly property with open lawns and walking trails",
    "Complimentary hearty breakfast & authentic regional hospitality"
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main large image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Cloudgreen Resort Metgutad exterior"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Smaller overlapping image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
                  alt="Swimming pool at Cloudgreen Resort"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating Review Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -left-4 sm:-left-6 bg-forest-900 text-cream-100 p-4 rounded-2xl shadow-xl border border-gold-500/40"
              >
                <div className="flex items-center gap-1.5 text-gold-400 font-bold text-lg">
                  <Star className="w-5 h-5 fill-gold-400" />
                  <span>{siteConfig.rating} / 5</span>
                </div>
                <p className="text-xs text-cream-300 mt-0.5">{siteConfig.reviewCount} Verified Reviews</p>
                <p className="text-[10px] text-gold-400/80 font-medium uppercase tracking-wider">Google Rated</p>
              </motion.div>

              {/* Price badge */}
              <div className="absolute -bottom-4 left-6 bg-gold-500 text-forest-950 font-bold px-4 py-2 rounded-xl shadow-lg border border-gold-400 text-xs sm:text-sm">
                Starting at only ₹{siteConfig.startingPrice.toLocaleString()} / night
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-forest-800">
              <span className="w-6 h-[1.5px] bg-gold-500 rounded-full inline-block"></span>
              <span>About Cloudgreen Resort</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 leading-tight">
              Where Mountain Clouds Touch Hillside Greenery
            </h2>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              Perched in the tranquil village of <strong>Metgutad</strong> along the Panchgani–Mahabaleshwar Road, <strong>Cloudgreen Resort &amp; Spa</strong> offers travelers a delightful balance of nature, comfort, and value.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Away from city chaos yet conveniently connected to famous strawberry gardens, Venna Lake, and panoramic lookouts. Whether you're relaxing by our azure swimming pool, melting muscle tension at our wellness spa, or taking an early morning walk with your pet through fresh dew, every moment here feels like a quiet breath of fresh air.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Learn More About Us
              </Button>

              <Button
                to="/rooms"
                variant="outline"
                size="md"
              >
                Browse Stays &amp; Tariffs
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
