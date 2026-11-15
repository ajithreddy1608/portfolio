"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor trailing
  const cursorX = useSpring(0, { damping: 25, stiffness: 350, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 350, mass: 0.5 });
  const ringX = useSpring(0, { damping: 20, stiffness: 180, mass: 0.8 });
  const ringY = useSpring(0, { damping: 20, stiffness: 180, mass: 0.8 });

  useEffect(() => {
    // Only enable on non-touch devices with a fine pointer
    if (typeof window === "undefined") return;
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.closest("a, button, input, textarea, select, [role='button'], .liquid-card, .interactive-hover") !== null;
        setIsPointer(isInteractive);
      }
    };

    const handleMouseDown = () => setIsDown(true);
    const handleMouseUp = () => setIsDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Liquid Glass Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(59,130,246,0.35)] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
          width: isDown ? 24 : isPointer ? 44 : 32,
          height: isDown ? 24 : isPointer ? 44 : 32,
          transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Inner Glowing Core Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_10px_rgba(34,211,238,0.9)] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          width: isDown ? 4 : isPointer ? 8 : 6,
          height: isDown ? 4 : isPointer ? 8 : 6,
          transition: "width 0.15s ease, height 0.15s ease",
        }}
      />
    </div>
  );
}
