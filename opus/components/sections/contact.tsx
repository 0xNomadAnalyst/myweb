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
          <p className="section-label">Engagements & Fit</p>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-intro text-[1.12rem] leading-8">
            Selective work with teams operating financial systems where visibility, operational clarity, or technical rigor matter.
          </p>
          <p className="mt-1 text-[1.01rem] font-light text-muted-foreground/88">
            Useful starting points include monitoring requirements, market structure concerns, protocol risk questions, or platform and infrastructure buildout.
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
              placeholder="Describe the system, problem, or infrastructure requirement"
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
