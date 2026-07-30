import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/content/content";

export function Expectations() {
  const { expectations } = content;

  return (
    <Section id={expectations.id} tone="cream" divided>
      <SectionHeading eyebrow={expectations.eyebrow} title={expectations.title} />

      <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3 lg:gap-x-16">
        {expectations.items.map((item, i) => (
          <Reveal as="li" key={item.number} delay={(i % 3) * 0.06}>
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-2xl text-clay">{item.number}</span>
              <div className="mt-2 h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-serif text-display-sm text-ink">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <p className="mt-14 max-w-2xl text-base italic leading-relaxed text-ink-muted">
          {expectations.footnote}
        </p>
      </Reveal>
    </Section>
  );
}
