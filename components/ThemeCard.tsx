"use client";

import { m } from "framer-motion";
import { Brain, Smartphone, Cpu, Shield, Link, Lightbulb, ArrowUpRight, Sparkles, Heart, Sprout, Accessibility, GraduationCap } from "lucide-react";

const iconMap = {
  Brain,
  Smartphone,
  Cpu,
  Shield,
  Link,
  Lightbulb,
  Heart,
  Sprout,
  Accessibility,
  GraduationCap,
};

const colorMap: Record<string, { border: string; icon: string; glow: string; gradient: string }> = {
  Brain: { 
    border: "border-[#00ff88]/30 hover:border-[#00ff88]/60",
    icon: "text-[#00ff88]",
    glow: "shadow-[#00ff88]/20",
    gradient: "from-[#00ff88]/20 to-[#00ff88]/5",
  },
  Smartphone: { 
    border: "border-[#00d4ff]/30 hover:border-[#00d4ff]/60",
    icon: "text-[#00d4ff]",
    glow: "shadow-[#00d4ff]/20",
    gradient: "from-[#00d4ff]/20 to-[#00d4ff]/5",
  },
  Cpu: { 
    border: "border-[#a855f7]/30 hover:border-[#a855f7]/60",
    icon: "text-[#a855f7]",
    glow: "shadow-[#a855f7]/20",
    gradient: "from-[#a855f7]/20 to-[#a855f7]/5",
  },
  Shield: { 
    border: "border-[#00ff88]/30 hover:border-[#00ff88]/60",
    icon: "text-[#00ff88]",
    glow: "shadow-[#00ff88]/20",
    gradient: "from-[#00ff88]/20 to-[#00ff88]/5",
  },
  Link: { 
    border: "border-[#00d4ff]/30 hover:border-[#00d4ff]/60",
    icon: "text-[#00d4ff]",
    glow: "shadow-[#00d4ff]/20",
    gradient: "from-[#00d4ff]/20 to-[#00d4ff]/5",
  },
  Lightbulb: { 
    border: "border-[#a855f7]/30 hover:border-[#a855f7]/60",
    icon: "text-[#a855f7]",
    glow: "shadow-[#a855f7]/20",
    gradient: "from-[#a855f7]/20 to-[#a855f7]/5",
  },
  Heart: { 
    border: "border-[#ef4444]/30 hover:border-[#ef4444]/60",
    icon: "text-[#ef4444]",
    glow: "shadow-[#ef4444]/20",
    gradient: "from-[#ef4444]/20 to-[#ef4444]/5",
  },
  Sprout: { 
    border: "border-[#22c55e]/30 hover:border-[#22c55e]/60",
    icon: "text-[#22c55e]",
    glow: "shadow-[#22c55e]/20",
    gradient: "from-[#22c55e]/20 to-[#22c55e]/5",
  },
  Accessibility: { 
    border: "border-[#f59e0b]/30 hover:border-[#f59e0b]/60",
    icon: "text-[#f59e0b]",
    glow: "shadow-[#f59e0b]/20",
    gradient: "from-[#f59e0b]/20 to-[#f59e0b]/5",
  },
  GraduationCap: { 
    border: "border-[#3b82f6]/30 hover:border-[#3b82f6]/60",
    icon: "text-[#3b82f6]",
    glow: "shadow-[#3b82f6]/20",
    gradient: "from-[#3b82f6]/20 to-[#3b82f6]/5",
  },
};

interface ThemeCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  index?: number;
}

export function ThemeCard({ title, description, icon, index = 0 }: ThemeCardProps) {
  const IconComponent = iconMap[icon];
  const colors = colorMap[icon] || colorMap.Brain;

  return (
    <m.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Animated Gradient Border */}
      <m.div 
        className="hidden sm:block absolute -inset-[1px] rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#a855f7] opacity-0 group-hover:opacity-100 blur-sm"
        animate={{
          background: [
            "linear-gradient(90deg, #00ff88, #00d4ff, #a855f7)",
            "linear-gradient(90deg, #a855f7, #00ff88, #00d4ff)",
            "linear-gradient(90deg, #00d4ff, #a855f7, #00ff88)",
            "linear-gradient(90deg, #00ff88, #00d4ff, #a855f7)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Card */}
      <m.div 
        className={`relative h-full p-3 sm:p-5 lg:p-6 bg-[#111827]/90 backdrop-blur-sm rounded-lg sm:rounded-2xl border ${colors.border} overflow-hidden transition-all duration-500`}
        whileHover={{
          boxShadow: "0 0 40px rgba(0, 255, 136, 0.2)",
        }}
      >
        {/* Background Gradient Animation */}
        <m.div 
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Animated Gradient Sweep */}
        <m.div 
          className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Corner Glow */}
        <m.div 
          className={`hidden sm:block absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.glow}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Icon with Enhanced Animation */}
        <m.div
          className={`relative w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4 rounded-lg sm:rounded-xl bg-[#050810] flex items-center justify-center border ${colors.border} transition-all duration-300`}
          whileHover={{ 
            rotate: 360, 
            scale: 1.15,
            transition: { duration: 0.5 }
          }}
        >
          <m.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 ${colors.icon}`} />
          </m.div>
        </m.div>

        {/* Content with Reveal Animation */}
        <div className="relative">
          <m.h3 
            className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2 transition-colors duration-300"
            initial={{ color: "#ffffff" }}
            whileHover={{ color: "#00ff88" }}
          >
            {title}
          </m.h3>
          <m.p 
            className="text-[10px] sm:text-sm text-white/60 leading-relaxed mb-2 sm:mb-4"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </m.p>

          {/* Sparkle Animation */}
          <m.div
            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
            animate={{
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-[#00ff88]" />
          </m.div>

          {/* Arrow with Animation */}
          <m.div 
            className="hidden sm:flex items-center text-[#00ff88] text-sm font-medium"
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn more</span>
            <m.span
              animate={{ x: [0, 5, 0], y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </m.span>
          </m.div>
        </div>
      </m.div>
    </m.div>
  );
}
