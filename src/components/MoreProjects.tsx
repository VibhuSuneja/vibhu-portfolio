"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Landmark, Gamepad2, Brain, Bot, Trophy, ChevronDown, Star, Code, Shield } from 'lucide-react';
import { GitHubIcon } from '@/components/Icons';
import { useGitHubData } from '@/hooks/useGitHubData';

const moreProjects = [
  {
    title: "Spotify Clone",
    description: "Responsive React frontend with playlist management and smooth transitions.",
    icon: <Music size={18} className="text-[#1DB954]" />,
    github: "https://github.com/VibhuSuneja/Spotify-Clone",
    tags: ["React", "CSS"]
  },
  {
    title: "Banking System",
    description: "C++ based system with account management and secure transaction logic.",
    icon: <Landmark size={18} className="text-blue-400" />,
    github: "https://github.com/VibhuSuneja/Banking_Management_System",
    tags: ["C++", "Security"]
  },
  {
    title: "Nexus Assistant",
    description: "Intelligent study companion with vision-broadcast and multi-device sync.",
    icon: <Brain size={18} className="text-purple-400" />,
    github: "https://github.com/VibhuSuneja/nexus-study-assistant",
    tags: ["Next.js", "AI"]
  },
  {
    title: "Virtual Assistant",
    description: "Voice-activated personal assistant for workflow automation.",
    icon: <Bot size={18} className="text-cyan-400" />,
    github: "https://github.com/VibhuSuneja/Virtual-assistant",
    tags: ["Python", "AI"]
  },
  {
    title: "Agrowcart AI Brain",
    description: "The core neural logic and agentic workflows powering Agrowcart.",
    icon: <Brain size={18} className="text-orange-400" />,
    github: "https://github.com/VibhuSuneja/agrowcart-ai-brain",
    tags: ["AI", "Logic"]
  },
  {
    title: "Rural Connect",
    description: "Tech Lead for SIH 2025 project. Bridging communication gaps in rural areas through intelligent resource networking and community hubs.",
    icon: <Trophy size={18} className="text-[#c8f564]" />,
    github: "https://github.com/VibhuSuneja/Rural_connect_09",
    tags: ["SIH 2025", "Tech Lead"]
  },
  {
    title: "Shunya",
    description: "Core logic and zero-point architecture for scalable web apps.",
    icon: <Shield size={18} className="text-gray-400" />,
    github: "https://github.com/VibhuSuneja/Shunya",
    tags: ["Architecture", "Logic"]
  },
  {
    title: "Simon Says",
    description: "Interactive memory game built with vanilla JavaScript logic.",
    icon: <Gamepad2 size={18} className="text-pink-400" />,
    github: "https://github.com/VibhuSuneja/Simon-says",
    tags: ["Game", "JS"]
  },
  {
    title: "Calculator",
    description: "A sleek, responsive calculator application with modern UI.",
    icon: <Code size={18} className="text-white/20" />,
    github: "https://github.com/VibhuSuneja/Calculator",
    tags: ["Basics", "UI"]
  }
];

const MoreProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const { data, getRepoStats } = useGitHubData();

  // Dynamically filter to ensure ONLY public repositories exist in the UI
  const publicProjects = useMemo(() => {
    if (!data || !data.repos) return moreProjects;
    return moreProjects.filter((project) => getRepoStats(project.github) !== null);
  }, [data, getRepoStats]);

  const displayedProjects = showAll ? publicProjects : publicProjects.slice(0, 8);

  return (
    <section className="py-20 px-6 md:px-16 border-t border-border-subtle bg-background">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[24px] font-semibold text-primary-text">
              More <span className="text-muted-text">Projects</span>
            </h2>
            <p className="text-[13px] text-muted-text mt-1">Public open-source builds & architectural experiments synced with GitHub API.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
              const repoStats = getRepoStats(project.github);

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-surface border border-border-default p-6 rounded-[20px] hover:border-accent/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-secondary/50 border border-border-subtle flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500">
                        {project.icon}
                      </div>
                      <div className="flex items-center gap-3">
                        {repoStats && repoStats.stars > 0 && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                            <Star size={10} className="fill-amber-400" />
                            {repoStats.stars}
                          </span>
                        )}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-accent transition-colors">
                          <GitHubIcon size={16} />
                        </a>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-[16px] font-semibold text-primary-text mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-[13px] text-secondary-text leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono text-muted-text px-2 py-1 bg-secondary/50 border border-border-subtle rounded-md uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {publicProjects.length > 8 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-border-default rounded-full text-[13px] text-secondary-text hover:text-accent hover:border-accent/30 transition-all group flex items-center gap-2"
            >
              {showAll ? 'Show Less' : `Show All (${publicProjects.length})`}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoreProjects;
