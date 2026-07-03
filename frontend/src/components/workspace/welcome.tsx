"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { AntlerGlyph } from "@/components/brand/antler-glyph";
import { useI18n } from "@/core/i18n/hooks";
import { cn } from "@/lib/utils";

import { AuroraText } from "../ui/aurora-text";

function WelcomeDescription({ children }: { children: string }) {
  return (
    <p className="max-w-full text-wrap break-words whitespace-pre-line">
      {children}
    </p>
  );
}

export function Welcome({
  className,
  mode,
}: {
  className?: string;
  mode?: "ultra" | "pro" | "thinking" | "flash";
}) {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const isUltra = useMemo(() => mode === "ultra", [mode]);
  const colors = useMemo(() => {
    if (isUltra) {
      return ["#FF5FC4", "#B06BFF", "#7A5CFF"];
    }
    return ["var(--color-foreground)"];
  }, [isUltra]);
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-full flex-col items-center justify-center gap-2 px-4 py-4 text-center sm:px-8",
        className,
      )}
    >
      {/* The antler regrows on every mount — each new chat starts with the
          orchestration tree branching out. */}
      <AntlerGlyph className="mb-1 h-12" />
      <div className="max-w-full text-2xl font-bold">
        {searchParams.get("mode") === "skill" ? (
          `✨ ${t.welcome.createYourOwnSkill} ✨`
        ) : (
          <AuroraText colors={colors}>{t.welcome.greeting}</AuroraText>
        )}
      </div>
      {searchParams.get("mode") === "skill" ? (
        <div className="text-muted-foreground max-w-full text-sm">
          <WelcomeDescription>
            {t.welcome.createYourOwnSkillDescription}
          </WelcomeDescription>
        </div>
      ) : (
        <div className="text-muted-foreground max-w-full text-sm">
          <WelcomeDescription>{t.welcome.description}</WelcomeDescription>
        </div>
      )}
    </div>
  );
}
