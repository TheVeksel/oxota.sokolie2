"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = { href: string; label: string };

const priceMenuItems: NavItem[] = [
  { href: "/price-list", label: "На охоту" },
  { href: "/accommodation-prices", label: "На проживание" },
];

export function HeaderNav({
  mainNavigationItems,
  contactItem,
}: {
  mainNavigationItems: NavItem[];
  contactItem: NavItem | undefined;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsPriceMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/12 xl:hidden"
        onClick={() => {
          setIsMenuOpen((value) => !value);
          setIsPriceMenuOpen(false);
        }}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div className="hidden xl:flex">
        <nav className="flex items-center gap-6 text-sm text-white/74">
          {mainNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
              onClick={() => setIsPriceMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              aria-expanded={isPriceMenuOpen}
              className="inline-flex items-center gap-1.5 text-sm text-white/74 transition hover:text-white"
              onClick={() => setIsPriceMenuOpen((value) => !value)}
            >
              <span>Прайс-лист</span>
              <ChevronDown
                className={`h-4 w-4 transition ${isPriceMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isPriceMenuOpen && (
              <div className="absolute left-1/2 top-[calc(100%+0.75rem)] w-60 -translate-x-1/2 overflow-hidden rounded-[26px] border border-white/10 bg-[#0a120a]/92 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
                {priceMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex rounded-[18px] px-4 py-3 text-sm text-white/82 transition hover:bg-white/7 hover:text-white"
                    onClick={() => setIsPriceMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {contactItem ? (
            <Link
              href={contactItem.href}
              className="transition hover:text-white"
              onClick={() => setIsPriceMenuOpen(false)}
            >
              {contactItem.label}
            </Link>
          ) : null}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 pb-4 pt-4 xl:hidden">
          <div className="rounded-[28px] border border-white/10 bg-black/20 p-3 shadow-2xl shadow-black/20">
            <nav className="flex flex-col">
              {mainNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-white/78 transition hover:bg-white/7 hover:text-white"
                  onClick={closeAllMenus}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3 rounded-[24px] border border-[#d7c7a0]/18 bg-[#d7c7a0]/10 p-2">
                <div className="px-3 pb-2 pt-1 text-xs uppercase tracking-[0.26em] text-[#f3e5c0]">
                  Прайс-лист
                </div>
                {priceMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex rounded-2xl px-4 py-3 text-sm text-white/82 transition hover:bg-white/7 hover:text-white"
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {contactItem ? (
                <Link
                  href={contactItem.href}
                  className="mt-3 rounded-2xl px-4 py-3 text-sm text-white/78 transition hover:bg-white/7 hover:text-white"
                  onClick={closeAllMenus}
                >
                  {contactItem.label}
                </Link>
              ) : null}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
