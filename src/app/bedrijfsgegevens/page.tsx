import type { Metadata } from "next";
import { LegalPageView } from "@/components/layout/LegalPageView";
import { legalDocs } from "@/content/legal";

const doc = legalDocs.bedrijfsgegevens;

export const metadata: Metadata = {
  title: doc.title,
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPageView doc={doc} />;
}
