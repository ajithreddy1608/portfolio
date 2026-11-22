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
    <div aria-hidden="true" className="liquid-background fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-[#070a12]" />

      {/* Layered midnight tones keep the long page calm while giving the hero depth. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-18%,rgba(59,130,246,0.2),transparent_48%),radial-gradient(ellipse_at_8%_28%,rgba(6,182,212,0.09),transparent_34%),radial-gradient(ellipse_at_92%_54%,rgba(139,92,246,0.08),transparent_38%),linear-gradient(180deg,#0b1020_0%,#080b14_48%,#06080e_100%)]" />

      <div ref={ambientRef} className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform">
        <div className="ambient-orb absolute -top-64 left-[12%] h-[40rem] w-[40rem] rounded-full bg-cyan-500/[0.09] blur-[150px]" />
        <div className="ambient-orb ambient-orb--violet absolute top-[12%] -right-64 h-[38rem] w-[38rem] rounded-full bg-violet-500/[0.1] blur-[155px]" />
        <div className="ambient-orb ambient-orb--cyan absolute -bottom-80 left-[38%] h-[42rem] w-[42rem] rounded-full bg-blue-500/[0.09] blur-[160px]" />
      </div>

      {/* Fine grid and soft vignette add structure without competing with content. */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,transparent_4%,rgba(3,6,13,0.38)_100%)]" />
    </div>
  );
}
