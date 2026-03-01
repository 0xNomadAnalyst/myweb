import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentialGroups = [
  {
    title: "Education",
    items: [
      "BSc Economics & Philosophy — University of Bristol (First Class Honours)",
      "MSc Economic Policy — University College London",
    ],
    caption: "Economic training applied to market structure and incentive design.",
  },
  {
    title: "Professional Certifications",
    items: [
      "CFA Charterholder",
      "Financial Risk Manager (FRM)",
    ],
  },
  {
    title: "Financial & Investment Experience",
    items: [
      "Bloomberg — Analytical Research & Financial Modelling",
      "M&A Analyst — UK Renewable Energy",
      "Project Finance Modelling — Utility-Scale Renewables (Chile)",
    ],
    caption: "Private-equity sponsored infrastructure and capital structuring.",
  },
  {
    title: "Digital Asset & Token Economy Work",
    items: [
      "ICO / Utility Token Fundraising Support (~$60M raised)",
      "Token Economy Modelling & Treasury Management Support",
      "Operational Risk Infrastructure — Solstice Stablecoin (~$300M AUM)",
    ],
  },
];

export function Background() {
  return (
    <SectionShell id="background">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">
          Background & Perspective
        </h2>
        <p className="mt-2 text-muted-foreground">
          Strong analytical foundations developed across institutional finance, real
          assets, and digital-asset markets.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn delay={0.05}>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Financial systems work has consistently centred on data-led
              decisionmaking under uncertainty — evaluating how incentives,
              capital structure, and market behaviour translate into real
              economic outcomes.
            </p>
            <p>
              Across institutional research, investment analysis, and project
              finance, my work focused on building analytical models used to
              support capital allocation decisions involving material financial
              risk. These environments required translating complex data into
              decision frameworks trusted by investors, operators, and
              executive stakeholders.
            </p>
            <p>
              Independent consulting work extended this approach across
              startups and mid-market businesses, developing financial models,
              analysing unit economics, and supporting operational and
              strategic decisions across diverse business models.
            </p>
            <p>
              Exposure to early digital-asset markets and token fundraising
              cycles highlighted both the potential and the analytical
              fragility of emerging crypto financial systems. Observing
              repeated failures driven by weak incentive design and
              insufficient risk visibility motivated a deliberate shift toward
              more empirical approaches.
            </p>
            <p>
              This led to focused work in onchain analytics, market
              microstructure analysis, and protocol risk monitoring — applying
              established financial and risk-management discipline to digitally
              native financial environments.
            </p>
            <p>
              Current engagements involve designing operational intelligence
              and risk infrastructure supporting large-scale onchain financial
              systems, where continuous visibility into liquidity, execution
              quality, and protocol behaviour is required for safe operation.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            {credentialGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-border bg-card p-5"
              >
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                  {group.title}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-snug text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {group.caption && (
                  <p className="mt-2.5 text-xs text-muted-foreground/40">
                    {group.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
