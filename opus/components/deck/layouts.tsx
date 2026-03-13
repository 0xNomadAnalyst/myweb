import { cn } from "@/lib/utils";

interface SlideTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SlideTitle({ eyebrow, title, subtitle, className }: SlideTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      {eyebrow && (
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground/50">
          {eyebrow}
        </p>
      )}
      <h2 className="text-5xl font-medium tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-5 max-w-[1200px] text-xl leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface TwoColProps {
  children: React.ReactNode;
  split?: string;
  className?: string;
}

export function TwoCol({ children, split = "1fr 1fr", className }: TwoColProps) {
  return (
    <div
      className={cn("grid items-start gap-16", className)}
      style={{ gridTemplateColumns: split }}
    >
      {children}
    </div>
  );
}

interface CardGridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

export function CardGrid({ children, cols = 3, className }: CardGridProps) {
  return (
    <div
      className={cn("grid gap-6", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {children}
    </div>
  );
}
