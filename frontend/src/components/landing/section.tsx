import { cn } from "@/lib/utils";

export function Section({
  className,
  title,
  subtitle,
  children,
}: {
  className?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("mx-auto flex flex-col py-16", className)}>
      <header className="flex flex-col items-center justify-between">
        <div className="mb-4 bg-linear-to-r from-[#f6eeff] via-[#e7ccff] to-[#b06bff] bg-clip-text text-center text-5xl font-bold text-transparent">
          {title}
        </div>
        {subtitle && (
          <div className="text-center text-xl text-[var(--ap-body)]">
            {subtitle}
          </div>
        )}
      </header>
      <main className="mt-4">{children}</main>
    </section>
  );
}
