"use client";

import { useLanguage } from "@/lib/language-provider";
import { contacts } from "@/lib/data";
import { Send, MessageSquare, Mail, ExternalLink } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="animate-fade-in-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="animate-fade-in-up mt-2 text-muted" style={{ animationDelay: "0.1s" }}>
          {t.contact.subtitle}
        </p>

        <div className="animate-fade-in-up mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3" style={{ animationDelay: "0.2s" }}>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border group flex items-center gap-3 rounded-xl bg-surface p-4 transition-all duration-300 hover:bg-surface-hover"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{t.contact.telegram}</p>
              <p className="text-xs text-muted">@zadirox</p>
            </div>
          </a>

          <a
            href={`mailto:${contacts.email}`}
            className="gradient-border group flex items-center gap-3 rounded-xl bg-surface p-4 transition-all duration-300 hover:bg-surface-hover"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{t.contact.email}</p>
              <p className="text-xs text-muted break-all">shahmatov.d90@gmail.com</p>
            </div>
          </a>

          <a
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border group flex items-center gap-3 rounded-xl bg-surface p-4 transition-all duration-300 hover:bg-surface-hover"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <ExternalLink size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{t.contact.github}</p>
              <p className="text-xs text-muted">Zadirox</p>
            </div>
          </a>
        </div>

        <form
          action={`mailto:${contacts.email}`}
          method="GET"
          className="animate-fade-in-up mt-10 rounded-xl border border-border/50 bg-surface p-6"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              {t.contact.form_name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted/50 outline-none transition-colors focus:border-accent/40"
              placeholder={t.contact.form_name}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="body" className="mb-1.5 block text-sm font-medium text-foreground">
              {t.contact.form_message}
            </label>
            <textarea
              id="body"
              name="body"
              rows={4}
              className="w-full resize-none rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted/50 outline-none transition-colors focus:border-accent/40"
              placeholder={t.contact.form_message}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/20"
          >
            <Send size={14} />
            {t.contact.form_send}
          </button>
        </form>
      </div>
    </section>
  );
}
