"use client";

import { useEffect, useState, useRef } from "react";
import { m, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  target: number | string;
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
  const numericTarget = typeof target === "string" 
    ? parseInt(target.replace(/[^0-9]/g, ""), 10) 
    : target;
  
  const formatFn = typeof target === "string" 
    ? (n: number) => n.toLocaleString()
    : (n: number) => n.toLocaleString();

  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => formatFn(Math.floor(current)));

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      spring.set(numericTarget);
    }
  }, [isInView, spring, numericTarget]);

  return (
    <m.span
      className={className}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ amount: 0.5, once: true }}
    >
      {prefix}
      <m.span>{display}</m.span>
      {suffix}
    </m.span>
  );
}
