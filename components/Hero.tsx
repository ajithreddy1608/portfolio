"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
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
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-3 mb-6">
              <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
                Katta Ajith Reddy
              </h1>
              <p className="text-lg font-medium text-stone-700 sm:text-xl">
                Software Developer | AI &amp; ML Enthusiast | Founder
              </p>
            </div>

            {/* Professional Introduction Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Hi, I&apos;m{" "}
              <strong className="text-white font-medium">Katta Ajith Reddy</strong>,
              a Computer Science student specializing in Artificial Intelligence
              and Machine Learning. I build useful digital products and explore
              technology through software development.
              <br />
              <br className="hidden sm:inline" />
              I am the founder of AS – Everything Starts Here and AS-WORKS,
              focusing on entrepreneurship, creative execution and
              technology-driven digital services.
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

          {/* Right column: portrait and study details */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Backlight Ambient Glow */}
              <div className="relative rounded-2xl border border-stone-200 bg-white p-2 shadow-[0_18px_45px_-35px_rgba(28,29,26,0.5)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src="/ajith.jpg"
                    alt="Katta Ajith Reddy - Software Developer & AI/ML Enthusiast"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-stone-200 pt-4">
                <div>
                  <p className="text-sm font-semibold text-stone-800">Aurora University</p>
                  <p className="mt-0.5 text-xs text-stone-500">B.Tech CSE · AI &amp; ML</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  <span>Third year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
