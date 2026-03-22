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
      "Analysis designed for decisions, monitoring, and control - not slideware.",
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
        <p className="section-label">How The Work Operates</p>
        <h2 className="section-title">
          Analytical Approach
        </h2>
        <p className="section-intro text-[1.08rem]">
          Operational systems work best when analytical understanding and
          implementation are developed together. I translate market behaviour
          into measurable structure - so teams can observe, test, and operate
          under real conditions. The aim is decision-grade visibility, not
          reporting.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {principles.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="card-interactive h-full rounded-lg border border-border-strong bg-card p-5 hover:bg-accent">
              <h3 className="card-title">
                {item.title}
              </h3>
              <p className="card-body">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-11 grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start">
          <div>
            <hr className="border-border-strong" />
            <h3 className="mt-7 text-lg font-medium tracking-tight text-foreground/96">
              Protocol-Level Resolution
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground/96">
              Onchain financial systems and data must be understood as operating
              structures - mapped through protocol mechanics, capital flows, and
              system dependencies.
            </p>
            <p className="mt-6 font-mono text-[0.88rem] tracking-wide text-muted-foreground/88">
              Operational systems are designed, not assembled.
            </p>
          </div>

          <div
            className="rounded-lg px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7"
            style={{
              background:
                "linear-gradient(180deg, rgba(19, 33, 58, 0.86) 0%, rgba(13, 24, 45, 0.82) 100%)",
              border: "1px solid rgba(124, 158, 196, 0.3)",
              boxShadow:
                "0 0 0 1px rgba(116, 150, 188, 0.14), 0 10px 32px rgba(1, 8, 20, 0.34), 0 0 24px rgba(53, 95, 148, 0.14)",
            }}
          >
            <SystemDiagram />
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
