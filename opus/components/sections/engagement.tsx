import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const phases = [
  {
    phase: "01",
    title: "Assessment",
    duration: "2 weeks",
    description:
      "Comprehensive audit of existing infrastructure, data flows, and team capabilities. Deliverable: assessment report with prioritized recommendations.",
  },
  {
    phase: "02",
    title: "Architecture Design",
    duration: "3 weeks",
    description:
      "Detailed system design including technology selection, data models, pipeline specifications, and infrastructure requirements. All decisions documented.",
  },
  {
    phase: "03",
    title: "Implementation",
    duration: "8\u201312 weeks",
    description:
      "Iterative build-out with weekly milestones. Infrastructure as code. CI/CD pipelines. Comprehensive test coverage. Your team participates throughout.",
  },
  {
    phase: "04",
    title: "Handoff & Documentation",
    duration: "2 weeks",
    description:
      "Knowledge transfer, runbook creation, operational documentation, and team training. System is fully owned and operated by your organization.",
  },
];

export function Engagement() {
  return (
    <SectionShell id="engagement">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">
          Typical Engagement
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          A structured, phased approach designed for predictability and knowledge
          transfer.
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
