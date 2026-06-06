import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surf Coffee Terminal Spot",
  description: "Интерактивная проектная страница Surf Coffee Terminal Spot для терминала канатной дороги Благовещенск — Хэйхэ.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
