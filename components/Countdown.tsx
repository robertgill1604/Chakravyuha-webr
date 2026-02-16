"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

function CountdownUnit({ value, label, color }: { value: number; label: string; color: string }) {
  const [prevValue, setPrevValue] = useState(value);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsChanging(true);
      setPrevValue(value);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  const glowColors: Record<string, string> = {
    green: "rgba(0, 255, 136, 0.5)",
    blue: "rgba(0, 212, 255, 0.5)",
    purple: "rgba(168, 85, 247, 0.5)",
  };

  const textColors: Record<string, string> = {
    green: "#00ff88",
    blue: "#00d4ff",
    purple: "#a855f7",
  };

  const bgColors: Record<string, string> = {
    green: "rgba(0, 255, 136, 0.1)",
    blue: "rgba(0, 212, 255, 0.1)",
    purple: "rgba(168, 85, 247, 0.1)",
  };

  return (
    <div className="flex flex-col items-center">
      <m.div 
        className="relative p-1 sm:p-4 rounded-lg sm:rounded-2xl"
        style={{ backgroundColor: bgColors[color] }}
        whileHover={{
          boxShadow: `0 0 30px ${glowColors[color]}`,
          scale: 1.05,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow Effect */}
        <m.div 
          className="hidden sm:block absolute inset-0 rounded-xl sm:rounded-2xl blur-xl"
          style={{ backgroundColor: glowColors[color] }}
          animate={{
            opacity: isChanging ? [0, 0.6, 0] : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        <AnimatePresence mode="popLayout">
          <m.div
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              color: isChanging ? textColors[color] : '#FFFFFF',
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tabular-nums"
            style={{
              textShadow: isChanging ? `0 0 20px ${glowColors[color]}` : 'none',
            }}
          >
            {String(value).padStart(2, "0")}
          </m.div>
        </AnimatePresence>

        {/* Pulse Ring */}
        <m.div
          className="absolute inset-0 rounded-xl sm:rounded-2xl border-2"
          style={{ borderColor: textColors[color] }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </m.div>
      <span className="text-white/50 text-xs sm:text-sm mt-2 sm:mt-3 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  if (!isClient) {
    return null;
  }

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Event Starts In
          </h2>
          <p className="text-white/60 text-sm sm:text-base">
            Don&apos;t miss out on this incredible opportunity
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-1 sm:gap-8 md:gap-12"
        >
          <CountdownUnit value={timeLeft.days} label="Days" color="green" />
          <span className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/20 self-start mt-1 sm:mt-2">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" color="blue" />
          <span className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/20 self-start mt-1 sm:mt-2">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Minutes" color="purple" />
          <span className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/20 self-start mt-1 sm:mt-2">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seconds" color="green" />
        </m.div>
      </div>
    </section>
  );
}
