"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";

export function PostponeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

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
              <div className="mb-4 p-4 rounded-full bg-[#a855f7]/20">
                <AlertTriangle className="w-12 h-12 text-[#a855f7]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                📢 Important Notice
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-2">
                The event has been <span className="text-[#a855f7] font-semibold">postponed</span>.
              </p>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                New dates will be announced soon. Stay tuned for updates!
              </p>

              <div className="w-full p-3 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg mb-4">
                <p className="text-[#00ff88] font-semibold text-sm">
                  ✅ Registrations remain OPEN!
                </p>
              </div>
              <div className="w-full p-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg mb-4">
                <p className="text-[#00d4ff] font-semibold text-sm">
                  💰 Updated Fee: ₹1,500 per team
                </p>
              </div>
              <div className="w-full p-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-lg mb-4">
                <p className="text-[#00d4ff] font-semibold text-sm">
                  👥 Team Size: Up to 4 members (individual or team)
                </p>
              </div>
              <div className="w-full p-3 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg mb-4">
                <p className="text-[#00ff88] font-semibold text-sm">
                  For More Details Contact :
                </p>
                <p>Mr P Ayyappan B.E CSE II Year : 9042143286</p>
              </div>

             

              <button
                onClick={handleClose}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
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
