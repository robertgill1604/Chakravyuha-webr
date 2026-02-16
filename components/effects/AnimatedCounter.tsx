"use client";

import { useEffect, useState } from "react";
import { m, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [isInView, setIsInView] = useState(false);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, spring, target]);

  return (
    <m.span
      className={className}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
    >
      {prefix}
      <m.span>{display}</m.span>
      {suffix}
    </m.span>
  );
}
