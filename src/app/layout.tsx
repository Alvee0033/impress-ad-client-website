import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Impress Ad — Printing, Branding & Promotional Products | Chittagong",
    template: "%s | Impress Ad",
  },
  description:
    "Chittagong's trusted printing & branding partner. Custom mugs, T-shirts, banners, visiting cards, brochures, stickers, corporate gifts & packaging. Get a free quote today!",
  keywords: [
    "printing chittagong",
    "branding chittagong",
    "custom mugs",
    "t-shirt printing",
    "banner printing",
    "visiting cards",
    "promotional products bangladesh",
    "impress ad",
  ],
  openGraph: {
    title: "Impress Ad — Printing, Branding & Promotional Products",
    description:
      "From mugs and T-shirts to banners and visiting cards — we bring your brand to life.",
    type: "website",
    locale: "en_BD",
    siteName: "Impress Ad",
  },
};

import LayoutShell from "./LayoutShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
