import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { content } from "@/content/content";

export function Footer() {
  const year = 2026; // Bijwerken indien gewenst; bewust statisch voor consistente output.

  return (
    <footer className="bg-umber text-cream" aria-labelledby="footer-titel">
      <h2 id="footer-titel" className="sr-only">
        Voettekst
      </h2>

      {/* Disclaimer */}
      <Container className="border-b border-cream/10 py-14">
        <p className="max-w-4xl text-sm leading-relaxed text-sand-100/70">
          <span className="mb-2 block text-xs uppercase tracking-widest2 text-sand-200">
            Disclaimer
          </span>
          {content.disclaimer}
        </p>
      </Container>

      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl">
              {siteConfig.shortName}
              <span className="text-clay-light"> Private</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/70">
              {content.footer.tagline}
            </p>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-sand-100/50">
              {content.footer.note}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest2 text-sand-200">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-sand-100/80">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cream">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-cream">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="text-sand-100/50">{siteConfig.company.postalCity}</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest2 text-sand-200">
              Juridisch
            </p>
            <ul className="space-y-3 text-sm text-sand-100/80">
              {content.footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-sand-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.company.legalName}. Alle rechten voorbehouden.
          </p>
          <p>De exacte juridische teksten worden nog door een jurist gecontroleerd.</p>
        </div>
      </Container>
    </footer>
  );
}
