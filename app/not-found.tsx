import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f7f9fc] text-slate-800">
      <div className="liquid-card max-w-md w-full p-8 text-center space-y-6 border-white/10 shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-400">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Error 404 // Out of Range
          </span>
          <h1 className="text-3xl font-extrabold text-white">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The page or asset you are trying to reach does not exist or has been
            moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
