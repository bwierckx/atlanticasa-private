"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Voorkom scrollen van de achtergrond wanneer het mobiele menu open is.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sluit het menu met Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500 ease-editorial",
        scrolled || open
          ? "border-b border-line/70 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between">
        <a
          href="#hero"
          className="font-serif text-lg tracking-tight text-ink"
          aria-label={`${siteConfig.name} — naar boven`}
        >
          {siteConfig.shortName}
          <span className="text-clay"> Private</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.cta.primary.href}
            className="hidden rounded-full bg-umber px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-clay-dark sm:inline-flex"
          >
            {siteConfig.cta.primary.label}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
          >
            <span className="sr-only">{open ? "Sluiten" : "Menu"}</span>
            <div className="flex flex-col gap-[5px]">
              <span
                className={cn(
                  "block h-px w-5 bg-ink transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-ink transition-opacity duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-ink transition-transform duration-300",
                  open && "-translate-y-[6px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobiel-menu"
            className="fixed inset-0 z-40 bg-cream lg:hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
                {siteConfig.nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line/70 py-4 font-serif text-2xl text-ink"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={siteConfig.cta.primary.href}
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-umber px-6 py-4 text-sm font-medium text-cream"
              >
                {siteConfig.cta.primary.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
