"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-16 py-4 flex items-center justify-between ${
        scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      {/* Left: Brand */}
      <div className="font-mono text-[15px] text-white/60 font-medium tracking-tighter">
        VS.
      </div>

      {/* Center: Nav Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[13px] font-light text-white/40 hover:text-white/80 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: CTA (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <a 
          href="#contact"
          className="px-5 py-2 border border-white/15 rounded-full flex items-center gap-2 hover:border-white/30 hover:text-white/80 transition-all group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8f564] animate-pulse"></span>
          <span className="text-[12px] text-white/60 group-hover:text-white/80 transition-colors">Open to Work ↗</span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white/40 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#080808]/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white"
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[28px] font-light text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

