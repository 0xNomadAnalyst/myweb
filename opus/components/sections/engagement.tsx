import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const principles = [
  {
    title: "Principal-Led Delivery",
    description:
      "You work directly with the person defining analysis, models, and operational systems - without delivery layers or handoffs.",
  },
  {
    title: "Integrated Advisory & Build",
    description:
      "Analytical definition and technical implementation remain aligned throughout the engagement, ensuring decisions translate into working systems.",
  },
  {
    title: "Designed for Internal Ownership",
    description:
      "Systems and analytical frameworks are transferred so internal teams can understand, operate, and extend them independently.",
  },
];

export function Engagement() {
  return (
    <SectionShell id="engagement" variant="open">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-14">
        <FadeIn>
          <div className="max-w-xl">
            <p className="section-label">Delivery Structure</p>
            <h2 className="section-title">
              Ways of Working
            </h2>
            <p className="section-intro max-w-[56ch]">
              Engagements adapt to the operational problem and internal team
              structure.
            </p>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground/92">
              The model stays compact by design: close to stakeholder
              requirements, with no loss in translation between problem
              framing, analysis, and implementation, and faster iteration as
              priorities evolve.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground/90">
              Work typically begins with problem framing and decision
              priorities, then moves into analytical definition and
              implementation without a handoff between stages.
            </p>
          </div>
        </FadeIn>

        <div className="relative space-y-4">
          <div className="absolute bottom-6 left-[18px] top-6 hidden w-px bg-border-soft lg:block" />
          {principles.map((item, i) => (
            <FadeIn key={item.title} delay={0.08 * (i + 1)}>
              <div className="card-interactive relative rounded-lg border border-border-strong bg-card px-5 py-5 pl-14 hover:bg-accent">
                <p className="absolute left-5 top-5 font-mono text-[12px] text-cta/84">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base font-medium tracking-tight text-foreground/97">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground/95">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
