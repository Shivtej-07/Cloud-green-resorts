import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Bed,
  Calendar,
  Car,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Compass,
  Eye,
  Flame,
  Flower2,
  Heart,
  Layers,
  MapPin,
  Mountain,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Waves,
  Wifi,
  Users
} from 'lucide-react';
import { hospitalityExperiences, getHospitalityById } from '../data/hospitality';
import { destinations } from '../data/destinations';
import { siteConfig } from '../data/siteConfig';
import WhatsAppIcon from '../components/common/WhatsAppIcon';

const PILLAR_ICONS = {
  Heart,
  Users,
  Sparkles,
  Compass,
  Bed,
  Waves,
  ShieldCheck,
  Wifi,
  Utensils,
  Car,
  Flower2,
  Flame,
  Layers,
  Mountain,
  Eye,
  Coffee
};

export default function HospitalityDetails() {
  const { id } = useParams();
  const experience = getHospitalityById(id);
  const [heroIdx, setHeroIdx] = useState(0);

  const heroGallery = experience.galleryImages?.length
    ? experience.galleryImages
    : [experience.heroImage];

  // Scroll cleanly to top and reset slide index when switching hospitality pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHeroIdx(0);
  }, [experience.id]);

  // Smooth auto-play hero imagery (5s interval)
  useEffect(() => {
    if (heroGallery.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroGallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroGallery.length, experience.id]);

  // Matching destinations from core portfolio
  const linkedProperties = destinations.filter((prop) =>
    experience.propertyIds?.includes(prop.id)
  );

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Reveridge! I would like to inquire about "${experience.title}". Please share availability and tailored details.`
  )}`;

  return (
    <>
      <Helmet>
        <title>{experience.title} | Reveridge Hospitality</title>
        <meta
          name="description"
          content={`${experience.title} — ${experience.subtitle} Experience boutique Reveridge Hospitality across Maharashtra.`}
        />
        <link
          rel="canonical"
          href={`https://reveridge.com/hospitality/${experience.slug}`}
        />
      </Helmet>

      {/* Full-Screen 100dvh Editorial Hero with Unobstructed Center Photography */}
      <section className="relative min-h-[100dvh] lg:h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden bg-forest-950 text-white">
        {/* Auto-Playing Full-Bleed Background Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="sync">
            <motion.div
              key={`${experience.id}-${heroIdx}`}
              initial={{ opacity: 0, scale: 1.07 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroGallery[heroIdx] || experience.heroImage})` }}
            />
          </AnimatePresence>

          {/* Subtle Perimeter Vignettes — Keeps Center Scenery Crisp & Vibrant */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-forest-950/95 via-forest-950/65 to-transparent" />
        </div>

        {/* Upper Bar: Minimal Breadcrumbs + Hospitality Badge */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={`hero-top-${experience.id}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-between gap-3"
          >
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-cream-200/85 font-medium bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-cream-300/60" />
                <span className="text-cream-200/75">Hospitality</span>
                <ChevronRight className="w-3 h-3 text-cream-300/60" />
                <span className="text-gold-400 font-semibold truncate">{experience.shortLabel}</span>
              </nav>

              <span className="px-3 py-1.5 rounded-full bg-forest-900/85 text-gold-400 border border-gold-500/35 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase backdrop-blur-md">
                {experience.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-cream-100 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-medium text-white">Reveridge Signature Hospitality</span>
            </div>
          </motion.div>
        </div>

        {/* Lower Split Composition: Title Left & Narrative/Actions Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-16 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            {/* Bottom-Left: Eyebrow Tag + Serif Title */}
            <motion.div
              key={`hero-left-${experience.id}`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold-400 mb-3">
                <span className="w-6 h-px bg-gold-400/80" />
                <span>{experience.tag}</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl xl:text-[3.75rem] font-bold text-white tracking-tight leading-[1.06] drop-shadow-2xl max-w-2xl">
                {experience.title}
              </h1>
            </motion.div>

            {/* Bottom-Right: Subtitle + Reservation Action Pills */}
            <motion.div
              key={`hero-right-${experience.id}`}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col items-start lg:items-end lg:text-right"
            >
              <p className="text-sm sm:text-[15px] text-cream-100/90 leading-relaxed font-light max-w-md drop-shadow-sm">
                {experience.subtitle}
              </p>

              <div className="mt-5 pt-4 border-t border-white/15 w-full lg:w-auto flex flex-wrap items-center lg:justify-end gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/12 hover:bg-[#25D366] text-white backdrop-blur-md border border-white/25 hover:border-[#25D366] text-xs font-semibold shadow-lg transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </motion.a>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2.5 pl-5 pr-2 py-1.5 rounded-full bg-cream-100 hover:bg-white text-forest-950 text-xs sm:text-sm font-bold shadow-xl transition-colors group"
                  >
                    <span>{experience.ctaText}</span>
                    <span className="w-7 h-7 rounded-full bg-forest-950 text-gold-400 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Hospitality Switcher Sub-Nav with Framer Motion Shared Layout Pill */}
      <nav
        aria-label="Hospitality experiences navigation"
        className="sticky top-[52px] sm:top-[64px] z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {hospitalityExperiences.map((item) => {
              const isActive = item.id === experience.id;
              return (
                <Link
                  key={item.id}
                  to={`/hospitality/${item.slug}`}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-forest-900 hover:bg-cream-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeHospitalityNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-forest-900 shadow-sm -z-10"
                    />
                  )}
                  <span className="relative z-10">{item.shortLabel}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-[#faf8f5]">
        {/* Section 1: Editorial Overview & Pure Photo Showcase Gallery */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Story, Quote & Quick Facts Bento */}
            <motion.div
              key={`overview-${experience.id}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gold-400/50 text-forest-900 text-[11px] font-bold uppercase tracking-widest shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>{experience.tag}</span>
                </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight leading-tight">
                  Crafted Around Stillness, Warmth &amp; Local Character
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {experience.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Editorial Callout Quote */}
              <div className="bg-forest-950 text-cream-100 rounded-2xl p-5 sm:p-6 border border-gold-500/25 shadow-soft relative overflow-hidden">
                <Quote className="w-7 h-7 text-gold-400/30 absolute top-4 right-5" />
                <p className="font-serif italic text-base sm:text-lg text-gold-200 leading-relaxed pr-6">
                  “{experience.quote}”
                </p>
              </div>

              {/* Quick Facts Bento Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {experience.quickFacts.map((fact, idx) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 block">
                      {fact.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-forest-950 mt-1 block">
                      {fact.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Pure Photo Bento Grid (No Text Over Photos) */}
            <motion.div
              key={`gallery-${experience.id}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="col-span-2 aspect-[16/10] rounded-3xl overflow-hidden shadow-soft-lg border border-slate-200/70 bg-forest-950 group"
              >
                <img
                  src={heroGallery[0]}
                  alt={`${experience.title} showcase 1`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
              {heroGallery.slice(1, 3).map((imgUrl, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35 }}
                  className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft border border-slate-200/70 bg-forest-950 group"
                >
                  <img
                    src={imgUrl}
                    alt={`${experience.title} showcase ${idx + 2}`}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 2: Four Signature Experience Pillars */}
        <section className="py-16 bg-forest-950 text-cream-100 relative overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {experience.pillars.map((pillar, idx) => {
                const IconComponent = PILLAR_ICONS[pillar.icon] || Sparkles;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="bg-forest-900/80 backdrop-blur-md rounded-3xl p-6 border border-gold-500/20 hover:border-gold-400/50 transition-colors shadow-lg"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-gold-500/15 border border-gold-400/30 text-gold-400 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream-200/80 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Signature Offerings */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 block mb-2">
                Curated Offerings
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight">
                {experience.offeringsSectionTitle}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-light">
                {experience.offeringsSectionSubtitle}
              </p>
            </div>

            {experience.extraPageLink && (
              <Link
                to={experience.extraPageLink.to}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-bold shadow-md transition-colors shrink-0 self-start md:self-auto"
              >
                <span>{experience.extraPageLink.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </Link>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.offerings.map((offering, idx) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-cream-100 border border-gold-400/40 text-forest-900 text-[10px] font-bold uppercase tracking-wider">
                      {offering.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-teal-700 text-right">
                      {offering.meta}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 leading-snug mb-2.5">
                    {offering.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-5">
                    {offering.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {offering.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Matching Properties Across the Reveridge Collection */}
        {linkedProperties.length > 0 && (
          <section className="py-16 bg-cream-200 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700 block mb-1.5">
                    Where To Experience This
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                    Reveridge Properties Featuring {experience.shortLabel}
                  </h2>
                </div>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-gold-700 transition-colors"
                >
                  <span>View All 5 Destinations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {linkedProperties.map((prop, idx) => (
                  <motion.div
                    key={prop.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Pure Cover Image */}
                      <Link to={prop.route} className="block relative h-52 overflow-hidden bg-forest-950">
                        <img
                          src={prop.images?.[0]}
                          alt={prop.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-forest-950/90 text-gold-400 text-[10px] font-bold uppercase tracking-wider border border-gold-500/30">
                          {prop.propertyCode}
                        </span>
                        <span className="absolute bottom-3 left-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold">
                          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                          <span>{prop.rating}</span>
                        </span>
                      </Link>

                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-1.5 text-[11px] text-teal-700 font-semibold mb-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="truncate">{prop.location}</span>
                        </div>
                        <Link to={prop.route}>
                          <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors leading-snug">
                            {prop.name}
                          </h3>
                        </Link>
                        <p className="mt-2 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                          {prop.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                          From
                        </span>
                        <span className="font-serif text-lg font-bold text-forest-900">
                          ₹{prop.startingPrice.toLocaleString()}
                          <span className="text-[11px] font-sans font-normal text-slate-500"> / night</span>
                        </span>
                      </div>

                      <Link
                        to={prop.route}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest-900 hover:bg-forest-950 text-white text-xs font-bold transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Direct Concierge CTA Footer Banner */}
        <section className="py-16 sm:py-20 bg-[#faf8f5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-forest-950 text-cream-100 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-500/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden"
            >
              <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-2.5 max-w-xl relative z-10">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Bespoke Reveridge Reservation Desk</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Ready to Experience {experience.title}?
                </h2>
                <p className="text-xs sm:text-sm text-cream-200/80 font-light leading-relaxed">
                  Speak with our hospitality specialists for custom itineraries, extended-stay discounts, spa appointments, or direct wedding &amp; villa buyout quotes.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 relative z-10 w-full lg:w-auto">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest-900 hover:bg-forest-800 border border-gold-500/35 text-cream-100 text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{siteConfig.contact.phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 text-xs font-bold shadow-lg transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Stay</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
