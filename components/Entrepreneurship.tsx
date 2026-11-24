import React from "react";
import Image from "next/image";
import { entrepreneurshipData, EntrepreneurshipInitiative } from "@/data/entrepreneurship";
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Film,
  Instagram,
  Layers,
  Layout,
  Megaphone,
  Palette,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
} from "lucide-react";

const getServiceIcon = (service: string) => {
  if (service.includes("Website")) return Layout;
  if (service.includes("UI/UX")) return Palette;
  if (service.includes("Branding")) return Sparkles;
  if (service.includes("Social Media")) return Megaphone;
  if (service.includes("Video")) return Film;
  if (service.includes("Marketing")) return Megaphone;
  if (service.includes("Lead")) return Users;
  return Wand2;
};

function InitiativeCard({ item }: { item: EntrepreneurshipInitiative }) {
  const isWideLogo = item.logoPresentation === "wide";

  return (
    <article
      className={`liquid-card group flex h-full flex-col justify-between p-6 sm:p-8 ${item.gradientTheme.border} transition-all duration-500`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${item.gradientTheme.badge}`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            {item.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {item.role}{item.established ? ` · Established ${item.established}` : ""}
          </span>
        </div>

        <div className="mb-5 mt-5 flex items-center gap-4 sm:gap-5">
          <div
            className={`relative shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-[1.03] ${
              isWideLogo ? "h-16 w-40 sm:h-[4.5rem] sm:w-48" : "h-16 w-16 sm:h-20 sm:w-20"
            }`}
          >
            <Image
              src={item.logoPath}
              alt={`${item.name} logo`}
              fill
              sizes={isWideLogo ? "192px" : "80px"}
              className={isWideLogo ? "object-cover object-center" : "object-contain p-1"}
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-black transition-colors group-hover:text-black sm:text-2xl">
              {item.name}
            </h3>
            <p className="mt-1 text-xs font-mono text-slate-500 sm:text-sm">
              {item.subtitle}
            </p>
          </div>
        </div>

        <div className="mb-3 space-y-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
          {item.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {item.parentBrand && (
          <p className="mb-5 text-xs text-slate-500">
            Parent brand: <span className="font-medium text-slate-700">{item.parentBrand}</span>
          </p>
        )}

        <div className="mb-5 inline-flex rounded-full border border-slate-300/60 bg-white/50 px-3 py-1.5 text-[11px] font-mono tracking-wide text-slate-600">
          {item.tagline}
        </div>

        {item.philosophy && (
          <div className="mb-5 rounded-xl border border-blue-500/15 bg-blue-500/[0.04] p-3.5">
            <h4 className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              Brand Philosophy
            </h4>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-xs text-slate-600 sm:grid-cols-2">
              {item.philosophy.map((principle) => (
                <li key={principle} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.services && (
          <div className="mb-6 pt-1">
            <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
              <Layers className="h-3.5 w-3.5 text-cyan-600" />
              AS-WORKS Services
            </h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {item.services.map((service) => {
                const Icon = getServiceIcon(service);
                return (
                  <li
                    key={service}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.45] p-2.5 text-xs text-slate-600 transition-colors hover:border-cyan-400/40"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-cyan-600" />
                    <span>{service}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)] transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-cyan-400"
        >
          {item.actionLabel.includes("Instagram") ? (
            <Instagram className="h-4 w-4" />
          ) : (
            <ExternalLink className="h-4 w-4" />
          )}
          <span>{item.actionLabel}</span>
        </a>
        <span className="text-[11px] font-mono text-slate-400">Founder</span>
      </div>
    </article>
  );
}

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-cyan-700 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Rocket className="h-3.5 w-3.5 text-cyan-600" />
            <span>Ventures &amp; Initiatives</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {entrepreneurshipData.sectionTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {entrepreneurshipData.sectionIntro}
          </p>
          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]" />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {entrepreneurshipData.initiatives.map((item) => (
            <InitiativeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
