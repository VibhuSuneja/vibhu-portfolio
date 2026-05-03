"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { Trophy, Code, Star, Award, Shield, Users } from 'lucide-react';

const certs = [
  {
    title: "Smart India Hackathon 2025",
    issuer: "Tech Lead & Participant (Rural Connect)",
    icon: <Trophy className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    title: "Smart India Hackathon 2023",
    issuer: "Team Lead & Participant",
    icon: <Code className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    title: "DPHB & ISRO Hackathons",
    issuer: "DPHB Round 2 Participant & ISRO Participant",
    icon: <Star className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    title: "Professional Fiesta 2024",
    issuer: "Event Coordinator - JMIT",
    icon: <Star className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    title: "Cyber Security Workshop",
    issuer: "Advanced Training Participant",
    icon: <Shield className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    title: "Soft Skills & Personality",
    issuer: "NPTEL Certified (Elite)",
    icon: <Award className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  },
  {
    title: "Blood Donation Drive",
    issuer: "Coordinator & Organizer",
    icon: <Users className="text-[#c8f564]" />,
    color: "rgba(200, 245, 100, 0.05)"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-background">
      <div className="container mx-auto">
        <div className="mb-16 text-center md:text-left">
          <SectionLabel text="Recognition" />
          <h2 className="text-[36px] md:text-[48px] font-semibold text-primary-text tracking-tight">
            Honors & <span className="font-serif italic opacity-60">Awards</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface border border-border-default p-6 rounded-[24px] group hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[10deg] border border-border-subtle">
                {cert.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-primary-text mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-[13px] text-secondary-text">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
