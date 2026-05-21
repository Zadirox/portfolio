"use client";

import { LanguageProvider } from "@/lib/language-provider";
import { useScrollAnimation } from "@/lib/use-scroll-animation";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const mainRef = useScrollAnimation<HTMLElement>();

  return (
    <LanguageProvider>
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
