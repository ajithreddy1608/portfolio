"use client";

import React, { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const ambientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Very minimal micro-shift: max 4px
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = normX * 4;
      targetY = normY * 4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const update = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#02050e]">
      {/* 1. Deep Black / Midnight Navy Pure Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02050e] via-[#030713] to-[#010309]" />

      {/* 2. Mostly Stable, Subtle Ambient Atmospheric Accents (No huge moving blobs) */}
      <div
        ref={ambientRef}
        className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
      >
        {/* Soft, calm electric blue ambient gradient at top */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/10 via-blue-900/5 to-transparent rounded-full blur-[100px] opacity-70" />

        {/* Soft cyan subtle rim at bottom right */}
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[300px] bg-gradient-to-t from-cyan-600/8 via-cyan-900/4 to-transparent rounded-full blur-[90px] opacity-60" />

        {/* Subtle indigo depth accent on left */}
        <div className="absolute top-[40%] -left-[10%] w-[450px] h-[400px] bg-gradient-to-r from-indigo-900/6 to-transparent rounded-full blur-[110px] opacity-50" />
      </div>

      {/* 3. Static Subtle Glass Micro-Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px] opacity-30" />
    </div>
  );
}
