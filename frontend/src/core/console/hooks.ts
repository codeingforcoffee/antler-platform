import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  cancelRun,
  fetchConsoleRuns,
  fetchConsoleStats,
  fetchConsoleUsage,
} from "./api";

/** Keep the dashboard live without a manual refresh. */
const DASHBOARD_REFETCH_MS = 8000;
const USAGE_REFETCH_MS = 60_000;

export function useConsoleStats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["console", "stats"],
    queryFn: () => fetchConsoleStats(),
    refetchInterval: DASHBOARD_REFETCH_MS,
    retry: false,
  });
  return { stats: data ?? null, isLoading, error };
}

export function useConsoleRuns(options?: {
  limit?: number;
  offset?: number;
  status?: string;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["console", "runs", options ?? {}],
    queryFn: () => fetchConsoleRuns(options),
    refetchInterval: DASHBOARD_REFETCH_MS,
    placeholderData: (prev) => prev,
    retry: false,
  });
  return {
    runs: data?.runs ?? [],
    hasMore: data?.has_more ?? false,
    isLoading,
    error,
  };
}

export function useConsoleUsage(days = 14) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["console", "usage", days],
    queryFn: () => fetchConsoleUsage(days),
    refetchInterval: USAGE_REFETCH_MS,
    retry: false,
  });
  return { usage: data ?? null, isLoading, error };
}

export function useCancelRun() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ threadId, runId }: { threadId: string; runId: string }) =>
      cancelRun(threadId, runId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["console"] });
    },
  });
}
