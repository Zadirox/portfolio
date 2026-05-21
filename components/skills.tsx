"use client";

import { useLanguage } from "@/lib/language-provider";
import { skills } from "@/lib/data";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.skills.title}
        </h2>
        <p className="animate-fade-in-up mt-2 text-muted" style={{ animationDelay: "0.1s" }}>
          {t.skills.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const item = t.skills.items[skill.key as keyof typeof t.skills.items];

            return (
              <div
                key={skill.key}
                className="animate-fade-in-up gradient-border group rounded-xl bg-surface p-5 transition-all duration-300 hover:bg-surface-hover"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent/20">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
