"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';
import { Logo } from './ui/Logo';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for active section
    const sections = navLinks.map(link => link.href.substring(1));
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-10% 0px -80% 0px',
      threshold: [0, 0.1, 0.2]
    });

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-16 py-4 flex items-center justify-between ${
        scrolled 
          ? 'bg-background/80 dark:bg-background/80 light:bg-white/90 backdrop-blur-md border-b border-border-subtle' 
          : 'bg-transparent'
      }`}
    >
      {/* Left: Brand */}
      <Logo size="sm" />

      {/* Center: Nav Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-[13px] font-light transition-all duration-300 ${
              activeSection === link.href.substring(1) 
                ? 'text-accent font-medium scale-110' 
                : 'text-muted-text hover:text-primary-text'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: CTA (Desktop) */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact"
            className="px-5 py-2 border border-border-default rounded-full flex items-center gap-2 hover:border-accent/30 transition-all group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[12px] text-secondary-text group-hover:text-primary-text transition-colors">Open to Work ↗</span>
          </a>
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-muted-text hover:text-primary-text transition-colors"
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
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-muted-text hover:text-primary-text"
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[28px] font-light transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-accent scale-110'
                    : 'text-muted-text hover:text-primary-text'
                }`}
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

