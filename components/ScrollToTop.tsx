"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <m.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-white flex items-center justify-center shadow-lg shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 transition-all"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </m.button>
  );
}
