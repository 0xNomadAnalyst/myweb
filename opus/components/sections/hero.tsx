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
        <div className="max-w-[980px]">
          <h1 className="text-[2.2rem] font-medium leading-[1.14] tracking-tight text-foreground md:text-[2.9rem] md:leading-tight">
            Understand and operate complex
            <br />
            financial systems in realtime environments.
          </h1>

          <p className="body-measure mt-5 text-[1.08rem] leading-7 text-foreground/90">
            I work with teams facing complex financial environments - combining analytical judgement and technical implementation as a single principal practitioner.
          </p>
          <p className="mt-3 max-w-[80ch] text-[0.98rem] leading-relaxed text-muted-foreground/70">
            Independent practice spanning financial risk analysis, empirical modelling, and realtime infrastructure across digital-asset markets - from problem definition to deployment.
          </p>

          <hr className="my-7 border-muted-foreground/24" />

          <p className="text-[0.98rem] text-muted-foreground/50">
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
              className="mt-3.5 block text-[0.98rem] text-muted-foreground/60 transition-colors duration-500 hover:text-muted-foreground/90"
            >
              Watch 3-minute platform overview&ensp;&rarr;
            </a>
            <a
              href="#"
              className="mt-2 block font-mono text-[14px] text-muted-foreground/45 transition-colors duration-500 hover:text-muted-foreground/60"
            >
              Download capabilities overview (PDF)
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-11 flex flex-wrap gap-2">
          {domains.map((domain) => (
            <div
              key={domain}
              className="group rounded-md border border-border-soft/80 bg-secondary/48 px-2.5 py-1 hover:border-border-soft hover:bg-secondary/66 hover:shadow-[0_0_0_1px_rgba(128,162,198,0.12),0_0_16px_rgba(82,114,150,0.2)]"
              style={{
                transition:
                  "box-shadow 750ms ease-in-out, border-color 750ms ease-in-out, background-color 750ms ease-in-out",
              }}
            >
              <p className="font-mono text-[11px] leading-snug tracking-[0.04em] text-muted-foreground/91 transition-colors duration-750 ease-in-out group-hover:text-foreground/96">
                {domain}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
