"use client";

import { useEffect, useRef, type RefObject } from "react";

export function useScrollAnimation<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const animatedEls = el.querySelectorAll(".animate-fade-in-up");
    animatedEls.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
