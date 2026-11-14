"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import GitHubReposExplorer from "./GitHubReposExplorer";
import { FolderGit2, Sparkles, Filter, ExternalLink, Github } from "lucide-react";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Development",
  "AI / ML",
  "Deep Learning",
  "Python",
  "Other",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectItem | null>(null);

  // Filter featured projects by category
  const filteredProjects = projectsData.filter((project) => {
    if (!project.featured) return false;
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Section 04 // Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Featured engineering work spanning full-stack web applications, AI/ML
            diagnostics, hardware simulations, and interactive software.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400/30"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="liquid-card p-12 text-center text-slate-400 text-sm">
            No featured projects currently listed under this category filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        )}

        {/* GitHub Repositories Explorer Section */}
        <GitHubReposExplorer />

        {/* Project Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
