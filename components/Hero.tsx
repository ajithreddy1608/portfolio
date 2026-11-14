"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Availability & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Opportunities
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-3 mb-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 font-mono tracking-wide">
                <span>HELLO WORLD</span>
                <span className="h-px w-8 bg-cyan-400/50" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Ajith Reddy
              </h1>
              <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Developer | AI &amp; ML Enthusiast | Technology Explorer
              </p>
            </div>

            {/* Professional Introduction Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Hi, I&apos;m{" "}
              <strong className="text-white font-medium">Ajith Reddy</strong> — a
              Computer Science student specializing in Artificial Intelligence and
              Machine Learning, passionate about technology, software
              development, intelligent systems and building meaningful digital
              products.
              <br />
              <br className="hidden sm:inline" />
              I enjoy transforming ideas into practical applications, exploring
              emerging technologies and continuously improving my technical skills
              through real-world projects.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/Ajith-Reddy-Resume.pdf"
                download="Ajith-Reddy-Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-cyan-400/50 text-slate-200 hover:text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Links / Socials */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08] w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/ajithreddy1608"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajit-reddy-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-blue-400/40 text-slate-300 hover:text-blue-400 transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:kattaajithreddy08@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Profile Photograph with Liquid Glass Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-indigo-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

              {/* Liquid Glass Outer Shell */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/[0.12] to-white/[0.02] backdrop-blur-2xl border border-white/20 shadow-2xl">
                {/* Top Specular Rim */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                {/* Inner Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <Image
                    src="/ajith.jpg"
                    alt="Ajith Reddy - Software Developer & AI/ML Enthusiast"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient overlay for cinematic contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="font-semibold text-white">
                          Aurora University
                        </div>
                        <div className="text-[10px] text-slate-400">
                          B.Tech CSE - AIML
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-500/30">
                      <Code2 className="w-3 h-3" />
                      <span>3rd Year</span>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Pill: Focus Pill */}
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-blue-400/40 shadow-lg text-[11px] font-medium text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>AI &amp; Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
