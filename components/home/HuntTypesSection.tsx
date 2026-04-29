import Link from "next/link";
import { ArrowRight, Crosshair } from "lucide-react";

import { huntTypesShowcase } from "./content";

export function HuntTypesSection() {
  return (
    <section id="hunt-types" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,14,10,0.96),rgba(17,24,17,0.88))] shadow-2xl shadow-black/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,199,160,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(72,102,60,0.18),transparent_24%)]" />

        <div className="relative px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ead9b6]">
              <Crosshair className="h-4 w-4" />
              Виды охоты
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Охота в разных форматах
              <span className="block text-[#d7c7a0]">от крупного зверя до птицы</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
              Охотничьи угодья с несколькими направлениями и сезонными
              сценариями выезда. Ниже собраны основные виды охоты, а актуальные
              цены уже вынесены на отдельную страницу.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {huntTypesShowcase.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-sm transition hover:border-[#d7c7a0]/20 hover:bg-white/[0.05]"
              >
                <p className="text-base leading-6 text-white/88">{item.title}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/price-list"
              className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
            >
              Перейти к прайс-листу <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/12"
            >
              Запросить детали по охоте
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
