"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Trophy, Users, ArrowRight, Sparkles, CreditCard, Gift, Layers, Clock } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { FacilitiesGrid } from "@/components/FacilitiesGrid";
import { Countdown } from "@/components/Countdown";
import { ThemeCard } from "@/components/ThemeCard";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { eventConfig } from "@/config/eventConfig";

export default function Home() {
  const [registrationCount, setRegistrationCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/registration-count")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRegistrationCount(data.count);
        }
      })
      .catch(() => {
        setRegistrationCount(null);
      });
  }, []);

  return (
    <div className="bg-[#070B14]">
      <Hero />

      {/* Stats Section */}
      <section className="relative py-10 sm:py-20 bg-[#0B1220] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-transparent to-[#070B14]" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3"
          >
            {/* Registration Fee */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-2 sm:p-4 rounded-lg bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#00ff88]/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#00ff88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CreditCard className="w-4 h-4 sm:w-6 sm:h-6 text-[#00ff88] mb-1 sm:mb-2" />
              <div className="text-sm sm:text-xl font-bold text-white mb-0.5">
                <AnimatedCounter target={eventConfig.registrationFee} prefix="₹" duration={2} />
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs">Registration Fee</div>
            </m.div>

            {/* Total Prize Pool */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-2 sm:p-4 rounded-lg bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#D4AF37]/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-[#D4AF37] mb-1 sm:mb-2" />
              <div className="text-sm sm:text-xl font-bold text-[#D4AF37] mb-0.5">
                <AnimatedCounter target="₹35,000" prefix="₹" suffix="+" duration={2} />
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs">Total Prize Pool</div>
            </m.div>

            {/* Themes */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-2 sm:p-4 rounded-lg bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#a855f7]/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-[#a855f7] mb-1 sm:mb-2" />
              <div className="text-sm sm:text-xl font-bold text-white mb-0.5">
                <AnimatedCounter target={eventConfig.themes.length} duration={2} />
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs">Themes</div>
            </m.div>

            {/* Teams Registered */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-2 sm:p-4 rounded-lg bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#00d4ff]/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Users className="w-4 h-4 sm:w-6 sm:h-6 text-[#00d4ff] mb-1 sm:mb-2" />
              <div className="text-sm sm:text-xl font-bold text-white mb-0.5">
                {registrationCount !== null ? (
                  <AnimatedCounter target={registrationCount} duration={2} />
                ) : (
                  "..."
                )}
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs">Teams Registered</div>
            </m.div>

            {/* Hours of Coding */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-2 sm:p-4 rounded-lg bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Trophy className="w-4 h-4 sm:w-6 sm:h-6 text-[#2563EB] mb-1 sm:mb-2" />
              <div className="text-sm sm:text-xl font-bold text-white mb-0.5">
                <AnimatedCounter target={24} suffix=" hrs" duration={2} />
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs">Hours of Coding</div>
            </m.div>

            {/* Registration Deadline */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-2 sm:p-4 rounded-lg bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#ff6b35]/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#ff6b35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-[#ff6b35] mb-1 sm:mb-2" />
              <div className="text-sm sm:text-xl font-bold text-white mb-0.5">
                {new Date(eventConfig.registrationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs">Registration Deadline</div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Full Countdown Section */}
      <Countdown targetDate={eventConfig.date} />

      {/* Themes Preview */}
      <section className="py-12 sm:py-24 bg-[#070B14]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Hackathon Themes
            </h2>
            <p className="text-sm sm:text-lg text-white/60 mb-4 sm:mb-8">
              Choose from multiple tracks and build innovative solutions
            </p>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {eventConfig.themes.slice(0, 3).map((theme, index) => (
              <ThemeCard
                key={theme.id}
                title={theme.title}
                description={theme.description}
                icon={theme.icon}
                index={index}
              />
            ))}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/themes">
              <m.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-[#22D3EE] font-medium hover:text-white transition-colors group"
              >
                View All Themes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </m.button>
            </Link>
          </m.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-12 sm:py-24 bg-[#0B1220] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Prizes & Awards
            </h2>
            <p className="text-sm sm:text-lg text-white/60">Exciting cash prizes for winners</p>
          </m.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8">
            {/* First Prize */}
            <m.div
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 3 }}
              className="relative p-4 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border-2 border-[#D4AF37]/50 overflow-hidden group"
            >
              {/* Animated Glow */}
              <m.div 
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-[60px] group-hover:blur-[80px] transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-[40px]" />
              
              <div className="relative z-10">
                <div className="relative mb-3 sm:mb-6">
                  <m.div 
                    className="absolute inset-0 bg-[#D4AF37]/40 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 flex items-center justify-center border-2 border-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                    <Trophy className="w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37]" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">1st Prize</h3>
                <m.div 
                  className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200%" }}
                >
                  <AnimatedCounter target={eventConfig.prizes.first} prefix="₹" duration={2} />
                </m.div>
              </div>
            </m.div>

            {/* Second Prize */}
            <m.div
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 3 }}
              className="relative p-4 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border-2 border-[#2563EB]/40 overflow-hidden group"
            >
              <m.div 
                className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/10 to-[#2563EB]/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/20 rounded-full blur-[60px] group-hover:blur-[80px] transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00d4ff]/10 rounded-full blur-[40px]" />
              
              <div className="relative z-10">
                <div className="relative mb-3 sm:mb-6">
                  <m.div 
                    className="absolute inset-0 bg-[#2563EB]/40 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#2563EB]/30 to-[#2563EB]/10 flex items-center justify-center border-2 border-[#2563EB]/60 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                    <Trophy className="w-7 h-7 sm:w-9 sm:h-9 text-[#2563EB]" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">2nd Prize</h3>
                <m.div 
                  className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#2563EB] via-[#00d4ff] to-[#2563EB] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  style={{ backgroundSize: "200%" }}
                >
                  <AnimatedCounter target={eventConfig.prizes.second} prefix="₹" duration={2} />
                </m.div>
              </div>
            </m.div>

            {/* Third Prize */}
            <m.div
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 3 }}
              className="relative p-4 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border-2 border-[#cd7f32]/40 overflow-hidden group"
            >
              <m.div 
                className="absolute inset-0 bg-gradient-to-r from-[#cd7f32]/0 via-[#cd7f32]/10 to-[#cd7f32]/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#cd7f32]/20 rounded-full blur-[60px] group-hover:blur-[80px] transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#a855f7]/10 rounded-full blur-[40px]" />
              
              <div className="relative z-10">
                <div className="relative mb-3 sm:mb-6">
                  <m.div 
                    className="absolute inset-0 bg-[#cd7f32]/40 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#cd7f32]/30 to-[#cd7f32]/10 flex items-center justify-center border-2 border-[#cd7f32]/60 shadow-[0_0_25px_rgba(205,127,50,0.4)]">
                    <Trophy className="w-7 h-7 sm:w-9 sm:h-9 text-[#cd7f32]" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">3rd Prize</h3>
                <m.div 
                  className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#cd7f32] via-[#a855f7] to-[#cd7f32] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                  style={{ backgroundSize: "200%" }}
                >
                  <AnimatedCounter target={eventConfig.prizes.third} prefix="₹" duration={2} />
                </m.div>
              </div>
            </m.div>
          </div>

          {/* Consolation Prizes */}
          <m.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#a855f7]/20 to-[#00d4ff]/20 border border-[#a855f7]/30">
              <span className="text-lg sm:text-xl font-bold text-[#a855f7]">+ {eventConfig.prizes.consolation}</span>
              <span className="text-white/80 text-sm sm:text-base">Consolation Prizes</span>
            </div>
          </m.div>
        </div>
      </section>

      <Timeline />
      <FacilitiesGrid facilities={eventConfig.facilities} />
    </div>
  );
}
