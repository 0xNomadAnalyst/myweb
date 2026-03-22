import { Slide } from "@/components/deck/Slide";
import { SlideTitle, TwoCol } from "@/components/deck/layouts";
import { BulletList, InsetPanel } from "@/components/deck/blocks";

const bullets = [
  "Unified operational picture across DEX pricing/liquidity, lending exposure, and yield positions – with consistent metrics and definitions.",
  "Decision-grade monitoring built around actions ops teams can actually take (intervene, rebalance liquidity, revise policies, renegotiate partners).",
  "Cross-protocol risk surfaces that aggregate signal across venues rather than relying on fragmented official UIs and partial third-party tools.",
  "Historical event store to accelerate ad hoc investigation and post-stress diagnosis.",
  "Extensible architecture: turnkey Solana modules today; rapid build-out to additional Solana/EVM protocols as needed.",
];

export function FlagshipCapability() {
  return (
    <Slide>
      <SlideTitle
        eyebrow="Flagship Capability"
        title="Realtime DeFi Monitoring Station"
        subtitle="Continuous operational visibility across pricing, exposure, and counterparties – in one place."
      />
      <TwoCol split="3fr 2fr" className="flex-1">
        <BulletList items={bullets} />
        <div className="space-y-6">
          <InsetPanel>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
              Turnkey Coverage (Today)
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground/85">
              Solana DEX monitoring + Kamino + Exponent
            </p>
          </InsetPanel>
          <InsetPanel>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
              Extendable
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground/85">
              Additional Solana/EVM protocols
            </p>
          </InsetPanel>
        </div>
      </TwoCol>
    </Slide>
  );
}


