# Atlanticasa Private

Een besloten, uitnodigingsgerichte landingswebsite voor een vastgoednetwerk voor
vermogende investeerders met focus op **Portugal en Spanje**. Gebouwd met Next.js
(App Router), TypeScript, Tailwind CSS en Framer Motion.

De site is nadrukkelijk géén openbare vastgoedmarktplaats. Het doel is vertrouwen
en nieuwsgierigheid opbouwen en geschikte kandidaten uitnodigen voor een
persoonlijke kennismaking.

---

## Inhoud

- [Snel starten](#snel-starten)
- [Scripts](#scripts)
- [Projectstructuur](#projectstructuur)
- [Teksten aanpassen](#teksten-aanpassen)
- [Contactgegevens en merknaam aanpassen](#contactgegevens-en-merknaam-aanpassen)
- [Afbeeldingen vervangen](#afbeeldingen-vervangen)
- [Environment variables](#environment-variables)
- [Formulierintegratie (CRM / e-mail)](#formulierintegratie-crm--e-mail)
- [Deployen op Vercel](#deployen-op-vercel)
- [Toegankelijkheid en performance](#toegankelijkheid-en-performance)
- [Openstaande placeholders](#openstaande-placeholders)

---

## Snel starten

Vereist: **Node.js 18.18+ of 20+** (ontwikkeld op Node 24).

```bash
npm install
cp .env.example .env.local   # optioneel; site werkt ook zonder
npm run dev
```

De site draait vervolgens op <http://localhost:3000>.

## Scripts

| Commando            | Doel                                             |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Ontwikkelserver met hot reload                   |
| `npm run build`     | Productiebuild                                   |
| `npm run start`     | Productiebuild lokaal serveren (na `build`)      |
| `npm run lint`      | ESLint (next/core-web-vitals + typescript)       |
| `npm run typecheck` | TypeScript-typecontrole zonder output            |

## Projectstructuur

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, Open Graph
│   ├── page.tsx                # Landingspagina (composeert alle secties)
│   ├── globals.css             # Basisstijlen + reduced-motion
│   ├── opengraph-image.tsx     # Dynamisch gegenereerd OG-beeld
│   ├── sitemap.ts / robots.ts  # SEO
│   ├── error.tsx / not-found.tsx
│   ├── api/introductie/route.ts# Server-side formulierverwerking
│   └── {privacyverklaring,cookiebeleid,...}/  # Juridische pagina's
├── components/
│   ├── layout/                 # Navigation, Footer, LegalPageView
│   ├── sections/               # Hero, Introduction, Audience, ... , ContactSection
│   ├── form/                   # QualificationForm + velden
│   └── ui/                     # Container, Section, Button, Reveal, Media, ConsentManager
├── config/site.ts              # ⚙️  Centrale configuratie (merknaam, contact, introducers)
├── content/
│   ├── content.ts              # ✍️  Alle zichtbare teksten van de landingspagina
│   └── legal.ts                # Juridische placeholderteksten
└── lib/
    ├── validation.ts           # Zod-schema (client + server)
    ├── crm.ts                  # Modulaire dispatch (e-mail / CRM-webhook)
    └── cn.ts                   # classNames-helper
```

## Teksten aanpassen

Alle zichtbare teksten van de landingspagina staan in
[`src/content/content.ts`](src/content/content.ts). Wijzig hier koppen, alinea's,
formuliervragen en labels zonder de componenten aan te raken. Juridische teksten
staan in [`src/content/legal.ts`](src/content/legal.ts).

## Contactgegevens en merknaam aanpassen

Alles wat met merk, contact en integraties te maken heeft staat centraal in
[`src/config/site.ts`](src/config/site.ts):

- **Werknaam** (`name`, `shortName`, `tagline`)
- **Contact** (`contact.email`, telefoon, WhatsApp-nummer)
- **Introducers** (`introducers`) — de namen in de "voorgedragen door"-tekst
- **Navigatie** (`nav`)
- **Bedrijfsgegevens** (`company`)

Wijzig de werknaam op één plek en deze wordt overal doorgevoerd.

## Afbeeldingen vervangen

De site gebruikt standaard rustige gradient-placeholders (geen binaire assets
nodig). Zie [`public/images/README.md`](public/images/README.md) voor de
aanbevolen bestanden, afmetingen en de exacte manier om een placeholder te
vervangen door een echte foto. Kort: plaats het bestand in `public/images/` en
zet de `src` op de `Media`-component in de betreffende sectie. `Media` gebruikt
dan automatisch `next/image`.

## Environment variables

Kopieer `.env.example` naar `.env.local`. Alle variabelen zijn optioneel; de site
werkt zonder configuratie (aanvragen worden dan server-side gelogd).

| Variabele                       | Doel                                                        |
| ------------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Basis-URL voor metadata, sitemap en Open Graph              |
| `NEXT_PUBLIC_CONTACT_EMAIL`     | Publiek e-mailadres (overschrijft default)                  |
| `RESEND_API_KEY`                | API-sleutel voor e-mailnotificatie via Resend               |
| `LEAD_NOTIFICATION_EMAIL`       | Ontvanger van formuliermails                                |
| `LEAD_FROM_EMAIL`               | Afzender van formuliermails                                 |
| `CRM_WEBHOOK_URL`               | Generieke webhook naar HubSpot/Pipedrive/Brevo/Zapier/etc.  |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN`  | Domein voor privacyvriendelijke analytics (bijv. Plausible) |
| `NEXT_PUBLIC_ANALYTICS_SRC`     | Script-URL van de analytics-provider                        |

## Formulierintegratie (CRM / e-mail)

De verwerking is bewust modulair opgezet in
[`src/lib/crm.ts`](src/lib/crm.ts). De route
[`src/app/api/introductie/route.ts`](src/app/api/introductie/route.ts):

1. valideert de aanvraag server-side met Zod;
2. controleert de honeypot (spampreventie);
3. roept `dispatchIntroduction()` aan.

`dispatchIntroduction()` activeert **alleen** de kanalen waarvoor geldige
environment variables aanwezig zijn:

- **E-mail** via Resend (wanneer `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL` en
  `LEAD_FROM_EMAIL` zijn ingevuld).
- **CRM-webhook** (wanneer `CRM_WEBHOOK_URL` is ingevuld) — stuurt een JSON-payload.

Zonder configuratie wordt de aanvraag alleen server-side gelogd, zodat er niets
verloren gaat. Een koppeling met bijvoorbeeld **HubSpot, Pipedrive, Mailchimp,
Brevo** of een eigen CRM voegt u toe door in `crm.ts` een extra functie te
schrijven naar hetzelfde patroon.

## Deployen op Vercel

1. Push de repository naar GitHub/GitLab/Bitbucket.
2. Maak op [vercel.com](https://vercel.com) een nieuw project en importeer de repo.
   Vercel detecteert Next.js automatisch (`Build Command: next build`,
   `Output: .next`).
3. Voeg onder **Settings → Environment Variables** de gewenste variabelen uit
   `.env.example` toe (in elk geval `NEXT_PUBLIC_SITE_URL`).
4. Deploy. Elke push naar de hoofdbranch levert automatisch een nieuwe deploy op.

> Alternatief lokaal testen van de productiebuild: `npm run build && npm run start`.

## Toegankelijkheid en performance

- Semantische HTML, skip-link, zichtbare focusstaten, `aria`-labels op
  interactieve elementen.
- Volledige toetsenbordbediening van navigatie en formulier.
- `prefers-reduced-motion` wordt gerespecteerd (animaties worden uitgeschakeld).
- Lettertypen via `next/font` (geen layout shift), afbeeldingen via `next/image`.
- Geen autoplay-geluid, geen agressieve pop-ups, geen dark patterns in de
  cookiemelding.

## Openstaande placeholders

Vervang vóór livegang in elk geval:

- **Fotografie** — zie `public/images/README.md`.
- **Contact- en bedrijfsgegevens** in `src/config/site.ts` (telefoon, adres, KvK, BTW).
- **Teamnamen en biografieën** in `src/content/content.ts` (`organisation.team`).
- **Introducer-namen** in `src/config/site.ts` (`introducers`).
- **Juridische teksten** in `src/content/legal.ts` — laat deze door een jurist
  controleren en aanvullen.
- **Analytics** — vul de env-variabelen in als u statistieken wilt.
