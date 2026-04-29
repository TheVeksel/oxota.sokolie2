import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { pricing } from "./content";

export function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
          Форматы
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Готовые сценарии выезда и отдыха.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/64">
          Для охотничьих трофеев и сезонных направлений доступен отдельный
          расширенный прайс-лист с разбивкой по категориям.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.map((item) => (
          <article
            key={item.name}
            className={`relative rounded-[28px] border p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 ${
              item.featured
                ? "border-[#d7c7a0]/40 bg-[#d7c7a0]/10"
                : "border-white/10 bg-white/[0.035] hover:bg-white/[0.055]"
            }`}
          >
            {item.featured && (
              <div className="absolute right-5 top-5 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#ead9b6]">
                Популярно
              </div>
            )}
            <p className="text-sm text-white/60">{item.note}</p>
            <h3 className="mt-3 text-2xl font-semibold">{item.name}</h3>
            <p className="mt-5 text-4xl font-semibold text-[#d7c7a0]">
              {item.price}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/72">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d7c7a0]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                item.featured
                  ? "bg-[#d7c7a0] text-[#0b0f0b] hover:bg-[#ead9b6]"
                  : "border border-white/15 bg-white/8 text-white hover:bg-white/12"
              }`}
            >
              Забронировать <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5">
        <div>
          <p className="text-sm text-white/60">Нужны детальные расценки?</p>
          <p className="mt-1 text-lg font-medium text-white">
            Полный прайс-лист по видам охоты уже вынесен на отдельную страницу.
          </p>
        </div>
        <Link
          href="/price-list"
          className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
        >
          Перейти к прайс-листу <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
