import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PriceListHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.14),transparent_24%),linear-gradient(135deg,rgba(7,11,7,0.96),rgba(7,11,7,0.82))]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/62 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          На главную
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
              Прайс-лист
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl">
              Актуальные цены на основные виды охоты
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
              Ниже собраны актуальные таблицы по лосю, кабану, пушнине, бобру и
              птице с мероприятиями, стоимостью охотничьих ресурсов и важными
              примечаниями по каждому направлению.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7c7a0]">
              Цены на охоту
            </p>
            <p className="mt-3 max-w-lg text-base leading-7 text-white/68">
              Здесь собраны цены на охоту. Ознакомиться со стоимостью аренды
              жилья на территории угодий можно на отдельной странице.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                href="/accommodation-prices"
                className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
              >
                Цены на проживание <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/12"
              >
                Запросить бронирование
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
