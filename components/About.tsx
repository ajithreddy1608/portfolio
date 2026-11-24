"use client";

import React from "react";
import {
  Brain,
  Code2,
  Rocket,
  Compass,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Passionate about neural network architectures, computer vision pipelines, and bridging algorithmic models into functional user applications.",
    },
    {
      icon: Code2,
      title: "Full-Stack Web Engineering",
      description:
        "Building responsive, high-performance web products utilizing modern frameworks like React, Next.js, TypeScript, and modern styling libraries.",
    },
    {
      icon: Layers,
      title: "Systems & Architecture",
      description:
        "Exploring hardware simulations, matrix operations benchmarking across CPU/GPU/TPU setups, and algorithmic runtime optimization.",
    },
    {
      icon: Rocket,
      title: "Practical Problem Solving",
      description:
        "Focused on creating meaningful digital solutions — from emergency blood donor matching to agricultural plant disease detection.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Section 02 // Narrative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed Narrative Glass Card */}
          <div className="lg:col-span-7 liquid-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Engineering &amp; Entrepreneurship
                </h3>
                <p className="text-xs text-slate-400">
                  Third-year B.Tech Student in CSE (AI &amp; ML) at Aurora Deemed University
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a third-year Computer Science student specializing in
                Artificial Intelligence and Machine Learning at Aurora Deemed
                University. I enjoy software development, intelligent systems
                and turning technical ideas into useful digital products.
              </p>
              <p>
                Alongside my technical interests, I am building businesses and
                exploring opportunities through AS – Everything Starts Here. As
                the founder of AS-WORKS, I focus on digital services, creative
                execution and technology-driven solutions. My interests include
                entrepreneurship, brand building and turning ideas into
                practical solutions.
              </p>
            </div>

            {/* Core Values / Professional Goals */}
            <div className="pt-4 border-t border-white/[0.08]">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Professional Goals &amp; Approach
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Build real-world production software</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Deploy practical, accessible AI systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Iterative improvement through open-source code</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Collaborative team player &amp; fast learner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Glass Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="liquid-card p-5 group hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
