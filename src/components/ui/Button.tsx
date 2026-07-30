import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60";

const sizes = "px-7 py-3.5";

const variants: Record<Variant, string> = {
  primary:
    "bg-umber text-cream hover:bg-clay-dark",
  secondary:
    "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:text-clay",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

export function LinkButton({ href, variant = "primary", className, children }: LinkButtonProps) {
  const isAnchor = href.startsWith("#");
  const classes = cn(base, sizes, variants[variant], className);
  if (isAnchor) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type ActionButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ActionButtonProps) {
  return (
    <button type={type} className={cn(base, sizes, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
