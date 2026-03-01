"use client";

import { useState, useEffect, useCallback } from "react";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const capabilities = [
  "Liquidity and market structure visibility across venues",
  "Execution quality and price-impact monitoring",
  "Protocol and lending risk surveillance",
  "Stress propagation and scenario analysis",
  "Operational decision support for trading and risk teams",
];

const screenshots = [
  { src: "/dashboard/pt-swaps.png", alt: "Swap flow and trade count monitoring" },
  { src: "/dashboard/loans-hf.png", alt: "Loan distribution and health factor analysis" },
  { src: "/dashboard/ohlcv.png", alt: "OHLCV price and volume analysis" },
  { src: "/dashboard/fixed-spread.png", alt: "Fixed vs variable rate spread monitoring" },
];

export function Dashboard() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((i: number) => setActive(i), []);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % screenshots.length),
      5000,
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <SectionShell id="system" variant="feature">
      <FadeIn>
        <div className="grid items-start gap-10 md:grid-cols-[9fr_11fr] md:gap-14">
          {/* Capability positioning */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Operational Intelligence Platform
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground/80">
              Complex financial and onchain markets require continuous
              operational visibility. I design analytical environments that
              translate market data into operational decision systems.
            </p>

            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/35">
              Core Capabilities
            </p>
            <ul className="mb-10 space-y-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-snug text-muted-foreground/60"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/30" />
                  {item}
                </li>
              ))}
            </ul>

            <hr className="mb-6 border-border/30" />
            <div className="rounded-md border border-border/50 bg-accent/40 px-5 py-4">
              <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Deployment Readiness
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground/70">
                Solana protocols&ensp;&mdash;&ensp;turnkey deployment
                <br />
                EVM environments&ensp;&mdash;&ensp;rapid implementation
              </p>
              <p className="mt-2.5 text-xs text-muted-foreground/40">
                Shared analytical framework, protocol mechanics already
                modelled.
              </p>
            </div>
          </div>

          {/* Dashboard showcase — fade carousel */}
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
              Operational Views
            </p>
            <div className="relative grid aspect-[17/10] overflow-hidden rounded-lg bg-[#0c1425] ring-1 ring-inset ring-white/[0.05]">
              {screenshots.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="col-start-1 row-start-1 h-full w-full object-contain object-center saturate-[0.95] contrast-[0.97] transition-opacity duration-[1500ms] ease-in-out"
                  style={{ opacity: i === active ? 0.92 : 0 }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}

              {/* Bottom grounding gradient + edge softening */}
              <div className="pointer-events-none col-start-1 row-start-1 relative z-10 h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/[0.18]" />
              </div>

              {/* Progress indicators */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active
                        ? "w-5 bg-white/40"
                        : "w-1.5 bg-white/15 hover:bg-white/25"
                    }`}
                    aria-label={`View screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <a
              href="#"
              className="mt-4 inline-block font-mono text-[11px] text-cta/50 transition-colors duration-500 hover:text-cta/80"
            >
              Explore Operational Dashboard&ensp;&rarr;
            </a>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
