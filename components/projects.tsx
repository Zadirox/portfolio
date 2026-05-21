"use client";

import { useLanguage } from "@/lib/language-provider";
import { projects } from "@/lib/data";
import { ExternalLink, Construction } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.projects.title}
        </h2>
        <p className="animate-fade-in-up mt-2 text-muted" style={{ animationDelay: "0.1s" }}>
          {t.projects.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const item = t.projects.items[project.key as keyof typeof t.projects.items];
            const statusText = project.hasStatus
              ? ("status" in item ? (item as { status: string }).status : null)
              : null;

            return (
              <div
                key={project.key}
                className="animate-fade-in-up gradient-border card-hover group flex flex-col rounded-xl bg-surface p-6 transition-all duration-300 hover:bg-surface-hover"
                style={{ animationDelay: `${0.06 * i}s` }}
              >
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {statusText && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-lavender/80">
                    <Construction size={12} className="text-accent/60" />
                    <span className="text-accent/60">{statusText}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
