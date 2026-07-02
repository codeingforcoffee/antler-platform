"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AuroraText } from "@/components/ui/aurora-text";
import { cn } from "@/lib/utils";

const CAPABILITIES = [
  "深度研究",
  "生成网页",
  "编写代码",
  "制作播客",
  "生成幻灯片",
  "分析数据",
  "创作歌曲",
  "整理邮件",
  "完成一切",
];

const AURORA_COLORS = ["#FF5FC4", "#B06BFF", "#7A5CFF", "#E7CCFF"];

export function Hero({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % CAPABILITIES.length),
      2200,
    );
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section
      className={cn(
        "relative flex min-h-screen w-full items-center overflow-hidden",
        "bg-[var(--ap-ink)] text-[var(--ap-haze)]",
        className,
      )}
    >
      {/* ambient pink-purple atmosphere (replaces DeerFlow's starfield) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute top-[-20%] right-[-8%] h-[70vh] w-[70vh] rounded-full opacity-40 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #b06bff 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-25%] left-[-10%] h-[55vh] w-[55vh] rounded-full opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #ff5fc4 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% -10%, transparent 40%, rgba(8,4,15,0.75) 100%)",
          }}
        />
      </div>

      <div className="container-md relative z-10 mx-auto grid grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
        {/* Thesis column */}
        <div className="order-2 flex flex-col items-start lg:order-1">
          <p className="font-brand-mono mb-6 flex items-center gap-3 text-[0.7rem] tracking-[0.34em] text-[var(--ap-mauve)] uppercase">
            <span className="inline-block h-px w-8 bg-[var(--ap-orchid)]" />
            Agent Orchestration Harness
          </p>

          <h1 className="text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.06] font-bold tracking-tight text-[var(--ap-haze)]">
            让 <span className="font-display">Antler</span> 帮你
            <span className="mt-1 flex h-[1.15em] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={CAPABILITIES[index]}
                  initial={{ opacity: 0, y: "-70%", filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: "70%", filter: "blur(12px)" }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="font-display font-bold"
                >
                  <AuroraText speed={3} colors={AURORA_COLORS}>
                    {CAPABILITIES[index]}
                  </AuroraText>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ap-body)]">
            像鹿角一样,主 Agent 向下分叉出子
            Agent——在真实沙箱里研究、编码、创作,
            把几分钟到数小时的长任务一手做完。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/workspace" className="group">
              <span
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-[#160a22] shadow-[0_10px_34px_-8px_rgba(176,107,255,0.65)] transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ backgroundImage: "var(--ap-grad)" }}
              >
                开始体验
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            <button
              type="button"
              onClick={scrollDown}
              className="rounded-full border border-[#b06bff]/25 px-6 py-3.5 text-sm text-[var(--ap-lilac)] transition-colors hover:border-[#b06bff]/60 hover:text-[var(--ap-haze)]"
            >
              看它怎么工作 ↓
            </button>
          </div>

          <p className="mt-10 text-xs tracking-wide text-[var(--ap-mauve)]">
            子 Agent · 沙箱 · 记忆 · 技能
          </p>
        </div>

        {/* Signature: the antler as an agent-orchestration tree */}
        <div className="order-1 flex justify-center lg:order-2">
          <AntlerMark className="h-[32vh] max-h-[300px] w-auto sm:h-[40vh] sm:max-h-[400px] lg:h-[78vh] lg:max-h-[640px]" />
        </div>
      </div>
    </section>
  );
}

/**
 * The antler mark: a lead agent's main beam branching into sub-agent tines,
 * each ending in a glowing node. Grows itself in on load.
 */
function AntlerMark({ className }: { className?: string }) {
  const branches: { d: string; w: number; delay: string }[] = [
    // main beam — the lead agent
    {
      d: "M220,548 C214,470 248,432 250,372 C252,320 230,286 228,236 C226,196 246,168 264,132",
      w: 7,
      delay: "0.05s",
    },
    // lower-right tine
    {
      d: "M243,430 C288,428 320,420 346,388 C358,373 362,352 362,332",
      w: 5.5,
      delay: "0.5s",
    },
    // right-mid tine + its fork
    { d: "M250,372 C293,368 323,350 341,314", w: 5, delay: "0.75s" },
    { d: "M329,338 C337,326 346,318 358,312", w: 4, delay: "1.05s" },
    // left-mid tine
    { d: "M234,338 C196,340 168,326 150,296", w: 5, delay: "0.9s" },
    // upper-left tine
    { d: "M228,236 C202,232 180,214 170,186", w: 4.5, delay: "1.15s" },
    // upper-right tine
    { d: "M241,214 C263,206 281,192 293,168", w: 4.5, delay: "1.25s" },
    // crown forks
    { d: "M256,150 C247,140 241,126 239,110", w: 3.5, delay: "1.45s" },
    { d: "M259,150 C273,142 283,132 289,114", w: 3.5, delay: "1.5s" },
  ];

  const nodes: { cx: number; cy: number; r: number; delay: string }[] = [
    { cx: 362, cy: 332, r: 5, delay: "1.5s" },
    { cx: 358, cy: 312, r: 3.5, delay: "1.6s" },
    { cx: 150, cy: 296, r: 4.5, delay: "1.55s" },
    { cx: 170, cy: 186, r: 4, delay: "1.7s" },
    { cx: 293, cy: 168, r: 4, delay: "1.7s" },
    { cx: 239, cy: 110, r: 3.5, delay: "1.85s" },
    { cx: 289, cy: 114, r: 3.5, delay: "1.9s" },
  ];

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className="ap-glow pointer-events-none absolute top-1/2 left-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(176,107,255,0.55) 0%, rgba(255,95,196,0.22) 45%, transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 440 560"
        fill="none"
        role="img"
        aria-label="Antler — 主 Agent 向下分叉出子 Agent 的编排结构"
        className="relative h-full w-full"
        style={{
          filter:
            "drop-shadow(0 0 6px rgba(255,95,196,0.45)) drop-shadow(0 0 20px rgba(176,107,255,0.4))",
        }}
      >
        <defs>
          <linearGradient
            id="apStroke"
            x1="0"
            y1="560"
            x2="440"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7A5CFF" />
            <stop offset="0.55" stopColor="#B06BFF" />
            <stop offset="1" stopColor="#FF5FC4" />
          </linearGradient>
        </defs>

        <g
          stroke="url(#apStroke)"
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
              className="ap-branch"
              style={{ animationDelay: b.delay }}
            />
          ))}
        </g>

        {/* root node — the lead agent */}
        <circle
          cx={220}
          cy={548}
          r={7}
          fill="url(#apStroke)"
          className="ap-node"
          style={{ animationDelay: "0.05s" }}
        />
        {/* tip nodes — sub-agents */}
        <g fill="#FCE3F6">
          {nodes.map((n) => (
            <circle
              key={`${n.cx}-${n.cy}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              className="ap-node"
              style={{ animationDelay: n.delay }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
