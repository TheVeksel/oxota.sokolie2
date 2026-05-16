import type { Metadata } from "next";

import { Header } from "../../components/home/Header";
import { BecomeHunterPage } from "../../components/membership/BecomeHunterPage";

export const metadata: Metadata = {
  title: "Стать охотником | Охота в Соколье",
  description:
    "Порядок вступления в охотничьи коллективы, список документов и утвержденные членские взносы на сезон 2026-2027.",
};

export default function BecomeHunterRoute() {
  return (
    <>
      <Header />
      <BecomeHunterPage />
    </>
  );
}
