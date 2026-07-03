"use client";

import { CircleStopIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { type ConsoleRun, useCancelRun } from "@/core/console";
import { useI18n } from "@/core/i18n/hooks";
import { type Translations } from "@/core/i18n/locales/types";
import { formatTimeAgo } from "@/core/utils/datetime";
import { cn } from "@/lib/utils";

import { formatCompact, formatCurrency, formatDuration } from "./format";

const ACTIVE_STATUSES = new Set(["pending", "running"]);

const STATUS_STYLES: Record<string, { badge: string; dot: string }> = {
  running: {
    badge: "border-primary/25 bg-primary/10 text-primary",
    dot: "bg-primary animate-pulse",
  },
  pending: {
    badge: "border-border bg-muted text-muted-foreground",
    dot: "bg-muted-foreground animate-pulse",
  },
  success: {
    badge:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  error: {
    badge: "border-destructive/25 bg-destructive/10 text-destructive",
    dot: "bg-destructive",
  },
  timeout: {
    badge:
      "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  interrupted: {
    badge:
      "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
};

function statusLabel(t: Translations, status: string): string {
  switch (status) {
    case "pending":
      return t.console.statusPending;
    case "running":
      return t.console.statusRunning;
    case "success":
      return t.console.statusSuccess;
    case "error":
      return t.console.statusError;
    case "timeout":
      return t.console.statusTimeout;
    case "interrupted":
      return t.console.statusInterrupted;
    default:
      return status;
  }
}

function StatusBadge({ status }: { status: string }) {
  const { t } = useI18n();
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.pending!;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs whitespace-nowrap",
        style.badge,
      )}
    >
      <span className={cn("size-1.5 rounded-full", style.dot)} />
      {statusLabel(t, status)}
    </span>
  );
}

export function RunsTable({
  runs,
  currency,
}: {
  runs: ConsoleRun[];
  currency: string | null;
}) {
  const { t } = useI18n();
  const cancelRun = useCancelRun();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-muted-foreground text-left text-xs">
            <th className="py-2 pr-4 font-medium">{t.console.colStatus}</th>
            <th className="py-2 pr-4 font-medium">{t.console.colThread}</th>
            <th className="py-2 pr-4 font-medium">{t.console.colModel}</th>
            <th className="py-2 pr-4 text-right font-medium">
              {t.console.colTokens}
            </th>
            <th className="py-2 pr-4 text-right font-medium">
              {t.console.colCost}
            </th>
            <th className="py-2 pr-4 text-right font-medium">
              {t.console.colDuration}
            </th>
            <th className="py-2 pr-4 font-medium">{t.console.colTime}</th>
            <th className="py-2" />
          </tr>
        </thead>
        <tbody>
          {runs.map((run) => (
            <tr
              key={run.run_id}
              className="border-border/60 hover:bg-muted/40 border-t transition-colors"
            >
              <td className="py-2.5 pr-4">
                <StatusBadge status={run.status} />
              </td>
              <td className="max-w-[280px] py-2.5 pr-4">
                <Link
                  href={`/workspace/chats/${run.thread_id}`}
                  className="hover:text-primary block truncate font-medium"
                  title={run.thread_title ?? run.thread_id}
                >
                  {run.thread_title ?? t.console.untitledThread}
                </Link>
                {run.error ? (
                  <p
                    className="text-destructive/80 truncate text-xs"
                    title={run.error}
                  >
                    {run.error}
                  </p>
                ) : null}
              </td>
              <td className="text-muted-foreground max-w-[160px] truncate py-2.5 pr-4">
                {run.model_name ?? "—"}
              </td>
              <td className="py-2.5 pr-4 text-right tabular-nums">
                {run.total_tokens > 0 ? formatCompact(run.total_tokens) : "—"}
              </td>
              <td className="py-2.5 pr-4 text-right tabular-nums">
                {run.cost !== null ? formatCurrency(run.cost, currency) : "—"}
              </td>
              <td className="text-muted-foreground py-2.5 pr-4 text-right tabular-nums">
                {formatDuration(run.duration_seconds)}
              </td>
              <td className="text-muted-foreground py-2.5 pr-4 whitespace-nowrap">
                {run.created_at ? formatTimeAgo(run.created_at) : "—"}
              </td>
              <td className="py-2.5 text-right">
                {ACTIVE_STATUSES.has(run.status) ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive size-7"
                    title={t.console.cancel}
                    aria-label={t.console.cancel}
                    disabled={cancelRun.isPending}
                    onClick={() =>
                      cancelRun.mutate({
                        threadId: run.thread_id,
                        runId: run.run_id,
                      })
                    }
                  >
                    <CircleStopIcon className="size-4" />
                  </Button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
