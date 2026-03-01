"use client";

import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const domains = [
  "DeFi Risk Visibility",
  "Protocol & Market Structure",
  "On-Chain Market Data",
  "Realtime Monitoring",
  "Operational Intelligence",
];

export function Hero() {
  return (
    <SectionShell variant="hero">
      <FadeIn>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Understand and operate complex financial systems in realtime environments.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          I work with teams facing complex financial environments – combining analytical judgement and technical implementation as a single principal practitioner.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground/70">
          Independent practice spanning financial risk analysis, empirical modelling, and realtime infrastructure across digital-asset markets – from problem definition to deployment.
          </p>
          <hr className="my-6 border-muted-foreground/20" />
          <p className="text-sm text-muted-foreground/50">
            Roderick McKinley, CFA, FRM
            <br />
            Independent Financial Systems Analyst
          </p>
          <div className="mt-8">
            <Button variant="cta" asChild>
              <a href="#system">Explore Operational Dashboard</a>
            </Button>
            <a
              href="#"
              className="mt-3.5 block text-sm text-muted-foreground/60 transition-colors duration-500 hover:text-muted-foreground/90"
            >
              Watch 3-minute platform overview&ensp;&rarr;
            </a>
            <a
              href="#"
              className="mt-2 block font-mono text-xs text-muted-foreground/45 transition-colors duration-500 hover:text-muted-foreground/60"
            >
              Download capabilities overview (PDF)
            </a>
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
