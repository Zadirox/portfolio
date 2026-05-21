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
  title: "Zadirox — AI-Powered Developer",
  description:
    "Вайб-кодер. AI-ускоренная разработка: Telegram-боты, веб-приложения, автоматизация. Быстро. Качественно. С интеллектом.",
  keywords: ["вайб-кодер", "AI разработка", "Telegram боты", "Next.js", "автоматизация"],
  authors: [{ name: "Dmitry", url: "https://github.com/Zadirox" }],
  openGraph: {
    title: "Zadirox — AI-Powered Developer",
    description: "AI-ускоренная разработка: боты, веб, автоматизация",
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
      <body className="min-h-full flex flex-col grid-bg">{children}</body>
    </html>
  );
}
