import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const domains = [
  {
    title: "Liquidity & Market Structure Visibility",
    description:
      "Understand true depth, concentration risk, and venue dependency under live trading conditions.",
  },
  {
    title: "Market Maker Visibility & Accountability",
    description:
      "Measure third-party liquidity support against explicit KPIs, stress-period behaviour, and replacement thresholds.",
  },
  {
    title: "Cross-Protocol Risk & Exposure Monitoring",
    description:
      "Monitor dependencies across liquidity, lending, and yield venues through normalized metrics and unified risk views.",
  },
  {
    title: "Incident Replay & Root-Cause Analysis",
    description:
      "Use historical event data to explain stress episodes, isolate mechanisms, and refine playbooks.",
  },
  {
    title: "Simulation & Risk Policy Modelling",
    description:
      "Test thresholds, liquidity buffers, and design choices before they become operational risk.",
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
      <FadeIn>
        <p className="section-label">Key Operational Domains</p>
        <h2 className="section-title">
          Where Visibility Matters Most
        </h2>
        <p className="section-intro max-w-none">
          The operational domains where better monitoring, accountability, and system-level understanding have the greatest impact.
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
    </SectionShell>
  );
}
