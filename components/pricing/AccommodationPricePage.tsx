import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Home,
  Mountain,
  ShowerHead,
  Sparkles,
  Trees,
  Tv,
  Utensils,
  WashingMachine,
  Wind,
} from "lucide-react";

const bearLodgeFeatures = [
  {
    title: "Две комнаты",
    text: "Внутри дома две отдельные комнаты для размещения гостей.",
    icon: Home,
  },
  {
    title: "Двухъярусные кровати",
    text: "В каждой комнате установлено по одной двухъярусной кровати.",
    icon: BedDouble,
  },
  {
    title: "Кухня",
    text: "В доме предусмотрена кухня для самостоятельного размещения.",
    icon: Utensils,
  },
  {
    title: "Санузел и душевая кабина",
    text: "Все базовые бытовые условия уже собраны в одном доме.",
    icon: ShowerHead,
  },
];

const foxHoleFeatures = [
  {
    title: "2 спальни",
    text: "Две отдельные спальни для комфортного размещения гостей.",
    icon: BedDouble,
  },
  {
    title: "2 санузла",
    text: "Два санузла — удобно, когда дом заселён полностью.",
    icon: Bath,
  },
  {
    title: "Кухня",
    text: "Полноценная кухня для самостоятельного приготовления еды.",
    icon: Utensils,
  },
  {
    title: "Стиральная машина",
    text: "Есть возможность постирать вещи прямо на месте.",
    icon: WashingMachine,
  },
  {
    title: "Сушильная машина",
    text: "После стирки вещи можно сразу высушить, не подстраиваясь под погоду.",
    icon: Wind,
  },
  {
    title: "Телевизор",
    text: "В доме есть телевизор для отдыха после выезда.",
    icon: Tv,
  },
  {
    title: "Терраса",
    text: "Отдельная терраса для отдыха на свежем воздухе.",
    icon: Trees,
  },
];

const comfortPlusNotes = [
  "Фотографии откроем вместе с запуском формата",
  "Описание наполнения появится отдельным блоком",
  "Условия аренды и стоимость будут опубликованы здесь же",
];

const bearLodgeGallery = [
  { src: "/basic_house.jpg", alt: "Медвежья берлога снаружи", large: true },
  { src: "/berloga-1.jpg", alt: "Медвежья берлога — фото 1" },
  { src: "/berloga-2.jpg", alt: "Медвежья берлога — фото 2" },
  { src: "/berloga-3.jpg", alt: "Медвежья берлога — фото 3" },
  { src: "/berloga-4.jpg", alt: "Медвежья берлога — фото 4" },
];

const foxHoleGallery = [
  { src: "/dacha-1.jpg", alt: "Лисья нора — фото 1", large: true },
  { src: "/dacha-2.jpg", alt: "Лисья нора — фото 2" },
  { src: "/dacha-3.jpg", alt: "Лисья нора — фото 3" },
  { src: "/dacha-4.jpg", alt: "Лисья нора — фото 4" },
  { src: "/dacha-5.jpg", alt: "Лисья нора — фото 5" },
  { src: "/dacha-6.jpg", alt: "Лисья нора — фото 6" },
  { src: "/dacha-7.jpg", alt: "Лисья нора — фото 7" },
];

const comfortPlusGallery = [
  { src: "/photo_2026-04-15_05-19-36.jpg", alt: "Комфорт плюс превью 1" },
  { src: "/photo_2026-04-15_05-19-38.jpg", alt: "Комфорт плюс превью 2" },
  { src: "/photo_2026-04-15_05-18-58.jpg", alt: "Комфорт плюс превью 3" },
];

export function AccommodationPricePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(76,35,24,0.18),transparent_20%),linear-gradient(135deg,rgba(7,11,7,0.97),rgba(7,11,7,0.82))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

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
                Аренда жилья на территории охотничьих угодий
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
                На этой странице собраны форматы размещения для выездов с
                проживанием. Ниже можно подробно посмотреть дом Медвежья
                берлога, дом Лисья нора, а также увидеть анонс следующего
                формата Комфорт +.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#d7c7a0]/16 bg-[linear-gradient(135deg,rgba(215,199,160,0.14),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ead9b6]">
                <Mountain className="h-4 w-4" />
                Форматы аренды
              </div>
              <p className="mt-5 text-base leading-7 text-white/70">
                Выберите нужный формат и переходите к подробному описанию.
                Медвежья берлога и Лисья нора уже открыты для просмотра, а
                Комфорт + пока показан как анонс будущего размещения.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#medvezhya-berloga"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Смотреть Медвежью берлогу <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/12"
                >
                  Уточнить размещение
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Навигация
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Наши форматы проживания
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
            Ниже собраны два действующих дома для размещения и следующий
            формат, который готовится к открытию. Нажмите на карточку, чтобы
            перейти к подробному блоку.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          <Link
            href="#medvezhya-berloga"
            className="group block rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7c7a0]/24 hover:bg-[linear-gradient(135deg,rgba(215,199,160,0.12),rgba(255,255,255,0.03))]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
              <Home className="h-4 w-4 text-[#d7c7a0]" />
              Медвежья берлога
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              Дом с базовым и продуманным устройством
            </h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/66">
              Две комнаты, кухня, санузел, душевая кабина и размещение прямо на
              территории угодий.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#f3e5c0]">
              Открыть описание <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          <Link
            href="#lisya-nora"
            className="group block rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7c7a0]/24 hover:bg-[linear-gradient(135deg,rgba(215,199,160,0.12),rgba(255,255,255,0.03))]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
              <Home className="h-4 w-4 text-[#d7c7a0]" />
              Лисья нора
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              Дом с расширенным набором удобств
            </h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/66">
              2 спальни, 2 санузла, кухня, стиральная и сушильная машины,
              телевизор и терраса.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#f3e5c0]">
              Открыть описание <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          <Link
            href="#comfort-plus"
            className="group block rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7c7a0]/20 hover:bg-[linear-gradient(135deg,rgba(215,199,160,0.1),rgba(255,255,255,0.02))]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/18 bg-[#d7c7a0]/10 px-4 py-2 text-sm text-[#f3e5c0]">
              <Sparkles className="h-4 w-4" />
              Комфорт +
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              Следующий формат проживания
            </h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/62">
              Отдельный дом, который будет раскрыт подробнее после запуска:
              фотографии, описание и условия аренды.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#f3e5c0]">
              Перейти к анонсу <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      <section
        id="medvezhya-berloga"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
            <Home className="h-4 w-4 text-[#d7c7a0]" />
            Медвежья берлога
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Дом для выездов с проживанием на территории угодий
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
            Медвежья берлога рассчитана на практичное и спокойное размещение.
            В доме две комнаты, кухня, санузел, душевая кабина и по одной
            двухъярусной кровати в каждой комнате.
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-[28px] border border-[#d7c7a0]/28 bg-[linear-gradient(135deg,rgba(215,199,160,0.2),rgba(215,199,160,0.1))] px-5 py-4 text-base font-medium text-[#fff4d8] shadow-[0_18px_50px_rgba(0,0,0,0.22)] ring-1 ring-[#f3e5c0]/12">
            <span>Заселение возможно от 4 человек</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f3e5c0]/80 sm:block" />
            <span className="rounded-full border border-[#f3e5c0]/16 bg-[#0b0f0b]/28 px-4 py-2 text-lg font-semibold text-white">
              5 000 ₽ за человека
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {bearLodgeGallery.map((image) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0a100a] ${
                  image.large ? "sm:col-span-2 min-h-[22rem]" : "min-h-[14rem]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050705]/72 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {bearLodgeFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#d7c7a0]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-white/64">
                    {feature.text}
                  </p>
                </article>
              );
            })}

            <div className="rounded-[30px] border border-[#d7c7a0]/22 bg-[linear-gradient(135deg,rgba(215,199,160,0.18),rgba(215,199,160,0.08))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#ead9b6]">
                Условия заселения
              </p>
              <div className="mt-3 space-y-3 text-base leading-7 text-white/78">
                <p>Заселение в Медвежью берлогу возможно только от 4 человек.</p>
                <div className="rounded-[24px] border border-[#f3e5c0]/14 bg-[#0b0f0b]/24 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#ead9b6]">
                    Стоимость
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                    5 000 ₽
                  </p>
                  <p className="mt-1 text-base text-white/78">за человека</p>
                </div>
              </div>
              <div className="mt-5">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Уточнить аренду <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="relative h-12 overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d7c7a0]/75 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-3 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7c7a0]/28 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-[3px] w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3e5c0]/90 shadow-[0_0_24px_rgba(243,229,192,0.55)]" />
        </div>
      </section>

      <section
        id="lisya-nora"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
            <Home className="h-4 w-4 text-[#d7c7a0]" />
            Лисья нора
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Дом с расширенным набором удобств для проживания
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
            Лисья нора подойдёт тем, кто хочет более комфортное размещение на
            выезде. В доме две спальни, два санузла, кухня, стиральная и
            сушильная машины, телевизор и отдельная терраса.
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-[28px] border border-[#d7c7a0]/28 bg-[linear-gradient(135deg,rgba(215,199,160,0.2),rgba(215,199,160,0.1))] px-5 py-4 text-base font-medium text-[#fff4d8] shadow-[0_18px_50px_rgba(0,0,0,0.22)] ring-1 ring-[#f3e5c0]/12">
            <span>Заселение возможно от 4 человек</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f3e5c0]/80 sm:block" />
            <span className="rounded-full border border-[#f3e5c0]/16 bg-[#0b0f0b]/28 px-4 py-2 text-lg font-semibold text-white">
              10 000 ₽ за человека
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {foxHoleGallery.map((image) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0a100a] ${
                  image.large ? "sm:col-span-2 min-h-[22rem]" : "min-h-[14rem]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050705]/72 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {foxHoleFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#d7c7a0]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-white/64">
                    {feature.text}
                  </p>
                </article>
              );
            })}

            <div className="rounded-[30px] border border-[#d7c7a0]/22 bg-[linear-gradient(135deg,rgba(215,199,160,0.18),rgba(215,199,160,0.08))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#ead9b6]">
                Условия заселения
              </p>
              <div className="mt-3 space-y-3 text-base leading-7 text-white/78">
                <p>Заселение в Лисью нору возможно только от 4 человек.</p>
                <div className="rounded-[24px] border border-[#f3e5c0]/14 bg-[#0b0f0b]/24 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#ead9b6]">
                    Стоимость
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">
                    10 000 ₽
                  </p>
                  <p className="mt-1 text-base text-white/78">за человека</p>
                </div>
              </div>
              <div className="mt-5">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Уточнить аренду <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="relative h-12 overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d7c7a0]/75 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-3 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7c7a0]/28 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-[3px] w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3e5c0]/90 shadow-[0_0_24px_rgba(243,229,192,0.55)]" />
        </div>
      </section>

      <section
        id="comfort-plus"
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"
      >
        <div className="relative overflow-hidden rounded-[42px] border border-[#d7c7a0]/12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,10,10,0.94),rgba(13,10,10,0.84))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(174,78,44,0.2),transparent_24%)]" />
          <div className="relative p-7 sm:p-10">
            <div className="max-w-3xl blur-[3px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/18 bg-[#d7c7a0]/10 px-4 py-2 text-sm text-[#f3e5c0]">
                <Sparkles className="h-4 w-4" />
                Комфорт +
              </div>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Следующий формат проживания
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                Для этого дома будет открыта отдельная подробная подача с
                описанием пространства, подборкой фотографий и условиями аренды.
              </p>
            </div>

            <div className="relative mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-4 sm:grid-cols-2 blur-[7px]">
                {comfortPlusGallery.map((image, index) => (
                  <div
                    key={image.src}
                    className={`relative overflow-hidden rounded-[30px] border border-white/8 bg-[#0b100b] ${
                      index === 0 ? "sm:col-span-2 min-h-[20rem]" : "min-h-[14rem]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050705]/78 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              <div className="space-y-4 blur-[7px]">
                {comfortPlusNotes.map((note) => (
                  <article
                    key={note}
                    className="rounded-[28px] border border-white/8 bg-white/[0.04] p-6"
                  >
                    <p className="text-base leading-7 text-white/64">{note}</p>
                  </article>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-[#d7c7a0]/18 bg-[#0b0f0b]/82 px-6 py-3 text-sm uppercase tracking-[0.28em] text-[#f3e5c0] backdrop-blur-md">
                  Открытие позже
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}