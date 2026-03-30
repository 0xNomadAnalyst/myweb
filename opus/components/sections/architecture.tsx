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
      <div className="md:hidden">
        <FadeIn>
          <p className="section-label">System architecture</p>
          <h2 className="section-title">Built for End-to-End Operational Visibility</h2>
          <p className="section-intro">
            A protocol-level monitoring stack that joins ingestion, analytics, and decision support across domains.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-5 card-interactive rounded-lg border bg-none px-4 pb-3 pt-4 [background:linear-gradient(180deg,rgba(19,33,58,0.86)_0%,rgba(13,24,45,0.82)_100%)] [border-color:rgba(124,158,196,0.3)] shadow-[0_0_0_1px_rgba(116,150,188,0.14),0_10px_32px_rgba(1,8,20,0.34),0_0_24px_rgba(53,95,148,0.14)]">
            <ProtocolDiagramCarousel />
          </div>
        </FadeIn>
      </div>

      <div className="hidden md:block">
        <FadeIn>
          <p className="section-label">Analytical approach</p>
          <h2 className="section-title">
            Analytical Discipline in Practice
          </h2>
          <div className="mt-3 grid gap-6 md:grid-cols-1">
            <p className="text-[0.99rem] leading-[1.66] text-muted-foreground/96 sm:text-[1.08rem] sm:leading-7">
              Empirical analysis, operational orientation, and direct implementation responsibility keep complex work rigorous, adaptable, and continuous from definition through deployment.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-3.5 sm:mt-10 sm:gap-4 md:grid-cols-3">
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
          <div className="mt-9 grid gap-7 sm:mt-11 sm:gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start">
            <div>
              <hr className="border-border-strong" />
              <h3 className="mt-6 text-[1.02rem] font-medium tracking-tight text-foreground/96 sm:mt-7 sm:text-lg">
                Protocol-Level Understanding
              </h3>
              <p className="mt-2.5 text-[0.93rem] leading-relaxed text-muted-foreground/96 sm:mt-3 sm:text-[0.98rem]">
                Onchain systems often require protocol-level interpretation, with raw data transformed into operationally meaningful views rather than read directly from fragmented interfaces.
              </p>
              <p className="mt-5 font-mono text-[0.82rem] tracking-wide text-muted-foreground/88 sm:mt-6 sm:text-[0.88rem]">
                A cross-domain monitoring architecture joining ingestion, analytics, and operational views.
              </p>
            </div>

            <div
              className="card-interactive rounded-lg border bg-none px-4 pb-3 pt-4 [background:linear-gradient(180deg,rgba(19,33,58,0.86)_0%,rgba(13,24,45,0.82)_100%)] [border-color:rgba(124,158,196,0.3)] shadow-[0_0_0_1px_rgba(116,150,188,0.14),0_10px_32px_rgba(1,8,20,0.34),0_0_24px_rgba(53,95,148,0.14)] hover:bg-accent/35 hover:shadow-[0_0_0_1px_rgba(143,178,219,0.28),0_0_34px_4px_rgba(88,132,186,0.26),0_20px_38px_rgba(1,8,20,0.44)] sm:px-5 sm:pb-6 sm:pt-5 md:px-8 md:pb-8 md:pt-7"
            >
              <ProtocolDiagramCarousel />
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
