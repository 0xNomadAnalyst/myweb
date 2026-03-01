"use client";

import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <SectionShell id="contact">
      <FadeIn>
        <div className="max-w-md">
          <h2 className="text-2xl font-medium tracking-tight">Availability</h2>
          <p className="mt-2 text-muted-foreground">
            Selective engagements where operational visibility is a hard
            requirement.
          </p>
          <p className="mt-1 text-sm text-muted-foreground/60">
            Financial data infrastructure, risk systems, or protocol analytics.
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
            <Button type="submit">Send Message</Button>
          </form>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            contact@opus-data.dev
          </p>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
