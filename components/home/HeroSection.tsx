import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { heroStats } from "./content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/6"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover scale-105 blur-[7px] brightness-75 contrast-110 saturate-110"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>


      {/* YOUR ORIGINAL GRADIENTS (slightly adjusted) */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,7,5,0.9)_10%,rgba(5,7,5,0.55)_55%,rgba(5,7,5,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,199,160,0.14),transparent_24%),radial-gradient(circle_at_50%_30%,rgba(62,88,52,0.18),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_22%)]" />

      {/* BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050705] to-transparent" />

      {/* NOISE LAYER (very important for compression hiding) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay noise" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4.75rem)] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center lg:px-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-white/12 bg-black/22 px-4 py-2 text-xs uppercase tracking-[0.34em] text-[#ead9b6] backdrop-blur-md">
            Частное лесное пространство
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-[6.25rem]">
            Охота и отдых
            <span className="block text-[#d7c7a0]">в тишине леса</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Охота в Ленинградской области, Всеволожск на закрытой территории с проживанием. Уникальные программы охоты и отдыха в живописных лесах
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#hunting"
              className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
            >
              Смотреть программы <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/price-list"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/12"
            >
              Открыть прайс-лист <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid w-full max-w-5xl gap-3 sm:grid-cols-3">
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-white/10 bg-black/26 px-5 py-4 text-center backdrop-blur-md"
            >
              <p className="text-2xl font-semibold text-[#d7c7a0]">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-white/62">{item.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 text-sm text-white/62 transition hover:text-white"
        >
          Подробнее об угодьях <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}