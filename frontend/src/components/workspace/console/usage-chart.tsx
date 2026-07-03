"use client";

import { type ConsoleUsageResponse } from "@/core/console";
import { useI18n } from "@/core/i18n/hooks";

import { fill, formatCompact, formatCurrency } from "./format";

const MAX_MODELS = 5;

/**
 * Hand-rolled daily-usage bars — deliberately dependency-free (no chart lib
 * in this repo). Each bar is one local day; height scales to the window max.
 */
export function UsageChart({ usage }: { usage: ConsoleUsageResponse }) {
  const { t } = useI18n();
  const max = Math.max(...usage.days.map((d) => d.total_tokens), 1);
  const models = Object.entries(usage.by_model)
    .sort((a, b) => b[1].tokens - a[1].tokens)
    .slice(0, MAX_MODELS);
  const maxModelTokens = Math.max(...models.map(([, m]) => m.tokens), 1);

  if (usage.total_runs === 0) {
    return (
      <p className="text-muted-foreground py-10 text-center text-sm">
        {t.console.noUsage}
      </p>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
      <div>
        <div className="flex h-36 items-end gap-[3px]">
          {usage.days.map((day, i) => {
            const isLast = i === usage.days.length - 1;
            const pct = (day.total_tokens / max) * 100;
            return (
              <div
                key={day.date}
                className="group relative flex h-full flex-1 items-end"
                title={`${day.date} · ${day.total_tokens.toLocaleString()} tokens · ${day.runs} runs${usage.currency && day.cost > 0 ? ` · ${formatCurrency(day.cost, usage.currency)}` : ""}`}
              >
                {day.total_tokens > 0 ? (
                  <div
                    className="w-full rounded-t-[3px] opacity-85 transition-opacity group-hover:opacity-100"
                    style={{
                      height: `${Math.max(pct, 2)}%`,
                      background: isLast
                        ? "linear-gradient(to top, var(--ap-orchid), var(--ap-rose))"
                        : "linear-gradient(to top, var(--ap-indigo), var(--ap-orchid))",
                    }}
                  />
                ) : (
                  <div className="bg-border h-[2px] w-full rounded-full" />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-muted-foreground mt-2 flex justify-between text-[10px] tabular-nums">
          <span>{usage.days[0]?.date.slice(5)}</span>
          <span>{usage.days[usage.days.length - 1]?.date.slice(5)}</span>
        </div>
      </div>
      <div className="min-w-0">
        <h4 className="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
          {t.console.byModel}
        </h4>
        <ul className="space-y-3">
          {models.map(([name, m]) => (
            <li key={name} className="min-w-0">
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="truncate" title={name}>
                  {name}
                </span>
                <span className="text-muted-foreground shrink-0 text-xs tabular-nums">
                  {formatCompact(m.tokens)}
                </span>
              </div>
              <div className="bg-muted mt-1 h-1.5 overflow-hidden rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.max((m.tokens / maxModelTokens) * 100, 3)}%`,
                    background: "var(--ap-grad)",
                  }}
                />
              </div>
              {(m.cost !== null && usage.currency) ||
              (m.input_tokens > 0 && m.cache_read_tokens > 0) ? (
                <div className="text-muted-foreground mt-1 flex justify-between text-[10px] tabular-nums">
                  <span>
                    {m.input_tokens > 0 && m.cache_read_tokens > 0
                      ? fill(t.console.cacheHit, {
                          pct: Math.round(
                            (m.cache_read_tokens / m.input_tokens) * 100,
                          ),
                        })
                      : ""}
                  </span>
                  <span>
                    {m.cost !== null && usage.currency
                      ? formatCurrency(m.cost, usage.currency)
                      : ""}
                  </span>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
