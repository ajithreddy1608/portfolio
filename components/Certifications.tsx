"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificationsData, CertificationItem } from "@/data/certifications";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  FileCheck,
} from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(
    null
  );

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Section 06 // Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Certifications &amp; Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Verified academic and professional credentials demonstrating technical
            and communication competencies.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="liquid-card p-6 sm:p-8 flex flex-col justify-between h-full border-blue-500/20"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/[0.06]">
                    ID: {cert.credentialId}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-cyan-300 mb-4">
                  {cert.issuer}
                </p>

                {/* Certificate Preview Image if available */}
                {cert.imageUrl && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-5 border border-white/10 group cursor-pointer bg-slate-900"
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <div className="px-3 py-1.5 rounded-lg bg-black/70 border border-white/20 text-xs font-medium text-white flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                        Preview Certificate
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Competencies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-[1.02]"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Verify on Coursera</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <span className="text-[11px] text-slate-400 font-mono">
                  Official Record
                </span>
              </div>
            </div>
          ))}

          {/* Future Certifications Glass Card Placeholder */}
          <div className="liquid-card p-6 sm:p-8 flex flex-col justify-center items-center text-center h-full min-h-[380px] border-dashed border-white/15 bg-white/[0.01]">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-400 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Continuous Learning &amp; Future Badges
            </h3>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              Currently preparing for upcoming professional certifications in
              Deep Learning, Cloud Engineering, and Advanced Machine Learning
              Pipelines.
            </p>
            <span className="text-[11px] font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
              New milestones in progress
            </span>
          </div>
        </div>

        {/* Image Preview Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            />
            <div className="relative max-w-3xl w-full liquid-glass p-4 rounded-2xl z-10 border border-white/20">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10">
                <h4 className="text-sm font-semibold text-white">
                  {selectedCert.title} — Official Certificate
                </h4>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {selectedCert.imageUrl && (
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                  <Image
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
