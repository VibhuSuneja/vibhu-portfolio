// src/components/ui/SectionLabel.tsx
import React from 'react';

export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#c8f564] animate-pulse"></span>
      {text}
    </div>
  );
}
