import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const capabilities = [
  {
    title: "Realtime Ingestion",
    description:
      "Capture protocol and market state required for risk interpretation rather than reporting.",
  },
  {
    title: "Risk Observability",
    description:
      "Continuous visibility into liquidity exposure, execution conditions, and systemic stress.",
  },
  {
    title: "Market Microstructure Analysis",
    description:
      "Model trading behaviour and liquidity dynamics informing operational decisions.",
  },
  {
    title: "Protocol State Monitoring",
    description:
      "Track evolving on-chain system conditions affecting risk and execution.",
  },
  {
    title: "Decision Surfaces",
    description:
      "Translate analytical outputs into actionable operational signals.",
  },
  {
    title: "Failure & Stress Monitoring",
    description:
      "Identify instability propagation before operational impact emerges.",
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
          Domains of analytical and technical ownership across live financial
          environments.
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
