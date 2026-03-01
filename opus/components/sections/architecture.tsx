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
        <h2 className="text-2xl font-medium tracking-tight">
          Analytical Approach
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
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
            <div className="card-interactive rounded-lg border border-border bg-card p-5 hover:bg-accent">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <SystemDiagram />
    </SectionShell>
  );
}
