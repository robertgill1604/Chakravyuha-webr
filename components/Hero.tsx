"use client";

import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Zap, ChevronDown } from "lucide-react";
import { FloatingShapes } from "@/components/effects/FloatingShapes";
import { eventConfig } from "@/config/eventConfig";
import { formatDate } from "@/lib/utils";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#050810] px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Multi-Color Radial Gradients - Responsive opacity */}
        <m.div 
          className="absolute inset-0 opacity-60 sm:opacity-80"
          style={{
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(0, 255, 136, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 40%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30 sm:opacity-40" />
        
        {/* Floating Shapes - Hidden on mobile for performance */}
        <div className="hidden sm:block">
          <FloatingShapes />
        </div>
        
        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#050810] via-[#050810]/80 to-transparent" />
      </div>

      <m.div 
        className="relative z-10 w-full max-w-[1200px] mx-auto py-16 sm:py-24 lg:py-32 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Badge with Enhanced Animation */}
        <m.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
        >
          <m.span 
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/40 text-[#00ff88] text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 255, 136, 0.2)",
                "0 0 40px rgba(0, 255, 136, 0.5)",
                "0 0 20px rgba(0, 255, 136, 0.2)",
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <m.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            </m.span>
            <span className="whitespace-nowrap">{eventConfig.secondSubtitle}</span>
          </m.span>
        </m.div>

        {/* Main Title - Glow Pulse Effect */}
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight px-2"
        >
          <span className="gradient-text-static glow-pulse-text block sm:inline">
            <span className="block sm:inline">CHAKRAVYUHA</span>
            <span className="block sm:inline text-[#22D3EE]">2K26</span>
          </span>
        </m.h1>

        {/* Subtitle with Slide Animation */}
        <m.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          className="text-lg sm:text-2xl md:text-3xl mb-3 sm:mb-4 font-light px-4"
        >
          <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
            {eventConfig.subtitle}
          </span>
        </m.p>

        {/* Tagline with Fade Up */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm sm:text-base lg:text-lg text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Join us for an exhilarating journey of innovation, creativity, and collaboration. 
          Build solutions that matter.
        </m.p>

        {/* Meta Row with Stagger */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {[
            { icon: Calendar, text: formatDate(eventConfig.date), color: "#00ff88" },
            { icon: MapPin, text: eventConfig.venue, color: "#00d4ff" },
            { icon: Users, text: `${eventConfig.teamSize.min}-${eventConfig.teamSize.max} Members`, color: "#a855f7" },
          ].map((item, index) => (
            <m.div 
              key={index}
              className="flex items-center justify-center space-x-2 text-white/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-sm"
              style={{
                backgroundColor: `${item.color}10`,
                borderColor: `${item.color}20`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: item.color,
                boxShadow: `0 0 20px ${item.color}30`,
                backgroundColor: `${item.color}20`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <m.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: item.color }} />
              </m.span>
              <span className="font-medium whitespace-nowrap">{item.text}</span>
            </m.div>
          ))}
        </m.div>

        {/* CTA Buttons with Enhanced Animation */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
        >
          <Link href="/register" className="w-full sm:w-auto">
            <m.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 255, 136, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300 text-sm sm:text-base"
              style={{
                background: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)',
              }}
            >
              <m.span 
                className="relative z-10 flex items-center justify-center gap-2 text-[#050810]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Register Now
                <m.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </m.span>
              </m.span>
              {/* Shimmer overlay */}
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </m.button>
          </Link>

          <Link href="/themes" className="w-full sm:w-auto">
            <m.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "#00ff88",
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00ff88]/50 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 text-sm sm:text-base"
            >
              <m.span 
                className="relative z-10 flex items-center justify-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Explore Themes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </m.span>
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </m.button>
          </Link>
        </m.div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/40"
          >
            <span className="text-xs mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
}
