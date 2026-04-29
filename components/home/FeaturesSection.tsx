import { featureCards } from "./content";

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d7c7a0]/30 hover:bg-white/[0.055]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-[#d7c7a0]/20 bg-[#d7c7a0]/10 p-3 text-[#d7c7a0]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#d7c7a0]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
