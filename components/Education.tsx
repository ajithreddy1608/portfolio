"use client";

import React from "react";
import { educationHistory } from "@/data/education";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Sparkles,
  CheckCircle2,
  FolderGit2,
  Award,
  MapPin,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate engineering curriculum specializing in AI &amp; ML,
            supported by strong academic foundations in mathematics and science.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto space-y-6">
          {educationHistory.map((item, index) => {
            const isPrimary = index === 0;
            return (
              <div
                key={item.institution}
                className={`liquid-card p-6 sm:p-8 ${
                  isPrimary ? "border-blue-500/30" : "border-white/[0.08]"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                  <div>
                    <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      <span>{item.institution}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    {item.specialization && (
                      <p className="text-xs text-cyan-300 font-mono mt-0.5">
                        Specialization: {item.specialization}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.05] text-slate-200 border border-white/[0.1]">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.period}
                    </span>
                    {item.statusBadge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {item.statusBadge}
                      </span>
                    )}
                    {item.score && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                        <Award className="w-3 h-3 text-cyan-400" />
                        Score: {item.score}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed my-5">
                    {item.description}
                  </p>
                )}

                {/* Relevant Subjects (For B.Tech) */}
                {item.relevantSubjects && item.relevantSubjects.length > 0 && (
                  <div className="mb-5 pt-2">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span>Relevant Coursework &amp; Subjects</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {item.relevantSubjects.map((subject, idx) => (
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
                )}

                {/* Academic Projects (For B.Tech) */}
                {item.academicProjects && item.academicProjects.length > 0 && (
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-cyan-400" />
                      <span>Key Technical &amp; System Projects</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.academicProjects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200 flex items-start gap-2"
                        >
                          <span className="text-cyan-400 font-mono font-bold mt-0.5">
                            0{idx + 1}.
                          </span>
                          <span>{proj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
