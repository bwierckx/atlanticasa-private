/**
 * Kleine helper om conditioneel classNames samen te voegen.
 * Bewust zonder externe dependency gehouden.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
