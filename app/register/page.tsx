"use client";

import { RegistrationForm } from "@/components/RegistrationForm";
import { eventConfig } from "@/config/eventConfig";
import { m } from "framer-motion";
import { AlertCircle, Clock, AlertTriangle } from "lucide-react";
import { getShortlistDate, getPaymentDeadline, isEventPostponed, getPostponeMessage } from "@/lib/dateUtils";
import { useState, useEffect } from "react";

const REGISTRATION_DEADLINE = "2026-03-28T00:10:00"; // TESTING: Change back to "2026-03-28T00:10:00" after testing

function RegistrationCountdown({ onStatusChange }: { onStatusChange?: (isExpired: boolean, isWarning: boolean) => void }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const calculateTimeLeft = () => {
      const deadline = new Date(REGISTRATION_DEADLINE).getTime();
      const now = new Date().getTime();
      const difference = deadline - now;
      
      if (difference <= 0) {
        setIsExpired(true);
        setIsWarning(false);
        onStatusChange?.(true, false);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      if (difference <= 600000) {
        setIsWarning(true);
        onStatusChange?.(false, true);
      } else {
        setIsWarning(false);
        onStatusChange?.(false, false);
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [onStatusChange]);

  if (!isClient) return null;

  if (isExpired) {
    return (
      <div className="mb-6 p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-red-400 mb-2">Registration Closed</h3>
          <p className="text-white/70 text-sm mb-4">The registration deadline has passed.</p>
          
          <div className="bg-[#070B14]/50 rounded-lg p-4 text-left space-y-2 text-sm">
            <p className="text-white/80"><span className="text-[#00ff88]">📅 Event Dates:</span> April 1-2, 2026</p>
            <p className="text-white/80"><span className="text-[#00d4ff]">📍 Venue:</span> JJCET Campus, Trichy</p>
            <p className="text-white/80"><span className="text-[#a855f7]">⏰ Reporting Time:</span> 9:00 AM on April 1</p>
            <p className="text-white/60 text-xs mt-3">Shortlisted teams will receive email confirmation. Payment deadline: March 29, 2026</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      {isWarning ? (
        <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/10 border border-red-500/50 animate-pulse">
          <div className="flex items-center justify-center gap-2 text-red-400">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold">HURRY! Last few minutes(extra 10 min)!</span>
          </div>
          <p className="text-center text-white/70 text-sm mt-1">Registration closes at 00:10 AM</p>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#111827]/80 to-[#0B1220]/80 border border-[#00ff88]/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#00ff88]" />
            <span className="text-white/80 font-medium">Registration Deadline</span>
          </div>
          <p className="text-center text-white/60 text-sm mb-4">March 27, 2026 (11:59:59 PM)</p>
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <span className="text-2xl font-bold text-white/30">:</span>
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <span className="text-2xl font-bold text-white/30">:</span>
            <CountdownUnit value={timeLeft.minutes} label="Mins" />
            <span className="text-2xl font-bold text-white/30">:</span>
            <CountdownUnit value={timeLeft.seconds} label="Secs" />
          </div>
        </div>
      )}
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-[#070B14] border border-white/10 rounded-lg px-3 py-2 min-w-[50px]">
        <span className="text-2xl sm:text-3xl font-bold text-[#00ff88]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="text-[10px] text-white/40 mt-1 uppercase">{label}</p>
    </div>
  );
}

export default function RegisterPage() {
  const [isExpired, setIsExpired] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

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

      {/* Countdown Section */}
      <section className="py-8 bg-[#0a0f1a]">
        <div className="max-w-[760px] mx-auto px-6">
          <RegistrationCountdown onStatusChange={(expired, warning) => {
            setIsExpired(expired);
            setIsWarning(warning);
          }} />
        </div>
      </section>

      {/* Registration Form - Only show if not expired */}
      {!isExpired && (
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

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#a855f7]/10 to-[#a855f7]/5 border border-[#a855f7]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/20 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-[#a855f7]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#a855f7] mb-2">
                    Shortlist & Payment Process
                  </h3>
                  {isEventPostponed() ? (
                    <p className="text-white/60 text-sm mb-2 leading-relaxed">
                      {getPostponeMessage()}
                    </p>
                  ) : (
                    <>
                      <p className="text-white/60 text-sm mb-2 leading-relaxed">
                        After registration, teams will be <span className="text-white font-semibold">shortlisted</span> based on their abstract. 
                        Shortlisted teams will be informed through <span className="text-[#a855f7]">team leader&apos;s email</span> on{' '}
                        <span className="text-white font-semibold">{getShortlistDate()}</span>.
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Complete payment before <span className="text-white font-semibold">{getPaymentDeadline()}</span> to confirm your spot.
                      </p>
                    </>
                  )}
                </div>
              </div>
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
      )}
    </div>
  );
}
