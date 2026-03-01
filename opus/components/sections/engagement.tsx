import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const phases = [
  {
    phase: "01",
    title: "Problem Definition",
    description:
      "Clarify operational uncertainty, risk exposure, and decision constraints.",
  },
  {
    phase: "02",
    title: "Analysis & Modelling",
    description:
      "Empirical investigation of system behaviour and strategy assumptions.",
  },
  {
    phase: "03",
    title: "Implementation",
    description:
      "Build monitoring, analytics, or execution infrastructure required.",
  },
  {
    phase: "04",
    title: "Operational Transfer",
    description:
      "Enable internal teams to understand and operate systems independently.",
  },
];

export function Engagement() {
  return (
    <SectionShell id="engagement">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">
          Engagement Structure
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          How engagements typically evolve.
        </p>
      </FadeIn>
      <div className="mt-8">
        {phases.map((phase, i) => (
          <FadeIn key={phase.phase} delay={i * 0.05}>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-mono text-xs">
                  {phase.phase}
                </div>
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="font-medium">{phase.title}</h3>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
