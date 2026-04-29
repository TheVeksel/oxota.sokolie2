import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import {
  huntingGroundsMapSrc,
  officeAddress,
  officeEmail,
  officeHours,
  officeMapSrc,
  officePhone,
  staffContacts,
} from "./contactData";

export function ContactsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050705] text-white selection:bg-[#b49b6a]/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.14),transparent_24%),linear-gradient(135deg,rgba(7,11,7,0.96),rgba(7,11,7,0.82))]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10 lg:pb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Контакты
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-6xl">
            Контактная информация охотничьих угодий
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            Здесь собраны адрес, часы работы, телефоны и контакты сотрудников.
            Ниже также размещена карта офиса и отдельный блок по охотугодьям.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
              Офис
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Основные контакты
            </h2>

            <div className="mt-8 space-y-5 text-sm text-white/78 sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[#d7c7a0]" />
                <span>{officeAddress}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[#d7c7a0]" />
                <span>{officePhone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[#d7c7a0]" />
                <span>{officeEmail}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {staffContacts.map((item) => (
                <div
                  key={item.phone}
                  className="rounded-3xl border border-white/10 bg-black/18 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d7c7a0]">
                    {item.role}
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-white/68 sm:text-base">
                    {item.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#0b0f0b] shadow-2xl shadow-black/25">
            <div className="grid min-h-full lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-90 overflow-hidden bg-[#0a0f0a]">
                <iframe
                  title="Карта офиса"
                  src={officeMapSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 backdrop-blur-md">
                  Офис
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm text-white/60">Режим работы</p>
                  <div className="mt-4 space-y-4 text-sm text-white/78 sm:text-base">
                    {officeHours.map((item) => (
                      <div key={`${item.days}-${item.time}`}>
                        <p className="font-medium text-white">{item.days}</p>
                        <p className="mt-1">{item.time}</p>
                        {item.note && (
                          <p className="mt-1 text-white/58">{item.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#d7c7a0]">
                    Основная линия связи
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    По общим вопросам, документам и организационным моментам
                    используйте основной телефон и электронную почту офиса.
                  </p>
                  <Link
                    href="#grounds-map"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                  >
                    Карта охотугодий <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/62">
                    <Phone className="h-4 w-4 text-[#d7c7a0]" />
                    {officePhone}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-white/62">
                    <Mail className="h-4 w-4 text-[#d7c7a0]" />
                    {officeEmail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="grounds-map" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-sm">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
                Охотугодья
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Карта и координаты охотничьих угодий
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/68 sm:text-base">
                Расположение охотугодий и ориентиры по местности указаны на карте
                ниже. Для выезда, маршрута и организационных деталей свяжитесь с
                егерем или председателем правления по контактам выше.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-3xl border border-white/10 bg-black/18 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d7c7a0]">
                    Старший егерь
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Ильин Дмитрий Олегович
                  </p>
                  <p className="mt-2 text-sm text-white/68 sm:text-base">
                    +7(921) 426-50-29
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/18 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d7c7a0]">
                    Егерь обход №1, №2
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Кондратенко Николай Андреевич
                  </p>
                  <p className="mt-2 text-sm text-white/68 sm:text-base">
                    +7(921) 951-08-23
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[30rem] overflow-hidden bg-[#0a0f0a]">
              <iframe
                title="Карта охотничьих угодий"
                src={huntingGroundsMapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 backdrop-blur-md">
                Охотугодья
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
