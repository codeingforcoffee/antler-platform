import { fetch } from "@/core/api/fetcher";
import { getBackendBaseURL } from "@/core/config";

import type {
  ConsoleRunsResponse,
  ConsoleStats,
  ConsoleUsageResponse,
} from "./types";

/**
 * The console needs a SQL database backend (`database.backend: sqlite |
 * postgres`); the gateway answers 503 on the memory backend. Surfaced as a
 * dedicated error so the page can render setup guidance instead of a generic
 * failure.
 */
export class ConsoleUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConsoleUnavailableError";
  }
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { detail?: string };
    if (res.status === 503 && err.detail?.includes("SQL database backend")) {
      throw new ConsoleUnavailableError(err.detail);
    }
    throw new Error(err.detail ?? `Request failed: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchConsoleStats(): Promise<ConsoleStats> {
  return getJson<ConsoleStats>(`${getBackendBaseURL()}/api/console/stats`);
}

export async function fetchConsoleRuns(options?: {
  limit?: number;
  offset?: number;
  status?: string;
}): Promise<ConsoleRunsResponse> {
  const params = new URLSearchParams();
  if (options?.limit) params.set("limit", String(options.limit));
  if (options?.offset) params.set("offset", String(options.offset));
  if (options?.status) params.set("status", options.status);
  const qs = params.toString();
  return getJson<ConsoleRunsResponse>(
    `${getBackendBaseURL()}/api/console/runs${qs ? `?${qs}` : ""}`,
  );
}

export async function fetchConsoleUsage(
  days = 14,
): Promise<ConsoleUsageResponse> {
  const params = new URLSearchParams({ days: String(days) });
  // getTimezoneOffset() is minutes *behind* UTC (UTC+8 → -480); the API wants
  // the signed local offset, so flip it.
  const tzOffset = -new Date().getTimezoneOffset();
  if (tzOffset !== 0) params.set("tz_offset_minutes", String(tzOffset));
  return getJson<ConsoleUsageResponse>(
    `${getBackendBaseURL()}/api/console/usage?${params.toString()}`,
  );
}

export async function cancelRun(
  threadId: string,
  runId: string,
): Promise<void> {
  const res = await fetch(
    `${getBackendBaseURL()}/api/threads/${encodeURIComponent(threadId)}/runs/${encodeURIComponent(runId)}/cancel`,
    { method: "POST" },
  );
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { detail?: string };
    throw new Error(err.detail ?? `Failed to cancel run: ${res.statusText}`);
  }
}
