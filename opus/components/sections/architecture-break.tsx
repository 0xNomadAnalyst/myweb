import { FadeIn } from "@/components/shared/fade-in";
import { SystemDiagram } from "@/components/shared/system-diagram";

export function ArchitectureBreak() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-[1180px] px-6 py-[120px] md:px-12 md:py-[140px]">
        <FadeIn>
          <div
            className="rounded-[14px] px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7"
            style={{
              background: "rgba(15, 23, 42, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              boxShadow: "0 2px 20px rgba(0, 0, 0, 0.12)",
            }}
          >
            <SystemDiagram />
          </div>
          <p className="mt-6 font-mono text-xs text-muted-foreground/60">
            Operational systems are designed, not assembled.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
