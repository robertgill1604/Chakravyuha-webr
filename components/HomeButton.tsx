"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { Home } from "lucide-react";

export function HomeButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link href="/">
      <m.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 sm:bottom-6 left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#00ff88] to-[#22D3EE] text-white flex items-center justify-center shadow-lg shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all"
        aria-label="Go to Home"
      >
        <Home className="w-5 h-5 sm:w-6 sm:h-6" />
      </m.button>
    </Link>
  );
}
