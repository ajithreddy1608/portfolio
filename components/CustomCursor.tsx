"use client";

import React, { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  time: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  radius: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only enable on desktop pointer devices
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReduced) return;

    setEnabled(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high DPR for sharp micro-particles and fine waves
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Cursor state
    const state = {
      targetX: -100,
      targetY: -100,
      currentX: -100,
      currentY: -100,
      ringX: -100,
      ringY: -100,
      prevX: -100,
      prevY: -100,
      isHovered: false,
      isText: false,
      isDown: false,
      visible: false,
      points: [] as Point[],
      particles: [] as Particle[],
      lastParticleTime: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      state.targetX = e.clientX;
      state.targetY = e.clientY;
      if (!state.visible) state.visible = true;

      const now = performance.now();
      state.points.unshift({ x: e.clientX, y: e.clientY, time: now });
      if (state.points.length > 18) state.points.pop();

      // Emit subtle micro-droplets on movement
      const dist = Math.hypot(e.clientX - state.prevX, e.clientY - state.prevY);
      if (dist > 3 && now - state.lastParticleTime > 28 && state.particles.length < 20) {
        state.lastParticleTime = now;
        const angle = Math.atan2(e.clientY - state.prevY, e.clientX - state.prevX) + Math.PI;
        const spread = (Math.random() - 0.5) * 0.7;
        const speed = Math.random() * 0.6 + 0.3;
        state.particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle + spread) * speed,
          vy: Math.sin(angle + spread) * speed,
          alpha: 0.6,
          radius: Math.random() * 0.8 + 0.8, // 0.8px - 1.6px micro-particle
          color: Math.random() > 0.4 ? "34, 211, 238" : "96, 165, 250",
        });
      }

      state.prevX = e.clientX;
      state.prevY = e.clientY;

      // Check target element types
      const target = e.target as HTMLElement | null;
      if (target) {
        state.isText = target.closest("input, textarea, select") !== null;
        state.isHovered =
          target.closest("a, button, [role='button'], .liquid-card, .interactive-hover") !== null;
      }
    };

    const handleMouseDown = () => {
      state.isDown = true;
    };
    const handleMouseUp = () => {
      state.isDown = false;
    };
    const handleMouseLeave = () => {
      state.visible = false;
    };
    const handleMouseEnter = () => {
      state.visible = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animId: number;
    let clock = 0;

    const render = () => {
      clock += 0.045;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Smooth cursor lerping
      state.currentX += (state.targetX - state.currentX) * 0.45;
      state.currentY += (state.targetY - state.currentY) * 0.45;
      state.ringX += (state.targetX - state.ringX) * 0.22;
      state.ringY += (state.targetY - state.ringY) * 0.22;

      // Update DOM cursor elements directly (zero React re-renders)
      if (dotRef.current && ringRef.current) {
        if (!state.visible) {
          dotRef.current.style.opacity = "0";
          ringRef.current.style.opacity = "0";
        } else if (state.isText) {
          // Soften when typing in input
          dotRef.current.style.opacity = "0.2";
          ringRef.current.style.opacity = "0";
        } else {
          dotRef.current.style.opacity = "1";
          ringRef.current.style.opacity = "1";

          dotRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) translate(-50%, -50%)`;

          const ringScale = state.isDown ? 0.8 : state.isHovered ? 1.35 : 1.0;
          ringRef.current.style.transform = `translate3d(${state.ringX}px, ${state.ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        }
      }

      // Filter old trail points
      const now = performance.now();
      state.points = state.points.filter((p) => now - p.time < 340);

      // Draw delicate liquid wavy ribbon
      const len = state.points.length;
      if (len > 2 && !state.isText) {
        for (let i = 0; i < len - 1; i++) {
          const p = state.points[i];
          const nextP = state.points[i + 1];

          const dx = nextP.x - p.x;
          const dy = nextP.y - p.y;
          const dist = Math.hypot(dx, dy);

          let waveOffsetX = 0;
          let waveOffsetY = 0;
          if (dist > 0.1) {
            const nx = -dy / dist;
            const ny = dx / dist;
            // Tapered sine ripple: 0 at head and tail, gentle flutter in middle
            const progress = i / len;
            const taper = Math.sin(progress * Math.PI);
            const wave = Math.sin(clock * 6 + i * 0.5) * 3.0 * taper;
            waveOffsetX = nx * wave;
            waveOffsetY = ny * wave;
          }

          const midX = (p.x + nextP.x) / 2 + waveOffsetX;
          const midY = (p.y + nextP.y) / 2 + waveOffsetY;

          const progress = i / len;
          const alpha = (1 - progress) * 0.65;
          const width = (1 - progress) * 2.0 + 0.3;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.quadraticCurveTo(p.x + waveOffsetX, p.y + waveOffsetY, midX, midY);
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = 3;
          ctx.shadowColor = "rgba(34, 211, 238, 0.4)";
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      // Draw and update tiny micro-droplets
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const pt = state.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha *= 0.93;
        pt.radius *= 0.98;

        if (pt.alpha <= 0.02 || pt.radius <= 0.2) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pt.color}, ${pt.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Delicate Liquid Wave Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* 2. Thin, Soft Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full border border-cyan-400/35 bg-cyan-400/[0.03] backdrop-blur-[1px] shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-[opacity,transform] duration-100 ease-out will-change-transform pointer-events-none"
      />

      {/* 3. Small, Clean Glowing Point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_20%,#22d3ee_70%,#0284c7_100%)] shadow-[0_0_6px_rgba(34,211,238,0.9)] transition-opacity duration-100 ease-out will-change-transform pointer-events-none"
      />
    </div>
  );
}
