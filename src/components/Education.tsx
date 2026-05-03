"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { GraduationCap, School } from 'lucide-react';

const education = [
  {
    period: "2023 — Present",
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Seth Jai Parkash Mukand Lal Institute of Engineering & Technology, Haryana",
    details: "Focusing on Full-Stack Development, AI Engineering, and Data Structures.",
    icon: <GraduationCap size={20} className="text-[#c8f564]" />
  },
  {
    period: "2023",
    degree: "Class XII, CBSE (82%)",
    institution: "Maharana Pratap Public School, Kurukshetra",
    details: "Specialized in Science & Mathematics with strong academic performance.",
    icon: <School size={20} className="text-[#c8f564]" />
  },
  {
    period: "2021",
    degree: "Class X, CBSE (9.2 CGPA)",
    institution: "Maharana Pratap Public School, Kurukshetra",
    details: "Foundation in core sciences and humanities with distinction.",
    icon: <School size={20} className="text-[#c8f564]" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-16 bg-background">
      <div className="container mx-auto">
        <div className="mb-16">
          <SectionLabel text="Academic" />
          <h2 className="text-[36px] md:text-[48px] font-semibold text-primary-text leading-tight">
            Education <span className="font-serif italic opacity-60">Background</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface border border-border-default p-8 rounded-[32px] hover:border-accent/20 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                  {edu.icon}
                </div>
                <span className="text-accent font-mono text-[10px] uppercase tracking-widest pt-2">
                  {edu.period}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-[20px] font-semibold text-primary-text mb-1 group-hover:text-accent transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-secondary-text text-[14px]">
                  {edu.institution}
                </p>
              </div>

              <p className="text-[13px] text-secondary-text/80 leading-relaxed max-w-[400px]">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
