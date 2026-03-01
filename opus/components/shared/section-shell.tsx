import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionShell({ children, id, className }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-5xl px-6 py-24 md:py-32", className)}
    >
      {children}
    </section>
  );
}
