"use client";

import { eventConfig } from "@/config/eventConfig";
import { m } from "framer-motion";
import { Mail, Phone, MapPin, HelpCircle, MessageCircle } from "lucide-react";

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Have questions? We are here to help
            </p>
          </m.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#0B1220]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl border border-white/[0.06]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                </div>
                
                <p className="text-white/60 mb-8">
                  For any queries regarding registration, event details, or technical support, 
                  feel free to contact us using the information below.
                </p>

                <div className="space-y-6">
                  {/* Faculty Coordinator */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Faculty Coordinator</h3>
                      <p className="text-white/80 text-xs sm:text-sm break-words leading-tight">{eventConfig.contact.facultyCoordinator.name}</p>
                      <p className="text-white/60 text-xs sm:text-sm">{eventConfig.contact.facultyCoordinator.phone}</p>
                      <p className="text-xs text-white/40 mt-0.5 sm:mt-1">For general queries</p>
                    </div>
                  </div>

                  {/* Student Coordinator */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Student Coordinator</h3>
                      <p className="text-white/80 text-xs sm:text-sm break-words leading-tight">{eventConfig.contact.studentCoordinator.name}</p>
                      <p className="text-white/60 text-xs sm:text-sm">{eventConfig.contact.studentCoordinator.phone}</p>
                      <p className="text-xs text-white/40 mt-0.5 sm:mt-1">For registration queries</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Email</h3>
                      <p className="text-white/60 text-xs sm:text-sm break-words">{eventConfig.contact.studentCoordinator.email}</p>
                      <p className="text-xs text-white/40 mt-0.5 sm:mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#00d4ff]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Venue</h3>
                      <p className="text-white/60 text-xs sm:text-sm break-words">{eventConfig.venue}</p>
                      <p className="text-sm text-white/40 mt-1">Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>

            {/* FAQ Section */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#111827]/90 to-[#0B1220]/90 backdrop-blur-xl border border-white/[0.06] h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-5">
                  {[
                    {
                      q: "What is the registration fee?",
                      a: `The registration fee is ${eventConfig.registrationFee || "₹2,000"} per team. Contact the student coordinator for payment details.`,
                    },
                    {
                      q: "Is participation certificate provided?",
                      a: "Yes! All participants will receive participation certificates.",
                    },
                    {
                      q: "Can I participate individually?",
                      a: "Yes! You can participate as an individual (1 member) or form a team of 2-3 members.",
                    },
                    {
                      q: "How do I form a team?",
                      a: "You can form teams with friends or classmates. Teams can have 1-3 members. All team members must register individually and mention the same team name.",
                    },
                    {
                      q: "What should I bring?",
                      a: "Bring your laptop, charger, student ID, and any personal items. Food and workspace will be provided.",
                    },
                    {
                      q: "Is accommodation provided?",
                      a: "The hackathon is a 24-hour continuous event at the venue. Basic amenities and rest areas will be available.",
                    },
                  ].map((faq, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-[#070B14]/50 border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                    >
                      <h3 className="font-semibold text-white mb-2 flex items-start gap-2">
                        <span className="text-[#22D3EE] mt-1">•</span>
                        {faq.q}
                      </h3>
                      <p className="text-white/50 text-sm pl-4">{faq.a}</p>
                    </m.div>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  );
}
