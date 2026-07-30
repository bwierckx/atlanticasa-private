/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CENTRAAL CONFIGURATIEBESTAND
 * ─────────────────────────────────────────────────────────────────────────────
 *  Pas hier de werknaam, contactgegevens, introducers en integratie-instellingen
 *  aan. Dit bestand is de enige bron voor merk- en contactinformatie.
 *
 *  Wijzig gevoelige sleutels (mail, CRM, analytics) NIET hier, maar via
 *  environment variables. Zie `.env.example`.
 */

export const siteConfig = {
  /** Werknaam — eenvoudig aanpasbaar. */
  name: "Atlanticasa Private",
  shortName: "Atlanticasa",
  tagline: "Private real estate opportunities in Portugal and Spain.",
  positioning:
    "Een besloten netwerk voor ondernemers en investeerders die vanaf € 1 miljoen direct kunnen investeren in zorgvuldig geselecteerd vastgoed in Portugal en Spanje.",

  /** Productie-URL (voor metadata, sitemap en Open Graph). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://private.atlanticasa.com",

  locale: "nl_NL",
  language: "nl",

  /**
   * Zoekmachine-zichtbaarheid. Zet op `true` wanneer de site definitief live mag
   * en door Google gevonden mag worden. Zolang dit `false` is, wordt de site
   * niet geïndexeerd (ideaal voor een besloten preview / werk-in-uitvoering).
   */
  indexable: false,

  /** Contactgegevens — centraal aanpasbaar. */
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "private@atlanticasa.com",
    phoneDisplay: "+31 (0)85 000 0000",
    phoneHref: "+3185000000",
    whatsappNumber: "31600000000", // internationaal formaat, zonder + of spaties
    whatsappMessage:
      "Goedendag, ik heb interesse in een persoonlijke kennismaking met Atlanticasa Private.",
  },

  /** Bedrijfsgegevens — vul aan met verifieerbare gegevens. */
  company: {
    legalName: "Atlanticasa B.V.",
    addressLine: "Adresgegevens volgen",
    postalCity: "Nederland",
    kvk: "KvK-nummer volgt",
    vat: "BTW-nummer volgt",
  },

  /**
   * Bestaande relaties die een kandidaat kunnen introduceren.
   * Pas deze namen centraal aan.
   */
  introducers: ["Albert ten Napel", "Jan Jongman", "Henk Kras"] as string[],

  /** Externe integraties — alleen actief wanneer de env-variabelen zijn ingesteld. */
  integrations: {
    /** Optionele analytics-provider (bijv. Plausible). Leeg = uitgeschakeld. */
    analyticsDomain: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN ?? "",
    analyticsScriptSrc: process.env.NEXT_PUBLIC_ANALYTICS_SRC ?? "",
  },

  nav: [
    { label: "Onze visie", href: "#visie" },
    { label: "Portugal", href: "#portugal" },
    { label: "Spanje", href: "#spanje" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Private meetings", href: "#private-meetings" },
    { label: "Contact", href: "#contact" },
  ],

  cta: {
    primary: { label: "Vraag een introductie aan", href: "#aanvraag" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
