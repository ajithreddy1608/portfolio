"use client";

import React, { useState } from "react";
import Image from "next/image";
import { entrepreneurshipData, EntrepreneurshipInitiative } from "@/data/entrepreneurship";
import {
  Rocket,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Layers,
  ArrowRight,
  X,
  Send,
  Globe,
  Palette,
  Layout,
  Megaphone,
  Wand2,
} from "lucide-react";

export default function Entrepreneurship() {
  const [selectedServiceInitiative, setSelectedServiceInitiative] =
    useState<EntrepreneurshipInitiative | null>(null);

  const handleScrollToContact = () => {
    setSelectedServiceInitiative(null);
    const element = document.getElementById("contact");
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getServiceIcon = (service: string) => {
    if (service.includes("Website")) return Layout;
    if (service.includes("UI/UX")) return Palette;
    if (service.includes("Branding")) return Sparkles;
    if (service.includes("Marketing")) return Megaphone;
    return Wand2;
  };

  return (
    <section id="entrepreneurship" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3.5 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ventures &amp; Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {entrepreneurshipData.sectionTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {entrepreneurshipData.sectionIntro}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 rounded-full mt-5 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {entrepreneurshipData.initiatives.map((item) => (
            <div
              key={item.id}
              className={`liquid-card group flex flex-col justify-between p-7 sm:p-9 ${item.gradientTheme.border} transition-all duration-500`}
            >
              <div>
                {/* Top Badge & Role */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${item.gradientTheme.badge}`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    Role: {item.role}
                  </span>
                  {item.tagline && (
                    <span className="text-xs font-mono text-cyan-300/90 tracking-wide bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                      &ldquo;{item.tagline}&rdquo;
                    </span>
                  )}
                </div>

                {/* Brand Logo & Name Header */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:border-cyan-400/40 transition-all duration-300">
                    <Image
                      src={item.logoPath}
                      alt={`${item.name} Logo`}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 to-transparent pointer-events-none" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">
                      Founder-Led Initiative
                    </p>
                  </div>
                </div>

                {/* Description paragraphs */}
                <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description.split("\n\n").map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Focus Areas (For AS) */}
                {item.keyFocusAreas && (
                  <div className="mb-6 pt-2">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Key Focus Areas</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.keyFocusAreas.map((focus, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services (For CAVORA DIGITAL) */}
                {item.services && (
                  <div className="mb-6 pt-2">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Core Digital Services</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.services.map((service, sIdx) => {
                        const Icon = getServiceIcon(service);
                        return (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-slate-300 hover:border-cyan-400/30 transition-colors"
                          >
                            <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{service}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                {item.websiteUrl ? (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>{item.buttonText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedServiceInitiative(item)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <span className="text-[11px] font-mono text-slate-400">
                  {item.websiteUrl ? "aseverythingstartshere.in" : "Digital Agency & Freelance"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Services Exploration Modal (For CAVORA DIGITAL) */}
        {selectedServiceInitiative && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedServiceInitiative(null)}
            />
            <div className="relative w-full max-w-2xl liquid-glass rounded-2xl p-6 sm:p-8 z-10 border border-white/20 bg-slate-950/95 max-h-[85vh] overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] p-1.5 border border-white/10 flex items-center justify-center">
                    <Image
                      src={selectedServiceInitiative.logoPath}
                      alt={selectedServiceInitiative.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {selectedServiceInitiative.name}
                    </h3>
                    {selectedServiceInitiative.tagline && (
                      <p className="text-xs text-cyan-300 font-mono">
                        {selectedServiceInitiative.tagline}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedServiceInitiative(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Service Capabilities */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Freelance &amp; Digital Solutions Portfolio
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedServiceInitiative.services?.map((service, idx) => {
                    const Icon = getServiceIcon(service);
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {service}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              Custom tailored for modern brands &amp; businesses
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                          Available
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Ready to collaborate on a digital project?
                </span>
                <button
                  onClick={handleScrollToContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inquire for Collaboration</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
