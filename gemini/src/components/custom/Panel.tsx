import { cn } from "@/lib/utils";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Panel({ children, className, ...props }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/50 bg-card/30 p-6 md:p-8 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
