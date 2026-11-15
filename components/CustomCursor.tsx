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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high DPR for crisp micro-particles and fine waves
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Cursor internal state (Zero React re-renders on mousemove)
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
      hasMoved: false,
      points: [] as Point[],
      particles: [] as Particle[],
      lastParticleTime: 0,
    };

    const handlePointerMove = (e: PointerEvent) => {
      // If pure touch event, ignore
      if (e.pointerType === "touch") {
        if (state.visible) {
          state.visible = false;
          document.documentElement.classList.remove("has-custom-cursor");
        }
        return;
      }

      state.targetX = e.clientX;
      state.targetY = e.clientY;

      if (!state.hasMoved) {
        state.hasMoved = true;
        state.currentX = e.clientX;
        state.currentY = e.clientY;
        state.ringX = e.clientX;
        state.ringY = e.clientY;
        state.prevX = e.clientX;
        state.prevY = e.clientY;
      }

      if (!state.visible) {
        state.visible = true;
        document.documentElement.classList.add("has-custom-cursor");
      }

      const now = performance.now();
      state.points.unshift({ x: e.clientX, y: e.clientY, time: now });
      if (state.points.length > 20) state.points.pop();

      // Emit tiny micro-droplets on movement
      const dist = Math.hypot(e.clientX - state.prevX, e.clientY - state.prevY);
      if (dist > 3 && now - state.lastParticleTime > 26 && state.particles.length < 24) {
        state.lastParticleTime = now;
        const angle = Math.atan2(e.clientY - state.prevY, e.clientX - state.prevX) + Math.PI;
        const spread = (Math.random() - 0.5) * 0.75;
        const speed = Math.random() * 0.7 + 0.35;
        state.particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle + spread) * speed,
          vy: Math.sin(angle + spread) * speed,
          alpha: 0.65,
          radius: Math.random() * 0.8 + 0.8, // 0.8px - 1.6px micro-particle
          color: Math.random() > 0.4 ? "34, 211, 238" : "96, 165, 250",
        });
      }

      state.prevX = e.clientX;
      state.prevY = e.clientY;

      // Target element inspection
      const target = e.target as HTMLElement | null;
      if (target) {
        state.isText = target.closest("input, textarea, select") !== null;
        state.isHovered =
          target.closest("a, button, [role='button'], .liquid-card, .interactive-hover") !== null;
      }
    };

    const handlePointerDown = () => {
      state.isDown = true;
    };
    const handlePointerUp = () => {
      state.isDown = false;
    };
    const handleMouseLeave = () => {
      state.visible = false;
      document.documentElement.classList.remove("has-custom-cursor");
    };
    const handleMouseEnter = () => {
      state.visible = true;
      document.documentElement.classList.add("has-custom-cursor");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animId: number;
    let clock = 0;

    const render = () => {
      clock += 0.05;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Smooth cursor lerping
      state.currentX += (state.targetX - state.currentX) * 0.5;
      state.currentY += (state.targetY - state.currentY) * 0.5;
      state.ringX += (state.targetX - state.ringX) * 0.25;
      state.ringY += (state.targetY - state.ringY) * 0.25;

      // Update DOM cursor elements directly
      if (dotRef.current && ringRef.current) {
        if (!state.visible || !state.hasMoved) {
          dotRef.current.style.opacity = "0";
          ringRef.current.style.opacity = "0";
        } else if (state.isText) {
          dotRef.current.style.opacity = "0.25";
          ringRef.current.style.opacity = "0";
          dotRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) translate(-50%, -50%)`;
        } else {
          dotRef.current.style.opacity = "1";
          ringRef.current.style.opacity = "1";

          dotRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) translate(-50%, -50%)`;

          const ringScale = state.isDown ? 0.75 : state.isHovered ? 1.4 : 1.0;
          ringRef.current.style.transform = `translate3d(${state.ringX}px, ${state.ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        }
      }

      // Filter old trail points
      const now = performance.now();
      state.points = state.points.filter((p) => now - p.time < 350);

      // Draw delicate liquid wavy ribbon
      const len = state.points.length;
      if (len > 2 && !state.isText && state.visible) {
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
            // Tapered sinusoidal wave ripple
            const progress = i / len;
            const taper = Math.sin(progress * Math.PI);
            const wave = Math.sin(clock * 6 + i * 0.55) * 3.2 * taper;
            waveOffsetX = nx * wave;
            waveOffsetY = ny * wave;
          }

          const midX = (p.x + nextP.x) / 2 + waveOffsetX;
          const midY = (p.y + nextP.y) / 2 + waveOffsetY;

          const progress = i / len;
          const alpha = (1 - progress) * 0.7;
          const width = (1 - progress) * 2.2 + 0.4;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.quadraticCurveTo(p.x + waveOffsetX, p.y + waveOffsetY, midX, midY);
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(34, 211, 238, 0.45)";
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
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("has-custom-cursor");
      cancelAnimationFrame(animId);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. Delicate Liquid Wave Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* 2. Thin, Soft Outer Glass Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-cyan-400/50 bg-cyan-400/[0.04] backdrop-blur-[2px] shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-[opacity,transform] duration-75 ease-out will-change-transform pointer-events-none opacity-0"
      />

      {/* 3. Small, Clean Glowing Point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,1),0_0_16px_rgba(59,130,246,0.8)] transition-opacity duration-75 ease-out will-change-transform pointer-events-none opacity-0"
      />
    </div>
  );
}
