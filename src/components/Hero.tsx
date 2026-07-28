"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Star } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, YouTubeIcon, InstagramIcon } from '@/components/Icons';
import Image from 'next/image';
import { useGitHubData } from '@/hooks/useGitHubData';

const Hero = () => {
  const { data: githubData } = useGitHubData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  const totalRepos = githubData?.profile?.publicRepos ?? 25;
  const totalStars = githubData?.profile?.totalStars ?? 45;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0 bg-background">
      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.01]" />

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f564] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f564]"></span>
            </span>
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-[0.2em] font-medium">
              available for work
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-[44px] md:text-[64px] font-semibold text-primary-text leading-[1.05] tracking-tight mb-7">
            Engineering ideas <br />
            into <span className="font-serif italic text-secondary-text/60">scalable</span> reality.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[15px] md:text-[16px] text-secondary-text font-light max-w-[460px] leading-relaxed mb-9">
            NIDU Researcher & MERN Stack Developer. Lead Developer of AgrowCart. Specialized in building AI-integrated platforms, agentic systems, and premium digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 mb-10">
            <a 
              href="mailto:vibhusun01@gmail.com"
              className="bg-primary-text text-background font-medium rounded-full px-8 py-3.5 text-[14px] flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Get In Touch <ArrowUpRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/18sp2AiBCeTS5gUcXAHrTZdMY015MQTWH/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-primary-text transition-colors flex items-center gap-2 text-[14px] group"
            >
              <div className="w-8 h-8 rounded-full border border-border-default flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <Play size={12} fill="currentColor" />
              </div>
              Watch Video Resume ↗
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a href="https://github.com/VibhuSuneja" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors flex items-center gap-2" title="GitHub Profile">
              <GitHubIcon size={20} />
              <span className="text-[11px] font-mono text-muted-text hover:text-accent flex items-center gap-1.5 bg-secondary/30 px-2 py-0.5 rounded-full border border-border-subtle">
                <Star size={11} className="text-amber-400 fill-amber-400/20" />
                {totalStars} stars
              </span>
            </a>
            <a href="https://www.linkedin.com/in/vibhusuneja08" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors" title="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
            <a href="https://youtube.com/@igneous.editzz_" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors" title="YouTube">
              <YouTubeIcon size={20} />
            </a>
            <a href="https://www.instagram.com/o_.vibhu._o" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors" title="Instagram">
              <InstagramIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-5 order-first md:order-last w-full max-w-[400px] mx-auto md:max-w-none"
        >
          <div className="relative">
            <div className="bg-surface border border-border-default rounded-[32px] p-4 group shadow-2xl shadow-accent/5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-secondary">
                <Image 
                  src="/images/profile.jpg"
                  alt="Vibhu Suneja"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                
                {/* Status Badge */}
                <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8f564]"></span>
                  <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider">Online</span>
                </div>
              </div>
              
              <div className="mt-6 px-2 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[14px] font-medium text-primary-text">Vibhu Suneja</h3>
                  <span className="text-[11px] text-muted-text">MERN Specialist</span>
                </div>
                <div className="text-[12px] text-secondary-text leading-relaxed">
                  Focusing on Full-Stack Scalability & AI Engineering. Currently based in Kurukshetra, Haryana, India.
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md border border-border-default p-4 rounded-2xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-bold">
                  {totalRepos}+
                </div>
                <div className="text-[11px] text-secondary-text leading-tight">
                  Public Repos <br />
                  <span className="text-muted-text font-mono text-[9.5px]">Real-time Sync</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
