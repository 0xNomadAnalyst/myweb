import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentials = [
  { label: "Background", value: "Financial Risk & Modelling" },
  { label: "Infrastructure Focus", value: "Realtime Financial Systems" },
  { label: "Protocol Coverage", value: "DeFi / Solana Ecosystem" },
  { label: "Operational Scale", value: "Billions of events daily" },
];

export function Background() {
  return (
    <SectionShell id="background">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight">Background</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Architecture shaped by institutional financial risk practice.
              Training in project finance and quantitative risk modelling
              established the design principles applied to every system:
              observability, resilience, and decision-relevant state management.
            </p>
            <p>
              Recent infrastructure covers realtime protocol monitoring, DeFi
              risk analytics, and multi-venue market data systems. Each designed
              for operational clarity under volatile conditions.
            </p>
            <p>
              Independent practice. CFA, FRM. Every engagement is principal-led.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Credentials
            </p>
            <div className="space-y-0">
              {credentials.map((cred, i) => (
                <div
                  key={cred.label}
                  className={`flex items-center justify-between py-4 ${
                    i < credentials.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-sm text-muted-foreground">
                    {cred.label}
                  </span>
                  <span className="font-mono text-sm font-medium">
                    {cred.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
