import { Slide } from "@/components/deck/Slide";
import { SlideTitle } from "@/components/deck/layouts";
import { BulletList, TagRow } from "@/components/deck/blocks";

const bullets = [
  "Verify performance against obligations: quantify depth provision and price-impact conditions relative to agreed expectations.",
  "Stress-period behaviour matters most: detect liquidity withdrawal, degraded support, or instability when markets move.",
  "Comparable metrics across venues: evaluate performance using consistent measures rather than ad hoc screenshots.",
  "Incentive alignment & contract improvement: support KPI definitions, better terms, and reward structures grounded in observed behaviour.",
  "Replace weak partnerships: identify inadequate support early and enable transitions to alternative providers or internal market-making operations.",
];

const enables = [
  "renegotiation",
  "KPI redesign",
  "incentive alignment",
  "provider replacement",
  "in-house build decisions",
];

export function DifferentiatorMM() {
  return (
    <Slide>
      <SlideTitle
        eyebrow="Differentiator"
        title="Independent Market Maker Monitoring"
        subtitle="Objective oversight of third-party liquidity support — beyond reports, promises, and UI-level impressions."
      />
      <BulletList items={bullets} className="flex-1" />
      <div className="mt-auto pt-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
          Enables
        </p>
        <TagRow tags={enables} />
      </div>
    </Slide>
  );
}
