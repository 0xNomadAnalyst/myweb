import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const domains = [
  {
    title: "Liquidity & Market Structure Visibility",
    description:
      "Understand available depth, concentration, venue dependency, and price-impact conditions before execution quality deteriorates.",
  },
  {
    title: "Market Maker Visibility & Accountability",
    description:
      "Monitor third party support, performance during stress periods, and improve negotiation and KPI design.",
  },
  {
    title: "Cross-Protocol Risk & Exposure Monitoring",
    description:
      "Track and interpret exposures across DeFi venues, and issuer-controlled contracts using normalized metrics and unified views.",
  },
  {
    title: "Incident Replay & Root-Cause Analysis",
    description:
      "Turn live stress events into structured investigation quickly, shortening the path from incident to understanding.",
  },
  {
    title: "Simulation & Risk-Policy Support",
    description:
      "Use observed behaviour and structured historical data to refine intervention rules, thresholds, and operating playbooks.",
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
      <div className="md:hidden">
        <FadeIn>
          <p className="section-label">What this supports</p>
          <h2 className="section-title">Monitoring, Analysis, and Decision Support</h2>
          <p className="section-intro">
            A combination of monitoring, analysis, investigation, and decision support for teams managing live onchain financial operations.
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-muted-foreground/95">
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Cross-protocol visibility</li>
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Operational analytics</li>
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Incident investigation and risk support</li>
          </ul>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-muted-foreground/86">
            Built for live decisions, not passive reporting.
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-3">
          {[
            {
              title: "Monitoring",
              description: "Track liquidity, execution quality, exposure, and counterparties across venues.",
            },
            {
              title: "Analytics",
              description: "Investigate stress events and query protocol behavior with decision-ready outputs.",
            },
            {
              title: "Decision Support",
              description: "Support intervention policy, market-maker oversight, and operating priorities.",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={0.08 * (index + 1)}>
              <div className="card-interactive rounded-lg border border-border-strong bg-card px-4 py-4 hover:bg-accent">
                <h3 className="text-[1rem] font-medium tracking-tight text-foreground/97">{item.title}</h3>
                <p className="mt-1.5 text-[0.93rem] leading-relaxed text-muted-foreground/95">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <FadeIn>
          <p className="section-label">Key Operational Domains</p>
          <h2 className="section-title">
            Where Visibility Matters Most
          </h2>
          <p className="section-intro max-w-none lg:whitespace-nowrap">
            Domains where better monitoring, accountability, and system-level understanding have the greatest impact.
          </p>
        </FadeIn>
        <div className="mt-7 grid gap-3.5 sm:mt-8 sm:gap-4 md:grid-cols-12">
          {domains.map((domain, i) => {
            const isLead = i === 0;
            return (
              <FadeIn key={domain.title} delay={i * 0.08} className={cardSpan(i)}>
                <div
                  className={`card-interactive flex h-full flex-col rounded-lg border border-border-strong bg-card hover:bg-accent ${
                    isLead ? "p-5 sm:p-6 md:p-7" : "p-4 sm:p-5"
                  }`}
                >
                  <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-cta/84">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className={isLead ? "mt-3 text-[1.12rem] font-medium tracking-tight text-foreground/98 sm:text-xl" : "mt-3 text-[0.98rem] font-medium tracking-tight text-foreground/96 sm:text-base"}>
                    {domain.title}
                  </h3>
                  <p className={isLead ? "mt-2.5 max-w-[60ch] text-[0.95rem] leading-relaxed text-muted-foreground/96 sm:mt-3 sm:text-[16px]" : "mt-2 text-[0.92rem] leading-relaxed text-muted-foreground/95 sm:text-[0.98rem]"}>
                    {domain.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
