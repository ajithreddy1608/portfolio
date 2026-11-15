"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-slate-950/70 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-[9px] font-mono font-bold shadow-md">
              KAR
            </div>
            <span className="text-sm font-bold text-white tracking-wide">
              Katta Ajith Reddy
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Developer | AI &amp; ML Enthusiast | Technology Explorer. Built with
            Next.js, TypeScript, and Liquid Glass design system.
          </p>
        </div>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ajithreddy1608"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajit-reddy-k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:kattaajithreddy08@gmail.com"
              aria-label="Email"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-cyan-300 hover:text-white transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-white/[0.05] text-center text-xs text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} Katta Ajith Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
