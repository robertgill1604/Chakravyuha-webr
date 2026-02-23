"use client";

import { RegistrationForm } from "@/components/RegistrationForm";
import { eventConfig } from "@/config/eventConfig";
import { m } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Team Registration
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Register your team for CHAKRAVYUHA 2026 and secure your spot
            </p>
          </m.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-[#0B1220]">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl border border-white/[0.06]"
            style={{ overflow: 'visible' }}
          >
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl -translate-y-1/2" />
            
            <div className="relative z-10">
              <RegistrationForm />
            </div>
          </m.div>

          {/* Payment Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 space-y-4"
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#22D3EE]/10 to-[#22D3EE]/5 border border-[#22D3EE]/20">
              <p className="text-white/80 text-sm">
                All participants will receive <span className="text-[#22D3EE] font-semibold">participation certificates</span>.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20">
                <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">
                    Payment Information
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    After successful registration, please contact the student coordinator to complete the payment process.
                  </p>
                  <div className="bg-[#111827]/50 rounded-lg p-3 border border-white/[0.06]">
                    <p className="text-white/50 text-xs mb-1">Student Coordinator</p>
                    <p className="text-white font-medium">{eventConfig.contact.studentCoordinator.name}</p>
                    <p className="text-[#00d4ff]">{eventConfig.contact.studentCoordinator.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
