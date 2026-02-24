"use client";

import { Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react";
import { m } from "framer-motion";
import { eventConfig } from "@/config/eventConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  const linkHoverVariants = {
    hover: { 
      x: 8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="relative bg-[#0a0f1a] border-t border-[#00ff88]/20 overflow-hidden">
      {/* Animated Top Gradient Line */}
      <m.div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, #a855f7, transparent)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          className="absolute -top-20 left-1/4 w-64 h-64 rounded-full blur-3xl bg-[#00ff88]/5"
          animate={{
            x: [0, 30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <m.div
          className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full blur-3xl bg-[#00d4ff]/5"
          animate={{
            x: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {/* Brand */}
          <m.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <m.h3 
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="shimmer-text">CHAKRAVYUHA</span>
            </m.h3>
            <m.p 
              className="text-white/60 text-sm leading-relaxed mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              State Level 24-Hour Innovation Sprint organized by JJ College of Engineering and Technology (Autonomous), Trichy. 
              Unleash your creativity and build innovative solutions.
            </m.p>
            <p className="text-white/40 text-sm">
              © {currentYear} JJ College of Engineering and Technology (Autonomous). All rights reserved.
            </p>
          </m.div>

          {/* Quick Links */}
          <m.div variants={itemVariants}>
            <m.h4 
              className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Quick Links
            </m.h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Themes", href: "/themes" },
                { label: "Register", href: "/register" },
                { label: "Guidelines", href: "/guidelines" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <m.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <m.a
                    href={link.href}
                    className="group flex items-center text-white/60 hover:text-[#00ff88] transition-colors duration-300 text-sm"
                    variants={linkHoverVariants}
                    whileHover="hover"
                  >
                    <m.span
                      className="relative"
                      whileHover={{ color: "#00ff88" }}
                    >
                      {link.label}
                    </m.span>
                    <m.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </m.span>
                  </m.a>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Contact */}
          <m.div variants={itemVariants}>
            <m.h4 
              className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact
            </m.h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { icon: MapPin, text: "JJ College of Engineering and Technology (Autonomous), Trichy", color: "#00ff88", link: "https://maps.app.goo.gl/T63G66ZV6nJSAkgi7" },
                { icon: Phone, label: "Student Coordinator", subtext: `${eventConfig.contact.studentCoordinator.name} - ${eventConfig.contact.studentCoordinator.phone}`, color: "#00d4ff" },
                { icon: Mail, text: eventConfig.contact.studentCoordinator.email || "contact@chakravyuha.in", color: "#a855f7" },
              ].map((item, index) => (
                <m.li 
                  key={index}
                  className="flex items-start gap-2.5 sm:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={item.link ? {} : { x: 8 }}
                >
                  <m.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 border"
                    style={{ 
                      backgroundColor: `${item.color}10`,
                      borderColor: `${item.color}20`,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${item.color}30`,
                      borderColor: item.color,
                    }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
                  </m.div>
                  <div className="min-w-0">
                    {"label" in item && item.label ? (
                      <>
                        <p className="text-white/40 text-[10px] sm:text-xs">{item.label}</p>
                        <p className="text-white/60 text-xs sm:text-sm break-words">{item.subtext}</p>
                      </>
                    ) : item.link ? (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 text-xs sm:text-sm pt-1.5 sm:pt-2 hover:text-[#00ff88] transition-colors block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white/60 text-xs sm:text-sm pt-1.5 sm:pt-2 block">{item.text}</span>
                    )}
                  </div>
                </m.li>
              ))}
            </ul>
          </m.div>
        </m.div>

        {/* Bottom Bar */}
        <m.div 
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#00ff88]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
        </m.div>
      </div>
    </footer>
  );
}
