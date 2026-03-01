import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const stages = [
  { label: "Sources", items: ["Protocol Events", "Market Feeds", "Chain State", "Internal Systems"] },
  { label: "Ingestion", items: ["Event Capture", "State Sync", "Normalization", "Validation"] },
  {
    label: "State Layer",
    items: ["Position State", "Risk Metrics", "Protocol Health"],
  },
  {
    label: "Analytics",
    items: ["Risk Models", "Anomaly Detection", "Trend Analysis"],
  },
  {
    label: "Operations",
    items: ["Alerts", "Dashboards", "Decision Surfaces", "Reporting"],
  },
];

export function Architecture() {
  return (
    <SectionShell id="approach">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight">
            Infrastructure Philosophy
          </h2>
          <div className="mt-6 max-w-prose space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Financial environments demand infrastructure that maintains
              accurate state under continuous change. Every system is designed
              around realtime observability, composable layers, and minimal
              decision latency.
            </p>
            <p>
              Each component is independently deployable and observable.
              Resilience is structural, not reactive. State management is
              explicit. Failure modes are documented and tested.
            </p>
            <p>
              The result is infrastructure that remains legible and operational
              under the conditions that matter most.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-0">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Reference Architecture
            </p>
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-card font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="min-h-3 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-medium">{stage.label}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {stage.items.map((item) => (
                      <span
                        key={item}
                        className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
