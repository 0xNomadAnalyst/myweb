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
        <div className="max-w-4xl">
          <p className="section-label">Independent Advisory Practice</p>
          <h1 className="text-[2.2rem] font-medium leading-[1.14] tracking-tight text-foreground md:text-[2.9rem] md:leading-tight">
            Understand and operate complex financial systems in realtime environments.
          </h1>
          <p className="body-measure mt-5 text-base leading-7 text-muted-foreground/97">
          I work with teams facing complex financial environments – combining analytical judgement and technical implementation as a single principal practitioner.
          </p>
          <p className="mt-4 max-w-[76ch] text-sm leading-relaxed text-muted-foreground/92">
          Independent practice spanning financial risk analysis, empirical modelling, and realtime infrastructure across digital-asset markets – from problem definition to deployment.
          </p>
          <hr className="my-7 border-muted-foreground/24" />
          <p className="text-sm text-muted-foreground/88">
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
              className="mt-4 block text-sm text-muted-foreground/86 hover:text-muted-foreground/98"
            >
              Watch 3-minute platform overview&ensp;&rarr;
            </a>
            <a
              href="#"
              className="mt-2.5 block font-mono text-xs text-muted-foreground/86 hover:text-muted-foreground/94"
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
              className="rounded-lg border border-border bg-secondary/72 px-2.5 py-1 font-mono text-[11px] text-muted-foreground/90"
            >
              {domain}
            </span>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}



