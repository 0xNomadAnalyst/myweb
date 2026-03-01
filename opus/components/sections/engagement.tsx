import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const principles = [
  {
    title: "Principal-Led Delivery",
    description:
      "You work directly with the person defining analysis, models, and operational systems — without delivery layers or handoffs.",
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
    <SectionShell id="engagement">
      <FadeIn>
        <h2 className="text-2xl font-medium tracking-tight">
          Ways of Working
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Engagements adapt to the operational problem and internal team
          structure.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {principles.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
