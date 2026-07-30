"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { content } from "@/content/content";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { hero } = content;

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      aria-label="Introductie"
    >
      {/* Achtergrond — vervang door een foto of video via /public/images.
          Zie /public/images/README.md (aanbevolen: hero, 2400×1600 px). */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(130% 120% at 75% 20%, rgba(176,136,98,0.45) 0%, rgba(30,25,19,0) 50%), linear-gradient(165deg, #3A3128 0%, #2A231C 50%, #1E1913 100%)",
        }}
      />
      {/* Zachte vignettering voor leesbaarheid. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-umber-dark/70 via-transparent to-umber-dark/30"
      />

      <Container className="pb-16 pt-32 sm:pb-20">
        <div className="max-w-4xl">
          <motion.p
            {...fade(0.05)}
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-sand-200"
          >
            <span className="h-px w-10 bg-sand-300/60" aria-hidden="true" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            className="font-serif text-display-xl text-cream"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            {...fade(0.22)}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-sand-100/85"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.32)} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-umber transition-colors duration-300 hover:bg-sand-100"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:border-cream/70"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p {...fade(0.4)} className="mt-5 text-sm text-sand-100/60">
            {hero.note}
          </motion.p>
        </div>

        {/* Rustige kenmerken onder in de hero. */}
        <motion.ul
          {...fade(0.5)}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 sm:grid-cols-3"
        >
          {hero.highlights.map((item) => (
            <li
              key={item}
              className="bg-cream/[0.04] px-6 py-5 text-sm text-sand-100/85 backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
