import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const principles = [
  {
    title: "Monitoring Deployment or Adaptation",
    description:
      "Deploying or tailoring a monitoring environment around protocol footprint, market structure, and operational priorities.",
  },
  {
    title: "Liquidity and Market-Structure Analysis",
    description:
      "Evaluating liquidity conditions, venue dependencies, execution sensitivity, and the behaviour of external support providers.",
  },
  {
    title: "Market-Maker Oversight and Incident Diagnostics",
    description:
      "Supporting independent assessment of external MMs or LPs, and rapid investigation when live stress events occur.",
  },
  {
    title: "Risk-Policy Support and New Protocol Coverage",
    description:
      "Refining intervention logic, thresholds, and playbooks while extending monitoring into additional venues or market domains as required.",
  },
];

export function Engagement() {
  return (
    <SectionShell id="engagement" variant="open">
      <div className="md:hidden">
        <FadeIn>
          <p className="section-label">How I work</p>
          <h2 className="section-title">Principal-Led Analysis and Implementation</h2>
          <p className="section-intro">
            I work directly with teams on the monitoring, analysis, and implementation required for their operating environment.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ul className="mt-4 space-y-2 text-[0.94rem] leading-relaxed text-muted-foreground/94">
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Monitoring deployment or adaptation</li>
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Liquidity and market-structure analysis</li>
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Market-maker oversight and incident diagnostics</li>
            <li className="flex gap-2.5"><span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />Risk-policy support and new protocol coverage</li>
          </ul>
          <p className="mt-4 text-[0.92rem] leading-relaxed text-muted-foreground/86">
            Analysis and implementation stay aligned end to end.
          </p>
        </FadeIn>
      </div>

      <div className="hidden md:grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-14">
        <FadeIn>
          <div className="max-w-xl">
            <p className="section-label">How engagement works</p>
            <h2 className="section-title">
              What Engagement Looks Like
            </h2>
            <p className="section-intro mt-4 max-w-[56ch] sm:mt-5">
              A compact, principal-led model designed to stay close to operating reality and avoid fragmentation across analysis, implementation, and handover.
            </p>
            <p className="mt-4 text-[0.93rem] leading-relaxed text-muted-foreground/92 sm:mt-5 sm:text-[0.98rem]">
              Engagements are structured around the operating problem, team context, and level of support required.
            </p>
            <p className="mt-4 text-[0.93rem] leading-relaxed text-muted-foreground/90 sm:mt-5 sm:text-[0.98rem]">
              The model is deliberately direct. Analysis and implementation remain aligned end to end, so operational questions can be answered quickly and acted on without unnecessary delivery layers.
            </p>
          </div>
        </FadeIn>

        <div className="relative space-y-3.5 sm:space-y-4">
          <div className="absolute bottom-6 left-[18px] top-6 hidden w-px bg-border-soft lg:block" />
          {principles.map((item, i) => (
            <FadeIn key={item.title} delay={0.08 * (i + 1)}>
              <div className="card-interactive relative rounded-lg border border-border-strong bg-card px-4 py-4 pl-11 hover:bg-accent sm:px-5 sm:py-5 sm:pl-14">
                <p className="absolute left-4 top-4 font-mono text-[11px] text-cta/84 sm:left-5 sm:top-5 sm:text-[12px]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[0.98rem] font-medium tracking-tight text-foreground/97 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted-foreground/95 sm:mt-2 sm:text-[0.98rem]">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
