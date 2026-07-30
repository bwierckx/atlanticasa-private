/**
 * Placeholder juridische teksten. Deze zijn oriënterend en moeten vóór
 * publicatie door een jurist worden gecontroleerd en aangevuld.
 */

import { siteConfig } from "@/config/site";
import { content } from "@/content/content";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };
export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const placeholderNotice =
  "Dit is een tijdelijke placeholdertekst. Laat de definitieve juridische inhoud vóór publicatie controleren en aanvullen door een jurist.";

export const legalDocs: Record<string, LegalDoc> = {
  privacyverklaring: {
    slug: "privacyverklaring",
    title: "Privacyverklaring",
    updated: "Laatst bijgewerkt: nog te bepalen",
    intro: placeholderNotice,
    sections: [
      {
        heading: "1. Verwerkingsverantwoordelijke",
        paragraphs: [
          `${siteConfig.company.legalName} is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring. U kunt contact opnemen via ${siteConfig.contact.email}.`,
        ],
      },
      {
        heading: "2. Welke gegevens wij verwerken",
        paragraphs: [
          "Wanneer u een introductieverzoek indient, verwerken wij de gegevens die u zelf verstrekt, waaronder uw naam, contactgegevens en de door u aangegeven voorkeuren.",
        ],
        list: [
          "Naam en contactgegevens",
          "Bedrijfsnaam en functie (indien opgegeven)",
          "Indicatie van beschikbaar investeringsvermogen",
          "Interesses, timing en toelichting",
        ],
      },
      {
        heading: "3. Doel en grondslag",
        paragraphs: [
          "Wij gebruiken uw gegevens uitsluitend om te beoordelen of een kennismaking passend is en om contact met u op te nemen. De grondslag is uw toestemming en ons gerechtvaardigd belang bij een zorgvuldige selectie.",
        ],
      },
      {
        heading: "4. Bewaartermijn",
        paragraphs: [
          "Wij bewaren uw gegevens niet langer dan noodzakelijk voor de hierboven genoemde doeleinden. De exacte termijn wordt nader vastgesteld.",
        ],
      },
      {
        heading: "5. Uw rechten",
        paragraphs: [
          "U heeft het recht op inzage, correctie en verwijdering van uw gegevens, alsmede het recht om uw toestemming in te trekken. Neem hiervoor contact met ons op.",
        ],
      },
    ],
  },

  cookiebeleid: {
    slug: "cookiebeleid",
    title: "Cookiebeleid",
    updated: "Laatst bijgewerkt: nog te bepalen",
    intro: placeholderNotice,
    sections: [
      {
        heading: "1. Essentiële cookies",
        paragraphs: [
          "Deze website gebruikt standaard alleen essentiële, functionele cookies die noodzakelijk zijn voor een goede werking.",
        ],
      },
      {
        heading: "2. Statistieken",
        paragraphs: [
          "Optionele, privacyvriendelijke statistieken worden pas geladen nadat u daarvoor toestemming heeft gegeven via de cookiemelding. U kunt uw keuze op elk moment wijzigen door de opgeslagen voorkeur te wissen.",
        ],
      },
      {
        heading: "3. Geen tracking voor advertenties",
        paragraphs: [
          "Wij plaatsen geen advertentie- of trackingcookies van derden en stellen geen profielen op voor advertentiedoeleinden.",
        ],
      },
    ],
  },

  "algemene-voorwaarden": {
    slug: "algemene-voorwaarden",
    title: "Algemene voorwaarden",
    updated: "Laatst bijgewerkt: nog te bepalen",
    intro: placeholderNotice,
    sections: [
      {
        heading: "1. Toepasselijkheid",
        paragraphs: [
          "Deze voorwaarden zijn van toepassing op het gebruik van deze website en op de dienstverlening van het besloten netwerk.",
        ],
      },
      {
        heading: "2. Aard van de dienstverlening",
        paragraphs: [
          "Het netwerk faciliteert introducties en kennismakingen. Een aanvraag of aanmelding geeft geen recht op deelname, toegang tot projecten of een uitnodiging.",
        ],
      },
      {
        heading: "3. Geen aanbod",
        paragraphs: [
          "De informatie op deze website vormt geen aanbod tot deelname in een beleggingsproduct en geen persoonlijk advies.",
        ],
      },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    updated: "Laatst bijgewerkt: nog te bepalen",
    intro: placeholderNotice,
    sections: [
      {
        heading: "Algemeen",
        paragraphs: [content.disclaimer],
      },
      {
        heading: "Geen garanties",
        paragraphs: [
          "Er worden geen rendementen gegarandeerd. Historische prestaties, indien later toegevoegd, vormen geen garantie voor toekomstige resultaten.",
        ],
      },
    ],
  },

  bedrijfsgegevens: {
    slug: "bedrijfsgegevens",
    title: "Bedrijfsgegevens",
    updated: "",
    intro:
      "Onderstaande gegevens worden aangevuld met de verifieerbare bedrijfsinformatie.",
    sections: [
      {
        heading: siteConfig.company.legalName,
        paragraphs: [
          `Werknaam: ${siteConfig.name}`,
          `${siteConfig.company.addressLine}, ${siteConfig.company.postalCity}`,
          `${siteConfig.company.kvk}`,
          `${siteConfig.company.vat}`,
          `E-mail: ${siteConfig.contact.email}`,
          `Telefoon: ${siteConfig.contact.phoneDisplay}`,
        ],
      },
    ],
  },
};

export const legalSlugs = Object.keys(legalDocs);
