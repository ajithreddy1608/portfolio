"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/projects";
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  Cpu,
  Sparkles,
  Calendar,
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl liquid-glass rounded-2xl p-6 sm:p-8 z-10 border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200 bg-slate-950/90 max-h-[90vh] overflow-y-auto">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="liquid-badge text-xs bg-blue-500/10 border-blue-500/30 text-cyan-300">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Status: {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        {/* Detailed Description */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
          <p>{project.detailedDescription}</p>
        </div>

        {/* Architecture Details if present */}
        {project.architectureDetails && (
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Architecture &amp; Methodology</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.architectureDetails}
            </p>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Key Capabilities &amp; Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
            Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.05] border border-white/[0.1] text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-transparent hover:bg-white/5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
