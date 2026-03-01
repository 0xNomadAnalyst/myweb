"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const domains = [
  "Risk Infrastructure",
  "Protocol Analytics",
  "Market Data",
  "Realtime Systems",
  "Operational Intelligence",
];

export function Hero() {
  return (
    <SectionShell variant="hero">
      <FadeIn>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Realtime financial infrastructure for environments where operational
            visibility is non-negotiable.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Design and operation of systems that transform live financial
            activity into structured risk awareness.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="#system">View Operational Environment</a>
            </Button>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mt-16 flex flex-wrap gap-2">
          {domains.map((domain) => (
            <Badge
              key={domain}
              variant="secondary"
              className="font-mono text-xs"
            >
              {domain}
            </Badge>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
