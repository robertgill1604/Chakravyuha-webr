"use client";

import { eventConfig } from "@/config/eventConfig";
import { m } from "framer-motion";
import { Award, Clock, Users, Trophy, Target, Lightbulb, Rocket, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 60%)",
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
              About CHAKRAVYUHA 2026
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              State Level 24-Hour Innovation Sprint
            </p>
          </m.div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-[#0B1220]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#a855f7]" />
                </div>
                <h2 className="text-2xl font-bold text-white">What is CHAKRAVYUHA?</h2>
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                CHAKRAVYUHA 2026 is a <span className="text-[#00ff88] font-semibold">State Level 24-Hour Innovation Sprint</span> organized by 
                <span className="text-white font-semibold"> J J College of Engineering and Technology(Autonomous)</span>, Trichy. 
                It is a platform for students to showcase their problem-solving skills and innovative thinking through 
                technology-driven solutions.
              </p>
              <p className="text-white/60 leading-relaxed">
                The term &quot;Chakravyuha&quot; refers to a complex military formation, symbolizing the challenging yet 
                rewarding journey participants undertake during this intensive hackathon. Teams will work continuously 
                for 24 hours to build innovative solutions addressing real-world problems.
              </p>
            </div>
          </m.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-[#070B14]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event Highlights
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              What makes CHAKRAVYUHA 2026 unique
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "24 Hours",
                description: "Intensive coding marathon to build innovative solutions",
                color: "#00ff88",
              },
              {
                icon: Users,
                title: "Team Size",
                description: "1-3 members per team for collaborative innovation",
                color: "#00d4ff",
              },
              {
                icon: Target,
                title: "6 Themes",
                description: "Diverse tracks covering cutting-edge technologies",
                color: "#a855f7",
              },
              {
                icon: Award,
                title: "₹40K+ Prizes",
                description: "Exciting cash prizes and certificates for winners",
                color: "#D4AF37",
              },
            ].map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] hover:border-white/[0.12] transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* About JJCET */}
      <section className="py-16 bg-[#0B1220]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h2 className="text-2xl font-bold text-white">About JJCET</h2>
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                <span className="text-white font-semibold">J J College of Engineering and Technology (JJCET)</span> 
                is a premier educational institution located in Trichy, Tamil Nadu. Established with a vision to 
                provide quality technical education, JJCET has been producing excellent engineers and innovators 
                who have made significant contributions in various fields.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                The institution is recognized by Anna University and is committed to fostering innovation, 
                research, and entrepreneurship among students. Through events like CHAKRAVYUHA, JJCET aims to 
                create a platform for students to apply their technical knowledge and creativity to solve 
                real-world challenges.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "NAAC Accredited", value: "A Grade" },
                  { label: "Affiliated to", value: "Anna University" },
                  { label: "Established", value: "1994" },
                  { label: "Location", value: "Tiruchirappalli, Tamil Nadu" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-[#070B14]/50 border border-white/[0.04] text-center"
                  >
                    <p className="text-white/40 text-xs mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-16 bg-[#070B14]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Participate?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Benefits of joining CHAKRAVYUHA 2026
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Rocket,
                title: "Hands-on Experience",
                description: "Get real-world coding experience by building a complete project in 24 hours",
              },
              {
                icon: Trophy,
                title: "Win Exciting Prizes",
                description: "Compete for cash prizes worth ₹40,000+ and certificates",
              },
              {
                icon: Users,
                title: "Network with Peers",
                description: "Meet and collaborate with talented students from across the state",
              },
              {
                icon: Award,
                title: "Certificate of Participation",
                description: "All participants receive certificates to boost your resume",
              },
            ].map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border border-white/[0.06] flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Card */}
      <section className="py-16 bg-[#0B1220]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0B1220] border-2 border-[#00ff88]/30">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Event Details
              </h2>
              
              <div className="space-y-4">
                {[
                  { label: "Registration Deadline", value: new Date(eventConfig.registrationDeadline).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                  { label: "Shortlist Announcement", value: new Date(eventConfig.shortlistDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                  { label: "Payment Deadline", value: new Date(eventConfig.paymentDeadline).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                  { label: "Event Date", value: new Date(eventConfig.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                  { label: "Venue", value: eventConfig.venue },
                  { label: "Team Size", value: "1-3 Members" },
                  { label: "Duration", value: "24 Hours" },
                  { label: "Registration Fee", value: `₹${eventConfig.registrationFee}` },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 rounded-xl bg-[#070B14]/50 border border-white/[0.04]"
                  >
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
