import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-24 md:py-32 border-b border-border/40 last:border-0", className)}
      {...props}
    >
      {children}
    </section>
  );
}
