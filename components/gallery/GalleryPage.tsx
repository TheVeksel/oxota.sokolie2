import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { galleryItems } from "../home/content";

export function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
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

          <div className="mt-8 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
              Галерея
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl">
              Полная галерея охотничьих угодий
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
              Подборка фотографий территории, дома и внутренней атмосферы
              размещения на территории угодий.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.label}-${index}`}
              className="group relative aspect-square overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.10)), url('${item.image}')`,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/72 via-black/10 to-transparent" />
              <div className="relative flex h-full items-end p-6">
                <div>
                  <p className="text-sm text-white/72">Фото</p>
                  <h2 className="mt-1 text-xl font-medium text-white">{item.label}</h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
