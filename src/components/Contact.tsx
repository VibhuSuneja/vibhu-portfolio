"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon } from './Icons';

const Contact = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919468150076";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Vibhu, I saw your portfolio and would like to connect!")}`;

  return (
    <section id="contact" className="py-32 px-6 md:px-16 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1000px]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent/50" />
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
              Available for new projects
            </span>
          </div>
          
          <h2 className="text-[36px] md:text-[64px] lg:text-[72px] font-semibold text-primary-text leading-[1.1] mb-16 tracking-tight">
            Let's build something <br />
            <span className="font-serif italic text-secondary-text/30 hover:text-accent/60 transition-colors duration-700 cursor-default">extraordinary</span> together.
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] text-muted-text font-mono uppercase tracking-widest">Contact Information</span>
              <a 
                href="mailto:vibhusun01@gmail.com"
                className="text-[24px] md:text-[40px] text-primary-text hover:text-accent transition-all duration-500 flex items-center gap-4 group relative w-fit"
              >
                vibhusun01@gmail.com
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
                <ArrowUpRight size={32} className="text-muted-text group-hover:text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[12px] text-muted-text font-mono uppercase tracking-widest md:text-right">Digital Presence</span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <WhatsAppIcon size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" /> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/vibhusuneja08" target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-accent transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <LinkedInIcon size={18} className="text-muted-text group-hover:text-accent" /> LinkedIn
                </a>
                <a href="https://github.com/VibhuSuneja" target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-accent transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <GitHubIcon size={18} className="text-muted-text group-hover:text-accent" /> GitHub
                </a>
                <a href="https://www.instagram.com/o_.vibhu._o" target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-accent transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <InstagramIcon size={18} className="text-muted-text group-hover:text-accent" /> Instagram
                </a>
                <a href="https://youtube.com/@igneous.editzz_" target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-accent transition-all flex items-center gap-2 text-[14px] font-medium group">
                  <YouTubeIcon size={18} className="text-muted-text group-hover:text-accent" /> YouTube
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
