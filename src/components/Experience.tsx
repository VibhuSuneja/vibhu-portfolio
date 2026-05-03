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
          <h2 className="text-[36px] md:text-[48px] font-semibold text-primary-text leading-tight">
            Professional <span className="font-serif italic text-secondary-text/60">Timeline</span>.
          </h2>
        </div>

        <div className="flex flex-col relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-[11.5%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-border-default to-transparent z-0" />

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
              <div className="absolute left-[20px] md:left-[11.5%] top-[8px] md:top-[6px] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(var(--accent-rgb),0.4)] z-10 border-2 border-background" />

              <div className="pl-12 md:pl-0 md:col-span-3 text-muted-text font-mono text-[12px] uppercase tracking-widest pt-1">
                {exp.period}
              </div>
              <div className="pl-12 md:pl-0 md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-[22px] font-semibold text-primary-text tracking-tight group-hover:text-accent transition-colors">{exp.role}</h3>
                    <p className="text-[14px] text-secondary-text mt-1 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full w-fit mt-4 md:mt-0 shadow-sm">
                    {exp.highlight}
                  </span>
                </div>
                <p className="text-[15px] text-secondary-text leading-relaxed max-w-[750px] font-light">
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
