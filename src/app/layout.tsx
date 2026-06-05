import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surf Coffee Terminal Spot",
  description: "Interactive project hub for Surf Coffee compact terminal spot in the Blagoveshchensk — Heihe cableway terminal.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
