/** Small pure helpers shared by the console widgets. */

/** Fill `{name}` placeholders in an i18n template. */
export function fill(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_match, key: string) =>
    String(vars[key] ?? ""),
  );
}

const compactFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function formatCompact(value: number): string {
  return compactFormatter.format(value);
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  CNY: "¥",
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "JP¥",
};

/** Compact money display with precision scaled to magnitude (¥0.0042 → ¥42.50). */
export function formatCurrency(value: number, currency: string | null): string {
  const symbol = currency ? (CURRENCY_SYMBOLS[currency] ?? `${currency} `) : "";
  if (value === 0) return `${symbol}0.00`;
  const digits = value >= 100 ? 1 : value >= 1 ? 2 : value >= 0.01 ? 3 : 4;
  return `${symbol}${value.toFixed(digits)}`;
}

export function formatDuration(seconds: number | null): string {
  if (seconds === null || Number.isNaN(seconds)) return "—";
  if (seconds < 1) return "<1s";
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ${Math.round(seconds % 60)}s`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m`;
}
