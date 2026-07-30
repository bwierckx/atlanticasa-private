import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaProps = {
  /**
   * Pad naar een echte foto in /public/images. Wanneer dit is ingevuld, wordt
   * next/image gebruikt. Laat leeg om de rustige placeholder te tonen.
   */
  src?: string;
  alt: string;
  /** Korte omschrijving die als bijschrift op de placeholder verschijnt. */
  caption?: string;
  /** Optioneel volgnummer, bijv. "01". */
  index?: string;
  className?: string;
  /** Beeldverhouding via Tailwind aspect-ratio klasse. */
  ratio?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Beeldcomponent met twee modi:
 *  1. Placeholder (standaard): een rustige, aardse gradient — geen binaire assets nodig.
 *  2. Foto: zodra `src` is ingevuld, wordt de afbeelding met next/image geoptimaliseerd.
 *
 * Zie /public/images/README.md voor de aanbevolen afmetingen per beeld.
 */
export function Media({
  src,
  alt,
  caption,
  index,
  className,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaProps) {
  return (
    <div
      className={cn(
        "img-zoom relative isolate overflow-hidden rounded-2xl bg-umber",
        ratio,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <PlaceholderVisual alt={alt} caption={caption} index={index} />
      )}
    </div>
  );
}

function PlaceholderVisual({
  alt,
  caption,
  index,
}: {
  alt: string;
  caption?: string;
  index?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex flex-col justify-between p-6"
      style={{
        backgroundImage:
          "radial-gradient(120% 120% at 20% 15%, rgba(176,136,98,0.55) 0%, rgba(58,49,40,0) 55%), linear-gradient(160deg, #3A3128 0%, #2A231C 55%, #1E1913 100%)",
      }}
    >
      {/* Subtiele korrel voor een warme, natuurlijke uitstraling. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative flex items-center justify-between text-sand-100/70">
        {index ? <span className="font-serif text-sm">{index}</span> : <span />}
        <span className="text-[0.65rem] uppercase tracking-widest2">Beeld volgt</span>
      </div>
      {caption && (
        <p className="relative max-w-[80%] font-serif text-lg leading-snug text-cream/90">
          {caption}
        </p>
      )}
    </div>
  );
}
