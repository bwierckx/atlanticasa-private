"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { content } from "@/content/content";
import { siteConfig } from "@/config/site";

const STORAGE_KEY = "ac-consent";
type Consent = "granted" | "denied";

/**
 * Privacyvriendelijke toestemmingsbeheerder.
 * - Toont een rustige cookiemelding die past bij de vormgeving.
 * - Laadt optionele statistieken pas na expliciete toestemming.
 * - Geen misleidende dark patterns: beide keuzes zijn gelijkwaardig zichtbaar.
 */
export function ConsentManager() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      /* localStorage niet beschikbaar — melding wordt getoond */
    }
    setReady(true);
  }, []);

  const choose = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* stil negeren */
    }
    setConsent(value);
  };

  const analyticsEnabled =
    consent === "granted" &&
    siteConfig.integrations.analyticsDomain &&
    siteConfig.integrations.analyticsScriptSrc;

  const showBanner = ready && consent === null;

  return (
    <>
      {analyticsEnabled && (
        <Script
          src={siteConfig.integrations.analyticsScriptSrc}
          data-domain={siteConfig.integrations.analyticsDomain}
          strategy="afterInteractive"
        />
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            role="dialog"
            aria-label={content.cookie.title}
            aria-live="polite"
            className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-line bg-cream-50 p-6 shadow-[0_18px_50px_-24px_rgba(36,31,24,0.45)]">
              <p className="font-serif text-lg text-ink">{content.cookie.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {content.cookie.body}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => choose("granted")}
                  className="rounded-full bg-umber px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-clay-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  {content.cookie.accept}
                </button>
                <button
                  type="button"
                  onClick={() => choose("denied")}
                  className="rounded-full border border-ink/25 px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  {content.cookie.decline}
                </button>
              </div>
              <Link
                href={content.cookie.settingsLink.href}
                className="mt-4 inline-block text-xs text-ink-muted underline underline-offset-4 hover:text-ink"
              >
                {content.cookie.settingsLink.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
