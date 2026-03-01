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
            <div className="relative grid overflow-hidden rounded-lg">
              {screenshots.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="col-start-1 row-start-1 w-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === active ? 1 : 0 }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}

              {/* Subtle edge softening */}
              <div className="pointer-events-none col-start-1 row-start-1 z-10">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/30 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-black/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-t from-black/30 to-transparent" />
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

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground/50">
              Example operational intelligence environment deployed across
              digital-asset markets.
            </p>
            <a
              href="#"
              className="mt-1.5 inline-block font-mono text-[11px] text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              Explore operational dashboard&ensp;&rarr;
            </a>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
