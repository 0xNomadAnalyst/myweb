import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

type CredentialGroup = {
  title: string;
  items: string[];
  caption?: string;
};

const credentialGroups: CredentialGroup[] = [
  {
    title: "Digital Asset & OnChain Work",
    items: [
      "Operational Risk Infrastructure - Solstice USX Stablecoin (~$300M AUM)",
      "Public Token Economy Dashboard - Token LaunchPad with 250k users",
      "ICO / Utility Token Fundraising Support - (~$60M raised)",
    ],
  },
  {
    title: "Institutional Finance Experience",
    items: [
      "Bloomberg - Analytical Research & Financial Modelling",
      "M&A Analyst - UK Renewable Energy Assets",
      "Project Finance Modelling - Private Equity Sponsored Renewables (Chile)",
    ],
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

function splitCredential(item: string) {
  const divider = " - ";
  const idx = item.indexOf(divider);

  if (idx === -1) {
    return { l1: item, l2: null as string | null };
  }

  return {
    l1: item.slice(0, idx).trim(),
    l2: item.slice(idx + divider.length).trim(),
  };
}


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
        <p className="section-intro max-w-[75ch] text-foreground/92 lg:max-w-none lg:whitespace-nowrap">
          Judgment shaped across institutional finance, real assets, and digital-asset markets.
        </p>
      </FadeIn>

      <div className="relative mt-7 grid gap-9 sm:mt-[2.125rem] sm:gap-12 lg:grid-cols-[minmax(0,6.2fr)_minmax(0,5.8fr)] lg:gap-6 xl:grid-cols-[minmax(0,6.1fr)_minmax(0,5.9fr)]">
        <FadeIn delay={0.09}>
          <div className="space-y-6 sm:space-y-7">
            <div className="body-measure max-w-[60ch] space-y-3.5 text-[0.95rem] leading-[1.66] text-muted-foreground/95 sm:space-y-4 sm:text-[1rem] sm:leading-[1.72]">
              <p>
                Blockchain systems introduce genuinely new financial structures,
                requiring the ability to reinterpret legacy instruments,
                institutions, and infrastructure while cutting through narrative,
                ideology, and conflicting incentives that obscure economic reality.
              </p>
              <p>
                A strong foundation in traditional finance and economic reasoning
                provides the grounding to do this clearly, while remaining open to
                the structural possibilities programmable onchain systems create.
              </p>
            </div>

            <div className="flex items-center gap-3.5 py-0.5 pt-1">
              <span className="h-px w-8 flex-none bg-cta/58" />
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cta/78">
                Disciplined Reasoning
                {/* Alternatives:
                    Empirical Analysis
                    Grounded Analysis
                    Disciplined Analysis
                    Evidence-Led Analysis
                    Critical Reasoning
                    Disciplined Reasoning
                    Grounded Critical Thinking
                */}
              </p>
            </div>

            <div className="body-measure max-w-[60ch] space-y-3.5 text-[0.95rem] leading-[1.66] text-muted-foreground/95 sm:space-y-4 sm:text-[1rem] sm:leading-[1.72]">
              <p>
                Success depends on treating blockchain networks as observable
                financial systems - drawing on the public data they expose,
                though often only through substantial analytical and infrastructure
                work.
              </p>
              <p>
                My career has centred on enabling data-driven decision-making,
                first in institutional finance and later through
                independent consulting - building analytical frameworks for capital
                allocation, operational planning, and strategic decisions in
                materially risky environments.
              </p>
              <p>
                Early exposure to digital-asset fundraising cycles highlighted the
                structural fragility of crypto financial systems, often lacking
                operational and risk visibility. That prompted a deliberate shift
                toward empirical analysis and formal risk discipline.
              </p>
            </div>

            <blockquote className="body-measure relative max-w-[60ch] pl-[0.9rem] text-[0.95rem] leading-[1.62] text-foreground/86 before:absolute before:bottom-[0.18rem] before:left-0 before:top-[0.18rem] before:w-[1.5px] before:bg-cta/57 before:content-[''] sm:pl-[1.125rem] sm:text-[1.02rem] sm:leading-[1.68]">
              My work today applies that accumulated understanding alongside teams
              operating complex digital-asset environments safely and with clarity
              - designing operational intelligence and risk infrastructure for a
              new generation of financial systems.
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="relative overflow-hidden rounded-xl border border-border-strong/66 bg-card/48 shadow-[0_10px_24px_rgba(0,0,0,0.18)] lg:mt-1">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-cta/55 to-transparent"
            />

            <div>
              {credentialGroups.map((group) => (
                <div
                  key={group.title}
                  className="relative grid gap-3 py-4 pl-4 pr-3 before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-px before:[background:linear-gradient(90deg,transparent_0%,transparent_14%,rgba(255,255,255,0.018)_22%,rgba(255,255,255,0.03)_30%,rgba(255,255,255,0.04)_38%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0.04)_62%,rgba(255,255,255,0.03)_70%,rgba(255,255,255,0.018)_78%,transparent_86%,transparent_100%)] first:before:hidden sm:py-5 sm:pl-6 sm:pr-2 md:grid-cols-[138px_minmax(0,1fr)] md:gap-6 md:py-5 md:pl-7 md:pr-3 md:before:inset-x-6"
                >
                  <div className="flex items-start gap-2.5 pt-0.5">
                    <span
                      aria-hidden
                      className="mt-[5px] h-[6px] w-[6px] flex-none rounded-full bg-cta/58"
                    />
                    <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] leading-snug text-foreground/92">
                      {group.title}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {group.items.map((item) => {
                        const split = splitCredential(item);
                        return (
                          <li key={item} className="relative pl-3.5">
                            <span
                              aria-hidden
                              className="absolute left-0 top-[0.56rem] h-[3px] w-[3px] rounded-full bg-muted-foreground/46"
                            />
                            <p className="text-[0.92rem] leading-[1.28] text-foreground/88 sm:text-[0.97rem]">
                              {split.l1}
                            </p>
                            {split.l2 && (
                              <p className="mt-1 text-[0.82rem] leading-[1.3] text-foreground/82 sm:text-[0.875rem]">
                                {split.l2}
                              </p>
                            )}
                          </li>
                        );
                      })}
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
