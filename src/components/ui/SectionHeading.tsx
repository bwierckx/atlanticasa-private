import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  /** Kleurvariant voor donkere secties. */
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  children,
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "light" ? "text-sand-200" : "text-clay";
  const titleColor = tone === "light" ? "text-cream" : "text-ink";
  const introColor = tone === "light" ? "text-sand-100/80" : "text-ink-soft";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2",
              eyebrowColor,
              isCenter && "justify-center"
            )}
          >
            <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={cn("font-serif text-display-md", titleColor)}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={cn("mt-5 text-lg leading-relaxed", introColor)}>{intro}</p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
