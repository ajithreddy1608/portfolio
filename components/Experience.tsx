"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experienceData, ExperienceItem } from "@/data/experience";
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  MapPin,
  FileCheck,
  ExternalLink,
  ShieldCheck,
  X,
  FileText,
  Eye,
} from "lucide-react";

export default function Experience() {
  const [previewCert, setPreviewCert] = useState<{
    title: string;
    company: string;
    imageUrl: string;
    pdfUrl?: string;
  } | null>(null);

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3.5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Section 07 // Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Internship Experience
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Practical industry experience across digital marketing campaigns,
            full-stack development, and responsive frontend implementation.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 rounded-full mt-5 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp) => (
            <div key={exp.id} className="liquid-card p-6 sm:p-8 border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    {exp.performanceRating && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        <Award className="w-3 h-3" />
                        Rating: {exp.performanceRating}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 font-medium mt-1">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2 shrink-0 self-start sm:self-auto">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>

                  {exp.certificateImageUrl && (
                    <button
                      onClick={() =>
                        setPreviewCert({
                          title: `${exp.role} Completion Certificate`,
                          company: exp.company,
                          imageUrl: exp.certificateImageUrl!,
                          pdfUrl: exp.certificatePdfUrl,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-all hover:scale-105 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>View Official Certificate</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed my-6">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Key Responsibilities &amp; Deliverables</span>
                </h4>
                <div className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied & Certificate Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
                    Skills &amp; Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.certificatePdfUrl && (
                  <a
                    href={exp.certificatePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Open Certificate PDF</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {previewCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
              onClick={() => setPreviewCert(null)}
            />
            <div className="relative max-w-4xl w-full liquid-glass p-5 rounded-2xl z-10 border border-white/20 shadow-2xl animate-scale-up">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {previewCert.title}
                  </h4>
                  <p className="text-xs text-cyan-300">
                    {previewCert.company}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative aspect-[3/4] max-h-[70vh] w-full rounded-xl overflow-hidden bg-slate-950/80 border border-white/10 flex items-center justify-center">
                <Image
                  src={previewCert.imageUrl}
                  alt={previewCert.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Completion Certificate
                </span>
                <div className="flex items-center gap-2">
                  {previewCert.pdfUrl && (
                    <a
                      href={previewCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Open Original PDF</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setPreviewCert(null)}
                    className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
