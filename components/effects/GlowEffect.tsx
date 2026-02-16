"use client";

import { m } from "framer-motion";

interface GlowEffectProps {
  children: React.ReactNode;
  color?: "blue" | "cyan" | "gold";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function GlowEffect({
  children,
  color = "blue",
  intensity = "medium",
  className = "",
}: GlowEffectProps) {
  const colors = {
    blue: "rgba(37, 99, 235",
    cyan: "rgba(34, 211, 238",
    gold: "rgba(212, 175, 55",
  };

  const intensities = {
    low: "0.2",
    medium: "0.4",
    high: "0.6",
  };

  const glowColor = `${colors[color]}, ${intensities[intensity]})`;

  return (
    <m.div
      className={className}
      whileHover={{
        boxShadow: `0 0 60px ${glowColor}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </m.div>
  );
}
