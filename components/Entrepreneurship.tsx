import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { entrepreneurshipData, EntrepreneurshipInitiative } from "@/data/entrepreneurship";

function InitiativeCard({ item }: { item: EntrepreneurshipInitiative }) {
  const isWideLogo = item.logoPresentation === "wide";

  return (
    <article className="venture-card flex h-full flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      <div>
        <div
          className={`mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-black ${
            isWideLogo ? "h-24 w-full sm:h-28" : "h-24 w-24 sm:h-28 sm:w-28"
          }`}
        >
          <Image
            src={item.logoPath}
            alt={`${item.name} logo`}
            width={isWideLogo ? 512 : 256}
            height={256}
            sizes={isWideLogo ? "(max-width: 640px) 100vw, 512px" : "112px"}
            className={isWideLogo ? "h-full w-full object-cover object-center" : "h-full w-full object-contain p-2"}
          />
        </div>

        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-500">
          {item.role}
        </p>
        <h3 className="venture-name mb-3 font-serif text-2xl font-medium leading-tight text-black sm:text-3xl">
          {item.name}
        </h3>

        {item.tagline && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-stone-600">
            {item.tagline}
          </p>
        )}

        <div className="space-y-3 text-sm leading-7 text-stone-700">
          {item.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {item.philosophy && (
          <div className="mt-6 border-t border-stone-200 pt-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
              Brand philosophy
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              {item.philosophy.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.services && (
          <div className="mt-6 border-t border-stone-200 pt-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
              {item.services.map((service) => (
                <li key={service} className="flex gap-3 text-sm leading-6 text-stone-700">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 border-t border-stone-200 pt-5">
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
        >
          {item.actionLabel}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
            Entrepreneurship &amp; Leadership
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-950 sm:text-4xl">
            {entrepreneurshipData.sectionTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
            {entrepreneurshipData.sectionIntro}
          </p>
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
