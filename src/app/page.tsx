import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Audience } from "@/components/sections/Audience";
import { Expectations } from "@/components/sections/Expectations";
import { Regions } from "@/components/sections/Regions";
import { Process } from "@/components/sections/Process";
import { PrivateMeetings } from "@/components/sections/PrivateMeetings";
import { Organisation } from "@/components/sections/Organisation";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/config/site";

/** Gestructureerde data voor zoekmachines. */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.positioning,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    areaServed: ["Portugal", "Spanje"],
    slogan: siteConfig.tagline,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main id="hoofdinhoud">
        <Hero />
        <Introduction />
        <Audience />
        <Expectations />
        <Regions />
        <Process />
        <PrivateMeetings />
        <Organisation />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
