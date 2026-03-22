import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const principles = [
  {
    title: "Principal-Led Delivery",
    description:
      "You work directly with the person defining analysis, models, and operational systems – without delivery layers or handoffs.",
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
      <FadeIn>
        <p className="section-label">Engagement Model</p>
        <h2 className="section-title">
          Ways of Working
        </h2>
        <p className="section-intro max-w-xl">
          Engagements adapt to the operational problem and internal team
          structure.
        </p>
      </FadeIn>
      <div className="relative z-0 mt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(56, 130, 200, 0.03) 0%, transparent 74%)",
          }}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.09} className="h-full">
              <div className="card-interactive flex h-full flex-col rounded-lg border border-border-strong bg-card p-5">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">
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



