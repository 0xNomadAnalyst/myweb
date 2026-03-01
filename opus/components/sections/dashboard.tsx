import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const capabilities = [
  "Liquidity and market structure visibility across venues",
  "Execution quality and price-impact monitoring",
  "Protocol and lending risk surveillance",
  "Stress propagation and scenario analysis",
  "Operational decision support for trading and risk teams",
];

const previews = [
  {
    title: "Liquidity Monitor",
    metrics: [
      { label: "TVL", value: "$12.5M" },
      { label: "Active Pools", value: "128" },
      { label: "Pool Balance", value: "45 / 55%" },
    ],
    bars: [65, 72, 58, 80, 92, 88, 76, 95, 87, 70, 82, 90],
  },
  {
    title: "Execution Analytics",
    metrics: [
      { label: "24h Volume", value: "$117K" },
      { label: "Swaps", value: "1,576" },
      { label: "Avg Spread", value: "1.54 bps" },
    ],
    bars: [40, 55, 70, 48, 62, 80, 73, 58, 65, 50, 72, 85],
  },
  {
    title: "Lending Risk",
    metrics: [
      { label: "Utilisation", value: "67.3%" },
      { label: "Outstanding", value: "$9.9M" },
      { label: "Collateral", value: "$19.5M" },
    ],
  },
];

export function Dashboard() {
  return (
    <SectionShell id="system" variant="feature">
      <FadeIn>
        <div className="grid items-start gap-10 md:grid-cols-[9fr_11fr] md:gap-14">
          {/* Capability positioning */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Operational Intelligence Platform
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground/80">
              Complex financial and onchain markets require continuous
              operational visibility. I design analytical environments that
              translate market data into operational decision systems.
            </p>

            <ul className="mb-10 space-y-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-snug text-muted-foreground/60"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/30" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-md border border-border/50 bg-accent/40 px-5 py-4">
              <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Deployment Readiness
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground/70">
                Solana protocols&ensp;&mdash;&ensp;turnkey deployment
                <br />
                EVM environments&ensp;&mdash;&ensp;rapid implementation
              </p>
              <p className="mt-2.5 text-xs text-muted-foreground/40">
                Shared analytical framework, protocol mechanics already
                modelled.
              </p>
            </div>
          </div>

          {/* Dashboard showcase */}
          <div>
            <div className="relative">
              {previews.map((preview, i) => (
                <div
                  key={preview.title}
                  className="relative rounded-lg border border-border/80 bg-card p-4 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                  style={{
                    marginTop: i > 0 ? "-0.75rem" : undefined,
                    marginLeft: `${i * 0.5}rem`,
                    zIndex: i + 1,
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-mono text-[11px] font-medium tracking-wide">
                      {preview.title}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                      <span className="font-mono text-[9px] text-muted-foreground/30">
                        live
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    {preview.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/35">
                          {m.label}
                        </p>
                        <p className="font-mono text-xs tabular-nums text-foreground/80">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {preview.bars && (
                    <div className="mt-3 flex h-8 items-end gap-0.5">
                      {preview.bars.map((v, j) => (
                        <div
                          key={j}
                          className="flex-1 rounded-sm bg-primary/15"
                          style={{ height: `${v}%` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground/50">
              Example operational intelligence environment deployed across
              digital-asset markets.
            </p>
            <a
              href="#"
              className="mt-1.5 inline-block font-mono text-[11px] text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              Explore operational dashboard&ensp;&rarr;
            </a>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
