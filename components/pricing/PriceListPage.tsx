import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PriceCategoryTable } from "./PriceCategoryTable";
import { legacyPriceSections } from "./priceData";
import { PriceListHero } from "./PriceListHero";

export function PriceListPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
      <PriceListHero />

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {legacyPriceSections.map((section) => (
            <a
              key={section.slug}
              href={`#${section.slug}`}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72 transition hover:border-[#d7c7a0]/25 hover:text-white"
            >
              {section.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-6 pb-20 lg:px-10">
        {legacyPriceSections.map((section) => (
          <PriceCategoryTable key={section.slug} section={section} />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(215,199,160,0.12),rgba(255,255,255,0.03))] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Бронирование
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Нужен персональный расчёт под дату, состав группы или формат охоты?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/68">
            Подготовим индивидуальное предложение с проживанием, сопровождением
            егеря и выбранной программой отдыха.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
            >
              Оставить заявку <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/12"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
