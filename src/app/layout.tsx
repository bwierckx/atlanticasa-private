import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ConsentManager } from "@/components/ui/ConsentManager";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Een besloten netwerk voor ondernemers en investeerders met minimaal € 1 miljoen direct beschikbaar vermogen, gericht op geselecteerde vastgoedkansen in Portugal en Spanje.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Vastgoedkansen in Portugal en Spanje`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "investeren in vastgoed Portugal",
    "investeren in vastgoed Spanje",
    "vastgoed voor vermogende investeerders",
    "off-market vastgoed Portugal",
    "off-market vastgoed Spanje",
    "vastgoed investeren vanaf 1 miljoen",
    "besloten vastgoednetwerk",
    "internationaal vastgoed voor ondernemers",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  // Zolang `siteConfig.indexable` false is, vragen we zoekmachines de site niet
  // te indexeren. Zet de schakelaar in src/config/site.ts op true bij livegang.
  robots: siteConfig.indexable
    ? { index: true, follow: true }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Vastgoedkansen in Portugal en Spanje`,
    description,
    // De Open Graph-afbeelding wordt gegenereerd door app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Vastgoedkansen in Portugal en Spanje`,
    description,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#hoofdinhoud" className="skip-link rounded-full bg-umber px-4 py-2 text-sm text-cream">
          Direct naar de inhoud
        </a>
        {children}
        <ConsentManager />
      </body>
    </html>
  );
}
