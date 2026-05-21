import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zadirox — Fullstack Developer",
  description:
    "Fullstack-разработчик. Telegram-боты, веб-приложения, автоматизация. Быстро. Качественно.",
  keywords: ["fullstack разработчик", "Telegram боты", "Next.js", "автоматизация", "веб-разработка"],
  authors: [{ name: "Dmitry", url: "https://github.com/Zadirox" }],
  openGraph: {
    title: "Zadirox — Fullstack Developer",
    description: "Telegram-боты, веб-приложения, автоматизация",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
