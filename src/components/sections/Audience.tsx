import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/content/content";

export function Audience() {
  const { audience } = content;

  return (
    <Section id={audience.id} tone="sand" divided>
      <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {audience.profiles.map((profile, i) => (
          <Reveal as="li" key={profile.title} delay={i * 0.06} className="bg-cream-50 p-8 sm:p-10">
            <span className="font-serif text-sm text-clay">{`0${i + 1}`}</span>
            <h3 className="mt-4 font-serif text-display-sm text-ink">{profile.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{profile.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-3xl border-l-2 border-clay/40 pl-6 text-base leading-relaxed text-ink-soft">
          {audience.qualification}
        </p>
      </Reveal>
    </Section>
  );
}
