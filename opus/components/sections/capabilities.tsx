import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const capabilities = [
  {
    title: "Realtime Ingestion",
    description:
      "Architect and operate event-driven pipelines that ingest live financial activity across protocols, venues, and on-chain environments.",
  },
  {
    title: "Risk Observability",
    description:
      "Design monitoring systems that maintain continuous visibility into position exposure, protocol state, and market microstructure.",
  },
  {
    title: "Financial Data Modeling",
    description:
      "Structure raw financial events into analytical layers that enable accurate risk measurement and operational reporting.",
  },
  {
    title: "Protocol Analytics",
    description:
      "Build analytics infrastructure for protocol-level activity including liquidity dynamics, collateral flows, and state transitions.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Enable decision-aware systems that surface actionable state changes rather than passive data accumulation.",
  },
  {
    title: "Infrastructure Resilience",
    description:
      "Design composable, fault-tolerant architectures that maintain integrity under volatile market conditions.",
  },
];

export function Capabilities() {
  return (
    <SectionShell id="capabilities">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">System Responsibilities</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Operational domains spanning ingestion, analytics, and risk
          visibility across live financial environments.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border p-5 transition-colors hover:border-primary/30">
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
