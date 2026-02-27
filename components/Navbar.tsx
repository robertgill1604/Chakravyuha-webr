"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/themes", label: "Themes" },
  { href: "/register", label: "Register" },
  { href: "/guidelines", label: "Guidelines" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <m.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 w-full bg-[#050810] border-b border-[#00ff88]/20"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logos Row */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            {/* College Logo */}
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-12 sm:h-14 w-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] blur-md opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full" />
              <img 
                src="/jjcet-new.jpeg" 
                alt="College Logo" 
                className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,255,136,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,255,136,1)] transition-all duration-300"
              />
            </m.div>
            {/* IIC Logo */}
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-10 sm:h-12 w-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] blur-md opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full" />
              <img 
                src="/iic.png" 
                alt="IIC Logo" 
                className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,1)] transition-all duration-300"
              />
            </m.div>
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-10 sm:h-12 w-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] blur-md opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full" />
              <img 
                src="/arch-digital.jpeg" 
                alt="Arch" 
                className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,1)] transition-all duration-300"
              />
            </m.div>
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-10 sm:h-12 w-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] blur-md opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full" />
              <img 
                src="/edii-tn.jpeg" 
                alt="EDII TNLogo" 
                className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,1)] transition-all duration-300"
              />
            </m.div>
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-10 sm:h-12 w-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] blur-md opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full" />
              <img 
                src="/marcello-tech.jpeg" 
                alt="IIC Logo" 
                className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,1)] transition-all duration-300"
              />
            </m.div>
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="h-10 sm:h-12 w-auto relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] blur-md opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-full" />
              <img 
                src="/startup-tn-white.png" 
                alt="TN Logo" 
                className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,212,255,1)] transition-all duration-300"
              />
            </m.div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 lg:px-4 py-2 text-sm font-medium group"
              >
                <span
                  className={`relative z-10 transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#00ff88] drop-shadow-[0_0_10px_rgba(0,255,136,0.8)]"
                      : "text-white/70 group-hover:text-[#00d4ff] group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.8)]"
                  }`}
                >
                  {link.label}
                </span>
                {pathname === link.href && (
                  <m.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/15 to-[#00d4ff]/15 rounded-lg border border-[#00ff88]/30 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {/* Glow effect on hover */}
                <m.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"
                />
                <m.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] shadow-[0_0_10px_rgba(0,255,136,0.8)]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "70%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <m.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-[#00ff88] transition-all duration-200 rounded-lg hover:bg-[#00ff88]/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.4)]"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </m.button>
        </div>

        {/* Mobile Navigation with Stagger */}
        <m.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 border-t border-[#00ff88]/10">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-[#00ff88]/15 to-[#00d4ff]/15 text-[#00ff88] border border-[#00ff88]/30 shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                        : "text-white/70 hover:bg-gradient-to-r hover:from-[#00ff88]/10 hover:to-[#00d4ff]/10 hover:text-[#00d4ff] hover:shadow-[0_0_10px_rgba(0,212,255,0.3)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </m.nav>
  );
}
