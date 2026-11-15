"use client";

import React, { useState } from "react";
import {
  FileText,
  FileDown,
  Eye,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Languages,
  X,
  ExternalLink,
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
            <span>Section 08 // Official Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Download my verified ATS-optimized resume for complete academic records,
            internships, technical projects, and certifications.
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
                <span>Format: 1-Page ATS-Optimized PDF</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Katta Ajith Reddy — Official Resume
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Complete overview covering third-year B.Tech CSE (AI &amp; ML) at
                Aurora Deemed University, dual internships at Sashverse Technologies
                and StaxTech, production projects (EV Charging Platform, Red-connect,
                Online Resume Builder, Processor Architecture Simulator), and industry
                certifications.
              </p>

              {/* Quick Resume Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dual Internship Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Verified Public GitHub Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Generative AI, LLMs &amp; RAG Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Digital Marketing &amp; SEO Skills</span>
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
                Verified File: Ajith-Reddy-Resume.pdf
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
            <div className="relative w-full max-w-3xl liquid-glass rounded-2xl p-6 sm:p-8 z-10 border border-white/20 bg-slate-950/95 max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">
                    Resume Document Snapshot — Katta Ajith Reddy
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
                  <h4 className="text-xl font-bold text-white tracking-wide">
                    KATTA AJITH REDDY
                  </h4>
                  <p className="text-cyan-400 font-medium text-xs">
                    Computer Science &amp; Engineering (Artificial Intelligence &amp; Machine Learning)
                  </p>
                  <p className="text-slate-400 font-mono text-[11px]">
                    Hyderabad, Telangana, India • +91-8555064188 • kattaajithreddy08@gmail.com
                  </p>
                </div>

                {/* Professional Summary */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                    Professional Summary
                  </h5>
                  <p className="text-slate-300 leading-relaxed text-justify">
                    Motivated Computer Science and Engineering student specializing in
                    Artificial Intelligence and Machine Learning, with practical exposure
                    to software development, web technologies, Generative AI, and digital
                    marketing. Experienced in building technology-based projects, attending
                    technical workshops, and contributing to real-world business initiatives.
                    Interested in software engineering, AI, and building innovative solutions
                    through technology.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>Education</span>
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white">
                        B.Tech, CSE (AI &amp; ML) — Aurora Deemed University
                      </span>
                      <span className="text-slate-400 font-mono">
                        2024 – 2028 (Currently 3rd Year)
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white">
                        Intermediate — Sri Chaitanya Junior College
                      </span>
                      <span className="text-cyan-300 font-mono">2024 | 86%</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white">
                        SSC — Lotus Lap High School
                      </span>
                      <span className="text-cyan-300 font-mono">2022 | 90%</span>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                    Technical Skills
                  </h5>
                  <div className="space-y-1.5 text-slate-300">
                    <p><strong className="text-white">Programming:</strong> Python, C, JavaScript</p>
                    <p><strong className="text-white">Web Development:</strong> HTML, CSS, JavaScript, Responsive Web Development, Vercel (deployment)</p>
                    <p><strong className="text-white">AI &amp; ML:</strong> Artificial Intelligence, Machine Learning, Deep Learning</p>
                    <p><strong className="text-white">Generative AI:</strong> LLMs, Retrieval-Augmented Generation (RAG), Prompt Engineering, Responsible AI</p>
                    <p><strong className="text-white">Tools:</strong> Git, GitHub, VS Code, Jupyter Notebook</p>
                    <p><strong className="text-white">Marketing:</strong> SEO, Digital Marketing, Content Marketing</p>
                  </div>
                </div>

                {/* Internship Experience */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>Internship Experience</span>
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-white">
                          Digital Marketing Intern — Sashverse Technologies Pvt. Ltd., Hyderabad
                        </span>
                        <span className="text-slate-400 font-mono">
                          17 Apr 2026 – 26 Jun 2026
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                        <li>Worked on live campaigns across SEO, social media, email, and content marketing; assisted in planning, executing, and optimizing strategies.</li>
                        <li>Contributed to brand awareness, audience engagement, and lead generation; created social media content, blogs, and marketing materials.</li>
                        <li>Collaborated with content, design, and development teams following Agile and SDLC practices. <strong className="text-emerald-400">Performance rating: Very Good.</strong></li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-white">
                          Web Development Intern — StaxTech
                        </span>
                        <span className="text-slate-400 font-mono">
                          May 2025 – Jun 2025 (4 weeks)
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                        <li>Completed a four-week internship gaining hands-on experience in HTML, CSS, and JavaScript, with a focus on responsive frontend implementation.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h5 className="font-semibold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-1 flex items-center gap-1.5">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <span>Projects</span>
                  </h5>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-white">EV Charging Station Discovery &amp; Booking Platform</strong>
                        <span className="text-slate-400 font-mono">Web Dev | EV Technology</span>
                      </div>
                      <p className="text-slate-400">Developing platform concept for EV drivers to discover nearby stations, view availability, and book slots.</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-white">Red-connect</strong>
                        <span className="text-cyan-400 font-mono">GitHub: Red-connect</span>
                      </div>
                      <p className="text-slate-400">Centralized platform connecting users with accessible core services and improved connectivity.</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-white">Online Resume Builder</strong>
                        <span className="text-cyan-400 font-mono">GitHub: Online-Resume-Builder</span>
                      </div>
                      <p className="text-slate-400">Structured application helping users organize details, skills, and work history with instant export.</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <strong className="text-white">Processor Architecture Design</strong>
                        <span className="text-cyan-400 font-mono">GitHub: Processor-Architecture-Design</span>
                      </div>
                      <p className="text-slate-400">Explores processor organization, component instruction execution, and digital systems architecture.</p>
                    </div>
                  </div>
                </div>

                {/* Achievements & Soft Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h5 className="font-semibold text-white uppercase tracking-wider mb-1 border-b border-white/10 pb-1">
                      Achievements &amp; Entrepreneurship
                    </h5>
                    <ul className="space-y-1 text-slate-400">
                      <li>• <strong>L&apos;Oréal Brandstorm 2026</strong> – Innovation &amp; creative problem-solving.</li>
                      <li>• <strong>FreshBite Box</strong> – Fruit delivery concept, market research &amp; pricing.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white uppercase tracking-wider mb-1 border-b border-white/10 pb-1">
                      Soft Skills &amp; Languages
                    </h5>
                    <p className="text-slate-400">
                      <strong className="text-white">Skills:</strong> Problem-Solving, Communication, Teamwork, Leadership, Adaptability.
                    </p>
                    <p className="text-slate-400 mt-1">
                      <strong className="text-white">Languages:</strong> English, Telugu, Hindi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Bottom CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                <span className="text-[11px] text-slate-400 font-mono">
                  Target: /Ajith-Reddy-Resume.pdf
                </span>
                <a
                  href="/Ajith-Reddy-Resume.pdf"
                  download="Ajith-Reddy-Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Exact 1-Page PDF</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
