import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1180px] px-6 pb-12 pt-4 md:px-12">
      <Separator className="mb-8 bg-border-soft" />
      <div className="flex items-center">
        <p className="text-xs text-muted-foreground/90">&copy; 2026 Roderick McKinley</p>
      </div>
    </footer>
  );
}
