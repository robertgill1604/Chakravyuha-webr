"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-10 sm:py-24 bg-[#0a0f1a] overflow-hidden">
      {/* Animated Background Grid */}
      <m.div 
        className="absolute inset-0 grid-pattern opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
        }}
      />

      {/* Floating Orbs */}
      <m.div
        className="hidden lg:block absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl bg-[#00ff88]/10"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <m.div
        className="hidden lg:block absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl bg-[#00d4ff]/10"
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
            Event Timeline
          </m.h2>
          <m.p 
            className="text-white/60 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your 24-hour journey of innovation
          </m.p>
        </m.div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-2 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2">
            <m.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00ff88] via-[#00d4ff] to-[#a855f7]"
              style={{ height: lineHeight, opacity: lineOpacity }}
            />
            {/* Glow effect on line */}
            <m.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-b from-[#00ff88] via-[#00d4ff] to-[#a855f7] blur-sm"
              style={{ height: lineHeight, opacity: lineOpacity }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-12">
            {eventConfig.timeline.map((item, index) => {
              const isLastDay = item.date.includes("16");
              const colors = isLastDay ? 
                { bg: "bg-[#D4AF37]/10", border: "border-[#D4AF37]/30", text: "text-[#D4AF37]", glow: "#D4AF37", shadow: "shadow-[#D4AF37]/30" } :
                index % 3 === 0 ? 
                { bg: "bg-[#00ff88]/10", border: "border-[#00ff88]/30", text: "text-[#00ff88]", glow: "#00ff88", shadow: "shadow-[#00ff88]/30" } :
                index % 3 === 1 ? 
                { bg: "bg-[#00d4ff]/10", border: "border-[#00d4ff]/30", text: "text-[#00d4ff]", glow: "#00d4ff", shadow: "shadow-[#00d4ff]/30" } :
                { bg: "bg-[#a855f7]/10", border: "border-[#a855f7]/30", text: "text-[#a855f7]", glow: "#a855f7", shadow: "shadow-[#a855f7]/30" };
              
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative flex items-start"
                >
                  {/* Content */}
                  <div className={`ml-6 sm:ml-12 md:ml-0 w-full md:w-[45%] ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-[55%] md:pl-12"
                  }`}>
                    <m.div
                      whileHover={{ 
                        y: -4, 
                        boxShadow: `0 10px 40px ${colors.shadow.replace('shadow-', '').replace('/30', '/20')}`,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`relative p-3 sm:p-6 rounded-lg sm:rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm overflow-hidden transition-all duration-300`}
                    >
                      {/* Sparkle for special events */}
                      {isLastDay && (
                        <m.div
                          className="absolute top-1.5 right-1.5"
                          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                        </m.div>
                      )}

                      {/* Time Badge */}
                      <m.div 
                        className={`inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium mb-1.5 sm:mb-3 bg-[#050810]/50 ${colors.text}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        {item.time}
                      </m.div>

                      <h3 className="text-sm sm:text-lg font-semibold text-white mb-0.5 sm:mb-2">{item.title}</h3>
                      <p className="text-[10px] sm:text-sm text-white/60 mb-0.5 sm:mb-2">{item.description}</p>
                      <p className="text-[9px] sm:text-xs text-white/40">{item.date}</p>

                      {/* Glow Effect */}
                      {isLastDay && (
                        <m.div 
                          className="absolute inset-0 rounded-lg sm:rounded-xl bg-[#D4AF37]/5 blur-xl -z-10"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      )}
                    </m.div>
                  </div>

                  {/* Node with Enhanced Animation */}
                  <m.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.3 }}
                    className={`absolute left-2 sm:left-4 md:left-1/2 w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border-2 md:-translate-x-1/2 mt-1.5 sm:mt-6 cursor-pointer ${
                      isLastDay
                        ? "bg-[#D4AF37] border-[#D4AF37]"
                        : index % 3 === 0 ? "bg-[#00ff88] border-[#00ff88]" :
                          index % 3 === 1 ? "bg-[#00d4ff] border-[#00d4ff]" :
                          "bg-[#a855f7] border-[#a855f7]"
                    }`}
                    style={{
                      boxShadow: isLastDay ? `0 0 20px ${colors.glow}` :
                        `0 0 15px ${colors.glow}`,
                    }}
                  >
                    {/* Pulse Animation */}
                    <m.div
                      className={`absolute inset-0 rounded-full ${
                        isLastDay ? "bg-[#D4AF37]" :
                        index % 3 === 0 ? "bg-[#00ff88]" :
                        index % 3 === 1 ? "bg-[#00d4ff]" :
                        "bg-[#a855f7]"
                      }`}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </m.div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
