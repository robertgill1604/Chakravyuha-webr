"use client";

import { ThemeCard } from "@/components/ThemeCard";
import { eventConfig } from "@/config/eventConfig";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ThemesPage() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6">
              Hackathon Themes
            </h1>
            <p className="text-sm sm:text-xl text-white/60 max-w-2xl mx-auto">
              Choose a track that aligns with your passion and build innovative solutions
            </p>
          </m.div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-8 sm:py-16 bg-[#0B1220]">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {eventConfig.themes.map((theme, index) => (
              <ThemeCard
                key={theme.id}
                title={theme.title}
                description={theme.description}
                icon={theme.icon}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-16 text-center"
          >
            <div className="relative p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#22D3EE]/5 border border-[#2563EB]/20 overflow-hidden">
              <div className="absolute inset-0 bg-[#2563EB]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
                  Ready to Innovate?
                </h2>
                <p className="text-white/60 mb-4 sm:mb-6 max-w-xl mx-auto text-xs sm:text-base">
                  Choose your theme and register your team today. Limited spots available!
                </p>
                <Link href="/register">
                  <m.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs sm:text-base"
                  >
                    Register Your Team
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </m.button>
                </Link>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
