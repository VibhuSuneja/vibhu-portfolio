"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { ArrowUpRight, Star, GitFork } from 'lucide-react';
import Image from 'next/image';
import { useGitHubData } from '@/hooks/useGitHubData';

const projects = [
  {
    id: "01",
    title: "Devlok",
    subtitle: "Interactive Mythology Knowledge Graph",
    tags: ["React", "D3.js", "MongoDB", "Gemini AI", "JWT"],
    description: "Advanced force-directed graph visualizing 104+ divine entities and their complex relationships across the four Yugas. Features agentic RAG search for deep theological insights and cosmic epoch filtering.",
    highlight: "104 Entities · Agentic Search",
    github: "https://github.com/VibhuSuneja/devlok",
    image: "/images/devlok-v3.png?v=4",
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    id: "02",
    title: "AgrowCart",
    subtitle: "AI-Powered Hyper-Local Marketplace",
    tags: ["Next.js 15", "Gemini AI", "Socket.io", "MongoDB"],
    description: "Hyper-local millet marketplace with intelligent crop analysis and real-time trade negotiations. End-to-end supply chain logic with dynamic farmer listings.",
    highlight: "Real-time · AI-Integrated",
    github: "https://github.com/VibhuSuneja/Agrowcart",
    image: "/images/agrowcart-v3.png?v=4",
    color: "rgba(100, 245, 150, 0.05)"
  },
  {
    id: "03",
    title: "AI Learning Ecosystem",
    subtitle: "Educational Platform",
    tags: ["MERN", "Gemini AI", "Vercel Edge", "GDPR"],
    description: "Production-hardened platform with AI content discovery and social gamification (XP/Leaderboards). Validated with 40 students. Enterprise-grade security.",
    highlight: "40 Students · XP Gamification",
    github: "https://github.com/VibhuSuneja/LearningManagement_system-",
    image: "/images/learning-ecosystem-v4.png?v=4",
    color: "rgba(100, 150, 245, 0.05)"
  }
];

const Projects = () => {
  const { getRepoStats } = useGitHubData();

  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <SectionLabel text="Projects" />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 border border-accent/20 text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                GitHub Sync
              </span>
            </div>
            <h2 className="text-[36px] md:text-[48px] font-semibold text-primary-text leading-tight mt-1">
              Latest <span className="font-serif italic text-muted-text">Work</span>.
            </h2>
            <p className="text-[14px] text-muted-text mt-2">A selection of what I&apos;ve built recently, synced directly with GitHub API.</p>
          </div>
          <a 
            href="https://github.com/VibhuSuneja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[13px] text-secondary-text hover:text-accent transition-colors flex items-center gap-2 group mb-2"
          >
            See All on GitHub <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const repoStats = getRepoStats(project.github);

            return (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-surface border border-border-subtle rounded-[24px] p-8 h-full flex flex-col transition-all duration-500 hover:border-accent/30 hover:bg-card relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-text">{`${project.id} // Project`}</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="font-mono text-[9px] text-secondary-text bg-secondary/50 border border-border-subtle px-2 py-1 rounded-md uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] mb-8 bg-secondary/50 border border-border-subtle group-hover:border-accent/20 transition-colors z-10">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-[24px] font-semibold text-primary-text mb-2 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-[14px] text-secondary-text mb-4 font-medium italic font-serif">{project.subtitle}</p>
                    <p className="text-[14px] text-secondary-text leading-relaxed mb-8 flex-grow">{project.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-muted-text font-mono uppercase tracking-tight">Focus</span>
                        <span className="text-[12px] text-accent font-medium tracking-tight">
                          {project.highlight}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {repoStats && (
                          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-secondary/40 border border-border-subtle font-mono text-[11px] text-muted-text">
                            <span className="flex items-center gap-1 hover:text-amber-400 transition-colors" title="Stars">
                              <Star size={12} className="text-amber-400 fill-amber-400/20" />
                              {repoStats.stars}
                            </span>
                            <span className="text-border-subtle">|</span>
                            <span className="flex items-center gap-1 hover:text-secondary-text transition-colors" title="Forks">
                              <GitFork size={12} />
                              {repoStats.forks}
                            </span>
                          </div>
                        )}
                        
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-secondary-text hover:bg-accent hover:text-accent-foreground transition-all duration-300 group/btn"
                        >
                          <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
