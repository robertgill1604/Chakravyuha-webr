"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Trophy, Users, Calendar, ArrowRight, Sparkles } from "lucide-react";
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8"
          >
            {/* First Prize */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-[#D4AF37]/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Trophy className="w-6 h-6 sm:w-10 sm:h-10 text-[#D4AF37] mb-2 sm:mb-4" />
              <div className="text-xl sm:text-4xl font-bold text-[#D4AF37] mb-1 sm:mb-2">
                {eventConfig.prizes.first}
              </div>
              <div className="text-white/60 text-xs sm:text-base">First Prize</div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </m.div>

            {/* Registration Count */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Users className="w-6 h-6 sm:w-10 sm:h-10 text-[#22D3EE] mb-2 sm:mb-4" />
              <div className="text-xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                {registrationCount !== null ? (
                  <AnimatedCounter target={registrationCount} duration={2} />
                ) : (
                  "..."
                )}
              </div>
              <div className="text-white/60 text-xs sm:text-base">Teams Registered</div>
            </m.div>

            {/* Duration */}
            <m.div
              whileHover={{ y: -4 }}
              className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#22D3EE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="w-6 h-6 sm:w-10 sm:h-10 text-[#2563EB] mb-2 sm:mb-4" />
              <div className="text-xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">24</div>
              <div className="text-white/60 text-xs sm:text-base">Hours of Coding</div>
            </m.div>
          </m.div>
        </div>
      </section>

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border-t-2 sm:border-t-4 border-[#D4AF37] overflow-hidden group"
            >
              {/* Gold Glow */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-3 sm:mb-6 border border-[#D4AF37]/30">
                  <Trophy className="w-5 h-5 sm:w-8 sm:h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">1st Prize</h3>
                <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F0D878] bg-clip-text text-transparent">
                  {eventConfig.prizes.first}
                </div>
              </div>
            </m.div>

            {/* Second Prize */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] hover:border-[#2563EB]/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/5 flex items-center justify-center mb-3 sm:mb-6 border border-white/10 group-hover:border-[#2563EB]/30 transition-colors">
                <Trophy className="w-5 h-5 sm:w-8 sm:h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">2nd Prize</h3>
              <div className="text-2xl sm:text-4xl font-bold text-white">{eventConfig.prizes.second}</div>
            </m.div>

            {/* Third Prize */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] hover:border-[#2563EB]/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/5 flex items-center justify-center mb-3 sm:mb-6 border border-white/10 group-hover:border-[#2563EB]/30 transition-colors">
                <Trophy className="w-5 h-5 sm:w-8 sm:h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">3rd Prize</h3>
              <div className="text-2xl sm:text-4xl font-bold text-white">{eventConfig.prizes.third}</div>
            </m.div>
          </div>

          {/* Consolation Prizes */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-white/60 text-sm sm:text-base">
              + {eventConfig.prizes.consolation} Consolation Prizes
            </p>
          </div>
        </div>
      </section>

      <Timeline />
      <FacilitiesGrid facilities={eventConfig.facilities} />
      <Countdown targetDate={eventConfig.date} />
    </div>
  );
}
