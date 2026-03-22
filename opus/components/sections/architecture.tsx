import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { SystemDiagram } from "@/components/shared/system-diagram";

const principles = [
  {
    title: "Empirical First",
    description:
      "Models grounded in observed behaviour rather than assumptions.",
  },
  {
    title: "Operationally Oriented",
    description:
      "Analysis designed for decisions, monitoring, and control — not slideware.",
  },
  {
    title: "End-to-End Ownership",
    description: "From problem definition through deployment and handover.",
  },
];

export function Architecture() {
  return (
    <SectionShell id="approach">
      <FadeIn>
        <p className="section-label">Method</p>
        <h2 className="section-title">
          Analytical Approach
        </h2>
        <p className="section-intro">
          Operational systems work best when analytical understanding and
          implementation are developed together. I translate market behaviour
          into measurable structure — so teams can observe, test, and operate
          under real conditions. The aim is decision-grade visibility, not
          reporting.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {principles.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.09}>
            <div className="card-interactive rounded-lg border border-border/70 bg-card p-5">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.1}>
        <hr className="mt-11 border-border/95" />
        <h3 className="mt-7 font-medium tracking-tighter text-foreground/95">
          Protocol-Level Resolution
        </h3>
        <p className="body-measure mt-3 text-sm leading-relaxed text-muted-foreground/90">
          Onchain financial systems and data must be understood as operating structures
          — mapped through protocol mechanics, capital flows, and system
          dependencies.
        </p>
        <div
          className="mx-auto mt-11 max-w-[920px] rounded-lg px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7"
          style={{
            background: "rgba(15, 23, 42, 0.62)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.16)",
          }}
        >
          <SystemDiagram />
        </div>
        <p className="mt-6 font-mono text-xs tracking-wide text-muted-foreground/62">
          Operational systems are designed, not assembled.
        </p>
      </FadeIn>
    </SectionShell>
  );
}
