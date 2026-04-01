import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const outcomes = [
  "Earlier visibility into events that could pressure liquidity",
  "Better oversight of external market-maker performance",
  "Rapid post-incident analysis that helped strengthen protocol risk management",
];

const metrics = [
  { label: "Annual MM Cost", from: "~$2m", to: "~$840k" },
  { label: "External MM Model", from: "2 partners", to: "1 partner" },
  { label: "Operating Model", from: "External only", to: "Internal capability" },
];

export function Outcomes() {
  return (
    <SectionShell id="outcomes" variant="open">
      <div className="md:hidden">
        <FadeIn>
          <p className="section-label">Selected outcomes</p>
          <h2 className="section-title">Improvements with Financial Impact</h2>
          <p className="section-intro">
            Better visibility translated into measurable changes in cost, oversight, and operating model.
          </p>
        </FadeIn>

        <div className="mt-5 grid gap-3">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={0.06 * (index + 1)}>
              <div className="card-interactive relative overflow-hidden rounded-lg border border-border-strong/65 bg-card/36 px-4 py-3.5 pl-[1.15rem] hover:bg-accent">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cta/72 to-transparent shadow-[0_0_16px_rgba(246,155,52,0.42)]"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/86">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-[1rem] font-medium tracking-tight text-foreground/96">
                  {metric.from}&ensp;&rarr;&ensp;{metric.to}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-muted-foreground/86">
            Reported benefits also included earlier stress visibility, stronger market-maker oversight, and faster post-incident analysis.
          </p>
        </FadeIn>
      </div>

      <div className="hidden md:block">
        <FadeIn>
          <p className="section-label">Selected  Client Outcomes</p>
          <h2 className="section-title">Improvements with Financial Impact</h2>
          <p className="section-intro max-w-none md:whitespace-nowrap">
            Better visibility translated into concrete changes in operating model, market-maker oversight, and cost.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={0.06 * (index + 1)}>
              <div className="card-interactive h-full rounded-lg border border-border-strong bg-card p-5 hover:bg-accent">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/86">
                  {metric.label}
                </p>
                <p className="mt-2 text-[1.07rem] font-medium tracking-tight text-foreground/96">
                  {metric.from}&ensp;&rarr;&ensp;{metric.to}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.22}>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/86">
            Additional reported benefits
          </p>
          <ul className="mt-3 space-y-2.5 text-[0.98rem] leading-relaxed text-muted-foreground/94">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-[0.58rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
