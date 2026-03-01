import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-8">
      <Separator className="mb-8" />
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Opus Data Infrastructure
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
