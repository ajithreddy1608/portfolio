"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  certificationsData,
  achievementsData,
  CertificationItem,
  AchievementItem,
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
  FileText,
  Eye,
} from "lucide-react";

interface PreviewModalItem {
  title: string;
  issuer?: string;
  category?: string;
  imageUrl: string;
  docUrl?: string;
}

export default function Certifications() {
  const [activePreview, setActivePreview] = useState<PreviewModalItem | null>(
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3.5 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Certifications &amp; Workshops
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Verified credentials, technical hackathons, and intensive workshops in
            Artificial Intelligence, Generative AI &amp; Google Antigravity, Python
            Engineering, and Agile digital initiatives.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 rounded-full mt-5 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-20">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="liquid-card p-6 flex flex-col justify-between h-full border-blue-500/20 group hover:border-cyan-400/35 transition-all duration-300"
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
                <h3 className="text-base font-bold text-white mb-1 leading-snug group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mb-3">
                  {cert.issuer}
                </p>

                {/* Certificate Preview Image if available */}
                {cert.imageUrl && (
                  <div
                    onClick={() =>
                      setActivePreview({
                        title: cert.title,
                        issuer: cert.issuer,
                        category: cert.category,
                        imageUrl: cert.imageUrl!,
                        docUrl: cert.verificationUrl,
                      })
                    }
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-white/10 group/img cursor-pointer bg-slate-950/80 shadow-md"
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-contain group-hover/img:scale-105 transition-transform duration-500 p-1"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-3 py-1.5 rounded-xl bg-blue-600/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                        <span>Preview Certificate</span>
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

              {/* Action Links */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs gap-2">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>View Credential</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Completion
                  </span>
                )}
                {cert.credentialId && (
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Entrepreneurial Experience Banner */}
        <div className="mt-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Hackathons &amp; Entrepreneurial Achievements
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  In-person &amp; national hackathons, practice venture creation, and competitive innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="liquid-card p-6 flex flex-col justify-between h-full border-amber-500/20 group hover:border-amber-400/35 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25">
                      <Sparkles className="w-3 h-3" />
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-300 mb-3">
                    {item.role} {item.organization && `• ${item.organization}`}
                  </p>

                  {/* Thumbnail if certificate exists */}
                  {item.imageUrl && (
                    <div
                      onClick={() =>
                        setActivePreview({
                          title: item.title,
                          issuer: item.organization || item.role,
                          category: item.category,
                          imageUrl: item.imageUrl!,
                          docUrl: item.certificateUrl,
                        })
                      }
                      className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-white/10 group/ach cursor-pointer bg-slate-950/80 shadow-md"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-contain group-hover/ach:scale-105 transition-transform duration-500 p-1"
                      />
                      <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/ach:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="px-3 py-1.5 rounded-xl bg-amber-500/90 border border-white/20 text-xs font-semibold text-black flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/[0.08] mb-4">
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

                {item.certificateUrl && (
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Official Certificate Document</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Image Preview Modal */}
        {activePreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
              onClick={() => setActivePreview(null)}
            />
            <div className="relative max-w-4xl w-full liquid-glass p-5 rounded-2xl z-10 border border-white/20 shadow-2xl animate-scale-up">
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activePreview.title}
                  </h4>
                  {activePreview.issuer && (
                    <p className="text-xs text-cyan-300">
                      {activePreview.issuer}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setActivePreview(null)}
                  className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-slate-950/80 border border-white/10 flex items-center justify-center">
                <Image
                  src={activePreview.imageUrl}
                  alt={activePreview.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 font-mono">
                  Official Verified Credential
                </span>
                <div className="flex items-center gap-2">
                  {activePreview.docUrl && (
                    <a
                      href={activePreview.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Open Full Original File</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setActivePreview(null)}
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
