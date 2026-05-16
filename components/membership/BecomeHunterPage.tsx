import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Compass,
  CreditCard,
  FileText,
  Map,
  Phone,
  Shield,
  UserRound,
} from "lucide-react";

import { officePhone } from "../contacts/contactData";

const entrySteps = [
  {
    title: "Заявление",
    text: "Обратитесь с заявлением на имя руководителя охотничьего коллектива и согласуйте вступление.",
    icon: FileText,
  },
  {
    title: "Документы",
    text: "Подготовьте копию паспорта и копию охотничьего билета для оформления.",
    icon: Shield,
  },
  {
    title: "Фотографии",
    text: "Нужны 2 фотографии 3х4 см для личного оформления документов.",
    icon: UserRound,
  },
  {
    title: "Вступительный взнос",
    text: "Для новых членов охотничьих коллективов действует вступительный взнос 3 000 рублей.",
    icon: CreditCard,
  },
  {
    title: "Членский взнос",
    text: "Оплатите членский взнос по своей категории на сезон 2026-2027.",
    icon: BadgeCheck,
  },
  {
    title: "Ориентирование в угодьях",
    text: "Перед выездами необходимо ознакомиться с границами охотничьих угодий и порядком охоты.",
    icon: Compass,
  },
];

const requiredItems = [
  "Заявление на имя руководителя охотничьего коллектива",
  "Копия паспорта",
  "Копия охотничьего билета",
  "2 фотографии 3х4 см",
  "Оплата вступительного взноса",
  "Оплата членского взноса",
];

const feeCards = [
  {
    title: "Стандартный взнос",
    value: "12 000 ₽",
    text: "Для членов охотничьих коллективов.",
  },
  {
    title: "Категория 65-70 лет",
    value: "8 500 ₽",
    text: "Если на 31.03.2026 исполнилось от 65 до 70 лет.",
  },
  {
    title: "Категория 70+",
    value: "Без оплаты",
    text: "Если на 31.03.2026 исполнилось 70 лет и более.",
  },
  {
    title: "Бывшие штатные сотрудники",
    value: "3 000 ₽",
    text: "Для лиц, работавших в организации не менее 2 лет.",
  },
];

export function BecomeHunterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.16),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(69,93,58,0.18),transparent_20%),linear-gradient(135deg,rgba(7,11,7,0.97),rgba(7,11,7,0.84))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 lg:px-10 lg:pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/62 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
                Вступление
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-[5.5rem]">
                Стать охотником
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                На этой странице собран понятный порядок вступления в охотничьи
                коллективы при угодьях: какие документы подготовить, в какой
                последовательности проходит оформление и какие взносы действуют
                на сезон 2026-2027.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#steps"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Порядок вступления <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/12"
                >
                  Контакты для оформления
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ead9b6]">
                  <BadgeCheck className="h-4 w-4" />
                  Сезон 2026-2027
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                    <p className="text-sm text-white/52">Срок оплаты взносов</p>
                    <p className="mt-2 text-2xl font-semibold text-[#f3e5c0]">
                      до 31.03.2026
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                    <p className="text-sm text-white/52">Вступительный взнос</p>
                    <p className="mt-2 text-2xl font-semibold text-[#f3e5c0]">
                      3 000 ₽
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[26px] border border-white/8 bg-[#0a120a]/70 p-5">
                  <p className="text-sm leading-6 text-white/66">
                    После оформления новый участник знакомится с границами
                    охотничьих угодий, порядком охоты и получает понятный
                    маршрут по дальнейшему вступлению и выездам.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2">
                      <Phone className="h-4 w-4 text-[#d7c7a0]" />
                      {officePhone}
                    </div>
                    <Link
                      href="/contacts"
                      className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/12 px-4 py-2 text-[#f3e5c0] transition hover:bg-[#d7c7a0]/18"
                    >
                      Связаться для вступления <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Порядок
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Как проходит вступление
          </h2>
          <p className="mt-4 text-base leading-7 text-white/66">
            Мы собрали процесс в короткую последовательность, чтобы было
            понятно, с чего начать и что подготовить заранее.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entrySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 transition hover:-translate-y-1 hover:border-[#d7c7a0]/22 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#d7c7a0]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.28em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/64">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0a100a] p-7 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.1),transparent_28%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#d7c7a0]">
                <Map className="h-4 w-4" />
                Что подготовить
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-[2.2rem]">
                Пакет для оформления
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/64">
                Всё нужное лучше собрать заранее. Тогда оформление проходит
                заметно быстрее и без повторных визитов.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {requiredItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/74"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,24,16,0.96),rgba(8,11,8,0.92))] p-7 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,199,160,0.12),transparent_26%)]" />
            <div className="relative">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d7c7a0]">
                    Членские взносы
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-[2.2rem]">
                    Утвержденные суммы на сезон 2026-2027
                  </h2>
                </div>
                <div className="rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/10 px-4 py-2 text-sm text-[#f3e5c0]">
                  Срок оплаты до 31.03.2026
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {feeCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[26px] border border-white/8 bg-black/18 p-5"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-white/42">
                      {card.title}
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#f3e5c0]">
                      {card.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/64">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(130deg,rgba(215,199,160,0.14),rgba(13,18,13,0.95)_34%,rgba(13,18,13,0.98))] px-7 py-8 sm:px-10 sm:py-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(215,199,160,0.14),transparent_52%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[#d7c7a0]">
                Следующий шаг
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Оформить вступление и уточнить детали можно напрямую через
                страницу контактов
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
              >
                Перейти к контактам <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${officePhone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/12"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
