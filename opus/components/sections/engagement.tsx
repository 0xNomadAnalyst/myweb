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
            <p className="section-label">Working Together</p>
            <h2 className="section-title">
              What Engagement Looks Like
            </h2>
            <p className="section-intro mt-5 max-w-[56ch]">
              A compact, principal-led model designed to stay close to operating realities and avoid fragmentation between analysis, implementation, and handover.
            </p>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground/92">
              Engagements are shaped around the specific operational problem, internal team structure, and level of support required. Some begin with diagnostic analysis, policy review, or strategic advisory; others extend into monitoring design, implementation, or refinement of an existing system.
            </p>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground/90">
              The aim is to keep analytical definition, technical execution, and operational context aligned throughout – so useful work happens quickly and internal teams can take ownership without unnecessary delivery layers.
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
