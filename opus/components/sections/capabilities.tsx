import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const capabilities = [
  {
    title: "Realtime Ingestion",
    description:
      "Event-driven pipelines that ingest live financial activity across protocols, venues, and on-chain environments. Sub-second capture at scale.",
  },
  {
    title: "Risk Observability",
    description:
      "Monitoring systems that maintain continuous visibility into position exposure, protocol state, and market microstructure.",
  },
  {
    title: "Risk State Modeling",
    description:
      "Model live financial events into analytical state layers. Position tracking, exposure measurement, and risk quantification across protocols and venues.",
  },
  {
    title: "Protocol Analytics",
    description:
      "Analytics infrastructure for protocol-level activity including liquidity dynamics, collateral flows, and state transitions.",
  },
  {
    title: "Decision Surfaces",
    description:
      "Interfaces that surface operationally relevant state changes. Alert routing, threshold monitoring, and decision-support views.",
  },
  {
    title: "Fault-Tolerant State Management",
    description:
      "Composable architectures with explicit failure modes, automated recovery, and consistent state under volatile market conditions.",
  },
];

export function Capabilities() {
  return (
    <SectionShell id="capabilities">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">
          System Responsibilities
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Operational domains spanning ingestion, analytics, and risk visibility
          across live financial environments.
        </p>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent">
              <h3 className="font-medium">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
