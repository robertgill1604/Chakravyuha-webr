"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Home } from "lucide-react";

export function HomeButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setVisible(false);
      }
      
      scrollTimeout.current = setTimeout(() => {
        if (window.scrollY > 100) {
          setVisible(true);
        }
      }, 150);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  if (pathname === "/") return null;

  return (
    <Link href="/">
      <m.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 sm:bottom-6 left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#00ff88] to-[#22D3EE] text-white flex items-center justify-center shadow-lg shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all pointer-events-none"
        style={{ pointerEvents: visible ? "auto" : "none" }}
        aria-label="Go to Home"
      >
        <Home className="w-5 h-5 sm:w-6 sm:h-6" />
      </m.button>
    </Link>
  );
}
