"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Music, Landmark, Gamepad2, Brain, Shield, Eye, Bot, Code, Users, Briefcase, Trophy } from 'lucide-react';
import { GitHubIcon } from '@/components/Icons';

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
    title: "GigVerify",
    description: "Trust-based freelancing infrastructure with milestone enforcement.",
    icon: <Shield size={18} className="text-[#c8f564]" />,
    github: "https://github.com/VibhuSuneja/gigverify-trusted-freelancing",
    tags: ["MERN", "Trust"]
  },
  {
    title: "Focus Killer",
    description: "AI-driven activity detector to minimize distractions during work sessions.",
    icon: <Eye size={18} className="text-red-400" />,
    github: "https://github.com/VibhuSuneja/focus-killer-detector",
    tags: ["AI", "Vision"]
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
    title: "AIML Workshop",
    description: "Curated resources and code samples from AI/ML training sessions.",
    icon: <Code size={18} className="text-green-400" />,
    github: "https://github.com/VibhuSuneja/AIML-workshop",
    tags: ["Education", "ML"]
  },
  {
    title: "Faculty Mgmt",
    description: "System for managing academic staff and administrative records.",
    icon: <Users size={18} className="text-yellow-400" />,
    github: "https://github.com/VibhuSuneja/faculty_management_system",
    tags: ["Management", "DB"]
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
    title: "Placement Prep",
    description: "Comprehensive hub for interview prep and placement resources.",
    icon: <Briefcase size={18} className="text-indigo-400" />,
    github: "https://github.com/VibhuSuneja/PLACEMENT-PREPRATION",
    tags: ["Resources", "Career"]
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
  return (
    <section className="py-20 px-6 md:px-16 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-[24px] font-semibold text-white/90">
            More <span className="text-white/40">Projects</span>
          </h2>
          <p className="text-[13px] text-white/30 mt-1">Minor builds & architectural experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-[20px] hover:border-[#c8f564]/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#c8f564]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#c8f564]/10 group-hover:border-[#c8f564]/20 transition-all duration-500">
                    {project.icon}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors">
                      <GitHubIcon size={16} />
                    </a>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-[16px] font-semibold text-white mb-2 group-hover:text-[#c8f564] transition-colors">{project.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-white/30 px-2 py-1 bg-white/5 border border-white/5 rounded-md uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
