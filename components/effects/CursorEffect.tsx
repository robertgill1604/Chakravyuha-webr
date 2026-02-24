"use client";

import React, { useEffect, useState, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function CursorEffect() {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const lastPosRef = useRef<CursorPosition | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      
      const hasMoved = !lastPosRef.current || 
        Math.abs(newPos.x - lastPosRef.current.x) > 1 || 
        Math.abs(newPos.y - lastPosRef.current.y) > 1;
      
      if (hasMoved) {
        setIsVisible(true);
        setPosition(newPos);
        
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 200);
      }
      
      lastPosRef.current = newPos;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setPosition({ x: -100, y: -100 });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      lastPosRef.current = null;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease-out",
        transform: `translate3d(0,0,0)`,
        willChange: "left, top, opacity",
        left: 0,
        top: 0,
      }}
    >
      {/* Outer Glow Ring */}
      <div
        className="absolute"
        style={{
          left: position.x - 28,
          top: position.y - 28,
          width: 56,
          height: 56,
          background: "radial-gradient(circle, rgba(0,255,136,0.12) 0%, rgba(0,212,255,0.06) 35%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(10px)",
          transform: "translate3d(0,0,0)",
        }}
      />
      
      {/* Middle Glow Ring */}
      <div
        className="absolute"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          background: "radial-gradient(circle, rgba(0,255,136,0.25) 0%, rgba(0,212,255,0.12) 45%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(8px)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Main Glow */}
      <div
        className="absolute mix-blend-screen"
        style={{
          left: position.x - 14,
          top: position.y - 14,
          width: 28,
          height: 28,
          background: "radial-gradient(circle, rgba(0,255,136,0.5) 0%, rgba(0,212,255,0.25) 45%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(4px)",
          transform: "translate3d(0,0,0)",
        }}
      />
      
      {/* Core Dot */}
      <div
        className="absolute"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          background: "#00ff88",
          borderRadius: "50%",
          boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px rgba(0,255,136,0.6)",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Inner Bright Core */}
      <div
        className="absolute"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          width: 4,
          height: 4,
          background: "#ffffff",
          borderRadius: "50%",
          boxShadow: "0 0 6px #ffffff, 0 0 12px rgba(255,255,255,0.8)",
          transform: "translate3d(0,0,0)",
        }}
      />
    </div>
  );
}
