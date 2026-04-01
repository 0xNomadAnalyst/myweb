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
          <p className="section-label">Key Applications</p>
          <h2 className="section-title">Support for Live Financial Operations</h2>
          <p className="section-intro">
            Teams managing live onchain financial operations often need support in one or more of these areas.
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-3">
          {[
            {
              title: "Monitoring",
              description: "Cross-venue visibility into liquidity, risk exposure, and market-maker performance.",
            },
            {
              title: "Investigation",
              description: "Targeted analysis of stress events, protocol behaviour, and cross-venue dynamics when conditions need to be understood quickly.",
            },
            {
              title: "Decision Support",
              description: "Data-led support for risk policy, operating decisions, and strategic direction.",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={0.08 * (index + 1)}>
              <div className="card-interactive relative overflow-hidden rounded-xl border border-border-strong/65 bg-card/36 px-4 py-4 hover:bg-accent">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cta/52 to-transparent shadow-[0_0_10px_rgba(246,155,52,0.22)]"
                />
                <h3 className="text-[1.02rem] font-medium tracking-tight text-foreground/97">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.93rem] leading-[1.52] text-muted-foreground/94">
                  {item.description}
                </p>
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
