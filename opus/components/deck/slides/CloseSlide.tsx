import { Slide } from "@/components/deck/Slide";
import { SlideTitle, CardGrid } from "@/components/deck/layouts";
import { CredentialBlock } from "@/components/deck/blocks";

const principles = [
  {
    title: "Principal-led delivery",
    description:
      "Direct work with the practitioner defining analysis, models, and systems — no delivery layers or handoffs.",
  },
  {
    title: "Integrated advisory + build",
    description:
      "Empirical analysis and implementation stay aligned, preserving decision clarity end-to-end.",
  },
  {
    title: "Designed for internal ownership",
    description:
      "Monitoring environments and analytical frameworks transferred so teams can operate and extend independently.",
  },
];

export function CloseSlide() {
  return (
    <Slide>
      <SlideTitle eyebrow="Engagement Model" title="Principal-Led" />

      <CardGrid cols={3} className="mb-10">
        {principles.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-lg border border-border bg-card p-7"
          >
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground/80">
              {p.description}
            </p>
          </div>
        ))}
      </CardGrid>

      <div className="flex flex-1 items-end justify-between">
        <div className="space-y-3">
          <CredentialBlock
            label="Background"
            items={["Institutional finance + independent consulting"]}
          />
          <CredentialBlock
            label="Credentials"
            items={["CFA Charterholder", "FRM"]}
          />
          <CredentialBlock
            label="Current Focus"
            items={["Operational intelligence for onchain financial systems"]}
          />
        </div>

        <div className="max-w-[600px] text-right">
          <p className="text-lg text-muted-foreground">
            If you operate a digital-asset system where visibility and execution
            quality are mission-critical, let&apos;s discuss scope and deployment.
          </p>
          <div className="mt-6 space-y-1 font-mono text-base text-muted-foreground/50">
            <p>Email: [your email]</p>
            <p>Website: [your site]</p>
            <p>LinkedIn: [your LinkedIn]</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
