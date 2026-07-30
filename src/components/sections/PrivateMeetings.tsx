import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { content } from "@/content/content";

export function PrivateMeetings() {
  const { meetings } = content;

  return (
    <Section id={meetings.id} tone="cream" divided>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Media
            // src="/images/private-meeting.jpg"
            alt={meetings.imageAlt}
            caption="Een zorgvuldig samengestelde tafel"
            ratio="aspect-[5/4]"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-clay/50" aria-hidden="true" />
              {meetings.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-display-md text-ink">{meetings.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{meetings.paragraph}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {meetings.facts.map((fact) => (
                <li key={fact} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-px w-4 shrink-0 bg-clay/60" aria-hidden="true" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 border-t border-line pt-8">
              <p className="font-serif text-xl text-ink">{meetings.ctaLead}</p>
              <a
                href={meetings.ctaHref}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-umber px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-clay-dark"
              >
                {meetings.ctaLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
