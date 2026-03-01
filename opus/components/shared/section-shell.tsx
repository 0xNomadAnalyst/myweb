import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  wide?: boolean;
}

export function SectionShell({
  children,
  id,
  className,
  wide,
}: SectionShellProps) {
  return (
    <section id={id} className="bg-surface">
      <div
        className={cn(
          "mx-auto px-10 py-24 md:py-32",
          wide ? "max-w-[1300px]" : "max-w-[1150px]",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
