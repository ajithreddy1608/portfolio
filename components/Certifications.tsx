"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  certificationsData,
  achievementsData,
  CertificationItem,
} from "@/data/certifications";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  FileCheck,
  Trophy,
  Rocket,
  Calendar,
  Layers,
} from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredCerts =
    activeFilter === "All"
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeFilter);

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Section 06 // Credentials &amp; Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Certifications &amp; Workshops
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Verified credentials and intensive workshops in Artificial Intelligence,
            Web Development, Generative AI, and Prompt Engineering.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["All", "Certification", "Specialization", "Workshop"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400/30"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {cat === "All" ? "All Credentials" : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="liquid-card p-6 flex flex-col justify-between h-full border-blue-500/20"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    {cert.category}
                  </span>
                  {cert.issueDate && (
                    <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                      {cert.issueDate}
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-cyan-300 mb-3">
                  {cert.issuer}
                </p>

                {/* Certificate Preview Image if available */}
                {cert.imageUrl && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-white/10 group cursor-pointer bg-slate-900"
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-2.5 py-1 rounded-lg bg-black/70 border border-white/20 text-[11px] font-medium text-white flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-cyan-400" />
                        Preview
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link if available */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Verify Credential</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Completion
                  </span>
                )}
                {cert.credentialId && (
                  <span className="text-[10px] font-mono text-slate-400">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Entrepreneurial Experience Banner */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white">
              Achievements &amp; Entrepreneurial Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="liquid-card p-6 sm:p-7 border-amber-500/20"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25">
                    <Sparkles className="w-3 h-3" />
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold text-cyan-300 mb-3">
                  {item.role}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/[0.08]">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Image Preview Modal */}
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
