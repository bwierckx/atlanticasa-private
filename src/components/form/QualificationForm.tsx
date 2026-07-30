"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { content } from "@/content/content";
import { introductionSchema } from "@/lib/validation";
import { Field, TextInput, TextArea, ChoiceCard } from "@/components/form/fields";
import { cn } from "@/lib/cn";

const f = content.form;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  introducer: string;
  capital: string;
  capitalOther: string;
  interests: string[];
  timing: string;
  experience: string;
  notes: string;
  consent: boolean;
  privacy: boolean;
  website: string; // honeypot
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  introducer: "",
  capital: "",
  capitalOther: "",
  interests: [],
  timing: "",
  experience: "",
  notes: "",
  consent: false,
  privacy: false,
  website: "",
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const STEP_COUNT = 5;

export function QualificationForm() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const progress = useMemo(
    () => Math.round(((step + 1) / STEP_COUNT) * 100),
    [step]
  );

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleInterest = (value: string, checked: boolean) => {
    setData((d) => ({
      ...d,
      interests: checked
        ? [...d.interests, value]
        : d.interests.filter((v) => v !== value),
    }));
    setErrors((e) => ({ ...e, interests: undefined }));
  };

  /** Valideert alleen de velden van de huidige stap. */
  const validateStep = (current: number): boolean => {
    const e: Errors = {};
    if (current === 0) {
      if (data.firstName.trim().length < 2) e.firstName = "Vul uw voornaam in.";
      if (data.lastName.trim().length < 2) e.lastName = "Vul uw achternaam in.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Vul een geldig e-mailadres in.";
      if (!/^[+()\d\s-]{6,}$/.test(data.phone))
        e.phone = "Vul een geldig telefoonnummer in.";
    }
    if (current === 1) {
      if (!data.capital) e.capital = "Maak een keuze.";
      if (data.capital === "Anders, namelijk" && !data.capitalOther.trim())
        e.capitalOther = "Licht uw beschikbare vermogen kort toe.";
    }
    if (current === 2) {
      if (data.interests.length === 0)
        e.interests = "Selecteer minimaal één interesse.";
    }
    if (current === 3) {
      if (!data.timing) e.timing = "Maak een keuze.";
      if (!data.experience) e.experience = "Maak een keuze.";
    }
    if (current === 4) {
      if (!data.consent) e.consent = "Bevestig dit om verder te gaan.";
      if (!data.privacy) e.privacy = "Bevestig dit om verder te gaan.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEP_COUNT - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    // Volledige validatie als extra zekerheid vóór verzending.
    const parsed = introductionSchema.safeParse(data);
    if (!parsed.success) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/introductie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-cream-50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay/10 text-clay">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m4 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 font-serif text-display-sm text-ink">{f.success.title}</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
          {f.success.body}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-cream-50 p-6 sm:p-9">
      {/* Voortgang */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-xs text-ink-muted">
          <span>
            Stap {step + 1} van {STEP_COUNT} — {f.steps[step].label}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-sand-100">
          <motion.div
            className="h-full bg-clay"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Honeypot — verborgen voor gebruikers, zichtbaar voor bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
        <label htmlFor="website">Laat dit veld leeg</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === STEP_COUNT - 1) handleSubmit();
          else next();
        }}
        noValidate
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <fieldset className="space-y-5">
                <legend className="sr-only">Persoonlijke gegevens</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f.labels.firstName} htmlFor="firstName" error={errors.firstName}>
                    <TextInput
                      id="firstName"
                      value={data.firstName}
                      autoComplete="given-name"
                      invalid={!!errors.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                    />
                  </Field>
                  <Field label={f.labels.lastName} htmlFor="lastName" error={errors.lastName}>
                    <TextInput
                      id="lastName"
                      value={data.lastName}
                      autoComplete="family-name"
                      invalid={!!errors.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f.labels.email} htmlFor="email" error={errors.email}>
                    <TextInput
                      id="email"
                      type="email"
                      value={data.email}
                      autoComplete="email"
                      invalid={!!errors.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </Field>
                  <Field label={f.labels.phone} htmlFor="phone" error={errors.phone}>
                    <TextInput
                      id="phone"
                      type="tel"
                      value={data.phone}
                      autoComplete="tel"
                      invalid={!!errors.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f.labels.company} htmlFor="company">
                    <TextInput
                      id="company"
                      value={data.company}
                      autoComplete="organization"
                      onChange={(e) => set("company", e.target.value)}
                    />
                  </Field>
                  <Field label={f.labels.role} htmlFor="role">
                    <TextInput
                      id="role"
                      value={data.role}
                      onChange={(e) => set("role", e.target.value)}
                    />
                  </Field>
                </div>
                <Field label={f.labels.introducer} htmlFor="introducer">
                  <TextInput
                    id="introducer"
                    value={data.introducer}
                    onChange={(e) => set("introducer", e.target.value)}
                  />
                </Field>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend className="mb-5 block text-sm font-medium text-ink">
                  {f.capitalQuestion}
                </legend>
                <div className="space-y-3">
                  {f.capitalOptions.map((option) => (
                    <ChoiceCard
                      key={option}
                      type="radio"
                      name="capital"
                      value={option}
                      label={option}
                      checked={data.capital === option}
                      onChange={(value) => set("capital", value)}
                    />
                  ))}
                </div>
                {errors.capital && (
                  <p className="mt-2 text-sm text-clay-dark" role="alert">
                    {errors.capital}
                  </p>
                )}
                {data.capital === "Anders, namelijk" && (
                  <div className="mt-5">
                    <Field
                      label={f.capitalOtherLabel}
                      htmlFor="capitalOther"
                      error={errors.capitalOther}
                    >
                      <TextInput
                        id="capitalOther"
                        value={data.capitalOther}
                        invalid={!!errors.capitalOther}
                        onChange={(e) => set("capitalOther", e.target.value)}
                      />
                    </Field>
                  </div>
                )}
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend className="mb-5 block text-sm font-medium text-ink">
                  {f.interestQuestion}
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {f.interestOptions.map((option) => (
                    <ChoiceCard
                      key={option}
                      type="checkbox"
                      name="interests"
                      value={option}
                      label={option}
                      checked={data.interests.includes(option)}
                      onChange={toggleInterest}
                    />
                  ))}
                </div>
                {errors.interests && (
                  <p className="mt-2 text-sm text-clay-dark" role="alert">
                    {errors.interests}
                  </p>
                )}
              </fieldset>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <fieldset>
                  <legend className="mb-5 block text-sm font-medium text-ink">
                    {f.timingQuestion}
                  </legend>
                  <div className="space-y-3">
                    {f.timingOptions.map((option) => (
                      <ChoiceCard
                        key={option}
                        type="radio"
                        name="timing"
                        value={option}
                        label={option}
                        checked={data.timing === option}
                        onChange={(value) => set("timing", value)}
                      />
                    ))}
                  </div>
                  {errors.timing && (
                    <p className="mt-2 text-sm text-clay-dark" role="alert">
                      {errors.timing}
                    </p>
                  )}
                </fieldset>
                <fieldset>
                  <legend className="mb-5 block text-sm font-medium text-ink">
                    {f.experienceQuestion}
                  </legend>
                  <div className="space-y-3">
                    {f.experienceOptions.map((option) => (
                      <ChoiceCard
                        key={option}
                        type="radio"
                        name="experience"
                        value={option}
                        label={option}
                        checked={data.experience === option}
                        onChange={(value) => set("experience", value)}
                      />
                    ))}
                  </div>
                  {errors.experience && (
                    <p className="mt-2 text-sm text-clay-dark" role="alert">
                      {errors.experience}
                    </p>
                  )}
                </fieldset>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <Field label={f.notesQuestion} htmlFor="notes">
                  <TextArea
                    id="notes"
                    placeholder={f.notesPlaceholder}
                    value={data.notes}
                    onChange={(e) => set("notes", e.target.value)}
                  />
                </Field>

                <div className="space-y-4 border-t border-line pt-6">
                  <ConsentCheckbox
                    id="consent"
                    checked={data.consent}
                    onChange={(v) => set("consent", v)}
                    label={f.consentLabel}
                    error={errors.consent}
                  />
                  <ConsentCheckbox
                    id="privacy"
                    checked={data.privacy}
                    onChange={(v) => set("privacy", v)}
                    label={f.privacyLabel}
                    error={errors.privacy}
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-clay/10 p-4 text-sm text-clay-dark" role="alert">
                    {f.error}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigatie */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prev}
            className={cn(
              "text-sm font-medium text-ink-soft transition-colors hover:text-ink",
              step === 0 && "pointer-events-none opacity-0"
            )}
          >
            {f.prevLabel}
          </button>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-umber px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-clay-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {step === STEP_COUNT - 1
              ? status === "submitting"
                ? f.submittingLabel
                : f.submitLabel
              : f.nextLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

function ConsentCheckbox({
  id,
  checked,
  onChange,
  label,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer gap-3 text-sm leading-relaxed text-ink-soft">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-clay"
        />
        <span>{label}</span>
      </label>
      {error && (
        <p className="ml-8 mt-1 text-sm text-clay-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
