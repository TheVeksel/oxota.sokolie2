import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { officeAddress, officeEmail, officePhone } from "../contacts/contactData";

const footerLinks = [
  { href: "/#about", label: "Об угодьях" },
  { href: "/#hunt-types", label: "Виды охоты" },
  { href: "/price-list", label: "Прайс охоты" },
  { href: "/accommodation-prices", label: "Проживание" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  const navigationLinks = footerLinks.flatMap((item) =>
    item.href === "/accommodation-prices"
      ? [{ href: "/become-hunter", label: "Стать охотником" }]
      : [item],
  );

  return (
    <footer className="relative overflow-hidden bg-[#030503] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,199,160,0.12),transparent_24%),radial-gradient(circle_at_85%_15%,rgba(72,102,60,0.18),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%)]" />

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-4">
                <div className="overflow-hidden rounded-full border border-white/12 bg-white/90 shadow-lg shadow-black/20">
                  <Image
                    src="/logo.jpg"
                    alt="Логотип Охота в Соколье"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">
                    Охотничьи угодья
                  </p>
                  <p className="mt-1 text-lg font-medium text-white">
                    Охота в Соколье
                  </p>
                </div>
              </Link>

              <h2 className="mt-6 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
                Пространство для охоты,
                <span className="block text-[#d7c7a0]">природы и тишины леса</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/64">
                Частные охотничьи угодья с программами выезда, сопровождением
                егеря и размещением на территории. Всё основное уже собрано на
                сайте, а детали поездки можно уточнить напрямую.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/price-list"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7c7a0] px-5 py-3 text-sm font-medium text-[#0b0f0b] transition hover:bg-[#ead9b6]"
                >
                  Смотреть прайс охоты <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/12"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#d7c7a0]">
                  Навигация
                </p>
                <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/72">
                  {navigationLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#d7c7a0]">
                  Контакты
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/72">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#d7c7a0]" />
                    <span>{officeAddress}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-[#d7c7a0]" />
                    <span>{officePhone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-[#d7c7a0]" />
                    <span>{officeEmail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/48">
            © 2024 МОО «Союз ООРО Всеволожского района Ленинградской области». Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
