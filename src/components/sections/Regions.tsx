import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { content } from "@/content/content";

type RegionData = {
  id: string;
  country: string;
  caption: string;
  imageAlt: string;
  areasLabel: string;
  areas: readonly string[];
  typesLabel: string;
  types: readonly string[];
};

function RegionBlock({ region, index }: { region: RegionData; index: string }) {
  return (
    <Reveal as="article" className="flex flex-col">
      <Media
        // src="/images/portugal.jpg"  ← vul in om de foto te tonen
        alt={region.imageAlt}
        caption={region.caption}
        index={index}
        ratio="aspect-[4/5]"
      />
      <div className="mt-8">
        <h3 className="font-serif text-display-sm text-ink">{region.country}</h3>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">{region.areasLabel}</p>
            <ul className="space-y-2 text-ink-soft">
              {region.areas.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-2 h-px w-3 shrink-0 bg-clay/60" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">{region.typesLabel}</p>
            <ul className="space-y-2 text-ink-soft">
              {region.types.map((type) => (
                <li key={type} className="flex gap-3">
                  <span className="mt-2 h-px w-3 shrink-0 bg-clay/60" aria-hidden="true" />
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Regions() {
  const { regions } = content;

  return (
    <Section id={regions.id} tone="cream" divided>
      <SectionHeading
        eyebrow={regions.eyebrow}
        title={regions.title}
        intro={regions.intro}
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-12">
        {/* De id's maken directe navigatie vanuit het menu mogelijk. */}
        <div id={regions.portugal.id} className="scroll-mt-28">
          <RegionBlock region={regions.portugal} index="01" />
        </div>
        <div id={regions.spain.id} className="scroll-mt-28">
          <RegionBlock region={regions.spain} index="02" />
        </div>
      </div>
    </Section>
  );
}
