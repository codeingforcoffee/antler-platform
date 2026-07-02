"use client";

import { CheckIcon, GlobeIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { enUS, zhCN, zhTW, type Locale } from "@/core/i18n";
import { useI18n } from "@/core/i18n/hooks";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Locale; label: string }[] = [
  { value: "en-US", label: enUS.locale.localName },
  { value: "zh-CN", label: zhCN.locale.localName },
  { value: "zh-TW", label: zhTW.locale.localName },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, changeLocale } = useI18n();
  const router = useRouter();

  const current =
    OPTIONS.find((option) => option.value === locale) ?? OPTIONS[0];

  const onSelect = (value: Locale) => {
    if (value === locale) return;
    changeLocale(value);
    // Re-render server components (e.g. the header label) with the new cookie.
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="切换语言 / Change language"
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-[var(--ap-lilac)] transition-colors hover:text-[var(--ap-haze)]",
            className,
          )}
        >
          <GlobeIcon className="size-4" />
          <span>{current?.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[9rem]">
        {OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="flex items-center justify-between gap-4"
          >
            {option.label}
            {option.value === locale && <CheckIcon className="size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
