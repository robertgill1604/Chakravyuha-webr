"use client";

import { eventConfig } from "@/config/eventConfig";
import { m } from "framer-motion";
import { CheckCircle, Clock, Award, Users, FileText, Lightbulb, AlertTriangle, Coffee, Bed } from "lucide-react";

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              Guidelines & Rules
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Important information for all participants
            </p>
          </m.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0B1220]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* General Guidelines */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h2 className="text-2xl font-bold text-white">General Guidelines</h2>
            </div>
            
            <div className="space-y-4">
              {eventConfig.guidelines.map((guideline, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#111827]/50 border border-white/[0.06]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#22D3EE]">{index + 1}</span>
                  </div>
                  <p className="text-white/70">{guideline}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Eligibility Criteria */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Eligibility Criteria</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Users, title: "Team Size", desc: `${eventConfig.teamSize.min}-${eventConfig.teamSize.max} members (individual or team)` },
                { icon: Award, title: "Institution", desc: "Open to all UG/PG students from any college" },
                { icon: FileText, title: "Registration", desc: `Fee: ${eventConfig.registrationFee}` },
              ].map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl bg-[#111827]/50 border border-white/[0.06] hover:border-[#2563EB]/20 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-[#22D3EE] mb-3" />
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Submission Requirements */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Submission Requirements</h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 1, title: "Working Prototype", desc: "Submit a functional prototype with well-documented, runnable code" },
                { step: 2, title: "Presentation", desc: "Prepare a 5-minute presentation covering problem, solution, and demo" },
                { step: 3, title: "Documentation", desc: "Include README with setup instructions and team contributions" },
              ].map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[#111827]/80 to-[#0B1220]/80 border border-white/[0.06]"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB]/30 to-[#22D3EE]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#22D3EE]">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Judging Criteria */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Judging Criteria</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Innovation", percent: "30%", desc: "Originality and creativity of the solution", color: "from-[#2563EB] to-[#3B82F6]" },
                { title: "Technical Complexity", percent: "25%", desc: "Quality of code and technical implementation", color: "from-[#3B82F6] to-[#22D3EE]" },
                { title: "Practicality", percent: "25%", desc: "Real-world applicability and usefulness", color: "from-[#22D3EE] to-[#2563EB]" },
                { title: "Presentation", percent: "20%", desc: "Clarity and effectiveness of pitch", color: "from-[#2563EB] to-[#3B82F6]" },
              ].map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-[#111827]/50 border border-white/[0.06] hover:border-[#2563EB]/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className={`px-2 py-1 rounded-lg text-sm font-bold bg-gradient-to-r ${item.color} text-white`}>
                      {item.percent}
                    </span>
                  </div>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Important Dates */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Important Dates</h2>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06]">
              <div className="space-y-4">
                {[
                  { label: "Registration Opens", date: "Now", highlight: false },
                  { label: "Registration Deadline", date: new Date(eventConfig.registrationDeadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), highlight: true },
                  { label: "Hackathon Starts", date: new Date(eventConfig.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), highlight: false },
                  { label: "Results Announcement", date: "March 19, 2026", highlight: false },
                ].map((item, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex justify-between items-center py-3 ${index < 3 ? "border-b border-white/[0.06]" : ""}`}
                  >
                    <span className="text-white/70">{item.label}</span>
                    <span className={`font-semibold ${item.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                      {item.date}
                    </span>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Accommodation */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00ff88]/20 flex items-center justify-center">
                <Bed className="w-6 h-6 text-[#00ff88]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Accommodation & Facilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0 }}
                className="p-6 rounded-xl bg-[#111827]/50 border border-white/[0.06]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-6 h-6 text-[#00ff88]" />
                  <h3 className="font-semibold text-white">Food & Beverages</h3>
                </div>
                <p className="text-white/60">
                  {eventConfig.accommodation.foodProvided 
                    ? "Complimentary meals and refreshments provided throughout the event" 
                    : "Not provided"}
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 rounded-xl bg-[#111827]/50 border border-white/[0.06]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Bed className="w-6 h-6 text-[#00ff88]" />
                  <h3 className="font-semibold text-white">Resting Room</h3>
                </div>
                <p className="text-white/60">
                  {eventConfig.accommodation.restingRoom.available 
                    ? `${eventConfig.accommodation.restingRoom.purpose}. ${eventConfig.accommodation.arrivalRequirement}` 
                    : "Not available"}
                </p>
              </m.div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
