import { z } from "zod";
import { content } from "@/content/content";

/**
 * Validatieschema voor het introductieverzoek.
 * Wordt zowel client-side (directe feedback) als server-side (autoriteit)
 * gebruikt, zodat er één bron van waarheid is.
 */

const capitalOptions = content.form.capitalOptions;
const timingOptions = content.form.timingOptions;
const experienceOptions = content.form.experienceOptions;
const interestOptions = content.form.interestOptions;

export const introductionSchema = z
  .object({
    // Stap 1 — persoonlijke gegevens
    firstName: z.string().trim().min(2, "Vul uw voornaam in.").max(80),
    lastName: z.string().trim().min(2, "Vul uw achternaam in.").max(80),
    email: z.string().trim().email("Vul een geldig e-mailadres in.").max(160),
    phone: z
      .string()
      .trim()
      .min(6, "Vul een geldig telefoonnummer in.")
      .max(32)
      .regex(/^[+()\d\s-]+$/, "Vul een geldig telefoonnummer in."),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    role: z.string().trim().max(120).optional().or(z.literal("")),
    introducer: z.string().trim().max(120).optional().or(z.literal("")),

    // Stap 2 — beschikbaar vermogen
    capital: z.enum(
      capitalOptions as unknown as [string, ...string[]],
      { errorMap: () => ({ message: "Maak een keuze." }) }
    ),
    capitalOther: z.string().trim().max(280).optional().or(z.literal("")),

    // Stap 3 — interesse (minimaal één)
    interests: z
      .array(z.enum(interestOptions as unknown as [string, ...string[]]))
      .min(1, "Selecteer minimaal één interesse."),

    // Stap 4 — timing en ervaring
    timing: z.enum(timingOptions as unknown as [string, ...string[]], {
      errorMap: () => ({ message: "Maak een keuze." }),
    }),
    experience: z.enum(experienceOptions as unknown as [string, ...string[]], {
      errorMap: () => ({ message: "Maak een keuze." }),
    }),

    // Stap 5 — open toelichting
    notes: z.string().trim().max(1500).optional().or(z.literal("")),

    // Toestemming
    consent: z.literal(true, {
      errorMap: () => ({ message: "Bevestig dit om verder te gaan." }),
    }),
    privacy: z.literal(true, {
      errorMap: () => ({ message: "Bevestig dit om verder te gaan." }),
    }),

    // Honeypot — legitieme gebruikers laten dit leeg. We valideren het bewust
    // niet streng: de route detecteert een ingevulde waarde en geeft stil een
    // succesrespons terug, zodat bots geen signaal krijgen.
    website: z.string().max(200).optional(),
  })
  .refine(
    (data) =>
      data.capital !== "Anders, namelijk" ||
      (data.capitalOther && data.capitalOther.length > 0),
    {
      message: "Licht uw beschikbare vermogen kort toe.",
      path: ["capitalOther"],
    }
  );

export type IntroductionInput = z.infer<typeof introductionSchema>;
