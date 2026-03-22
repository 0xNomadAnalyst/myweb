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
        <p className="section-label">Method</p>
        <h2 className="section-title">
          Analytical Approach
        </h2>
        <p className="section-intro">
          Operational systems work best when analytical understanding and
          implementation are developed together. I translate market behaviour
          into measurable structure - so teams can observe, test, and operate
          under real conditions. The aim is decision-grade visibility, not
          reporting.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {principles.map((item, i) => (
          <FadeIn
            key={item.title}
            delay={i * 0.08}
            className={i === 2 ? "md:col-span-12" : "md:col-span-6"}
          >
            <div className="card-interactive h-full rounded-lg border border-border-strong bg-card p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/84">
                Principle {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-medium tracking-tight text-foreground/97">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground/95">
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
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/96">
              Onchain financial systems and data must be understood as operating
              structures - mapped through protocol mechanics, capital flows, and
              system dependencies.
            </p>
            <p className="mt-6 font-mono text-xs tracking-wide text-muted-foreground/88">
              Operational systems are designed, not assembled.
            </p>
          </div>

          <div
            className="rounded-lg px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7"
            style={{
              background: "rgba(15, 23, 42, 0.62)",
              border: "1px solid var(--border-strong)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.16)",
            }}
          >
            <SystemDiagram />
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
