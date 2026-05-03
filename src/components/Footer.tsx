import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6 md:px-16 bg-[#080808]">
      <div className="container mx-auto flex flex-col md:row items-center justify-between gap-6">
        <div className="text-[13px] text-white/30 font-light">
          © 2026 Vibhu Suneja. All rights reserved.
        </div>
        
        <div className="text-[13px] text-white/20 font-mono uppercase tracking-widest">
          Built with Next.js & Framer Motion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
