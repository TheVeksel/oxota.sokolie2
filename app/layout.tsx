import type { Metadata } from "next";
import { Footer } from "../components/site/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import YandexMetrika from "@/components/site/YandexMetrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Охота в Соколье",
  description:
    "Охотничьи угодья с проживанием, программами охоты и отдельным прайс-листом.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Охота в Соколье",
    description:
      "Охотничьи угодья с проживанием, программами охоты и отдельным прайс-листом.",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary",
    title: "Охота в Соколье",
    description:
      "Охотничьи угодья с проживанием, программами охоты и отдельным прайс-листом.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <YandexMetrika />
        <Footer />
      </body>
    </html>
  );
}
