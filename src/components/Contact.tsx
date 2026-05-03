"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, YouTubeIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 bg-[#080808]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1000px]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#c8f564]/50" />
            <span className="font-mono text-[10px] text-[#c8f564] uppercase tracking-[0.3em]">
              Available for new projects
            </span>
          </div>
          
          <h2 className="text-[48px] md:text-[96px] font-semibold text-white leading-[1] mb-16 tracking-tight">
            Let's build something <br />
            <span className="font-serif italic text-white/20 hover:text-[#c8f564]/40 transition-colors duration-700 cursor-default">extraordinary</span> together.
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] text-white/20 font-mono uppercase tracking-widest">Contact Information</span>
              <a 
                href="mailto:vibhusun01@gmail.com"
                className="text-[24px] md:text-[40px] text-white hover:text-[#c8f564] transition-all duration-500 flex items-center gap-4 group relative w-fit"
              >
                vibhusun01@gmail.com
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8f564] transition-all duration-500 group-hover:w-full" />
                <ArrowUpRight size={32} className="text-white/10 group-hover:text-[#c8f564] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[12px] text-white/20 font-mono uppercase tracking-widest md:text-right">Digital Presence</span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="https://www.linkedin.com/in/vibhusuneja08" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c8f564] transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <LinkedInIcon size={18} className="opacity-50 group-hover:opacity-100" /> LinkedIn
                </a>
                <a href="https://github.com/VibhuSuneja" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c8f564] transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <GitHubIcon size={18} className="opacity-50 group-hover:opacity-100" /> GitHub
                </a>
                <a href="https://www.instagram.com/o_.vibhu._o" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c8f564] transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <InstagramIcon size={18} className="opacity-50 group-hover:opacity-100" /> Instagram: Igneous Editzz Media
                </a>
                <a href="https://youtube.com/@igneous.editzz_" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#c8f564] transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <YouTubeIcon size={18} className="opacity-50 group-hover:opacity-100" /> YouTube: Igneous Editzz
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
