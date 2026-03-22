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
      "Measure execution outcomes versus quotes – slippage, spreads, and impact across venues and regimes.",
  },
  {
    title: "Protocol & Lending Risk Surveillance",
    description:
      "Track leverage, utilisation, liquidations, and collateral dynamics across onchain money markets.",
  },
  {
    title: "Stress Propagation & Contagion",
    description:
      "Identify how instability spreads across liquidity, lending, and execution venues – before it becomes operational.",
  },
  {
    title: "Operational Decision Support",
    description:
      "Turn fragmented market data into actionable signals for risk and trading teams.",
  },
];

export function Capabilities() {
  return (
    <SectionShell id="capabilities" variant="open">
      <FadeIn>
        <p className="section-label">Problem Domains</p>
        <h2 className="section-title">
          Operational Problem Domains
        </h2>
        <p className="section-intro max-w-xl">
          Where analytical clarity and operational visibility are most often
          required.
        </p>
      </FadeIn>
      <div className="mt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, i) => (
            <FadeIn key={domain.title} delay={i * 0.09} className="h-full">
              <div className="card-interactive flex h-full flex-col rounded-lg border border-border-strong bg-card p-5">
                <h3 className="card-title">{domain.title}</h3>
                <p className="card-body">
                  {domain.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}



