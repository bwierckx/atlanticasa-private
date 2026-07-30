import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { QualificationForm } from "@/components/form/QualificationForm";
import { content } from "@/content/content";

export function ContactSection() {
  const { contact, form } = content;

  return (
    <Section id={contact.id} tone="cream" divided>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Contactkanalen */}
        <div className="lg:col-span-5">
          <ContactChannels />
        </div>

        {/* Kwalificatieformulier */}
        <div id={form.id} className="scroll-mt-28 lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-clay/50" aria-hidden="true" />
              {form.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-display-sm text-ink">{form.title}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{form.intro}</p>
          </Reveal>
          <div className="mt-8">
            <QualificationForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
