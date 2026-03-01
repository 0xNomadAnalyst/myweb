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
          <h2 className="text-2xl font-medium tracking-tight">
            Start a conversation
          </h2>
          <p className="mt-2 text-muted-foreground">
            Describe your data infrastructure challenge. We respond within one
            business day.
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea
              placeholder="Describe your project or challenge"
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
