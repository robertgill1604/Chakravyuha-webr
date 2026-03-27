"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CheckCircle, Calendar, Clock, Users, CreditCard } from "lucide-react";

const REGISTRATION_DEADLINE = "2026-03-28T00:10:00";

function isRegistrationClosed() {
  const deadline = new Date(REGISTRATION_DEADLINE).getTime();
  const now = new Date().getTime();
  return now >= deadline;
}

export function PostponeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    setIsExpired(isRegistrationClosed());

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          <m.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#0a0f1a] border border-[#a855f7]/30 rounded-2xl p-6 sm:p-8 shadow-2xl"
            style={{
              boxShadow: "0 0 60px rgba(168, 85, 247, 0.3), 0 0 100px rgba(0, 212, 255, 0.1)",
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className={`mb-4 p-4 rounded-full ${isExpired ? 'bg-red-500/20' : 'bg-[#a855f7]/20'}`}>
                {isExpired ? (
                  <CheckCircle className="w-12 h-12 text-red-400" />
                ) : (
                  <AlertTriangle className="w-12 h-12 text-[#a855f7]" />
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {isExpired ? "📢 Event Updates" : "📢 Event Updates"}
              </h2>

              {isExpired ? (
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                  The registration deadline has passed. 
                  <br />See you at the event!
                </p>
              ) : (
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                  New dates confirmed! Registrations are open.
                  <br />
                   Don't miss this opportunity to participate!    
             
                </p>
              )}

              <div className={`w-full p-4 border rounded-lg mb-4 ${isExpired ? 'bg-red-500/10 border-red-500/30' : 'bg-[#00ff88]/10 border-[#00ff88]/30'}`}>
                <p className={`font-semibold text-sm text-center mb-3 ${isExpired ? 'text-red-400' : 'text-[#00ff88]'}`}>
                  {isExpired ? "❌ Registration Closed" : "✅ Registrations are OPEN!"}
                </p>
                <div className="text-white/80 text-sm space-y-2 text-left px-2">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00d4ff]" /> <span className="text-[#00d4ff] font-medium">Event Date:</span> April 1-2, 2026
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00d4ff]" /> <span className="text-[#00d4ff] font-medium">Deadline:</span> {isExpired ? "March 28, 2026 (Closed)" : "March 27, 2026 (11:59 PM)"}
                  </p>
                  <p className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#00d4ff]" /> <span className="text-[#00d4ff] font-medium">Fee:</span> ₹1,500 per team
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#00d4ff]" /> <span className="text-[#00d4ff] font-medium">Team Size:</span> 1-4 members allowed
                  </p>
                  {isExpired && (
                    <p className="flex items-center gap-2 mt-2 pt-2 border-t border-red-500/30">
                      <Clock className="w-4 h-4 text-red-400" /> <span className="text-red-400 font-medium">Payment Deadline:</span> March 29, 2026
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full p-3 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-white/60 text-sm text-center">
                  📞 Contact: 
                </p>
                <p className="text-white/60 text-sm text-center">
                  Mr P Ayyappan - 9042143286
                </p>
                <p className="text-white/60 text-sm text-center">
                  Mr V Bragatheesh - 8807984687
                </p>
                 <p className="text-white/40 text-sm text-center">{isExpired?"For any other queries":""}</p>
              </div>
              <div className="w-full h-5 transparent"></div>

              <button
                onClick={handleClose}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity ${
                  isExpired 
                    ? "bg-gradient-to-r from-red-500 to-red-600" 
                    : "bg-gradient-to-r from-[#a855f7] to-[#00d4ff]"
                }`}
              >
                Got it!
              </button>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
