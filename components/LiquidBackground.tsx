"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5, px: 0, py: 0 });
  const [glowPos, setGlowPos] = useState({ x: -500, y: -500 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2, // -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 2,
        px: e.clientX,
        py: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Smooth glow trailing loop
    let glowAnimId: number;
    const updateGlow = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setGlowPos({ x: currentX, y: currentY });
      glowAnimId = requestAnimationFrame(updateGlow);
    };
    glowAnimId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(glowAnimId);
    };
  }, []);

  // Liquid / Wavy Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Interactive ripple & wave simulation
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }
    const ripples: Ripple[] = [];
    let lastRippleTime = 0;

    const handleCanvasPointer = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastRippleTime > 75 && ripples.length < 8) {
        lastRippleTime = now;
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 10,
          maxRadius: Math.min(window.innerWidth * 0.35, 260),
          alpha: 0.28,
          speed: 2.2,
        });
      }
    };
    window.addEventListener("mousemove", handleCanvasPointer, { passive: true });

    let time = 0;
    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Render smooth interactive ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha *= 0.978;

        if (r.alpha <= 0.005 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        const grad = ctx.createRadialGradient(r.x, r.y, Math.max(0, r.radius - 20), r.x, r.y, r.radius);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.7, `rgba(6, 182, 212, ${r.alpha * 0.35})`);
        grad.addColorStop(0.9, `rgba(59, 130, 246, ${r.alpha * 0.5})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Render subtle ambient liquid waves across the horizon
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseHeight = height * (0.35 + w * 0.25);
        const waveFrequency = 0.0012 + w * 0.0006;
        const waveAmplitude = 18 + w * 12;
        const phase = time * (1 + w * 0.5);

        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 15) {
          const y = baseHeight + Math.sin(x * waveFrequency + phase) * waveAmplitude + Math.cos(x * 0.002 - phase * 0.7) * (waveAmplitude * 0.6);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad = ctx.createLinearGradient(0, baseHeight - 40, width, height);
        if (w === 0) {
          waveGrad.addColorStop(0, "rgba(59, 130, 246, 0.035)");
          waveGrad.addColorStop(1, "rgba(2, 6, 23, 0.0)");
        } else if (w === 1) {
          waveGrad.addColorStop(0, "rgba(6, 182, 212, 0.025)");
          waveGrad.addColorStop(1, "rgba(3, 7, 18, 0.0)");
        } else {
          waveGrad.addColorStop(0, "rgba(99, 102, 241, 0.02)");
          waveGrad.addColorStop(1, "transparent");
        }
        ctx.fillStyle = waveGrad;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleCanvasPointer);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  // Subtle 3D Parallax offsets
  const parallaxX = mousePos.x * 12; // -12px to +12px
  const parallaxY = mousePos.y * 12;
  const deepParallaxX = mousePos.x * 24;
  const deepParallaxY = mousePos.y * 24;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#030712]">
      {/* 1. Deep Black / Midnight Navy Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050918] to-[#02050e]" />

      {/* 2. Global Parallax Layer: Deep Fluid Orbs */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${deepParallaxX}px, ${deepParallaxY}px, 0)`,
        }}
      >
        {/* Top-Center Electric Blue Ambient Core */}
        <div
          className="liquid-blob w-[650px] h-[650px] -top-60 left-1/2 -translate-x-1/2 bg-blue-600/18"
          style={{ animation: "pulse 12s ease-in-out infinite" }}
        />
        {/* Right-Mid Cyan Glow */}
        <div
          className="liquid-blob w-[550px] h-[550px] top-[25%] -right-32 bg-cyan-500/14"
          style={{ animation: "pulse 15s ease-in-out infinite alternate" }}
        />
        {/* Left-Mid Deep Indigo Glow */}
        <div
          className="liquid-blob w-[700px] h-[700px] top-[55%] -left-64 bg-indigo-700/12"
          style={{ animation: "pulse 18s ease-in-out infinite" }}
        />
        {/* Bottom Cyan/Blue Orb */}
        <div
          className="liquid-blob w-[600px] h-[600px] -bottom-40 right-[15%] bg-cyan-600/15"
          style={{ animation: "pulse 14s ease-in-out infinite alternate" }}
        />
      </div>

      {/* 3. Interactive Liquid Wave Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80 mix-blend-screen"
      />

      {/* 4. Foreground Parallax Layer: Micro Grid Overlay */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform opacity-35"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* 5. Cursor-Following Glow Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-screen"
        style={{
          left: `${glowPos.x}px`,
          top: `${glowPos.y}px`,
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(59, 130, 246, 0.12) 35%, rgba(255, 255, 255, 0.04) 55%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}
