import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { MetricCard } from "@/components/shared/metric-card";
import { Card } from "@/components/ui/card";

const throughputData = [
  65, 72, 58, 80, 92, 88, 76, 95, 87, 70, 82, 90, 78, 85, 93, 88, 75, 82, 91,
  86, 79, 84, 88, 92,
];

const systems = [
  { name: "Ingestion Pipeline", status: "operational" },
  { name: "Transform Layer", status: "operational" },
  { name: "Serving API", status: "operational" },
  { name: "Monitoring", status: "operational" },
];

export function Dashboard() {
  return (
    <SectionShell id="system">
      <FadeIn>
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Live System Overview
        </p>
        <Card className="p-6">
          <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            <MetricCard
              label="Records Processed"
              value="2.4B"
              delta="+12.3% / 30d"
            />
            <MetricCard
              label="Pipeline Uptime"
              value="99.97%"
              delta="last 90 days"
            />
            <MetricCard
              label="Avg Latency"
              value="43ms"
              delta="p99: 128ms"
            />
            <MetricCard
              label="Active Sources"
              value="128"
              delta="+3 this week"
            />
          </div>

          <div className="mb-8">
            <p className="mb-3 font-mono text-xs text-muted-foreground">
              Throughput (24h)
            </p>
            <div className="flex h-24 items-end gap-1">
              {throughputData.map((value, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-primary/20 transition-colors hover:bg-primary/40"
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {systems.map((system) => (
              <div key={system.name} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs text-muted-foreground">
                  {system.name}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
    </SectionShell>
  );
}
