"use client";

import React from 'react';
import { SectionLabel } from './ui/SectionLabel';
import { motion } from 'framer-motion';

const skillsRow1 = ["MongoDB", "PostgreSQL", "Express.js", "React.js", "Node.js", "Next.js", "JavaScript", "TypeScript", "Python", "Java", "C++"];
const skillsRow2 = ["Gemini AI", "OpenAI", "LangChain", "ChromaDB", "RAG", "Agentic Workflows", "Vector DBs", "Prompt Engineering"];
const skillsRow3 = ["Git", "Docker", "Vercel", "AWS", "Firebase", "Socket.io", "Tailwind CSS", "Figma", "Canva", "CapCut", "Postman"];

const categories = [
  { name: "MERN Development", skills: "Full-stack apps using MongoDB, Express, React, and Node.js." },
  { name: "AI Integration", skills: "Gemini AI, Agentic RAG systems, and LLM-driven features." },
  { name: "Languages", skills: "JavaScript (ES6+), TypeScript, Python, Java, and C++." },
  { name: "Backend Logic", skills: "API design, complex state management, and real-time sockets." },
  { name: "Frontend UI", skills: "Responsive Next.js, Framer Motion, and mobile-first CSS architecture." },
  { name: "Cloud & DevOps", skills: "Vercel deployment, AWS, Docker, and CI/CD workflows." },
  { name: "UI/UX Design", skills: "Mastered Figma, prototyping, and professional branding." },
  { name: "Security & Auth", skills: "JWT, OAuth, secure payment gating, and GDPR practices." }
];

const SkillMarquee = ({ items, direction }: { items: string[], direction: 'left' | 'right' }) => (
  <div className="relative flex overflow-x-hidden border-y border-white/5 py-4">
    <div className={direction === 'left' ? 'marquee-left' : 'marquee-right'}>
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <div 
          key={i}
          className="mx-4 flex items-center gap-3 px-6 py-3 bg-[#111] border border-white/5 rounded-2xl text-[14px] font-mono text-white/40 hover:text-[#c8f564] hover:border-[#c8f564]/30 transition-all duration-300 cursor-default group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#c8f564] transition-colors"></span>
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#080808] overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 mb-20">
        <SectionLabel text="Skills" />
        <h2 className="text-[38px] md:text-[52px] font-semibold text-[#f0f0f0] tracking-tight">
          Technical <span className="font-serif italic text-white/60">Arsenal</span>.
        </h2>
        <p className="text-[14px] text-white/30 mt-4 max-w-[400px]">
          Bridging the gap between raw code and premium user experiences with modern tech.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-24">
        <SkillMarquee items={skillsRow1} direction="left" />
        <SkillMarquee items={skillsRow2} direction="right" />
        <SkillMarquee items={skillsRow3} direction="left" />
      </div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
               <span className="text-[10px] font-mono text-white/20">0{i+1}</span>
               <div className="h-[1px] flex-grow bg-white/5"></div>
            </div>
            <h4 className="text-[14px] font-medium text-white/90 mb-3 tracking-tight">{cat.name}</h4>
            <p className="text-[13px] text-white/40 leading-relaxed">{cat.skills}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

