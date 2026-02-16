"use client";

import { Wifi, Zap, Coffee, Users, Monitor, Car } from "lucide-react";
import { m } from "framer-motion";

const iconMap = {
  Wifi,
  Zap,
  Coffee,
  Users,
  Monitor,
  Car,
};

const colorMap: Record<string, { icon: string; border: string; bg: string }> = {
  Wifi: { 
    icon: "text-[#00ff88]", 
    border: "border-[#00ff88]/20 hover:border-[#00ff88]/50",
    bg: "hover:bg-[#00ff88]/5",
  },
  Zap: { 
    icon: "text-[#00d4ff]", 
    border: "border-[#00d4ff]/20 hover:border-[#00d4ff]/50",
    bg: "hover:bg-[#00d4ff]/5",
  },
  Coffee: { 
    icon: "text-[#a855f7]", 
    border: "border-[#a855f7]/20 hover:border-[#a855f7]/50",
    bg: "hover:bg-[#a855f7]/5",
  },
  Users: { 
    icon: "text-[#00ff88]", 
    border: "border-[#00ff88]/20 hover:border-[#00ff88]/50",
    bg: "hover:bg-[#00ff88]/5",
  },
  Monitor: { 
    icon: "text-[#00d4ff]", 
    border: "border-[#00d4ff]/20 hover:border-[#00d4ff]/50",
    bg: "hover:bg-[#00d4ff]/5",
  },
  Car: { 
    icon: "text-[#a855f7]", 
    border: "border-[#a855f7]/20 hover:border-[#a855f7]/50",
    bg: "hover:bg-[#a855f7]/5",
  },
};

interface Facility {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

interface FacilitiesGridProps {
  facilities: readonly Facility[];
}

export function FacilitiesGrid({ facilities }: FacilitiesGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-[#050810] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <m.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-10 sm:mb-16"
        >
          <m.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Facilities
          </m.h2>
          <m.p 
            className="text-white/60 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Everything you need for a productive hackathon
          </m.p>
        </m.div>

        <m.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon];
            const colors = colorMap[facility.icon];
            
            return (
              <m.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`group relative p-2.5 sm:p-5 lg:p-6 bg-[#111827]/90 backdrop-blur-sm rounded-lg sm:rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden transition-all duration-300`}
              >
                {/* Hover Glow Effect */}
                <m.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 30px ${colors.icon.replace('text-', '').replace('[', '').replace(']', '')}20`,
                  }}
                />

                {/* Animated Icon */}
                <m.div
                  className="relative w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4 rounded-lg sm:rounded-xl bg-[#050810] flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 5,
                  }}
                >
                  <m.div
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 ${colors.icon}`} />
                  </m.div>
                </m.div>

                {/* Content */}
                <div className="relative">
                  <m.h3 
                    className="text-xs sm:text-base font-semibold text-white mb-0.5 sm:mb-2 transition-colors duration-300 group-hover:text-[#00ff88]"
                  >
                    {facility.title}
                  </m.h3>
                  <m.p 
                    className="text-[10px] sm:text-sm text-white/60 leading-relaxed hidden xs:block"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {facility.description}
                  </m.p>
                </div>

                {/* Corner Accent */}
                <m.div
                  className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: colors.icon.replace('text-', '').replace('[', '').replace(']', '') }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
