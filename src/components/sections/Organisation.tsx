import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { content } from "@/content/content";

export function Organisation() {
  const { organisation } = content;

  return (
    <Section id={organisation.id} tone="sand" divided>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-clay/50" aria-hidden="true" />
              {organisation.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-display-md text-ink">{organisation.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {organisation.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="grid gap-8 sm:grid-cols-3">
            {organisation.team.map((member, i) => (
              <Reveal as="li" key={i} delay={i * 0.08}>
                <Media
                  // src={`/images/team-${i + 1}.jpg`}
                  alt={member.imageAlt}
                  ratio="aspect-[3/4]"
                />
                <p className="mt-4 font-serif text-lg text-ink">{member.name}</p>
                <p className="text-sm text-clay">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{member.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
