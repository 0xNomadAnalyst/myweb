import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentialGroups = [
  {
    title: "Digital Asset & Token Economy Work",
    items: [
      "Operational Risk Infrastructure - Solstice Stablecoin (~$300M AUM)",
      "Token Economy Modelling & Treasury Management Support",
      "ICO / Utility Token Fundraising Support (~$60M raised)",
    ],
  },
  {
    title: "Financial & Investment Experience",
    items: [
      "Bloomberg - Analytical Research & Financial Modelling",
      "M&A Analyst - UK Renewable Energy",
      "Project Finance Modelling - Utility-Scale Renewables (Chile)",
    ],
    caption: "Private-equity sponsored infrastructure and capital structuring.",
  },
  {
    title: "Professional Certifications",
    items: ["CFA Charterholder", "Financial Risk Manager (FRM)"],
  },
  {
    title: "Education",
    items: [
      "MSc Economic Policy - University College London",
      "BSc Economics & Philosophy - University of Bristol (First Class Honours)",
    ],
    caption: "Economic training applied to market structure and incentive design.",
  },
];

export function Background() {
  return (
    <SectionShell id="background" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block [background:radial-gradient(880px_360px_at_83%_14%,rgba(128,162,198,0.13),transparent_62%),linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_48%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-12 right-[44%] hidden w-px bg-gradient-to-b from-transparent via-border-soft to-transparent lg:block"
      />

      <FadeIn>
        <p className="section-label">Analytical Foundations</p>
        <h2 className="section-title">Background & Perspective</h2>
        <p className="section-intro max-w-3xl">
          Strong analytical foundations developed across institutional finance,
          real assets, and digital-asset markets.
        </p>
      </FadeIn>

      <div className="relative mt-10 grid gap-12 lg:grid-cols-[minmax(0,5.2fr)_minmax(0,6.8fr)] lg:gap-16">
        <FadeIn delay={0.09}>
          <div className="space-y-7">
            <div className="body-measure max-w-[60ch] space-y-4 text-[0.98rem] leading-[1.72] text-muted-foreground/96">
              <p>
                Blockchain systems introduce genuinely new financial structures,
                requiring the ability to reinterpret legacy instruments,
                institutions and infrastructure, while cutting through narrative,
                ideology, and conflicting incentives that often obscure economic
                reality.
              </p>
              <p>
                A strong foundation in traditional finance and economic reasoning
                provides the grounding to do this clearly, while remaining open
                to the structural possibilities that programmable onchain systems
                genuinely create.
              </p>
            </div>

            <div className="body-measure max-w-[60ch] space-y-3">
              <div
                aria-hidden
                className="h-px w-24 bg-gradient-to-r from-border to-transparent"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground/84">
                Applied Perspective
              </p>
            </div>

            <div className="body-measure max-w-[60ch] space-y-4 text-[0.98rem] leading-[1.72] text-muted-foreground/96">
              <p>
                Success hinges on treating blockchain networks as observable
                financial systems - making full use of the public data they
                expose, although often only accessible with substantial
                analytical and infrastructure development.
              </p>
              <p>
                My career has consistently centred on enabling data-driven
                decision-making under uncertainty - building analytical
                frameworks that translate complex facts into insights and
                decision guidance relied upon by senior stakeholders.
              </p>
              <p>
                This experience was developed in institutional finance roles and
                later extended through independent consulting, supporting capital
                allocation, operational planning, and strategic decisions in
                environments carrying material financial risk.
              </p>
              <p>
                Early exposure to digital-asset fundraising cycles highlighted
                the structural fragility of crypto financial systems, often
                lacking operational and risk visibilities. This prompted a
                deliberate shift toward empirical analysis and formal risk
                discipline.
              </p>
            </div>

            <blockquote className="body-measure max-w-[60ch] border-l border-cta/45 pl-4 text-[1.01rem] leading-relaxed text-foreground/87">
              My work today applies this accumulated understanding alongside
              teams committed to operating complex digital-asset environments
              safely and with clarity.
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="relative overflow-hidden rounded-xl border border-border-strong/90 bg-card/52 px-5 py-5 shadow-[0_10px_26px_rgba(0,0,0,0.2)] md:px-7 md:py-6 lg:mt-2">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-cta/55 to-transparent"
            />

            <div className="space-y-6">
              {credentialGroups.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-3 border-t border-border/70 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] md:gap-6"
                >
                  <p className="mb-0 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/95">
                    {group.title}
                  </p>

                  <div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-3.5 text-[0.98rem] leading-snug text-foreground/93"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.56rem] h-1 w-1 rounded-full bg-muted-foreground/56"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {group.caption && (
                      <p className="mt-3 text-[0.88rem] leading-relaxed text-muted-foreground/88">
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
