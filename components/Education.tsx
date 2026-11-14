"use client";

import React from "react";
import { educationData } from "@/data/education";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Section 05 // Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Academic Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate engineering curriculum emphasizing core computer science,
            intelligent algorithms, and practical systems development.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-400/40 to-transparent" />

          {/* Education Milestone Card */}
          <div className="relative sm:pl-20">
            {/* Timeline Node Point */}
            <div className="hidden sm:flex absolute left-5 top-7 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10">
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="liquid-card p-6 sm:p-8">
              {/* Institution Title & Status Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <span>{educationData.university}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {educationData.department}
                  </p>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">
                    Specialization: {educationData.specialization}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {educationData.academicYear}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {educationData.section}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed my-6">
                {educationData.description}
              </p>

              {/* Relevant Subjects Grid */}
              <div className="mb-6 pt-2">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Relevant Technical Subjects</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {educationData.relevantSubjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Projects */}
              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-cyan-400" />
                  <span>Key Academic &amp; Laboratory Projects</span>
                </h4>
                <div className="space-y-2">
                  {educationData.academicProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <span className="text-cyan-400 font-mono font-bold mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
