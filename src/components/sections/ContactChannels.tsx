import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { content } from "@/content/content";

/** Bouwt de introducer-zin op met de centraal beheerde namen. */
function buildIntroducerText(template: string, introducers: readonly string[]) {
  const names =
    introducers.length > 1
      ? `${introducers.slice(0, -1).join(", ")} of ${introducers[introducers.length - 1]}`
      : introducers[0] ?? "";
  return template.replace("{introducers}", names);
}

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v0a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
const IconChat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
  </svg>
);
const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.7" />
  </svg>
);

export function ContactChannels() {
  const { contact } = content;
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  const items = [
    {
      icon: <IconPhone />,
      label: contact.channels.callbackLabel,
      href: `tel:${siteConfig.contact.phoneHref}`,
      value: siteConfig.contact.phoneDisplay,
    },
    {
      icon: <IconMail />,
      label: contact.channels.emailLabel,
      href: `mailto:${siteConfig.contact.email}`,
      value: siteConfig.contact.email,
    },
    {
      icon: <IconChat />,
      label: contact.channels.whatsappLabel,
      href: whatsappHref,
      value: "WhatsApp",
      external: true,
    },
    {
      icon: <IconUsers />,
      label: contact.channels.referralLabel,
      href: "#aanvraag",
      value: "Vermeld uw introducer in het formulier",
    },
  ];

  return (
    <Reveal className="lg:sticky lg:top-28">
      <p className="eyebrow flex items-center gap-3">
        <span className="h-px w-8 bg-clay/50" aria-hidden="true" />
        {contact.eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-display-sm text-ink">{contact.title}</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">{contact.paragraph}</p>

      <ul className="mt-8 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-start gap-4 rounded-xl border border-line bg-cream-50 p-4 transition-colors duration-300 hover:border-clay/40"
            >
              <span className="mt-0.5 text-clay">{item.icon}</span>
              <span>
                <span className="block text-sm font-medium text-ink">{item.label}</span>
                <span className="block text-sm text-ink-muted">{item.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 rounded-xl bg-sand-100/60 p-5 text-sm leading-relaxed text-ink-soft">
        {buildIntroducerText(contact.introducerLead, siteConfig.introducers)}
      </p>
    </Reveal>
  );
}
