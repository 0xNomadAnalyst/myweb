import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentials = [
  { label: "Background", value: "Institutional Finance & Risk" },
  { label: "Disciplines", value: "Risk Policy, Strategy Modelling, Infrastructure" },
  { label: "Protocol Coverage", value: "DeFi / Solana Ecosystem" },
  { label: "Engagement Model", value: "Principal-led, end-to-end" },
];

export function Background() {
  return (
    <SectionShell id="background">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight">Background</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Practice grounded in institutional finance and risk modelling.
              Training in project finance and quantitative risk established
              the analytical principles applied to every engagement:
              observability, system correctness, and decision-relevant state.
            </p>
            <p>
              Recent work includes operational risk policy design, stablecoin
              depeg investigation and event analysis, liquidity and
              market-making strategy validation, and building realtime
              monitoring infrastructure for DeFi protocols. Each engagement
              bridges institutional finance understanding with on-chain
              mechanics — enabling internalization of trading and monitoring
              capability.
            </p>
            <p>
              Independent practice. CFA, FRM. Every engagement is
              principal-led.
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
