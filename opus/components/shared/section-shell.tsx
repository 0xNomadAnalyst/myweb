import { cn } from "@/lib/utils";

type SectionVariant = "hero" | "plate" | "feature" | "open";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: SectionVariant;
}

export function SectionShell({
  children,
  id,
  className,
  variant = "plate",
}: SectionShellProps) {
  if (variant === "hero") {
    return (
      <section id={id} className="scroll-mt-24">
        <div
          className={cn(
            "mx-auto max-w-[1180px] px-6 pt-32 pb-16 md:px-12 md:pt-36 md:pb-20",
            className,
          )}
        >
          {children}
        </div>
      </section>
    );
  }

  if (variant === "open") {
    return (
      <section
        id={id}
        className="scroll-mt-24"
      >
        <div
          className={cn(
            "mx-auto max-w-[1180px] px-6 py-12 md:px-12 md:py-12",
            className,
          )}
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="scroll-mt-24 md:px-8">
      <div
        className={cn(
          "mx-auto bg-surface px-6 py-12 md:rounded-lg md:border md:border-border md:px-12 md:py-12",
          variant === "feature" ? "max-w-[1360px]" : "max-w-[1180px]",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
