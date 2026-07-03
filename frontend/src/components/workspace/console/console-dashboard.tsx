"use client";

import { DatabaseIcon, InboxIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ConsoleUnavailableError,
  useConsoleRuns,
  useConsoleStats,
  useConsoleUsage,
} from "@/core/console";
import { useI18n } from "@/core/i18n/hooks";

import { fill, formatCompact, formatCurrency } from "./format";
import { RunsTable } from "./runs-table";
import { UsageChart } from "./usage-chart";

const USAGE_DAYS = 14;
const PAGE_SIZE = 20;

function StatCard({
  label,
  value,
  hint,
  brand = false,
}: {
  label: string;
  value: string;
  hint?: string;
  brand?: boolean;
}) {
  return (
    <div className="bg-card rounded-xl border p-4">
      <p className="text-muted-foreground text-xs">{label}</p>
      <p
        className={
          brand
            ? "brand-text mt-1 text-2xl font-semibold tabular-nums"
            : "mt-1 text-2xl font-semibold tabular-nums"
        }
      >
        {value}
      </p>
      {hint ? (
        <p className="text-muted-foreground mt-1 truncate text-xs">{hint}</p>
      ) : null}
    </div>
  );
}

function SectionCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-card rounded-xl border p-4 sm:p-5">
      <header className="mb-4">
        <h3 className="font-display font-semibold tracking-tight">{title}</h3>
        {subtitle ? (
          <p className="text-muted-foreground text-xs">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

/** Full-page notice when the backend runs on the memory database backend. */
function ConsoleUnavailable() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <DatabaseIcon
        className="text-muted-foreground size-10"
        strokeWidth={1.5}
      />
      <h2 className="text-lg font-semibold">{t.console.unavailableTitle}</h2>
      <p className="text-muted-foreground max-w-sm text-sm">
        {t.console.unavailableHint}
      </p>
      <code className="bg-muted text-muted-foreground mt-1 rounded-md px-2 py-1 text-xs">
        database.backend: sqlite
      </code>
    </div>
  );
}

export function ConsoleDashboard() {
  const { t } = useI18n();
  const [offset, setOffset] = useState(0);
  const {
    stats,
    isLoading: statsLoading,
    error: statsError,
  } = useConsoleStats();
  const { usage, isLoading: usageLoading } = useConsoleUsage(USAGE_DAYS);
  const {
    runs,
    hasMore,
    isLoading: runsLoading,
  } = useConsoleRuns({ limit: PAGE_SIZE, offset });

  if (statsError instanceof ConsoleUnavailableError) {
    return <ConsoleUnavailable />;
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          {t.console.title}
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          {t.console.subtitle}
        </p>
      </header>

      {statsError && !stats ? (
        <p className="text-destructive py-8 text-sm">{t.console.loadFailed}</p>
      ) : (
        <>
          <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {statsLoading || !stats ? (
              Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-[92px] rounded-xl" />
              ))
            ) : (
              <>
                <StatCard
                  label={t.console.statCost}
                  value={
                    stats.currency
                      ? formatCurrency(stats.total_cost ?? 0, stats.currency)
                      : "—"
                  }
                  hint={
                    stats.currency
                      ? usage?.total_cost != null
                        ? fill(t.console.statCostHint, {
                            days: USAGE_DAYS,
                            cost: formatCurrency(
                              usage.total_cost,
                              usage.currency,
                            ),
                          })
                        : undefined
                      : t.console.pricingNotConfigured
                  }
                  brand
                />
                <StatCard
                  label={t.console.statTokens}
                  value={formatCompact(stats.total_tokens)}
                  hint={
                    usage
                      ? fill(t.console.statTokensHint, {
                          days: USAGE_DAYS,
                          tokens: formatCompact(usage.total_tokens),
                        })
                      : undefined
                  }
                />
                <StatCard
                  label={t.console.statRuns}
                  value={formatCompact(stats.total_runs)}
                  hint={`${fill(t.console.statRunsActive, { count: stats.active_runs })} · ${fill(t.console.statRunsFailed, { count: stats.failed_runs })}`}
                />
                <StatCard
                  label={t.console.statThreads}
                  value={formatCompact(stats.total_threads)}
                />
                <StatCard
                  label={t.console.statAgents}
                  value={formatCompact(stats.total_agents)}
                />
              </>
            )}
          </div>

          <div className="space-y-4">
            <SectionCard
              title={t.console.usageTitle}
              subtitle={fill(t.console.usageSubtitle, { days: USAGE_DAYS })}
            >
              {usageLoading || !usage ? (
                <Skeleton className="h-36 rounded-lg" />
              ) : (
                <UsageChart usage={usage} />
              )}
            </SectionCard>

            <SectionCard
              title={t.console.runsTitle}
              subtitle={t.console.runsSubtitle}
            >
              {runsLoading ? (
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-9 rounded-md" />
                  ))}
                </div>
              ) : runs.length === 0 && offset === 0 ? (
                <div className="flex flex-col items-center gap-2 py-12 text-center">
                  <InboxIcon
                    className="text-muted-foreground size-8"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm font-medium">{t.console.empty}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.console.emptyHint}
                  </p>
                </div>
              ) : (
                <>
                  <RunsTable runs={runs} currency={stats?.currency ?? null} />
                  {(offset > 0 || hasMore) && (
                    <footer className="mt-3 flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={offset === 0}
                        onClick={() =>
                          setOffset(Math.max(0, offset - PAGE_SIZE))
                        }
                      >
                        {t.console.pagePrev}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!hasMore}
                        onClick={() => setOffset(offset + PAGE_SIZE)}
                      >
                        {t.console.pageNext}
                      </Button>
                    </footer>
                  )}
                </>
              )}
            </SectionCard>
          </div>
        </>
      )}
    </div>
  );
}
