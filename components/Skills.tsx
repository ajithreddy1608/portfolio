"use client";

import React, { useState } from "react";
import { skillCategories, softSkills, languagesList } from "@/data/skills";
import {
  Code2,
  Globe,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle,
  Languages,
  Lightbulb,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number | "all">("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : [skillCategories[activeTab]];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 03 // Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Skills &amp; Proficiencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Practical skills verified across software engineering, AI/ML models,
            Generative AI architectures, and live digital marketing campaigns.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
              activeTab === "all"
                ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400/30"
                : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-blue-400/30"
                : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCategories.map((category) => {
            const Icon = ICON_MAP[category.iconName] || Code2;
            return (
              <div
                key={category.title}
                className="liquid-card p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-400/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Matrix */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-cyan-400/40 text-xs text-slate-200 transition-all duration-200 hover:scale-[1.02]"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400/70 group-hover:text-cyan-400" />
                        <span className="font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-400 font-mono px-1 py-0.2 rounded bg-black/30 border border-white/5">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono">{category.skills.length} competencies</span>
                  <span className="text-cyan-400/70">Verified in resume</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Languages Glass Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Soft Skills */}
          <div className="md:col-span-8 liquid-card p-6 border-white/10">
            <div className="flex items-center gap-2.5 mb-3 text-cyan-300">
              <Lightbulb className="w-4 h-4" />
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                Soft Skills &amp; Interpersonal Strengths
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="md:col-span-4 liquid-card p-6 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3 text-blue-400">
                <Languages className="w-4 h-4" />
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {languagesList.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-mono">
              Professional &amp; native fluency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
