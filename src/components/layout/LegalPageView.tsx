import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import type { LegalDoc } from "@/content/legal";

export function LegalPageView({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Navigation />
      <main id="hoofdinhoud" className="pt-[4.75rem]">
        <Container className="max-w-prose2 py-section">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <span aria-hidden="true">←</span> Terug naar de homepage
          </Link>

          <p className="eyebrow">Juridisch</p>
          <h1 className="mt-4 font-serif text-display-md text-ink">{doc.title}</h1>
          {doc.updated && <p className="mt-3 text-sm text-ink-muted">{doc.updated}</p>}

          <div className="mt-8 rounded-xl border border-line bg-sand-50 p-5 text-sm leading-relaxed text-ink-soft">
            {doc.intro}
          </div>

          <div className="mt-12 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl text-ink">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-ink-soft">
                        <span className="mt-2 h-px w-3 shrink-0 bg-clay/60" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
