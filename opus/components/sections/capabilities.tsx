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
      "Monitor dependencies across liquidity, lending, and yield venues through normalized metrics and unified risk surfaces.",
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
        <p className="section-label">Where Visibility Breaks</p>
        <h2 className="section-title">
          Operational Problem Domains
        </h2>
        <p className="section-intro max-w-[72ch]">
          Where visibility gaps, accountability questions, and system-level
          risk matter most.
        </p>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-12">
        {domains.map((domain, i) => {
          const isLead = i === 0;
          return (
            <FadeIn key={domain.title} delay={i * 0.08} className={cardSpan(i)}>
              <div
                className={`card-interactive flex h-full flex-col rounded-lg border border-border-strong bg-card hover:bg-accent ${
                  isLead ? "p-6 md:p-7" : "p-5"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/86">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={isLead ? "mt-3 text-xl font-medium tracking-tight text-foreground/98" : "mt-3 text-base font-medium tracking-tight text-foreground/96"}>
                  {domain.title}
                </h3>
                <p className={isLead ? "mt-3 max-w-[60ch] text-[16px] leading-relaxed text-muted-foreground/96" : "mt-2 text-[0.98rem] leading-relaxed text-muted-foreground/95"}>
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
