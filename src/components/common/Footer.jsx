import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Send,
  ExternalLink 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { siteConfig, rooms } = useData();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-forest-900/80 pt-16 pb-8 print:hidden relative overflow-hidden">
      {/* Decorative hill gradient in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-forest-800/80">
          
          {/* Col 1: Brand Info & Rating */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 border border-gold-500/40 p-2 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <img src="/favicon.svg" alt="Cloudgreen Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">CLOUDGREEN</h3>
                <p className="text-xs text-gold-400 font-semibold tracking-widest uppercase">
                  Resort &amp; Spa • Mahabaleshwar
                </p>
                <p className="text-[11px] text-cream-300/70">क्लाउडग्रीन रिसॉर्ट &amp; स्पा</p>
              </div>
            </Link>

            <p className="text-sm text-cream-300/80 leading-relaxed max-w-md">
              A serene 2-star boutique hill-station haven positioned on the scenic ridge between Panchgani and Mahabaleshwar. Surrounded by lush Metgutad strawberry fields, misty pine breeze, and sweeping Sahyadri vistas.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-forest-900/90 border border-gold-500/30 px-4 py-2.5 rounded-2xl shadow-inner">
              <div className="flex items-center text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(siteConfig.rating) ? 'fill-gold-400' : 'fill-gold-400/30'}`} 
                  />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white text-sm">{siteConfig.rating} / 5</span>
                <span className="text-cream-300/70 ml-1.5">({siteConfig.reviewCount} Google Reviews)</span>
              </div>
            </div>

            {/* Pet friendly & Timings highlight */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-cream-300/80">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Check-in: 2 PM | Check-out: 11 AM</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>100% Pet Friendly Property</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              <span>Explore</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream-300/80 hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300/80 hover:text-gold-400 transition-colors">About Our Resort</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-cream-300/80 hover:text-gold-400 transition-colors">Rooms &amp; Suites</Link>
              </li>
              <li>
                <Link to="/spa" className="text-cream-300/80 hover:text-gold-400 transition-colors">Spa &amp; Wellness</Link>
              </li>
              <li>
                <Link to="/amenities" className="text-cream-300/80 hover:text-gold-400 transition-colors">Amenities &amp; Pool</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream-300/80 hover:text-gold-400 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/attractions" className="text-cream-300/80 hover:text-gold-400 transition-colors">Nearby Attractions</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Types */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              <span>Our Stays</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rooms/deluxe-double-room" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Deluxe Double Room <span className="text-[11px] text-gold-400 block">From ₹1,897/night</span>
                </Link>
              </li>
              <li>
                <Link to="/rooms/premium-valley-view" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Premium Valley View Room
                </Link>
              </li>
              <li>
                <Link to="/rooms/mountain-view-family-suite" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Mountain View Family Suite
                </Link>
              </li>
              <li>
                <Link to="/rooms/executive-cottage" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Executive Garden Cottage
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/booking" className="inline-block text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 underline underline-offset-4">
                  Check Instant Tariffs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              <span>Contact Us</span>
            </h4>
            <div className="space-y-3.5 text-xs text-cream-300/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-[11px] text-cream-300/60 pt-1">
                Formerly known / related domain: <span className="text-cream-200">{siteConfig.contact.existingSite}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/60 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved. Metgutad, Mahabaleshwar–Panchgani, Maharashtra.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-cream-100 transition-colors">About Us</Link>
            <Link to="/reviews" className="hover:text-cream-100 transition-colors">Guest Reviews</Link>
            <Link to="/contact" className="hover:text-cream-100 transition-colors">Map &amp; Directions</Link>
            <Link to="/booking" className="hover:text-cream-100 transition-colors">Direct Booking Enquiry</Link>
            <Link to="/admin" className="text-gold-400/70 hover:text-gold-300 font-medium transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
