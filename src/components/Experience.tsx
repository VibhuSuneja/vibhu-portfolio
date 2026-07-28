"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';

const experiences = [
  {
    period: "Jul 2026 — Present",
    role: "Full Stack Development Intern",
    company: "Elevance Skills",
    description: "Architecting and developing full-stack web applications and AI-driven solutions. Collaborating on modern frontend & backend architectures, optimizing API integrations, and engineering high-performance user experiences.",
    highlight: "Full Stack & AI"
  },
  {
    period: "Jun 2026 — Jul 2026",
    role: "Full Stack Web Development Intern",
    company: "HawksCode (EasyShiksha)",
    description: "Architected and developed a Multi-Agent AI Platform using the MERN stack. Implemented autonomous agent logic to handle complex backend workflows and database-driven task management. Collaborated with industry mentors to ensure scalable code architecture and optimal API performance.",
    highlight: "Multi-Agent AI"
  },
  {
    period: "Feb 2026 — Jun 2026",
    role: "Placement Readiness Mentor",
    company: "JMIT",
    description: "Mentored peers by reviewing and optimizing resumes to align with industry standards and ATS requirements. Provided strategic guidance on crafting impactful video introductions to enhance campus placement prospects.",
    highlight: "Mentorship"
  },
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
    period: "Jul 2025 — May 2026",
    role: "Researcher & Content Author",
    company: "Net Impact Delhi University (NIDU)",
    description: "Contributed research reports on renewable energy trends and sustainability initiatives. Authored featured articles on climate technology and sustainable agricultural startups in India.",
    highlight: "NIDU Research"
  },
  {
    period: "Aug 2023 — Mar 2026",
    role: "Club Coordinator",
    company: "Highfliers & Creative Fingers, JMIT",
    description: "Organized technical workshops, coding activities, and multimedia events. Mentored 15+ peers on Git/GitHub workflows and collaborated on team-based technical projects.",
    highlight: "Leadership"
  },
  {
    period: "Jul — Aug 2025",
    role: "Full Stack Web Dev Intern",
    company: "Internshala Industrial Training",
    description: "Built production-ready MERN applications with secure payment gateways. Optimized database queries and achieved 100% score in assessment.",
    highlight: "MERN"
  },
  {
    period: "Jul — Aug 2024",
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
