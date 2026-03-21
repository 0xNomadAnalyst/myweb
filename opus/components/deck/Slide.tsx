import { cn } from "@/lib/utils";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export function Slide({ children, className }: SlideProps) {
  return (
    <section
      className={cn(
        "slide relative flex w-[1920px] h-[1080px] flex-col px-[120px] py-[80px] bg-background text-foreground overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
