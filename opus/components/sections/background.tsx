import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentialGroups = [
  {
    title: "Digital Asset & OnChain Work",
    items: [
      "Operational Risk Infrastructure - Solstice USX Stablecoin (~$300M AUM)",
      "Token Economy Modelling & Treasury Management Support",
      "ICO / Utility Token Fundraising Support (~$60M raised)",
    ],
  },
  {
    title: "Institutional Finance Experience",
    items: [
      "Bloomberg - Analytical Research & Financial Modelling",
      "M&A Analyst - UK Renewable Energy",
      "Project Finance Modelling - Utility-Scale Renewables (Chile)",
    ],
    caption: "Private-equity sponsored infrastructure and capital structuring.",
  },
  {
    title: "Professional Credentials",
    items: ["CFA Charterholder", "Financial Risk Manager (FRM)"],
  },
  {
    title: "Education",
    items: [
      "MSc Economic Policy - University College London",
      "BSc Economics & Philosophy - University of Bristol (First Class Honours)",
    ],
  },
];


export function Background() {
  return (
    <SectionShell id="background" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block [background:radial-gradient(780px_380px_at_82%_12%,rgba(128,162,198,0.12),transparent_62%),radial-gradient(480px_320px_at_12%_88%,rgba(248,169,74,0.05),transparent_60%)]"
      />
      <FadeIn>
        <p className="section-label">Analytical Foundations</p>
        <h2 className="section-title">Background & Perspective</h2>
        <p className="section-intro max-w-[62ch]">
          Strong analytical foundations developed across institutional finance,
          real assets, and digital-asset markets.
        </p>
      </FadeIn>

      <div className="relative mt-9 grid gap-12 lg:grid-cols-[minmax(0,6.15fr)_minmax(0,5.85fr)] lg:gap-10">
        <FadeIn delay={0.09}>
          <div className="space-y-7">
            <div className="body-measure max-w-[58ch] space-y-4 text-[1rem] leading-[1.72] text-muted-foreground/95">
              <p>
                Blockchain systems introduce genuinely new financial structures,
                requiring the ability to reinterpret legacy instruments,
                institutions, and infrastructure while cutting through narrative,
                ideology, and conflicting incentives that often obscure economic
                reality.
              </p>
              <p>
                A strong foundation in traditional finance and economic reasoning
                provides the grounding to do this clearly, while remaining open to
                the structural possibilities that programmable onchain systems
                create.
              </p>
            </div>

            <div className="flex items-center gap-3.5 py-0.5 pt-1">
              <span className="h-px w-8 flex-none bg-cta/58" />
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cta/78">
                Applied Perspective
              </p>
            </div>

            <div className="body-measure max-w-[58ch] space-y-4 text-[1rem] leading-[1.72] text-muted-foreground/95">
              <p>
                Success depends on treating blockchain networks as observable
                financial systems - making full use of the public data they expose,
                though often only through substantial analytical and infrastructure
                development.
              </p>
              <p>
                My career has centred on data-driven decision-making under
                uncertainty, first in institutional finance and later through
                independent consulting - building analytical frameworks for capital
                allocation, operational planning, and strategic decisions in
                environments carrying material financial risk.
              </p>
              <p>
                Early exposure to digital-asset fundraising cycles highlighted the
                structural fragility of crypto financial systems, often lacking
                operational and risk visibility. That prompted a deliberate shift
                toward empirical analysis and formal risk discipline.
              </p>
            </div>

            <blockquote className="body-measure max-w-[58ch] border-l-2 border-cta/45 pl-5 text-[1.03rem] leading-[1.7] text-foreground/88">
              My work today applies that accumulated understanding alongside teams
              operating complex digital-asset environments safely and with clarity
              - designing operational intelligence and risk infrastructure for the
              next generation of financial systems.
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="relative overflow-hidden rounded-xl border border-border-strong/72 bg-card/48 shadow-[0_10px_24px_rgba(0,0,0,0.18)] lg:mt-1">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-cta/55 to-transparent"
            />

            <div className="divide-y divide-border/45">
              {credentialGroups.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-3 px-6 py-5 md:grid-cols-[132px_minmax(0,1fr)] md:gap-6 md:px-7 md:py-5"
                >
                  <div className="flex items-start gap-2.5 pt-0.5">
                    <span
                      aria-hidden
                      className="mt-[4px] h-[7px] w-[7px] flex-none rounded-full bg-cta/70"
                    />
                    <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] leading-snug text-foreground/92">
                      {group.title}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-3.5 text-[0.99rem] leading-[1.45] text-foreground/86"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.61rem] h-[4px] w-[4px] rounded-full bg-muted-foreground/58"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {group.caption && (
                      <p className="mt-3 text-[0.875rem] leading-[1.55] text-muted-foreground/82">
                        {group.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
