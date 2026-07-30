"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[100svh] items-center bg-cream">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow">Er ging iets mis</p>
        <h1 className="mt-4 font-serif text-display-lg text-ink">
          Onze excuses voor het ongemak.
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-soft">
          Er is een onverwachte fout opgetreden. Probeer het opnieuw of neem
          rechtstreeks contact met ons op.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-umber px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-clay-dark"
        >
          Opnieuw proberen
        </button>
      </Container>
    </main>
  );
}
