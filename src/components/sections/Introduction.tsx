import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/content/content";

export function Introduction() {
  const { intro } = content;

  return (
    <Section id={intro.id} tone="cream">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-clay/50" aria-hidden="true" />
              {intro.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-display-md text-ink">{intro.title}</h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="max-w-prose2 space-y-6">
            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
