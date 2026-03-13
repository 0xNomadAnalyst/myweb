import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface DomainCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function DomainCard({ icon: Icon, title, description, className }: DomainCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-lg border border-border bg-card p-7",
        className,
      )}
    >
      {Icon && <Icon className="mb-4 size-6 text-primary/70" strokeWidth={1.5} />}
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground/80">
        {description}
      </p>
    </div>
  );
}

interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-lg leading-snug text-muted-foreground/80">
          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
          {item}
        </li>
      ))}
    </ul>
  );
}

interface TagRowProps {
  tags: string[];
  className?: string;
}

export function TagRow({ tags, className }: TagRowProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-secondary/60 px-3.5 py-1.5 font-mono text-sm text-muted-foreground/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

interface CredentialBlockProps {
  label: string;
  items: string[];
  className?: string;
}

export function CredentialBlock({ label, items, className }: CredentialBlockProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6", className)}>
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-base leading-snug text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface InsetPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function InsetPanel({ children, className }: InsetPanelProps) {
  return (
    <div className={cn("rounded-md border border-border/50 bg-accent/40 px-7 py-5", className)}>
      {children}
    </div>
  );
}
