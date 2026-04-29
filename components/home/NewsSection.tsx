import { ArrowRight } from "lucide-react";

import { news } from "./content";

export function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Новости
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Обновления угодий.
          </h2>
        </div>
        <a
          href="#contact"
          className="hidden text-sm text-white/65 transition hover:text-white sm:inline-flex"
        >
          Смотреть все новости <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {news.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.055]"
          >
            <p className="text-sm text-[#d7c7a0]">{item.date}</p>
            <h3 className="mt-4 text-xl font-semibold leading-tight">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/65">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
