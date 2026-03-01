import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const domains = [
  {
    title: "Liquidity & Market Structure Visibility",
    description:
      "Understand true depth, concentration risk, and venue dependency under real trading conditions.",
  },
  {
    title: "Execution Quality & Price Impact",
    description:
      "Measure execution outcomes versus quotes — slippage, spreads, and impact across venues and regimes.",
  },
  {
    title: "Protocol & Lending Risk Surveillance",
    description:
      "Track leverage, utilisation, liquidations, and collateral dynamics across onchain money markets.",
  },
  {
    title: "Stress Propagation & Contagion",
    description:
      "Identify how instability spreads across liquidity, lending, and execution venues — before it becomes operational.",
  },
  {
    title: "Operational Decision Support",
    description:
      "Turn fragmented market data into actionable signals for risk and trading teams.",
  },
];

export function Capabilities() {
  return (
    <SectionShell id="capabilities">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">
          Operational Problem Domains
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Where analytical clarity and operational visibility are most often
          required.
        </p>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain, i) => (
          <FadeIn key={domain.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent">
              <h3 className="font-medium">{domain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {domain.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
