import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-ink"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-clay-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border bg-cream-50 px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-clay/40";

export function TextInput({
  invalid,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      className={cn(inputBase, invalid ? "border-clay-dark/60" : "border-line", className)}
      {...props}
    />
  );
}

export function TextArea({
  invalid,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(inputBase, "min-h-32 resize-y", invalid ? "border-clay-dark/60" : "border-line", className)}
      {...props}
    />
  );
}

/** Radio- of checkbox-optie in kaartvorm. */
export function ChoiceCard({
  type,
  name,
  value,
  checked,
  onChange,
  label,
}: {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
  label: string;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-200",
        checked
          ? "border-clay bg-clay/[0.06] text-ink"
          : "border-line bg-cream-50 text-ink-soft hover:border-clay/40"
      )}
    >
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(value, e.target.checked)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center border transition-colors",
          type === "radio" ? "rounded-full" : "rounded-md",
          checked ? "border-clay bg-clay text-cream" : "border-ink/30 bg-transparent"
        )}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2.5 6.5 5 9l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span>{label}</span>
    </label>
  );
}
