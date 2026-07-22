import React from 'react';
import { Logo } from './ui/Logo';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6 md:px-16 bg-[#080808]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo size="sm" />

        <div className="text-[13px] text-white/40 font-light text-center md:text-left">
          © {new Date().getFullYear()} Vibhu Suneja. All rights reserved.
        </div>
        
        <div className="text-[12px] text-white/30 font-mono uppercase tracking-widest text-center md:text-right">
          Built with Next.js & Framer Motion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
