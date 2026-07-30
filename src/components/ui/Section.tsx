import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  tone?: "cream" | "sand" | "umber";
  children: ReactNode;
  /** Voeg een dunne bovenlijn toe als scheiding. */
  divided?: boolean;
  containerClassName?: string;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream text-ink",
  sand: "bg-sand-50 text-ink",
  umber: "bg-umber text-cream",
};

export function Section({
  id,
  className,
  tone = "cream",
  children,
  divided = false,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section scroll-mt-24", tones[tone], className)}
    >
      <Container className={containerClassName}>
        {divided && <div className="hairline mb-14 sm:mb-20" />}
        {children}
      </Container>
    </section>
  );
}
