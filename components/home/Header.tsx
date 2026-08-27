import Image from "next/image";
import Link from "next/link";

import { homeNavigationItems } from "./content";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  const contactItem = homeNavigationItems.find((item) => item.href === "/contacts");
  const mainNavigationItems = homeNavigationItems.filter(
    (item) => item.href !== "/price-list" && item.href !== "/contacts",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081008]/55 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 transition hover:opacity-100 sm:gap-4"
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

          <HeaderNav mainNavigationItems={mainNavigationItems} contactItem={contactItem} />
        </div>
      </div>
    </header>
  );
}
