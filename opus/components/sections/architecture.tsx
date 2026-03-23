import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { ProtocolDiagramCarousel } from "@/components/shared/protocol-diagram-carousel";

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
    title: "End-to-End Responsibility",
    description: "From problem definition through deployment and handover.",
  },
];

export function Architecture() {
  return (
    <SectionShell id="approach">
      <FadeIn>
        <p className="section-label">Working Principles</p>
        <h2 className="section-title">
          Analytical Discipline in Practice
        </h2>
        <div className="mt-3 grid gap-6 md:grid-cols-1">
          <p className="text-[1.08rem] leading-7 text-muted-foreground/96">
            My approach combines empirical discipline, operational flexibility, 
            and direct implementation responsibility – allowing complex problems 
            to be handled rigorously, adapted to the client's operating context, and carried through without loss of translation.
          </p>
        </div>
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
              Protocol-Level Understanding
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground/96">
              Onchain systems must be understood at protocol level, with data ingestion 
              and analytics engineered to reflect underlying mechanics, capital flows, and edge cases accurately.
            </p>
            <p className="mt-6 font-mono text-[0.88rem] tracking-wide text-muted-foreground/88">
              That precision makes analysis accurate and monitoring reliable.
            </p>
          </div>

          <div
            className="card-interactive rounded-lg border bg-none px-5 pb-6 pt-5 [background:linear-gradient(180deg,rgba(19,33,58,0.86)_0%,rgba(13,24,45,0.82)_100%)] [border-color:rgba(124,158,196,0.3)] shadow-[0_0_0_1px_rgba(116,150,188,0.14),0_10px_32px_rgba(1,8,20,0.34),0_0_24px_rgba(53,95,148,0.14)] hover:bg-accent/35 hover:shadow-[0_0_0_1px_rgba(143,178,219,0.28),0_0_34px_4px_rgba(88,132,186,0.26),0_20px_38px_rgba(1,8,20,0.44)] md:px-8 md:pb-8 md:pt-7"
          >
            <ProtocolDiagramCarousel />
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
