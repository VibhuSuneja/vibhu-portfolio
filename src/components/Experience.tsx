"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';

const experiences = [
  {
    period: "Jan 2026 — Present",
    role: "Lead Developer",
    company: "AgrowCart (AI Marketplace)",
    description: "Architected a hyper-local marketplace with AI crop diagnosis and real-time negotiation clusters. Integrated Gemini 2.5 for intelligent agricultural insights.",
    highlight: "Architecture"
  },
  {
    period: "Aug 2025 — Jan 2026",
    role: "Tech Lead",
    company: "Rural Connect (SIH 2025)",
    description: "Led the development of a resource networking platform for rural communities. Focused on decentralized communication and community hubs.",
    highlight: "SIH 2025"
  },
  {
    period: "Oct 2024 — Present",
    role: "NIDU Researcher",
    company: "NIDU Research",
    description: "Authored a featured research article on renewable energy and climate technology. Conducted market research on sustainable agricultural startups in India and managed editorial workflows.",
    highlight: "NIDU Research"
  },
  {
    period: "2023 — May 2026",
    role: "Coordinator",
    company: "Highfliers Club, JMIT",
    description: "Spearheaded multimedia projects including MUN-23 event video production. Managed creative workshops combining technology and artistic expression.",
    highlight: "Leadership"
  },
  {
    period: "Aug 2025 — March 2026",
    role: "Coordinator",
    company: "Creative Fingers Club, JMIT",
    description: "Organized coding workshops, hackathons, and professional development events. Mentored 15+ students in web development and career guidance.",
    highlight: "Mentorship"
  },

  {
    period: "July — Aug 2025",
    role: "Full Stack Web Dev Intern",
    company: "Internshala Industrial Training",
    description: "Built production-ready MERN applications with secure payment gateways. Optimized database queries and achieved 100% score in assessment.",
    highlight: "MERN"
  },
  {
    period: "July — Aug 2024",
    role: "C++ & OOPs Trainee",
    company: "OOPS Institute of Computer Technology",
    description: "Developed a Banking Management System using advanced C++ logic. Mastered data structures and pointer-based memory management.",
    highlight: "C++ / OOPs"
  },
  {
    period: "2023 — 2024",
    role: "Ex-Coordinator",
    company: "TIN Club, JMIT",
    description: "Managed client-focused projects using Canva and video editing tools. Developed LinkedIn outreach strategies and professional branding content.",
    highlight: "Branding"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <SectionLabel text="Experience" />
          <h2 className="text-[36px] md:text-[48px] font-semibold text-white leading-tight">
            Professional <span className="font-serif italic text-white/60">Timeline</span>.
          </h2>
        </div>

        <div className="flex flex-col relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-[11.5%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c8f564]/30 via-white/5 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 group pb-16 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11.5%] top-[6px] -translate-x-1/2 w-2 h-2 rounded-full bg-[#c8f564] shadow-[0_0_10px_rgba(200,245,100,0.5)] hidden md:block z-10" />

              <div className="md:col-span-3 text-white/20 font-mono text-[12px] uppercase tracking-widest pt-1">
                {exp.period}
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-[22px] font-semibold text-white tracking-tight group-hover:text-[#c8f564] transition-colors">{exp.role}</h3>
                    <p className="text-[14px] text-white/40 mt-1 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#c8f564] uppercase tracking-[0.2em] bg-[#c8f564]/5 border border-[#c8f564]/10 px-4 py-1.5 rounded-full w-fit mt-4 md:mt-0 shadow-sm">
                    {exp.highlight}
                  </span>
                </div>
                <p className="text-[15px] text-white/50 leading-relaxed max-w-[750px] font-light">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
