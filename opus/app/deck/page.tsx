import { TitleSlide } from "@/components/deck/slides/TitleSlide";
import { OperationalReality } from "@/components/deck/slides/OperationalReality";
import { VisibilityDomains } from "@/components/deck/slides/VisibilityDomains";
import { FlagshipCapability } from "@/components/deck/slides/FlagshipCapability";
import { DifferentiatorMM } from "@/components/deck/slides/DifferentiatorMM";
import { CrossProtocol } from "@/components/deck/slides/CrossProtocol";
import { IncidentReplay } from "@/components/deck/slides/IncidentReplay";
import { SimulationModelling } from "@/components/deck/slides/SimulationModelling";
import { CloseSlide } from "@/components/deck/slides/CloseSlide";

export default function DeckPage() {
  return (
    <main className="deck-container flex flex-col items-center gap-8 bg-neutral-950 py-10 print:gap-0 print:bg-transparent print:py-0">
      <TitleSlide />
      <OperationalReality />
      <VisibilityDomains />
      <FlagshipCapability />
      <DifferentiatorMM />
      <CrossProtocol />
      <IncidentReplay />
      <SimulationModelling />
      <CloseSlide />
    </main>
  );
}
