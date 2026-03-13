import { Slide } from "@/components/deck/Slide";
import { SlideTitle } from "@/components/deck/layouts";
import { BulletList, TagRow } from "@/components/deck/blocks";

const bullets = [
  "Risk policy design & evaluation: model intervention thresholds, liquidity provisions, and operational playbooks against observed historical behaviour.",
  "Liquidity provisioning & capacity modelling: estimate sizing and responsiveness required for buffers, arbitrage capacity, or internal market operations.",
  "Feature / mechanism cost analysis: evaluate likely cost and risk impact of new token features, incentives, or parameter changes before deployment.",
  "Stress testing and scenario analysis: explore outcomes under adverse market conditions and identify failure modes early.",
  "Grounded in observed data: modelling inputs derived from empirical monitoring and historical event stores, not purely theoretical assumptions.",
];

const outputs = [
  "policy recommendations",
  "parameter ranges",
  "sizing estimates",
  "stress scenarios",
];

export function SimulationModelling() {
  return (
    <Slide>
      <SlideTitle
        eyebrow="Forward-Looking Capability"
        title="Simulation & Risk Policy Modelling"
        subtitle="Evaluate policies and new design choices quantitatively before they become operational risk."
      />
      <BulletList items={bullets} className="flex-1" />
      <div className="mt-auto pt-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
          Outputs
        </p>
        <TagRow tags={outputs} />
      </div>
    </Slide>
  );
}
