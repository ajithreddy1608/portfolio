"use client";

import React from "react";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Center Electric Blue Glow */}
      <div
        className="liquid-blob w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 bg-blue-600/15"
        style={{ animation: "pulse 10s ease-in-out infinite" }}
      />
      {/* Top Right Cyan Glow */}
      <div
        className="liquid-blob w-[450px] h-[450px] top-60 -right-20 bg-cyan-500/10"
        style={{ animation: "pulse 12s ease-in-out infinite alternate" }}
      />
      {/* Mid Left Deep Blue Glow */}
      <div
        className="liquid-blob w-[600px] h-[600px] top-[40%] -left-60 bg-blue-700/12"
        style={{ animation: "pulse 14s ease-in-out infinite" }}
      />
      {/* Bottom Center Cyan/Blue Glow */}
      <div
        className="liquid-blob w-[550px] h-[550px] bottom-10 right-[15%] bg-cyan-600/12"
        style={{ animation: "pulse 11s ease-in-out infinite alternate" }}
      />
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
    </div>
  );
}
