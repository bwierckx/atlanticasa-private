import type { IntroductionInput } from "@/lib/validation";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  MODULAIRE FORMULIERVERWERKING
 * ─────────────────────────────────────────────────────────────────────────────
 *  Deze module ontkoppelt "wat er met een aanvraag gebeurt" van de route.
 *  Er wordt pas een externe integratie geactiveerd wanneer de bijbehorende
 *  environment variables zijn ingesteld. Zonder configuratie wordt de aanvraag
 *  alleen server-side gelogd, zodat de site zonder externe koppeling werkt.
 *
 *  Voeg later eenvoudig een koppeling toe met bijvoorbeeld HubSpot, Pipedrive,
 *  Mailchimp, Brevo, een eigen CRM of een beveiligde mailbox.
 */

export type DispatchResult = {
  ok: boolean;
  channels: string[];
  errors: string[];
};

/** Verstuur een notificatiemail via Resend, indien geconfigureerd. */
async function sendEmail(data: IntroductionInput): Promise<string | null> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !to || !from) return null; // niet geconfigureerd → overslaan

  const lines = [
    `Nieuw introductieverzoek — ${data.firstName} ${data.lastName}`,
    "",
    `E-mail: ${data.email}`,
    `Telefoon: ${data.phone}`,
    data.company ? `Bedrijf: ${data.company}` : "",
    data.role ? `Functie/achtergrond: ${data.role}` : "",
    data.introducer ? `Introducer: ${data.introducer}` : "",
    "",
    `Beschikbaar vermogen: ${data.capital}${
      data.capitalOther ? ` (${data.capitalOther})` : ""
    }`,
    `Interesse: ${data.interests.join(", ")}`,
    `Timing: ${data.timing}`,
    `Ervaring: ${data.experience}`,
    "",
    data.notes ? `Toelichting: ${data.notes}` : "Geen toelichting.",
  ].filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Introductieverzoek — ${data.firstName} ${data.lastName}`,
      text: lines.join("\n"),
      reply_to: data.email,
    }),
  });

  if (!res.ok) {
    throw new Error(`E-mailprovider gaf status ${res.status}`);
  }
  return "email";
}

/** Stuur de aanvraag door naar een generieke CRM-webhook, indien geconfigureerd. */
async function sendToCrmWebhook(
  data: IntroductionInput
): Promise<string | null> {
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (!webhook) return null; // niet geconfigureerd → overslaan

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "atlanticasa-private",
      submittedAt: new Date().toISOString(),
      lead: data,
    }),
  });

  if (!res.ok) {
    throw new Error(`CRM-webhook gaf status ${res.status}`);
  }
  return "crm";
}

/**
 * Verwerk een geldig introductieverzoek. Activeert alleen de kanalen waarvoor
 * geldige configuratie aanwezig is. Faalt niet wanneer er geen koppeling is.
 */
export async function dispatchIntroduction(
  data: IntroductionInput
): Promise<DispatchResult> {
  const channels: string[] = [];
  const errors: string[] = [];

  const tasks: Array<Promise<string | null>> = [
    sendEmail(data),
    sendToCrmWebhook(data),
  ];

  const results = await Promise.allSettled(tasks);
  for (const r of results) {
    if (r.status === "fulfilled") {
      if (r.value) channels.push(r.value);
    } else {
      errors.push(r.reason instanceof Error ? r.reason.message : String(r.reason));
    }
  }

  // Zonder actieve koppeling: log server-side zodat niets verloren gaat.
  if (channels.length === 0 && errors.length === 0) {
    console.info(
      "[introductie] Geen externe koppeling geconfigureerd. Aanvraag ontvangen van:",
      `${data.firstName} ${data.lastName} <${data.email}>`
    );
    channels.push("log");
  }

  return { ok: errors.length === 0, channels, errors };
}
