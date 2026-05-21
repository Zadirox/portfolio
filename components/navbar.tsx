"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-provider";
import { Languages, Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-lg font-semibold tracking-tight text-accent glow-text"
        >
          zadirox.dev
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {t.nav[link.key]}
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-accent"
          >
            <Languages size={14} />
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-muted sm:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={clsx(
          "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md transition-all duration-300 sm:hidden",
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-3 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLang();
              setMobileOpen(false);
            }}
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <Languages size={14} />
            {lang === "ru" ? "English" : "Русский"}
          </button>
        </div>
      </div>
    </nav>
  );
}
