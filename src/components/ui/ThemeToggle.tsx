"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:border-white/20 transition-all group overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: theme === "dark" ? 0 : 40,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
        className="absolute"
      >
        <Moon size={18} className="text-[#c8f564]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: theme === "light" ? 0 : -40,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
        className="absolute"
      >
        <Sun size={18} className="text-[#87b227]" />
      </motion.div>
      <div className="absolute inset-0 bg-[#c8f564]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
