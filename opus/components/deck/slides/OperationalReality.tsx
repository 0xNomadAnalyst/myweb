import { Slide } from "@/components/deck/Slide";
import { SlideTitle } from "@/components/deck/layouts";

export function OperationalReality() {
  return (
    <Slide>
      <SlideTitle title="Onchain Financial Systems Operate in Continuous Time" />
      <div className="max-w-[1400px] space-y-8">
        <p className="text-xl leading-relaxed text-muted-foreground">
          Digital-asset markets evolve continuously: liquidity conditions,
          leverage, and execution outcomes shift in real time.
        </p>
        <p className="text-xl leading-relaxed text-muted-foreground">
          While blockchain networks make these dynamics publicly observable,
          decision-grade visibility typically requires substantial analytical and
          infrastructure development.
        </p>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Teams operating these systems need continuous insight into liquidity,
          execution conditions, protocol exposures, and emerging stress signals.
        </p>
      </div>
    </Slide>
  );
}
