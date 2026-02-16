"use client";

import { m } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 - Green - Top Right */}
      <m.div
        className="absolute top-20 right-[10%] w-72 h-72 rounded-full animate-glow-green"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.25) 0%, rgba(0, 255, 136, 0.1) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shape 2 - Blue - Bottom Left */}
      <m.div
        className="absolute bottom-40 left-[5%] w-96 h-96 rounded-full animate-glow-blue"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, rgba(0, 212, 255, 0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Shape 3 - Purple - Center Left */}
      <m.div
        className="absolute top-1/2 left-[15%] w-64 h-64 rounded-full animate-glow-purple"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Shape 4 - Green - Top Left (smaller) */}
      <m.div
        className="absolute top-32 left-[25%] w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Shape 5 - Blue - Bottom Right (smaller) */}
      <m.div
        className="absolute bottom-20 right-[20%] w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
        animate={{
          y: [0, 12, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
