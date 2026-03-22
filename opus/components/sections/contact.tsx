"use client";

import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <SectionShell id="contact" variant="open">
      <FadeIn>
        <div className="max-w-lg">
          <p className="section-label">Engagement Enquiries</p>
          <h2 className="section-title">Availability</h2>
          <p className="section-intro text-[1.12rem] leading-8">
            Selective engagements where financial systems require analytical
            clarity and operational correctness.
          </p>
          <p className="mt-1 text-[1.01rem] font-light text-muted-foreground/88">
            Work typically spans risk analysis, system design, and
            implementation.
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              className="h-10 text-[1.03rem] md:text-[1.03rem]"
              placeholder="Name"
            />
            <Input
              className="h-10 text-[1.03rem] md:text-[1.03rem]"
              type="email"
              placeholder="Email"
            />
            <Textarea
              className="text-[1.03rem] md:text-[1.03rem]"
              placeholder="Describe your environment or infrastructure requirement"
              rows={5}
            />
            <Button className="text-[1.03rem] md:text-[1.03rem]" variant="cta" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
