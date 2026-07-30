/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CENTRAAL CONTENTBESTAND
 * ─────────────────────────────────────────────────────────────────────────────
 *  Alle zichtbare teksten van de landingspagina staan hier. Pas teksten aan
 *  zonder de componenten te wijzigen. Contactgegevens staan in `site.ts`.
 */

import { siteConfig } from "@/config/site";

export const content = {
  // ── HERO ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Besloten netwerk · Portugal & Spanje",
    title: "Vastgoedkansen die niet voor iedereen bedoeld zijn.",
    subtitle:
      "Een besloten netwerk voor ondernemers en investeerders met minimaal € 1 miljoen direct beschikbaar vermogen, gericht op zorgvuldig geselecteerde vastgoedkansen in Portugal en Spanje.",
    note: "Toegang na een persoonlijke kennismaking.",
    primaryCta: { label: "Vraag een introductie aan", href: "#aanvraag" },
    secondaryCta: { label: "Ontdek onze werkwijze", href: "#werkwijze" },
    highlights: [
      "Portugal & Spanje",
      "Vanaf € 1 miljoen investeringsvermogen",
      "Persoonlijke selectie en begeleiding",
    ],
  },

  // ── INTRODUCTIE ───────────────────────────────────────────────────────────
  intro: {
    id: "visie",
    eyebrow: "Onze visie",
    title: "Geen openbare marktplaats. Wel toegang tot het juiste netwerk.",
    paragraphs: [
      "De interessantste vastgoedtransacties ontstaan niet altijd op openbare platforms. Ze ontstaan via lokale relaties, ontwikkelaars, eigenaren, ondernemers en adviseurs die elkaar vertrouwen. Atlanticasa Private brengt een beperkte groep kapitaalkrachtige investeerders samen rond zorgvuldig beoordeelde mogelijkheden in Portugal en Spanje.",
      "Wij zoeken geen zo groot mogelijke groep. Wij zoeken mensen die snel kunnen beslissen, professioneel handelen en passen binnen het netwerk.",
    ],
  },

  // ── VOOR WIE ──────────────────────────────────────────────────────────────
  audience: {
    id: "voor-wie",
    eyebrow: "Voor wie",
    title: "Een netwerk voor wie professioneel en met overtuiging handelt.",
    profiles: [
      {
        title: "Ondernemers",
        text: "Voor ondernemers die beschikbare liquiditeit willen inzetten voor vastgoed buiten Nederland.",
      },
      {
        title: "Vastgoedinvesteerders",
        text: "Voor ervaren investeerders die hun portefeuille geografisch willen verbreden.",
      },
      {
        title: "Families en private investeerders",
        text: "Voor particulieren en families die vermogen voor de langere termijn willen positioneren.",
      },
      {
        title: "Strategische partners",
        text: "Voor investeerders die naast kapitaal ook kennis, relaties of ontwikkelkracht kunnen toevoegen.",
      },
    ],
    qualification:
      "Deelnemers beschikken in beginsel over minimaal € 1.000.000 direct inzetbaar vermogen. Deelname en introductie vinden uitsluitend plaats na een persoonlijke beoordeling.",
  },

  // ── WAT DEELNEMERS KUNNEN VERWACHTEN ────────────────────────────────────────
  expectations: {
    id: "verwachting",
    eyebrow: "Wat u kunt verwachten",
    title: "Beperkt in aantal. Zorgvuldig in aanpak.",
    items: [
      {
        number: "01",
        title: "Geselecteerde kansen",
        text: "Geen eindeloze database, maar een beperkte selectie van vastgoed en projecten waar een duidelijke onderbouwing achter zit.",
      },
      {
        number: "02",
        title: "Lokale toegang",
        text: "Directe relaties met ontwikkelaars, makelaars, juristen, fiscalisten en andere lokale professionals.",
      },
      {
        number: "03",
        title: "Besloten bijeenkomsten",
        text: "Kleinschalige bijeenkomsten in Nederland, Portugal of Spanje, alleen op persoonlijke uitnodiging.",
      },
      {
        number: "04",
        title: "Persoonlijke introducties",
        text: "Gerichte introducties bij kansen die aansluiten op het profiel, de strategie en de beschikbare middelen van een deelnemer.",
      },
      {
        number: "05",
        title: "Transparant traject",
        text: "Inzicht in structuur, kosten, risico's, betrokken partijen en vervolgstappen voordat een beslissing wordt genomen.",
      },
    ],
    footnote:
      "Niet iedere mogelijkheid is voor iedere deelnemer geschikt. Iedere kans wordt individueel beoordeeld.",
  },

  // ── PORTUGAL & SPANJE ───────────────────────────────────────────────────────
  regions: {
    id: "regio",
    eyebrow: "Portugal & Spanje",
    title: "Twee markten. Eén zorgvuldige benadering.",
    intro:
      "Onderstaande gebieden en vastgoedtypen vormen een indicatieve focus. Wij doen geen toezegging dat alle categorieën op elk moment beschikbaar zijn.",
    portugal: {
      id: "portugal",
      country: "Portugal",
      caption: "Kust, stad en geselecteerde ontwikkellocaties",
      imageAlt:
        "Portugees kustlandschap met verfijnde architectuur in warm avondlicht",
      areasLabel: "Mogelijke focusgebieden",
      areas: [
        "Algarve",
        "Lissabon en Cascais",
        "Comporta",
        "Silver Coast",
        "Porto",
        "Geselecteerde ontwikkellocaties",
      ],
      typesLabel: "Mogelijke typen vastgoed",
      types: [
        "Hoogwaardige woningen",
        "Appartementen",
        "Kleinschalige ontwikkelingen",
        "Grondposities",
        "Hospitality",
        "Verhuurvastgoed",
        "Off-market transacties",
      ],
    },
    spain: {
      id: "spanje",
      country: "Spanje",
      caption: "Kustregio's en groeigebieden aan de Costa del Sol",
      imageAlt:
        "Spaanse luxe villa aan de kust met natuurlijke materialen en veel licht",
      areasLabel: "Mogelijke focusgebieden",
      areas: [
        "Costa del Sol",
        "Marbella",
        "Estepona",
        "Málaga",
        "Geselecteerde kustgebieden en groeiregio's",
      ],
      typesLabel: "Mogelijke typen vastgoed",
      types: [
        "Nieuwbouwprojecten",
        "Luxe residentieel vastgoed",
        "Verhuurvastgoed",
        "Hospitality",
        "Renovatie- en ontwikkelkansen",
        "Grotere individuele of gezamenlijke aankopen",
      ],
    },
  },

  // ── HOE HET WERKT ───────────────────────────────────────────────────────────
  process: {
    id: "werkwijze",
    eyebrow: "Werkwijze",
    title: "Van introductieverzoek tot gerichte mogelijkheden.",
    steps: [
      {
        number: "01",
        title: "Introductieverzoek",
        text: "De kandidaat vult een beknopt en discreet formulier in.",
      },
      {
        number: "02",
        title: "Persoonlijke kennismaking",
        text: "Een gesprek over achtergrond, investeringsstrategie, beschikbare middelen, voorkeuren en besluitvorming.",
      },
      {
        number: "03",
        title: "Toelating tot het netwerk",
        text: "Alleen kandidaten die passen bij de aard en werkwijze van het netwerk ontvangen verdere toegang of een uitnodiging.",
      },
      {
        number: "04",
        title: "Gerichte mogelijkheden",
        text: "Deelnemers worden persoonlijk benaderd wanneer een relevante bijeenkomst, introductie of vastgoedmogelijkheid beschikbaar is.",
      },
    ],
  },

  // ── PRIVATE MEETINGS ────────────────────────────────────────────────────────
  meetings: {
    id: "private-meetings",
    eyebrow: "Private meetings",
    title: "Private meetings in Nederland, Portugal en Spanje.",
    paragraph:
      "Wij organiseren kleinschalige bijeenkomsten voor ondernemers en investeerders die elkaar inhoudelijk kunnen versterken. Geen massaal seminar, geen verkooppresentatie en geen zaal vol onbekenden. Wel een zorgvuldig samengestelde tafel, concrete marktkennis en ruimte om mogelijkheden persoonlijk te bespreken.",
    facts: [
      "Datum en locatie worden per bijeenkomst bepaald.",
      "Deelname uitsluitend op uitnodiging.",
      "Locaties kunnen Nederland, Portugal of Spanje zijn.",
      "Geïnteresseerden kunnen zich aanmelden voor een persoonlijke introductie.",
      "Een aanmelding is geen automatische toelating.",
    ],
    ctaLead: "Interesse in een volgende bijeenkomst?",
    ctaLabel: "Vraag een uitnodiging aan",
    ctaHref: "#aanvraag",
    imageAlt:
      "Zorgvuldig gedekte tafel bij natuurlijk licht voor een besloten bijeenkomst",
  },

  // ── VERTROUWEN & ORGANISATIE ────────────────────────────────────────────────
  organisation: {
    id: "organisatie",
    eyebrow: "Organisatie",
    title: "Nederlandse vastgoedkennis, lokaal verankerd.",
    paragraph:
      "Atlanticasa combineert Nederlandse vastgoedkennis met een lokaal netwerk in Portugal en Spanje. Wij begeleiden kopers en investeerders vanaf de eerste oriëntatie tot en met de lokale uitvoering, samen met gespecialiseerde partners op juridisch, fiscaal en technisch gebied.",
    team: [
      {
        name: "Naam volgt",
        role: "Oprichter & vastgoedstrateeg",
        bio: "Korte biografie volgt. Vervang deze placeholder door verifieerbare informatie.",
        imageAlt: "Portret teamlid — placeholder",
      },
      {
        name: "Naam volgt",
        role: "Lokale partner Portugal",
        bio: "Korte biografie volgt. Vervang deze placeholder door verifieerbare informatie.",
        imageAlt: "Portret teamlid — placeholder",
      },
      {
        name: "Naam volgt",
        role: "Lokale partner Spanje",
        bio: "Korte biografie volgt. Vervang deze placeholder door verifieerbare informatie.",
        imageAlt: "Portret teamlid — placeholder",
      },
    ],
  },

  // ── CONTACT & AANVRAAG ──────────────────────────────────────────────────────
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Een kennismaking begint met een persoonlijke introductie.",
    paragraph:
      "Vul het beknopte formulier in of neem rechtstreeks contact op. Wij beoordelen iedere aanvraag persoonlijk en discreet.",
    introducerLead:
      "Bent u door {introducers} of een andere relatie geïntroduceerd? Vermeld de naam van uw introducer bij uw aanvraag.",
    channels: {
      callbackLabel: "Vraag een persoonlijk terugbelverzoek aan",
      emailLabel: "Stuur een e-mail",
      whatsappLabel: "Stuur een WhatsApp-bericht",
      referralLabel: "Voorgedragen door een bestaand contact",
    },
  },

  // ── KWALIFICATIEFORMULIER ───────────────────────────────────────────────────
  form: {
    id: "aanvraag",
    eyebrow: "Introductieverzoek",
    title: "Vraag een introductie aan",
    intro:
      "Vijf korte stappen. Uw gegevens worden vertrouwelijk behandeld en uitsluitend gebruikt om te beoordelen of een kennismaking passend is.",
    steps: [
      { key: "gegevens", label: "Gegevens" },
      { key: "vermogen", label: "Vermogen" },
      { key: "interesse", label: "Interesse" },
      { key: "timing", label: "Timing" },
      { key: "toelichting", label: "Toelichting" },
    ],
    labels: {
      firstName: "Voornaam",
      lastName: "Achternaam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      company: "Bedrijfsnaam (optioneel)",
      role: "Functie of achtergrond (optioneel)",
      introducer: "Naam introducer (optioneel)",
    },
    capitalQuestion:
      "Welk bedrag heeft u momenteel direct beschikbaar voor een vastgoedinvestering?",
    capitalOptions: [
      "€ 1.000.000 – € 2.500.000",
      "€ 2.500.000 – € 5.000.000",
      "€ 5.000.000 – € 10.000.000",
      "Meer dan € 10.000.000",
      "Anders, namelijk",
    ],
    capitalOtherLabel: "Toelichting op beschikbaar vermogen",
    interestQuestion: "Waar gaat uw interesse naar uit? (meerdere mogelijk)",
    interestOptions: [
      "Portugal",
      "Spanje",
      "Beide landen",
      "Residentieel vastgoed",
      "Verhuurvastgoed",
      "Ontwikkeling",
      "Hospitality",
      "Grondposities",
      "Off-market vastgoed",
      "Gezamenlijke investeringsmogelijkheden",
      "Nog nader te bepalen",
    ],
    timingQuestion: "Binnen welke termijn wilt u kunnen handelen?",
    timingOptions: [
      "Direct bij een passende mogelijkheid",
      "Binnen drie maanden",
      "Binnen zes maanden",
      "Eerst persoonlijk oriënteren",
    ],
    experienceQuestion: "Heeft u eerder in vastgoed geïnvesteerd?",
    experienceOptions: [
      "Ja, in Nederland",
      "Ja, internationaal",
      "Ja, in Nederland en internationaal",
      "Nog niet",
    ],
    notesQuestion:
      "Wat moeten wij weten om te bepalen of een kennismaking passend is?",
    notesPlaceholder: "Uw toelichting (optioneel)",
    consentLabel:
      "Ik begrijp dat mijn aanvraag persoonlijk wordt beoordeeld en dat een aanvraag geen recht geeft op deelname, toegang tot projecten of een uitnodiging.",
    privacyLabel:
      "Ik ga akkoord met de verwerking van mijn gegevens overeenkomstig de privacyverklaring.",
    nextLabel: "Volgende",
    prevLabel: "Vorige",
    submitLabel: "Aanvraag versturen",
    submittingLabel: "Bezig met versturen…",
    success: {
      title: "Dank voor uw aanvraag.",
      body: "Wij beoordelen iedere introductie persoonlijk. Wanneer uw profiel aansluit bij het netwerk, nemen wij rechtstreeks contact met u op.",
    },
    error:
      "Er ging iets mis bij het versturen. Probeer het opnieuw of neem rechtstreeks contact met ons op.",
  },

  // ── JURIDISCH ───────────────────────────────────────────────────────────────
  disclaimer:
    "De informatie op deze website is uitsluitend algemeen en oriënterend van aard. Zij vormt geen persoonlijk juridisch, fiscaal of financieel advies en geen aanbod tot deelname in een beleggingsproduct. Vastgoedinvesteringen brengen risico's met zich mee. Mogelijke resultaten zijn afhankelijk van onder meer het object, de markt, financiering, kosten, fiscaliteit en persoonlijke omstandigheden. Laat iedere transactie zelfstandig juridisch, fiscaal en financieel beoordelen.",

  footer: {
    tagline: siteConfig.tagline,
    legalLinks: [
      { label: "Privacyverklaring", href: "/privacyverklaring" },
      { label: "Cookiebeleid", href: "/cookiebeleid" },
      { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Bedrijfsgegevens", href: "/bedrijfsgegevens" },
    ],
    note: "Toegang tot het netwerk is selectief en vindt uitsluitend plaats na een persoonlijke beoordeling.",
  },

  cookie: {
    title: "Uw privacy",
    body: "Wij gebruiken alleen essentiële cookies. Optionele, privacyvriendelijke statistieken worden pas geladen nadat u daarmee akkoord gaat.",
    accept: "Statistieken toestaan",
    decline: "Alleen essentieel",
    settingsLink: { label: "Cookiebeleid", href: "/cookiebeleid" },
  },
} as const;

export type Content = typeof content;
