import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import WhatsAppIcon from './WhatsAppIcon';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  const { siteConfig } = useData();
  const currentYear = new Date().getFullYear();

  const primaryPhone = siteConfig?.contact?.phoneDisplay || '+91 94226 00577';
  const secondaryPhone = siteConfig?.contact?.altPhone || '+91 94206 33577';
  const primaryEmail = siteConfig?.contact?.email || 'reservations@reveridge.com';
  const supportEmail = siteConfig?.contact?.supportEmail || 'info@reveridge.com';
  const websiteLabel = siteConfig?.contact?.website || 'www.reveridge.com';
  const websiteUrl = siteConfig?.contact?.websiteUrl || 'https://www.reveridge.com';
  const instagramUrl = siteConfig?.socials?.instagram || 'https://www.instagram.com/reveridge/';
  const instagramHandle = siteConfig?.socials?.instagramHandle || '@reveridge';
  const facebookUrl = siteConfig?.socials?.facebook || 'https://www.facebook.com/reveridge/';
  const facebookLabel = siteConfig?.socials?.facebookLabel || 'Reveridge — Elevated Escapes';

  const socialChannels = [
    {
      label: 'Instagram',
      value: instagramHandle,
      href: instagramUrl,
      icon: InstagramIcon,
      accentClass: 'text-rose-300 bg-rose-500/15 border-rose-400/30',
      hoverBorder: 'hover:border-rose-400/50'
    },
    {
      label: 'Facebook',
      value: facebookLabel,
      href: facebookUrl,
      icon: FacebookIcon,
      accentClass: 'text-sky-300 bg-sky-500/15 border-sky-400/30',
      hoverBorder: 'hover:border-sky-400/50'
    },
    {
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: `https://wa.me/${siteConfig?.contact?.whatsapp || '919420633577'}`,
      icon: WhatsAppIcon,
      accentClass: 'text-[#25D366] bg-[#25D366]/15 border-[#25D366]/35',
      hoverBorder: 'hover:border-[#25D366]/55'
    }
  ];

  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-forest-900/80 pt-16 pb-8 print:hidden relative overflow-hidden">
      {/* Subtle Ambient Accent Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/40 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-800/80">
          {/* Col 1: Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-5"
          >
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gold-500/50 shadow-lg transition-transform duration-300 group-hover:scale-105 shrink-0 bg-forest-950">
                <img src="/reveridge-logo.jpg" alt="Reveridge Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">REVERIDGE</h3>
                <p className="text-xs text-gold-400 font-semibold tracking-widest uppercase">
                  Boutique Nature Escapes • Maharashtra
                </p>
                <p className="text-[11px] text-cream-300/70">रेवरिज बुटीक एस्केप्स</p>
              </div>
            </Link>

            <p className="text-sm text-cream-300/80 leading-relaxed max-w-md font-light">
              A curated collection of boutique nature escapes across Maharashtra — spanning mountains, forests, and coastlines across Mahabaleshwar, Lingmala, Matheran, and Dapoli. Elevation in every sense.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-cream-300/80 pt-1">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>{siteConfig?.address?.full}</span>
            </div>
          </motion.div>

          {/* Col 2: Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-2"
          >
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-teal-300 hover:text-teal-200 font-semibold inline-flex items-center gap-1.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Our 5 Destinations</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  About Our Resort
                </Link>
              </li>
              <li>
                <Link to="/spa" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Spa &amp; Wellness
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-300/80 hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 3: Direct Reservations, Email, Website & Social Presence */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="lg:col-span-6 space-y-4"
          >
            <h4 className="font-serif text-base font-semibold text-white tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>Connect With Reveridge</span>
            </h4>

            {/* Direct Phone, Email & Website Bento Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Phone Numbers */}
              <div className="rounded-2xl bg-forest-900/70 border border-white/10 p-4 space-y-2 hover:border-gold-500/35 transition-colors">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold-400">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Reservations Desk</span>
                </div>
                <div className="flex flex-col gap-1 text-xs sm:text-sm font-medium text-white">
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                    className="hover:text-gold-300 transition-colors w-fit"
                  >
                    {primaryPhone}
                  </a>
                  <a
                    href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                    className="text-cream-200/85 hover:text-gold-300 transition-colors w-fit"
                  >
                    {secondaryPhone}
                  </a>
                </div>
              </div>

              {/* Emails & Official Website */}
              <div className="rounded-2xl bg-forest-900/70 border border-white/10 p-4 space-y-2 hover:border-gold-500/35 transition-colors">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold-400">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email &amp; Website</span>
                </div>
                <div className="flex flex-col gap-1 text-xs font-medium text-white">
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-gold-300 transition-colors truncate"
                  >
                    {primaryEmail}
                  </a>
                  <a
                    href={`mailto:${supportEmail}`}
                    className="text-cream-200/85 hover:text-gold-300 transition-colors truncate"
                  >
                    {supportEmail}
                  </a>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-300 hover:text-teal-200 pt-1 transition-colors w-fit"
                  >
                    <Globe className="w-3.5 h-3.5 shrink-0" />
                    <span>{websiteLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & WhatsApp Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {socialChannels.map((channel) => {
                const ChannelIcon = channel.icon;
                return (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center gap-2.5 rounded-2xl bg-forest-900/65 border border-white/10 ${channel.hoverBorder} px-3.5 py-2.5 transition-colors shadow-sm`}
                  >
                    <span className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${channel.accentClass}`}>
                      <ChannelIcon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase tracking-wider text-cream-300/65 block leading-none mb-1">
                        {channel.label}
                      </span>
                      <span className="text-xs font-semibold text-white group-hover:text-gold-300 transition-colors truncate block">
                        {channel.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300/60 gap-5">
          <p className="text-center sm:text-left leading-relaxed">
            © {currentYear} {siteConfig?.name}. All rights reserved. Metgutad, Mahabaleshwar–Panchgani, Maharashtra.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="w-full sm:w-auto flex justify-center sm:justify-end"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Link
                to="/admin"
                title="Staff & Admin Control Panel"
                className="group relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-forest-900/90 hover:bg-forest-800/90 border border-gold-400/30 hover:border-gold-400/60 shadow-lg shadow-black/20 backdrop-blur-md transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center shrink-0 group-hover:bg-gold-500/25 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                </span>
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-gold-400/80 font-semibold">
                    Management
                  </span>
                  <span className="text-xs font-semibold text-cream-100 group-hover:text-gold-300 transition-colors">
                    Admin Portal
                  </span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-400/70 group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
