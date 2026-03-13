import { Slide } from "@/components/deck/Slide";
import { SlideTitle } from "@/components/deck/layouts";
import { BulletList, TagRow } from "@/components/deck/blocks";

const bullets = [
  "Historical event store across covered protocols to support fast investigation when something breaks.",
  "Rapid ad hoc diagnostics: shorten the path from \u201csomething happened\u201d to \u201cwe understand why\u201d.",
  "Root-cause analysis across venues: connect liquidity, execution conditions, and protocol exposures to identify mechanisms — not just correlations.",
  "Accelerate the learning loop: refine operational playbooks, policies, and thresholds based on observed outcomes.",
  "Supports governance and reporting: clear post-event narratives grounded in measurable evidence.",
];

const outcomes = ["faster recovery", "fewer repeats", "better policies"];

export function IncidentReplay() {
  return (
    <Slide>
      <SlideTitle
        eyebrow="Premium Workflow"
        title="Incident Replay & Root-Cause Analysis"
        subtitle="A historical event store turns stress events into measurable lessons — reducing time-to-understanding and accelerating policy refinement."
      />
      <BulletList items={bullets} className="flex-1" />
      <div className="mt-auto pt-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
          Outcome
        </p>
        <TagRow tags={outcomes} />
      </div>
    </Slide>
  );
}
