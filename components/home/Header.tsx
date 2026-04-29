"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { homeNavigationItems } from "./content";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081008]/55 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 transition hover:opacity-100 sm:gap-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="overflow-hidden rounded-full border border-white/12 bg-white/90 shadow-lg shadow-black/15">
              <Image
                src="/logo.jpg"
                alt="Логотип Охотничьи угодья в Соколье"
                width={44}
                height={44}
                className="h-11 w-11 object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-white/50">
                Охотничьи угодья
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Охота в Соколье
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/12 xl:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden items-center gap-8 xl:flex">
            <nav className="flex items-center gap-6 text-sm text-white/74">
              {homeNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/price-list"
              className="inline-flex items-center gap-2 rounded-full border border-[#d7c7a0]/25 bg-[#d7c7a0]/12 px-5 py-3 text-sm font-medium text-[#f3e5c0] transition hover:bg-[#d7c7a0]/18"
            >
              Прайс-лист <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 pb-4 pt-4 xl:hidden">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-3 shadow-2xl shadow-black/20">
              <nav className="flex flex-col">
                {homeNavigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm text-white/78 transition hover:bg-white/7 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/price-list"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d7c7a0]/25 bg-[#d7c7a0]/12 px-5 py-3 text-sm font-medium text-[#f3e5c0] transition hover:bg-[#d7c7a0]/18"
                onClick={() => setIsMenuOpen(false)}
              >
                Открыть прайс-лист <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
