"use client";

import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Compact antler mark — the workspace-sized sibling of the landing hero's
 * AntlerMark. Main beam = lead agent, tines = subagents, node dots = task
 * results. Reuses the .ap-branch / .ap-node draw animations from globals.css
 * (which also handle prefers-reduced-motion), so the mark regrows each time
 * it mounts — e.g. on every new chat.
 */
export function AntlerGlyph({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  const gradientId = useId();

  const branches: { d: string; w: number; delay: string }[] = [
    // main beam — the lead agent
    {
      d: "M56,136 C50,108 64,94 64,74 C64,56 54,44 58,24",
      w: 9,
      delay: "0s",
    },
    // right tine
    { d: "M62,86 C78,84 90,74 94,56", w: 6.5, delay: "0.35s" },
    // left tine
    { d: "M60,58 C46,56 36,46 33,32", w: 6.5, delay: "0.5s" },
    // crown fork
    { d: "M58,24 C54,17 52,11 52,4", w: 5, delay: "0.7s" },
    { d: "M59,24 C65,17 70,12 74,6", w: 5, delay: "0.75s" },
  ];

  const nodes: { cx: number; cy: number; r: number; delay: string }[] = [
    { cx: 94, cy: 56, r: 7, delay: "0.75s" },
    { cx: 33, cy: 32, r: 7, delay: "0.9s" },
    { cx: 52, cy: 4, r: 5.5, delay: "1.05s" },
    { cx: 74, cy: 6, r: 5.5, delay: "1.1s" },
  ];

  return (
    <svg
      viewBox="22 -4 82 146"
      fill="none"
      role="img"
      aria-label="Antler Platform"
      className={cn("h-10 w-auto", className)}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="22"
          y1="142"
          x2="104"
          y2="-4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A5CFF" />
          <stop offset="0.55" stopColor="#B06BFF" />
          <stop offset="1" stopColor="#FF5FC4" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {branches.map((b) => (
          <path
            key={b.d}
            d={b.d}
            strokeWidth={b.w}
            pathLength={1}
            className={animated ? "ap-branch" : undefined}
            style={animated ? { animationDelay: b.delay } : undefined}
          />
        ))}
      </g>
      <g fill={`url(#${gradientId})`}>
        {nodes.map((n) => (
          <circle
            key={`${n.cx}-${n.cy}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            className={animated ? "ap-node" : undefined}
            style={animated ? { animationDelay: n.delay } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}
