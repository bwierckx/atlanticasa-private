import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center bg-cream">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-display-lg text-ink">
          Deze pagina is niet beschikbaar.
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-soft">
          Mogelijk is de pagina verplaatst of bestaat deze niet meer. Keer terug
          naar de homepage om verder te gaan.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-umber px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-clay-dark"
        >
          Terug naar de homepage
        </Link>
      </Container>
    </main>
  );
}
