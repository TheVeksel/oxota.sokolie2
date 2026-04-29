import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import {
  officeAddress,
  officeEmail,
  officeHours,
  officeMapSrc,
  officePhone,
  staffContacts,
} from "../contacts/contactData";

export function ContactSection() {
  const previewStaff = [staffContacts[0], staffContacts[1], staffContacts[3]];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[36px] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d7c7a0]">
            Контакты
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Планируйте визит заранее.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/68">
            Свяжитесь с нами для бронирования, частных мероприятий,
            охотничьих программ или проживания.
          </p>

          <div className="mt-8 space-y-4 text-sm text-white/78">
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
            {previewStaff.map((item) => (
              <div
                key={item.phone}
                className="rounded-3xl border border-white/10 bg-black/16 p-4"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7c7a0]">
                  {item.role}
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-white/68">{item.phone}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contacts"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-4 text-base font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
          >
            Все контакты <ArrowRight className="h-5 w-5" />
          </Link>
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
                <div className="mt-4 space-y-4 text-sm text-white/78">
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
                <Link
                  href="/contacts"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d7c7a0] px-6 py-4 text-base font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Открыть страницу контактов <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/62">
                  <Mail className="h-4 w-4 text-[#d7c7a0]" />
                  {officeEmail}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
