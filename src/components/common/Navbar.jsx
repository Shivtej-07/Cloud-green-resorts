import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Globe 
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/LanguageContext';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.rooms, path: "/rooms" },
    { label: t.nav.spa, path: "/spa" },
    { label: t.nav.amenities, path: "/amenities" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.attractions, path: "/attractions" },
    { label: t.nav.reviews, path: "/reviews" },
    { label: t.nav.contact, path: "/contact" }
  ];

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिंदी', short: 'हिं' },
    { code: 'mr', label: 'मराठी', short: 'मरा' },
  ];

  // Determine if we are on homepage with transparent hero
  const isHomePage = location.pathname === '/';
  const showSolidNav = isScrolled || !isHomePage;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Main Navigation Bar */}
        <nav
          className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            showSolidNav
              ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
              : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-forest-800 border border-gold-500/40 flex items-center justify-center p-1.5 shadow-md transition-transform group-hover:scale-105">
                <img src="/favicon.svg" alt="Cloudgreen Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-none ${
                  showSolidNav ? 'text-forest-900' : 'text-white drop-shadow-sm'
                }`}>
                  CLOUDGREEN
                </span>
                <span className={`text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase mt-0.5 ${
                  showSolidNav ? 'text-gold-600' : 'text-gold-400'
                }`}>
                  Resort &amp; Spa • Mahabaleshwar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? showSolidNav
                          ? 'bg-forest-800 text-white font-semibold shadow-sm'
                          : 'bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30'
                        : showSolidNav
                        ? 'text-slate-700 hover:text-forest-900 hover:bg-forest-50'
                        : 'text-cream-100 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                to="/booking"
                variant={showSolidNav ? "gold" : "gold"}
                size="sm"
                icon={Calendar}
              >
                {t.bookNow}
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/booking"
                variant="gold"
                size="sm"
                className="text-xs px-3 py-1.5 sm:hidden"
              >
                Book
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors focus:outline-none ${
                  showSolidNav 
                    ? 'text-forest-900 hover:bg-slate-100' 
                    : 'text-white hover:bg-white/20'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-forest-950/98 backdrop-blur-xl flex flex-col text-cream-100 p-6 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-forest-800 border border-gold-500/40 p-1.5 flex items-center justify-center">
                  <img src="/favicon.svg" alt="Cloudgreen Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">CLOUDGREEN</h3>
                  <p className="text-[10px] text-gold-400 font-medium tracking-widest uppercase">Resort &amp; Spa</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white rounded-full bg-white/10"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Language toggle for mobile */}
            <div className="py-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs text-cream-300 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-gold-400" />
                <span>Language / भाषा:</span>
              </span>
              <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                      language === l.code ? 'bg-gold-500 text-forest-950 font-bold' : 'text-white/80'
                    }`}
                  >
                    {l.short}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col py-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-gold-500 text-forest-950 font-semibold shadow-md'
                        : 'text-cream-200 hover:bg-white/10'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs opacity-50">→</span>
                </NavLink>
              ))}
            </div>

            {/* Drawer Actions */}
            <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
              <Button
                to="/booking"
                variant="gold"
                size="lg"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.bookNow}
              </Button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 text-cream-100 hover:bg-white/10 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>

              <p className="text-center text-[11px] text-cream-300/60 pt-2">
                Panchgani - Mahabaleshwar Rd, Metgutad
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
