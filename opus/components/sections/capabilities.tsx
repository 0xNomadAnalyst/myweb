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
      "Measure execution outcomes versus quotes - slippage, spreads, and impact across venues and regimes.",
  },
  {
    title: "Protocol & Lending Risk Surveillance",
    description:
      "Track leverage, utilisation, liquidations, and collateral dynamics across onchain money markets.",
  },
  {
    title: "Stress Propagation & Contagion",
    description:
      "Identify how instability spreads across liquidity, lending, and execution venues - before it becomes operational.",
  },
  {
    title: "Operational Decision Support",
    description:
      "Turn fragmented market data into actionable signals for risk and trading teams.",
  },
];

function cardSpan(index: number) {
  if (index === 0) return "md:col-span-12 lg:col-span-7";
  if (index === 1) return "md:col-span-6 lg:col-span-5";
  return "md:col-span-6 lg:col-span-4";
}

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
      <div className="mt-8 grid gap-4 md:grid-cols-12">
        {domains.map((domain, i) => {
          const isLead = i === 0;
          return (
            <FadeIn key={domain.title} delay={i * 0.08} className={cardSpan(i)}>
              <div
                className={`card-interactive flex h-full flex-col rounded-lg border border-border-strong bg-card ${
                  isLead ? "p-6 md:p-7" : "p-5"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/86">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={isLead ? "mt-3 text-xl font-medium tracking-tight text-foreground/98" : "mt-3 text-base font-medium tracking-tight text-foreground/96"}>
                  {domain.title}
                </h3>
                <p className={isLead ? "mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted-foreground/96" : "mt-2 text-sm leading-relaxed text-muted-foreground/95"}>
                  {domain.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
