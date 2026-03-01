import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { MetricCard } from "@/components/shared/metric-card";
import { Card } from "@/components/ui/card";

const throughputData = [
  65, 72, 58, 80, 92, 88, 76, 95, 87, 70, 82, 90, 78, 85, 93, 88, 75, 82, 91,
  86, 79, 84, 88, 92,
];

const systems = [
  { name: "DEX Liquidity Monitor", status: "operational" },
  { name: "DEX Swap Analytics", status: "operational" },
  { name: "Lending Markets", status: "operational" },
  { name: "Risk Alert Pipeline", status: "operational" },
];

const dashboardViews = [
  {
    title: "DEX Liquidity",
    metrics: ["TVL $12.5M", "Pool Balance 45/55%", "128 Pools"],
  },
  {
    title: "DEX Swaps",
    metrics: ["24h Vol $117K", "1,576 Swaps", "Spread 1.54bps"],
  },
  {
    title: "Lending Markets",
    metrics: ["Util. 67.3%", "Loans $9.9M", "Collateral $19.5M"],
  },
];

export function Dashboard() {
  return (
    <SectionShell id="system" wide>
      <FadeIn>
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Operational Environment
        </p>
        <Card className="p-6">
          <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            <MetricCard
              label="Events Ingested"
              value="2.4B"
              delta="+12.3% / 30d"
            />
            <MetricCard
              label="System Uptime"
              value="99.97%"
              delta="last 90 days"
            />
            <MetricCard
              label="Event Latency"
              value="43ms"
              delta="p99: 128ms"
            />
            <MetricCard
              label="Protocol Sources"
              value="128"
              delta="+3 this week"
            />
          </div>

          <div className="mb-8">
            <p className="mb-3 font-mono text-xs text-muted-foreground">
              Event Throughput (24h)
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

          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {dashboardViews.map((view) => (
              <div
                key={view.title}
                className="rounded-md border border-border bg-accent p-4 transition-colors hover:border-primary/20"
              >
                <p className="font-mono text-xs font-medium">{view.title}</p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                  {view.metrics.map((m) => (
                    <span
                      key={m}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
