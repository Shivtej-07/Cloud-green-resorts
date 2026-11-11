import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useData } from '../../context/DataContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingButtons() {
  const { siteConfig } = useData();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Reveridge! I would like to inquire about boutique stays and tariffs.")}`;
  const callUrl = `tel:${siteConfig.contact.phone}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-2.5 print:hidden">
      <div className="flex items-center gap-2.5">
        {/* Click-to-Call Button */}
        <motion.a
          href={callUrl}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-forest-800 text-gold-400 rounded-full shadow-lg hover:shadow-2xl hover:bg-forest-900 border border-gold-500/40 transition-colors focus:outline-none focus:ring-4 focus:ring-forest-300"
          aria-label="Call Reveridge Hospitality"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Chat on WhatsApp with Reveridge"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-sm" />
        </motion.a>
      </div>
    </div>
  );
}
