import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Cloudgreen Resort! I would like to inquire about room booking and tariffs.")}`;
  const callUrl = `tel:${siteConfig.contact.phone}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 print:hidden">
      {/* WhatsApp Floating Prompt Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
          >
            <span>💬 Planning a visit? Chat with our Metgutad desk!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-13 h-13 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Chat on WhatsApp with Cloudgreen Resort"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-white/20" />
        </motion.a>

        {/* Click-to-Call Button */}
        <motion.a
          href={callUrl}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 md:w-13 md:h-13 bg-forest-800 text-gold-400 rounded-full shadow-lg hover:shadow-2xl hover:bg-forest-900 border border-gold-500/40 transition-colors focus:outline-none focus:ring-4 focus:ring-forest-300"
          aria-label="Call Cloudgreen Resort Metgutad"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      </div>
    </div>
  );
}
