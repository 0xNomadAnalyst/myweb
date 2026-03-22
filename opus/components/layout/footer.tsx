import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1180px] px-6 pb-12 pt-4 md:px-12">
      <Separator className="mb-8 bg-border-soft" />
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground/90">
          &copy; 2026 Opus
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-xs text-muted-foreground/88 hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground/88 hover:text-foreground"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
