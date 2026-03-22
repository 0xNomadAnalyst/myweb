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
        <div className="max-w-md">
          <h2 className="section-title">Availability</h2>
          <p className="section-intro">
            Selective engagements where financial systems require analytical
            clarity and operational correctness.
          </p>
          <p className="mt-1 text-sm text-muted-foreground/72">
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
          <p className="mt-6 font-mono text-xs text-muted-foreground/82">
            contact@opus-data.dev
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
