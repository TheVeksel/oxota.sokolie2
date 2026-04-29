import { Clock3 } from "lucide-react";

import { huntingTypes, serviceCards } from "./content";

export function ServicesSection() {
  const [huntingCard, accommodationCard] = serviceCards;
  const HuntingIcon = huntingCard.icon;
  const AccommodationIcon = accommodationCard.icon;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <article
          id={huntingCard.id}
          className="group relative min-h-[26rem] overflow-hidden rounded-[36px] border border-white/10 bg-cover bg-center shadow-2xl shadow-black/35"
          style={{ backgroundImage: huntingCard.background }}
        >
          <div className="absolute inset-0 bg-linear-to-tr from-[#0f170f]/80 via-transparent to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-7 sm:p-10">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <HuntingIcon className="h-4 w-4 text-[#d7c7a0]" />
              {huntingCard.badge}
            </div>
            <h3 className="text-3xl font-semibold sm:text-4xl">
              {huntingCard.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">
              {huntingCard.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/76">
              {huntingTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article
          id={accommodationCard.id}
          className="group relative min-h-[26rem] overflow-hidden rounded-[36px] border border-white/10 bg-cover bg-center shadow-2xl shadow-black/35"
          style={{ backgroundImage: accommodationCard.background }}
        >
          <div className="relative flex h-full flex-col justify-end p-7 sm:p-10">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <AccommodationIcon className="h-4 w-4 text-[#d7c7a0]" />
              {accommodationCard.badge}
            </div>
            <h3 className="text-3xl font-semibold sm:text-4xl">
              {accommodationCard.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">
              {accommodationCard.text}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/20 bg-[#d7c7a0]/12 px-4 py-2 text-sm text-[#ead9b6] backdrop-blur-sm">
              <Clock3 className="h-4 w-4" />
              {accommodationCard.note}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
