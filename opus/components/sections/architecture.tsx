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
              Most operational failures originate from separation between
              analysis and implementation.
            </p>
            <p>
              Systems are designed so the analytical understanding that defines
              risk is the same understanding embedded in infrastructure.
            </p>
            <p>
              Infrastructure exists to preserve decision clarity under live
              market conditions.
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
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary font-mono text-xs">
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
