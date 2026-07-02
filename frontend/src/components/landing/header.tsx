import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/core/i18n/locale";
import { getI18n } from "@/core/i18n/server";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./language-switcher";

export type HeaderProps = {
  className?: string;
  homeURL?: string;
  locale?: Locale;
};

export async function Header({ className, homeURL, locale }: HeaderProps) {
  const isExternalHome = !homeURL;
  const { t } = await getI18n(locale);
  return (
    <header
      className={cn(
        "container-md fixed top-0 right-0 left-0 z-20 mx-auto flex h-16 items-center justify-between backdrop-blur-xs",
        className,
      )}
    >
      <div className="flex items-center gap-6">
        <a
          href={
            homeURL ?? "https://github.com/codeingforcoffee/antler-platform"
          }
          target={isExternalHome ? "_blank" : "_self"}
          rel={isExternalHome ? "noopener noreferrer" : undefined}
        >
          <h1 className="font-display text-xl font-semibold tracking-tight">
            Antler Platform
          </h1>
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <LanguageSwitcher />
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 z-0 h-full w-full rounded-full opacity-30 blur-2xl"
            style={{
              background: "linear-gradient(90deg, #ff80b5 0%, #9089fc 100%)",
              filter: "blur(16px)",
            }}
          />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="group relative z-10 border-[#b06bff]/40 bg-transparent text-[var(--ap-lilac)] hover:border-[#b06bff]/70 hover:text-[var(--ap-haze)]"
          >
            <a href="mailto:garryxia666@gmail.com">
              <EnvelopeClosedIcon className="size-4" />
              {t.home.contact}
            </a>
          </Button>
        </div>
      </div>
      <hr className="from-border/0 via-border/70 to-border/0 absolute top-16 right-0 left-0 z-10 m-0 h-px w-full border-none bg-linear-to-r" />
    </header>
  );
}
