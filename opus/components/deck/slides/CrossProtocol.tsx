import { Slide } from "@/components/deck/Slide";
import { SlideTitle } from "@/components/deck/layouts";
import { BulletList } from "@/components/deck/blocks";

const bullets = [
  "Unified cross-protocol view: consolidate key signals across DEX pricing, lending exposure, and yield positions into one operational picture.",
  "Normalized metrics across protocols: comparable definitions and consistent measurement, not fragmented UIs.",
  "System-level risk surfaces: track dependencies and interactions between liquidity, leverage, and execution conditions.",
  "Action-oriented dashboards: distil broad protocol activity into a small set of indicators aligned with interventions teams can actually take.",
  "Extendable coverage: turnkey Solana modules today; expand to additional Solana/EVM protocols as needed.",
];

export function CrossProtocol() {
  return (
    <Slide>
      <SlideTitle
        title="Cross-Protocol Monitoring Station"
        subtitle="As stablecoins and yield-bearing RWAs span multiple DeFi services, risk becomes system-level – visibility must too."
      />
      <BulletList items={bullets} className="flex-1" />
    </Slide>
  );
}


