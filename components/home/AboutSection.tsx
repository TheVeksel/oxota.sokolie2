import { Award } from "lucide-react";

import { aboutStats } from "./content";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Об угодьях
          </p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Частные охотничьи угодья, созданные для природы, тишины и уверенного сервиса.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/68">
            В часе езды от Санкт-Петербурга находится охотничье хозяйство «Соколье». Территория от г. Всеволожска по Дороге Жизни левая сторона и до пересечения с трассой А -120. Идеальное место для любителей отдыха на природе. Прекрасная экология: кристально чистый воздух, уникальная природа, пейзажи, водоёмы: Сокольи озёра, река Морье, Лепсари, Кориоя, Лепоя и др. Все это создает отличные условия для отдыха и экологического туризма
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
            Будь то охота, уикенд на природе или частное событие, здесь всё
            построено вокруг комфорта, приватности и сильной связи с природой.
          </p>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            {aboutStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-semibold text-[#d7c7a0]">{value}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[36px] bg-[#d7c7a0]/10 blur-3xl" />
          <div
            className="relative min-h-[34rem] overflow-hidden rounded-[36px] border border-white/10 bg-cover bg-center shadow-2xl shadow-black/40"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(5,7,5,0.8), rgba(5,7,5,0.12)), url('/map.jpg')",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="max-w-sm rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-2 text-[#d7c7a0]">
                  <Award className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.25em]">
                    Фирменная атмосфера
                  </span>
                </div>
                <p className="text-sm leading-6 text-white/75">
                  Лесные фактуры, тёплое дерево, огонь в камине и сдержанная
                  роскошь соединяются в один спокойный цельный опыт.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
