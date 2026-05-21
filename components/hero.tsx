"use client";

import { useLanguage } from "@/lib/language-provider";
import { contacts } from "@/lib/data";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 h-[300px] w-[300px] rounded-full bg-lavender blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent-soft px-4 py-1.5 text-sm text-accent shimmer-badge" style={{ backgroundImage: "linear-gradient(90deg, transparent, rgba(103,232,249,0.1), transparent)" }}>
          <Sparkles size={14} />
          {t.hero.role}
        </div>

        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl" style={{ animationDelay: "0.1s" }}>
          {t.hero.greeting}{" "}
          <span className="glow-text text-accent">{t.hero.name}</span>
        </h1>

        <p className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "0.2s" }}>
          {t.hero.subtitle}
        </p>

        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.3s" }}>
          <a
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:bg-surface-hover hover:text-accent"
          >
            <ExternalLink size={16} />
            {t.hero.cta_github}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/20"
          >
            {t.hero.cta_contact}
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="animate-float mt-16 flex justify-center">
          <div className="h-8 w-4 rounded-full border-2 border-muted/30" />
        </div>
      </div>
    </section>
  );
}
