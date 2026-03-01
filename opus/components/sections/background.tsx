import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentialGroups = [
  {
    title: "Digital Asset & Token Economy Work",
    items: [
      "Operational Risk Infrastructure — Solstice Stablecoin (~$300M AUM)",
      "Token Economy Modelling & Treasury Management Support",
      "ICO / Utility Token Fundraising Support (~$60M raised)",
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
    title: "Professional Certifications",
    items: [
      "CFA Charterholder",
      "Financial Risk Manager (FRM)",
    ],
  },
  {
    title: "Education",
    items: [
      "MSc Economic Policy — University College London",
      "BSc Economics & Philosophy — University of Bristol (First Class Honours)",
    ],
    caption: "Economic training applied to market structure and incentive design.",
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
        <FadeIn delay={0.09}>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Blockchain systems introduce genuinely new financial structures, requiring the ability to reinterpret legacy instruments while cutting through narrative, ideology, and conflicting incentives that often obscure economic reality.
            </p>
            <p>
              A strong foundation in traditional finance and economic reasoning provides the grounding to do this clearly, while remaining open to the structural possibilities that programmable onchain systems actually introduce.
            </p>
            <p>
              Doing this successfully requires us treating blockchain networks as observable financial systems – making full use of the public data they expose, often only accessible through substantial analytical and infrastructure development.
            </p>
            <p>
              My career has consistently centred on enabling data-driven decision-making under uncertainty – building analytical frameworks that translate complex facts into insights and decision-guidance relied upon by senior stakeholders.            
            </p>
            <p>
              This experience was developed in institutional finance roles and later extended through independent consulting, supporting capital allocation, operational planning, and strategic decisions in environments carrying material financial risk.
            </p>
            <p>
              Early exposure to digital-asset fundraising cycles highlighted the structural fragility of crypto financial systems, often lacking operational and risk visibilities. This prompted a deliberate shift toward empirical analysis and formal risk discipline.
            </p>
            <p>
              My work today centres on applying this accumulated understanding alongside teams committed to operating complex digital-asset environments safely and with clarity – designing operational intelligence and risk infrastructure for the next generation of financial systems.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.18}>
          <div className="space-y-4">
            {credentialGroups.map((group, i) => (
              <div
                key={group.title}
                className={`card-interactive rounded-lg border border-border bg-card p-5 hover:bg-accent${
                  i === 0 ? " brightness-[1.05]" : ""
                }`}
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
