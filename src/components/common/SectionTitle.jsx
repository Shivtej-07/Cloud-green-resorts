import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
  titleClassName = ''
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {subtitle && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-semibold tracking-widest uppercase ${dark ? 'text-gold-400' : 'text-forest-700'}`}>
          <span className="w-6 h-[1.5px] bg-gold-500 rounded-full inline-block"></span>
          <span>{subtitle}</span>
          <span className="w-6 h-[1.5px] bg-gold-500 rounded-full inline-block"></span>
        </div>
      )}

      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${dark ? 'text-cream-100' : 'text-forest-950'} ${titleClassName}`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${dark ? 'text-cream-300/80' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
