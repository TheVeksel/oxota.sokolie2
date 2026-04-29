import Link from "next/link";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export function AccommodationPricePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.14),transparent_24%),linear-gradient(135deg,rgba(7,11,7,0.96),rgba(7,11,7,0.82))]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16">
          <Link
            href="/price-list"
            className="inline-flex items-center gap-2 text-sm text-white/62 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            К охотничьему прайсу
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
                Проживание
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                Цены на аренду жилья на территории угодий
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
                Страница для размещения цен на проживание уже подготовлена. Здесь
                можно будет отдельно показать форматы домов, условия аренды и
                стоимость размещения.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ead9b6]">
                <Home className="h-4 w-4" />
                Страница готова
              </div>
              <p className="mt-5 text-base leading-7 text-white/68">
                Пока точные цены на проживание сюда не добавлены, но переход уже
                работает и страницу можно наполнять отдельно от охотничьего
                прайса.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Уточнить проживание <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/12"
                >
                  На главную
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
