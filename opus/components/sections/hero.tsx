"use client";

import { Button } from "@/components/ui/button";
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
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Design and build of systems that transform protocol activity, market data, and
            risk exposure into structured operational visibility.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground/70">
            Designed at the intersection of quantitative finance and data
            engineering.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="#system">View Operational Environment</a>
            </Button>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mt-10 flex flex-wrap gap-2">
          {domains.map((domain) => (
            <span
              key={domain}
              className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground/70"
            >
              {domain}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
