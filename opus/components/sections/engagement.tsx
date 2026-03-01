import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const phases = [
  {
    phase: "01",
    title: "Environment Assessment",
    duration: "2 weeks",
    description:
      "Map existing data flows, risk exposure surfaces, and system architecture. Identify observability gaps, latency constraints, and operational bottlenecks.",
  },
  {
    phase: "02",
    title: "System Design",
    duration: "3 weeks",
    description:
      "Define target architecture covering ingestion topology, state management, analytics layers, and operational interfaces. Every design decision documented.",
  },
  {
    phase: "03",
    title: "Infrastructure Build",
    duration: "8\u201312 weeks",
    description:
      "Iterative implementation with continuous integration. Each layer is observable and independently deployable from initial deployment forward.",
  },
  {
    phase: "04",
    title: "Operational Transfer",
    duration: "2 weeks",
    description:
      "Full system handoff with operational runbooks, monitoring configuration, and knowledge transfer. Infrastructure is owned and operated internally.",
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
          How complex financial data environments transition from fragmented
          visibility toward operational clarity.
        </p>
      </FadeIn>
      <div className="mt-12">
        {phases.map((phase, i) => (
          <FadeIn key={phase.phase} delay={i * 0.05}>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs">
                  {phase.phase}
                </div>
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-10">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{phase.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {phase.duration}
                  </span>
                </div>
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
