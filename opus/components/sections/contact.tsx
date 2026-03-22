"use client";

import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const topics = [
  "Risk monitoring architecture",
  "Protocol and market-structure diagnostics",
  "Operational system implementation",
];

export function Contact() {
  return (
    <SectionShell id="contact" variant="open">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
        <FadeIn>
          <div className="max-w-lg">
            <p className="section-label">Engagement Enquiries</p>
            <h2 className="section-title">Availability</h2>
            <p className="section-intro">
              Selective engagements where financial systems require analytical
              clarity and operational correctness.
            </p>
            <p className="mt-1 text-[0.98rem] text-muted-foreground/90">
              Work typically spans risk analysis, system design, and
              implementation.
            </p>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea
                placeholder="Describe your environment or infrastructure requirement"
                rows={5}
              />
              <Button variant="cta" type="submit">Send Message</Button>
            </form>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="space-y-4 lg:pt-10">
            <div className="rounded-lg border border-border-strong bg-card px-5 py-4">
              <p className="section-label mb-3">Typical Scope</p>
              <ul className="space-y-2.5">
                {topics.map((topic) => (
                  <li key={topic} className="flex gap-2.5 text-[0.98rem] text-muted-foreground/94">
                    <span className="mt-[8px] h-1 w-1 rounded-full bg-muted-foreground/80" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border-strong bg-card/85 px-5 py-4">
              <p className="section-label mb-2.5">Direct Channel</p>
              <p className="font-mono text-[0.98rem] text-muted-foreground/93">contact@opus-data.dev</p>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-muted-foreground/90">
                Include current operating context, monitored protocols, and the
                decision problem you are prioritising.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
