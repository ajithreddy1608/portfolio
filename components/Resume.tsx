"use client";

import React, { useState } from "react";
import {
  FileText,
  FileDown,
  ExternalLink,
  Eye,
  CheckCircle2,
  Sparkles,
  User,
  GraduationCap,
  Code2,
  Mail,
  Phone,
  X,
  AlertCircle,
} from "lucide-react";

export default function Resume() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Section 08 // Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Download my comprehensive resume for detailed academic records,
            technical achievements, and professional qualifications.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Liquid Glass Resume Box */}
        <div className="max-w-4xl mx-auto liquid-card p-6 sm:p-10 border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Summary */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Format: PDF // Ready for Recruiters</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Ajith Reddy — Official Resume
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Includes third-year B.Tech CSE (AI &amp; ML) coursework from
                Aurora Deemed University, production projects (RedConnect,
                Processor Architecture Simulator, Online Resume Builder), digital
                marketing internship experience, and certified proficiencies.
              </p>

              {/* Quick Resume Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>ATS-Optimized Formatting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Verified Project Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>AI / ML Technical Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct Contact Coordinates</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="md:col-span-4 flex flex-col gap-3 justify-center items-stretch p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <a
                href="/Ajith-Reddy-Resume.pdf"
                download="Ajith-Reddy-Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-cyan-400/40 text-slate-200 text-xs font-medium transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Interactive Summary</span>
              </button>

              <p className="text-[11px] text-center text-slate-400 font-mono mt-1">
                Target: public/Ajith-Reddy-Resume.pdf
              </p>
            </div>
          </div>
        </div>

        {/* Resume Preview Modal */}
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setShowPreviewModal(false)}
            />
            <div className="relative w-full max-w-2xl liquid-glass rounded-2xl p-6 sm:p-8 z-10 border border-white/20 bg-slate-950/95 max-h-[85vh] overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">
                    Resume Document Snapshot
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview Content */}
              <div className="space-y-6 text-xs text-slate-300">
                {/* Header */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center space-y-1">
                  <h4 className="text-lg font-bold text-white">Ajith Reddy Katta</h4>
                  <p className="text-cyan-400 font-medium">
                    Developer | AI &amp; ML Enthusiast | Technology Explorer
                  </p>
                  <p className="text-slate-400 font-mono text-[11px]">
                    Andhra Pradesh, India • +91 8555064188 • kattaajithreddy08@gmail.com
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                    Education
                  </h5>
                  <p className="font-bold text-white">Aurora Deemed to be University</p>
                  <p className="text-slate-300">
                    B.Tech in Computer Science and Engineering (AI &amp; ML) • Third Year (3C)
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                    Internship Experience
                  </h5>
                  <p className="font-bold text-white">
                    Sashverse Technologies Pvt. Ltd. (Workverse)
                  </p>
                  <p className="text-cyan-300">
                    Digital Marketing Intern • 17 April 2026 – 26 June 2026
                  </p>
                  <p className="text-slate-400 mt-1">
                    Handled social media channels, market research, content production, and potential client research.
                  </p>
                </div>

                {/* Projects */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                    Key Projects
                  </h5>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    <li>
                      <strong className="text-white">RedConnect:</strong> Real-time blood donor emergency matching platform (TypeScript, React, Mapbox GL, Supabase).
                    </li>
                    <li>
                      <strong className="text-white">Processor Architecture Design:</strong> Hardware simulation and AI matrix benchmarking across CPU/GPU/TPU (Python, FastAPI, NumPy).
                    </li>
                    <li>
                      <strong className="text-white">Online Resume Builder:</strong> Reactive client-side CV builder (React, Vite, CSS3).
                    </li>
                    <li>
                      <strong className="text-white">Plant Leaf Disease Detection:</strong> Agricultural diagnostic system (CNN, Random Forest, OpenCV).
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modal Bottom CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                <span className="text-[11px] text-slate-400 font-mono">
                  Full PDF file: /Ajith-Reddy-Resume.pdf
                </span>
                <a
                  href="/Ajith-Reddy-Resume.pdf"
                  download="Ajith-Reddy-Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
