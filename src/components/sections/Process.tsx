import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/content/content";

export function Process() {
  const { process } = content;

  return (
    <Section id={process.id} tone="umber" divided>
      <SectionHeading
        eyebrow={process.eyebrow}
        title={process.title}
        tone="light"
      />

      <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/10 md:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 0.07}
            className="flex flex-col bg-cream/[0.03] p-8 lg:min-h-[19rem]"
          >
            <span className="font-serif text-3xl text-clay-light">{step.number}</span>
            <div className="mt-6 h-px w-10 bg-cream/20" aria-hidden="true" />
            <h3 className="mt-6 font-serif text-xl text-cream">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sand-100/70">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
