import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const capabilities = [
  {
    title: "Pipeline Architecture",
    description:
      "Design and implementation of fault-tolerant data pipelines. Batch and streaming. Custom orchestration patterns.",
  },
  {
    title: "Data Modeling",
    description:
      "Dimensional modeling, entity resolution, and schema design. dbt-native transformation layers.",
  },
  {
    title: "Platform Migration",
    description:
      "Zero-downtime migration from legacy systems to modern data stacks. Snowflake, BigQuery, Redshift.",
  },
  {
    title: "Observability & Monitoring",
    description:
      "End-to-end pipeline observability. Anomaly detection. SLA tracking. Incident response frameworks.",
  },
  {
    title: "Cost Optimization",
    description:
      "Infrastructure right-sizing, query optimization, and compute governance. Measurable cost reduction.",
  },
  {
    title: "Governance & Quality",
    description:
      "Data contracts, lineage tracking, access control, and automated quality validation.",
  },
];

export function Capabilities() {
  return (
    <SectionShell id="capabilities">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">Capabilities</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Full-spectrum data infrastructure services, from initial assessment
          through production operation.
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
