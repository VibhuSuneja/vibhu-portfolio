"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919468150076",
  defaultMessage = "Hi Vibhu, I came across your portfolio and would love to connect!",
}) => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-6 md:left-8 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 group cursor-pointer border border-white/20"
      aria-label="Message Vibhu on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <MessageSquare size={20} className="fill-current text-white" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </div>

      <span className="text-[13px] font-medium tracking-wide hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};
