"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  showText = true,
  size = 'md' 
}) => {
  const dimensions = {
    sm: { icon: 28, text: 'text-[14px]', sub: 'text-[9px]' },
    md: { icon: 34, text: 'text-[16px]', sub: 'text-[10px]' },
    lg: { icon: 44, text: 'text-[20px]', sub: 'text-[11px]' },
  }[size];

  return (
    <a 
      href="#" 
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="Vibhu Suneja Portfolio Logo"
    >
      {/* SVG Icon Badge */}
      <motion.div 
        whileHover={{ scale: 1.06, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center rounded-xl bg-surface border border-border-default group-hover:border-accent/50 p-2 shadow-lg transition-colors duration-300 overflow-hidden"
        style={{ width: dimensions.icon + 12, height: dimensions.icon + 12 }}
      >
        {/* Glowing Background Glow */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

        <svg 
          width={dimensions.icon} 
          height={dimensions.icon} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Outer Octagon Frame */}
          <polygon 
            points="12,2 28,2 38,12 38,28 28,38 12,38 2,28 2,12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-primary-text/30 group-hover:text-accent/60 transition-colors"
          />

          {/* V Shape */}
          <path 
            d="M9 12L20 31L31 12" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-primary-text group-hover:text-accent transition-colors duration-300"
          />

          {/* Dynamic S Slash */}
          <path 
            d="M26 14C26 14 20 12 16 16C12 20 24 22 20 27C16 32 10 28 10 28" 
            stroke="#c8f564" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="drop-shadow-[0_0_8px_#c8f564]"
          />

          {/* Accent Pulse Dot */}
          <circle 
            cx="31" 
            cy="11" 
            r="2.5" 
            fill="#c8f564" 
            className="animate-pulse"
          />
        </svg>
      </motion.div>

      {/* Brand Text Monogram */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-semibold text-primary-text tracking-tight ${dimensions.text} group-hover:text-accent transition-colors duration-300`}>
            Vibhu<span className="text-accent font-mono">.</span>Suneja
          </span>
          <span className={`font-mono text-muted-text uppercase tracking-[0.2em] mt-0.5 ${dimensions.sub}`}>
            Dev & Architect
          </span>
        </div>
      )}
    </a>
  );
};
