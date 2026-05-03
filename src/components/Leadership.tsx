"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Palette, Briefcase, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from './Icons';

const leadershipData = [
  {
    role: "NIDU Researcher",
    organization: "NIDU Research",
    duration: "Oct 2024 — June 2025",
    description: [
      "Authored a featured research-backed article on renewable energy and climate technology",
      "Conducted market research on sustainable agricultural startups in India",
      "Managed cross-functional editorial teams for digital publications"
    ],
    icon: <Briefcase size={20} className="text-[#c8f564]" />,
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/company/net-impact-delhi-university-chapter/", icon: <LinkedInIcon size={14} /> }
    ]
  },
  {
    role: "Coordinator",
    organization: "Creative Fingers Club, JMIT",
    duration: "Aug 2025 – March 2026",
    description: [
      "Organized coding workshops, hackathons, and professional development events",
      "Mentored 15+ students in web development and career guidance",
      "Led team initiatives in technical projects and community outreach"
    ],
    icon: <Users size={20} className="text-[#c8f564]" />,
    links: [
      { name: "Instagram", url: "https://www.instagram.com/cf_club08", icon: <InstagramIcon size={14} /> },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/creative-fingers-cf-club/", icon: <LinkedInIcon size={14} /> }
    ]
  },
  {
    role: "Coordinator",
    organization: "Highfliers Club, JMIT",
    duration: "2023 – May 2026",
    description: [
      "Spearheaded multimedia projects including MUN-23 event video production",
      "Managed creative workshops combining technology and artistic expression",
      "Led communication strategies for inter-college events and competitions"
    ],
    icon: <Palette size={20} className="text-[#c8f564]" />,
    links: [
      { name: "Instagram", url: "https://www.instagram.com/jmit_highfliers/", icon: <InstagramIcon size={14} /> }
    ]
  },
  {
    role: "Ex-Coordinator",
    organization: "TIN Club, JMIT",
    duration: "2023 – 2024",
    description: [
      "Managed client-focused projects using Canva and video editing tools",
      "Developed LinkedIn outreach strategies and professional branding content",
      "Enhanced team collaboration and project management skills"
    ],
    icon: <Briefcase size={20} className="text-[#c8f564]" />,
    links: [
      { name: "Instagram", url: "https://www.instagram.com/tech_in_nutshell", icon: <InstagramIcon size={14} /> }
    ]
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 px-6 md:px-16 bg-[#080808]">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-[#c8f564]/50" />
          <h2 className="text-[11px] font-mono text-[#c8f564] uppercase tracking-[0.3em]">
            Leadership & Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0f0f0f] border border-white/5 p-8 rounded-[32px] hover:border-[#c8f564]/20 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#c8f564]/10 transition-colors duration-500">
                {item.icon}
              </div>

              <div className="mb-6">
                <span className="text-[#c8f564] font-mono text-[10px] uppercase tracking-widest mb-2 block">
                  {item.duration}
                </span>
                <h3 className="text-[20px] font-semibold text-white mb-1 group-hover:text-[#c8f564] transition-colors">
                  {item.role}
                </h3>
                <p className="text-white/40 text-[14px]">
                  {item.organization}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {item.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-white/50 leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-[#c8f564]/40 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {item.links.length > 0 && (
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[12px] text-white/30 hover:text-[#c8f564] transition-all group/link"
                    >
                      {link.icon}
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
