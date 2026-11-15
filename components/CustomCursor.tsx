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

    // Disable on touch / mobile or if reduced motion is requested
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

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Cursor & Trail state
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

      // Add to point history for wave ribbon
      const now = performance.now();
      state.points.unshift({ x: e.clientX, y: e.clientY, time: now });
      if (state.points.length > 20) state.points.pop();

      // Emit tiny micro-particles on movement
      const dist = Math.hypot(e.clientX - state.prevX, e.clientY - state.prevY);
      if (dist > 3 && now - state.lastParticleTime > 25 && state.particles.length < 24) {
        state.lastParticleTime = now;
        const angle = Math.atan2(e.clientY - state.prevY, e.clientX - state.prevX) + Math.PI;
        const spread = (Math.random() - 0.5) * 0.8;
        const speed = Math.random() * 0.8 + 0.4;
        state.particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle + spread) * speed,
          vy: Math.sin(angle + spread) * speed,
          alpha: 0.65,
          radius: Math.random() * 0.9 + 0.9, // 0.9px - 1.8px
          color: Math.random() > 0.4 ? "rgba(34, 211, 238," : "rgba(96, 165, 250,",
        });
      }

      state.prevX = e.clientX;
      state.prevY = e.clientY;

      // Check for hoverable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        state.isHovered =
          target.closest("a, button, input, textarea, select, .liquid-card, [role='button']") !== null;
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

    // Animation loop (60 FPS)
    let animId: number;
    let clock = 0;

    const render = () => {
      clock += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor lerp
      state.currentX += (state.targetX - state.currentX) * 0.45;
      state.currentY += (state.targetY - state.currentY) * 0.45;
      state.ringX += (state.targetX - state.ringX) * 0.22;
      state.ringY += (state.targetY - state.ringY) * 0.22;

      // Update DOM cursor elements directly
      if (dotRef.current && ringRef.current) {
        if (!state.visible) {
          dotRef.current.style.opacity = "0";
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
      state.points = state.points.filter((p) => now - p.time < 380);

      // Draw delicate liquid wavy trail
      if (state.points.length > 2) {
        ctx.beginPath();
        for (let i = 0; i < state.points.length - 1; i++) {
          const p = state.points[i];
          const nextP = state.points[i + 1];

          // Compute perpendicular direction for delicate wave undulation
          const dx = nextP.x - p.x;
          const dy = nextP.y - p.y;
          const dist = Math.hypot(dx, dy);

          let waveOffsetX = 0;
          let waveOffsetY = 0;
          if (dist > 0.1) {
            const nx = -dy / dist;
            const ny = dx / dist;
            // Wave amplitude tapers from 0 at head to max in mid-trail to 0 at tail
            const progress = i / state.points.length;
            const taper = Math.sin(progress * Math.PI);
            const wave = Math.sin(clock * 5 + i * 0.5) * 3.5 * taper;
            waveOffsetX = nx * wave;
            waveOffsetY = ny * wave;
          }

          const midX = (p.x + nextP.x) / 2 + waveOffsetX;
          const midY = (p.y + nextP.y) / 2 + waveOffsetY;

          if (i === 0) {
            ctx.moveTo(p.x, p.y);
          }
          ctx.quadraticCurveTo(p.x + waveOffsetX, p.y + waveOffsetY, midX, midY);
        }

        // Liquid trail gradient
        const head = state.points[0];
        const tail = state.points[state.points.length - 1];
        const grad = ctx.createLinearGradient(head.x, head.y, tail.x, tail.y);
        grad.addColorStop(0, "rgba(34, 211, 238, 0.55)"); // Subtle Cyan
        grad.addColorStop(0.4, "rgba(59, 130, 246, 0.35)"); // Electric Blue
        grad.addColorStop(1, "rgba(59, 130, 246, 0.0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // Draw and update tiny micro-particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const pt = state.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha *= 0.94;
        pt.radius *= 0.98;

        if (pt.alpha <= 0.02 || pt.radius <= 0.2) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${pt.color}${pt.alpha})`;
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
        className="fixed top-0 left-0 w-5 h-5 rounded-full border border-cyan-400/40 bg-cyan-400/[0.04] backdrop-blur-[1px] shadow-[0_0_8px_rgba(34,211,238,0.25)] transition-[opacity,transform] duration-100 ease-out will-change-transform"
      />

      {/* 3. Small, Clean Glowing Point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(34,211,238,0.85)] transition-opacity duration-100 ease-out will-change-transform"
      />
    </div>
  );
}
