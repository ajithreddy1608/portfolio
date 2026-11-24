"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import {
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
  HeartPulse,
  Cpu,
  FileSpreadsheet,
  Leaf,
  Film,
  Activity,
  BarChart3,
  Code2,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse,
  Cpu,
  FileSpreadsheet,
  Leaf,
  Sparkles,
  Film,
  Activity,
  BarChart3,
  Code2,
};

export default function ProjectCard({
  project,
  onOpenDetails,
}: ProjectCardProps) {
  const Icon = ICON_MAP[project.iconName] || Layers;

  const getStatusBadge = () => {
    switch (project.status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case "Concept":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles className="w-3 h-3" />
            Concept
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="liquid-card group flex flex-col justify-between h-full p-6 transition-all duration-300">
      <div>
        {/* Visual Header / Backdrop */}
        <div
          className="relative mb-5 flex h-36 flex-col justify-between overflow-hidden rounded-xl border border-stone-200 bg-stone-100 p-4"
        >
          {/* Top row: Category & Verified status */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="liquid-badge text-[10px] tracking-wide font-mono uppercase">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5">
              {project.isRepoVerified && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                  <Github className="w-2.5 h-2.5" />
                  GitHub Repo
                </span>
              )}
              {getStatusBadge()}
            </div>
          </div>

          {/* Bottom row: Project Icon & Repo Tag */}
          <div className="relative z-10 flex items-end justify-between">
            <div className="rounded-lg border border-stone-200 bg-white p-3 text-stone-700 transition-transform group-hover:scale-[1.02]">
              <Icon className="w-6 h-6" />
            </div>
            {project.repoName && (
              <span className="rounded-md border border-stone-200 bg-white px-2 py-1 text-[11px] font-mono text-stone-600">
                {project.repoName}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-5 space-y-1.5 border-t border-white/[0.06] pt-3 text-xs text-slate-400">
            {project.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5 font-bold">›</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-4 border-t border-white/[0.08]">
        <button
          onClick={() => onOpenDetails(project)}
          className="flex-1 py-2 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-cyan-400/40 text-xs font-medium text-slate-200 hover:text-white transition-all text-center"
        >
          View Details
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository`}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/30 text-slate-300 hover:text-white transition-colors"
            title="Open GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="p-2 rounded-xl bg-gradient-to-r from-blue-600/40 to-cyan-600/40 hover:from-blue-600/60 hover:to-cyan-600/60 border border-cyan-400/40 text-cyan-300 hover:text-white transition-colors"
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
