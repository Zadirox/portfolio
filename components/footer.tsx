"use client";

import { useLanguage } from "@/lib/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-muted">
        <p>
          {t.footer.built_with}{" "}
          <span className="text-accent">Next.js</span> —{" "}
          <a
            href="https://github.com/Zadirox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/70 transition-colors hover:text-accent"
          >
            {t.footer.by}
          </a>
        </p>
      </div>
    </footer>
  );
}
