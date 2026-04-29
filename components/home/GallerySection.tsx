import { ArrowRight } from "lucide-react";

import { galleryItems } from "./content";

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Галерея
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Визуальный обзор атмосферы угодий.
          </h2>
        </div>
        <a
          href="#contact"
          className="hidden text-sm text-white/65 transition hover:text-white sm:inline-flex"
        >
          Запросить полную галерею <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className={`relative min-h-72 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25 sm:min-h-80 ${
              index === 0 || index === 3
                ? "md:col-span-2 md:min-h-80"
                : "md:min-h-60"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-[1.03]"
              style={{
                backgroundImage:
                  `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.10)), url('${item.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="relative flex h-full items-end justify-between p-5 sm:p-6">
              <div>
                <p className="text-sm text-white/75">Фото</p>
                <h3 className="mt-1 text-lg font-medium">{item.label}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
