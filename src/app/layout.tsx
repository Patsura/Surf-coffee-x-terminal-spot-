import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#141413",
};

export const metadata: Metadata = {
  title: "Surf Coffee Terminal Spot",
  description: "Проектная страница Surf Coffee Terminal Spot для терминала канатной дороги Благовещенск — Хэйхэ.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
