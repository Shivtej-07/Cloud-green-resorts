import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none shadow-sm cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs tracking-wider uppercase font-semibold",
    md: "px-6 py-2.5 text-sm tracking-wide font-medium",
    lg: "px-8 py-3.5 text-base tracking-wide font-semibold",
    icon: "p-2.5 rounded-full"
  };

  const variantStyles = {
    primary: "bg-forest-800 hover:bg-forest-900 text-cream-100 hover:text-white border border-forest-700/60 shadow-md hover:shadow-lg focus:ring-forest-800",
    gold: "bg-gold-500 hover:bg-gold-600 text-forest-950 font-semibold border border-gold-400 shadow-gold-glow/40 hover:shadow-gold-glow focus:ring-gold-500",
    outline: "bg-transparent hover:bg-forest-800/10 text-forest-800 border-2 border-forest-800 focus:ring-forest-800",
    outlineWhite: "bg-transparent hover:bg-white/15 text-white border-2 border-white/80 hover:border-white focus:ring-white",
    white: "bg-white hover:bg-cream-100 text-forest-800 hover:text-forest-900 border border-slate-200/80 shadow-md focus:ring-forest-800",
    ghost: "bg-transparent hover:bg-forest-800/10 text-forest-800 focus:ring-forest-800 shadow-none",
    dark: "bg-forest-950 hover:bg-black text-cream-100 border border-gold-500/30 focus:ring-forest-950"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={`w-4 h-4 mr-2 transition-transform group-hover:-translate-x-0.5`} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={`w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5`} />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={`group ${combinedClass}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} className={`group ${combinedClass}`} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`group ${combinedClass}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
