import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  Globe,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/LanguageContext';
import Button from './Button';
import DestinationsDropdown from './DestinationsDropdown';
import DestinationIcon from './DestinationIcons';
import { destinations, destinationsSummary } from '../../data/destinations';

export default function Navbar() {
  const { siteConfig } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestinationsExpanded, setMobileDestinationsExpanded] = useState(true);
  const dropdownRef = useRef(null);

  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDestinationsOpen(false);
  }, [location.pathname]);

  // Click outside to close desktop destinations dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDestinationsOpen(false);
      }
    }
    if (destinationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [destinationsOpen]);

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.spa, path: "/spa" },
    { label: t.nav.gallery, path: "/gallery" },
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
          className={`px-3 sm:px-6 lg:px-8 transition-all duration-300 ${
            showSolidNav
              ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-100'
              : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-3 sm:py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-gold-500/50 shadow-md transition-transform group-hover:scale-105 shrink-0 bg-forest-950">
                <img src="/reveridge-logo.jpg" alt="Reveridge Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-none ${
                  showSolidNav ? 'text-forest-900' : 'text-white drop-shadow-sm'
                }`}>
                  REVERIDGE
                </span>
                <span className={`text-[7.5px] sm:text-[9.5px] tracking-wider font-semibold uppercase mt-0.5 truncate max-w-[150px] sm:max-w-none ${
                  showSolidNav ? 'text-gold-600' : 'text-gold-400'
                }`}>
                  Boutique Nature Escapes
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links & Destinations Trigger */}
            {/* Sequence: 1. Home, 2. About Us, 3. Destinations ▾ (styled like other navbar buttons, no logo, no special background), 4. Spa & Wellness, 5. Gallery, 6. Reviews, 7. Contact */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* 1. Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
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
                {t.nav.home}
              </NavLink>

              {/* 2. About Us */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
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
                {t.nav.about}
              </NavLink>

              {/* 3. Destinations ▾ (Styled exactly like other navbar buttons, MapPin logo removed, no heavy background) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDestinationsOpen(!destinationsOpen)}
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                    destinationsOpen
                      ? showSolidNav
                        ? 'bg-forest-800 text-white font-semibold shadow-sm'
                        : 'bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30'
                      : showSolidNav
                      ? 'text-slate-700 hover:text-forest-900 hover:bg-forest-50'
                      : 'text-cream-100 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={destinationsOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Our Destinations menu"
                >
                  <span>Destinations</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destinationsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Destinations Popover Menu */}
                <AnimatePresence>
                  {destinationsOpen && (
                    <DestinationsDropdown 
                      isOpen={destinationsOpen} 
                      onClose={() => setDestinationsOpen(false)} 
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Spa & Wellness, 5. Gallery, 6. Reviews, 7. Contact */}
              {navItems.filter(item => item.path !== "/" && item.path !== "/about").map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
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
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/admin"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  showSolidNav
                    ? 'text-forest-900 border-forest-200 hover:bg-forest-50 hover:border-forest-300'
                    : 'text-cream-100 border-white/30 hover:bg-white/20 backdrop-blur-sm'
                }`}
                title="Staff & Admin Control Panel"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Admin</span>
              </Link>

              <Button
                to="/booking"
                variant="gold"
                size="sm"
                icon={Calendar}
              >
                {t.bookNow}
              </Button>
            </div>

            {/* Mobile Actions: Book CTA + Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <Button
                to="/booking"
                variant="gold"
                size="sm"
                className="text-xs px-3 py-1.5 font-bold shadow-sm"
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
            className="fixed inset-0 z-50 lg:hidden bg-forest-950/98 backdrop-blur-xl flex flex-col text-cream-100 p-5 sm:p-6 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-gold-500/50 shadow-md shrink-0 bg-forest-950">
                  <img src="/reveridge-logo.jpg" alt="Reveridge Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">REVERIDGE</h3>
                  <p className="text-[10px] text-gold-400 font-medium tracking-widest uppercase">Boutique Nature Escapes</p>
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
            <div className="py-3 border-b border-white/10 flex items-center justify-between shrink-0">
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

            {/* Navigation Flow: 1. Home, 2. About Us, 3. Destinations Accordion, 4. Spa, 5. Gallery, 6. Reviews, 7. Contact */}
            <div className="py-2.5 space-y-1.5">
              {/* 1. Home */}
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gold-500 text-forest-950 font-semibold shadow-md'
                      : 'text-cream-200 hover:bg-white/10'
                  }`
                }
              >
                <span>{t.nav.home}</span>
                <span className="text-xs opacity-50">→</span>
              </NavLink>

              {/* 2. About Us */}
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gold-500 text-forest-950 font-semibold shadow-md'
                      : 'text-cream-200 hover:bg-white/10'
                  }`
                }
              >
                <span>{t.nav.about}</span>
                <span className="text-xs opacity-50">→</span>
              </NavLink>
            </div>

            {/* 3. OUR DESTINATIONS Section on Mobile */}
            <div className="py-4 border-y border-white/10">
              <div 
                className="flex items-center justify-between cursor-pointer py-1"
                onClick={() => setMobileDestinationsExpanded(!mobileDestinationsExpanded)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-white">
                    {destinationsSummary.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-teal-300 bg-teal-900/60 border border-teal-500/40 px-2 py-0.5 rounded-full">
                    {destinationsSummary.badgeText}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${mobileDestinationsExpanded ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {mobileDestinationsExpanded && (
                <div className="mt-3 space-y-2">
                  {destinations.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-2.5 flex items-center gap-3 transition-colors"
                    >
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 p-1.5 shrink-0 flex items-center justify-center">
                        <DestinationIcon type={item.iconType} className="w-full h-full" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-white text-sm truncate">
                            {item.shortName}
                          </span>
                          {item.bhk && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-gold-500 text-forest-950">
                              {item.bhk}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-cream-300/80 truncate">
                          {item.brandName}
                        </p>
                      </div>

                      <Link
                        to={item.isPrimaryResort ? "/rooms" : `/booking?property=${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[10px] font-bold text-teal-300 hover:text-white px-2 py-1 rounded-md bg-teal-800/40 border border-teal-500/30 shrink-0"
                      >
                        Book
                      </Link>
                    </div>
                  ))}

                  <div className="pt-2 text-center">
                    <Link
                      to="/destinations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-teal-400 hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      <span>Explore all 5 destinations guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links: 4. Spa & Wellness, 5. Gallery, 6. Reviews, 7. Contact */}
            <div className="flex flex-col py-3 space-y-1.5">
              {navItems.filter(item => item.path !== "/" && item.path !== "/about").map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
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
            <div className="mt-auto pt-4 border-t border-white/10 space-y-2.5 shrink-0">
              <Button
                to="/booking"
                variant="gold"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.bookNow}
              </Button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/20 text-cream-100 hover:bg-white/10 text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>

              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-500/10 text-xs font-semibold transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin &amp; Staff Login</span>
              </Link>

              <p className="text-center text-[10px] text-cream-300/60 pt-1">
                Panchgani - Mahabaleshwar Rd, Metgutad
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
