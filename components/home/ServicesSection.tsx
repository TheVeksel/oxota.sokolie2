import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Home,
  ShowerHead,
  Sparkles,
  Utensils,
} from "lucide-react";

const bearLodgeFeatures = [
  {
    title: "2 комнаты",
    text: "В каждой комнате установлено по одной двухъярусной кровати.",
    icon: BedDouble,
  },
  {
    title: "Кухня в доме",
    text: "Подходит для спокойного самостоятельного размещения на территории угодий.",
    icon: Utensils,
  },
  {
    title: "Санузел и душевая",
    text: "В доме предусмотрены все базовые бытовые условия для комфортного выезда.",
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
    text: "Два санузла обеспечивают удобство и приватность на весь дом.",
    icon: ShowerHead,
  },
  {
    title: "Кухня",
    text: "Полноценная кухня для самостоятельного приготовления еды и отдыха.",
    icon: Utensils,
  },
];

export function ServicesSection() {
  return (
    <section
      id="accommodation"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
          Форматы
        </p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
          Аренда жилья на территории охотничьих угодий
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
          Для выездов с проживанием доступны отдельные форматы размещения.
          Первый дом уже открыт для аренды, второй блок подготовлен как анонс
          следующего варианта проживания.
        </p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        <Link
          href="/accommodation-prices#medvezhya-berloga"
          className="group block"
        >
          <article className="relative min-h-[32rem] overflow-hidden rounded-[38px] border border-white/10 shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-1 hover:border-[#d7c7a0]/24 hover:shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(4,7,4,0.92), rgba(4,7,4,0.28)), url('/basic_house.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.12),transparent_24%)]" />

            <div className="relative flex h-full flex-col justify-between p-7 sm:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/84 backdrop-blur-sm">
                  <Home className="h-4 w-4 text-[#d7c7a0]" />
                  Медвежья берлога
                </div>

                <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Дом с продуманным базовым устройством для выезда в угодья
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                  В доме две комнаты, кухня, санузел, душевая кабина и по одной
                  двухъярусной кровати в каждой комнате.
                </p>
                <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-[24px] border border-[#d7c7a0]/24 bg-[linear-gradient(135deg,rgba(215,199,160,0.18),rgba(215,199,160,0.08))] px-4 py-3 text-sm text-[#f3e5c0] shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                  <span>Заселение от 4 человек</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {bearLodgeFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-[26px] border border-white/10 bg-black/24 p-5 backdrop-blur-sm transition duration-300 group-hover:bg-black/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#d7c7a0]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {feature.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-white/64">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </Link>

        <Link
          href="/accommodation-prices#lisya-nora"
          className="group block"
        >
          <article className="relative min-h-[32rem] overflow-hidden rounded-[38px] border border-white/10 shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-1 hover:border-[#d7c7a0]/24 hover:shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(4,7,4,0.92), rgba(4,7,4,0.28)), url('/dacha-1.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.12),transparent_24%)]" />

            <div className="relative flex h-full flex-col justify-between p-7 sm:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/84 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-[#d7c7a0]" />
                  Лисья нора
                </div>

                <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Дом с расширенным набором удобств для комфортного выезда
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                  В доме две спальни, два санузла и отдельная кухня — всё для
                  спокойного проживания в охотничьих угодьях.
                </p>
                <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-[24px] border border-[#d7c7a0]/24 bg-[linear-gradient(135deg,rgba(215,199,160,0.18),rgba(215,199,160,0.08))] px-4 py-3 text-sm text-[#f3e5c0] shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                  <span>Заселение от 4 человек</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {foxHoleFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-[26px] border border-white/10 bg-black/24 p-5 backdrop-blur-sm transition duration-300 group-hover:bg-black/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#d7c7a0]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {feature.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-white/64">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </Link>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/accommodation-prices"
          className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
        >
          Перейти к странице проживания <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
