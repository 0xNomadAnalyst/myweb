import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const stages = [
  { label: "Sources", items: ["APIs", "Databases", "Events", "Files"] },
  { label: "Ingestion", items: ["CDC", "Streaming", "Batch", "Webhooks"] },
  {
    label: "Storage",
    items: ["Data Lake", "Warehouse", "Feature Store"],
  },
  {
    label: "Transform",
    items: ["dbt Models", "Spark Jobs", "Quality Checks"],
  },
  {
    label: "Serve",
    items: ["APIs", "Dashboards", "ML Models", "Exports"],
  },
];

export function Architecture() {
  return (
    <SectionShell id="approach">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight">
            Architecture Approach
          </h2>
          <div className="mt-6 max-w-prose space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Every engagement begins with a thorough assessment of existing
              systems, data flows, and organizational requirements. We avoid
              prescriptive solutions in favor of architectures tailored to
              specific operational constraints.
            </p>
            <p>
              Our designs prioritize observability, fault tolerance, and
              operational simplicity. Each layer is independently testable and
              deployable. We use infrastructure-as-code throughout and document
              every design decision.
            </p>
            <p>
              The goal is a system your team can operate, extend, and debug
              without ongoing external dependency.
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
