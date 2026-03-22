"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { dashboardScreenshots } from "@/lib/generated/dashboard-screenshots.generated";

const capabilities = [
  "Liquidity and market structure visibility across venues",
  "Execution quality and price-impact monitoring",
  "Protocol and lending risk surveillance",
  "Stress propagation and scenario analysis",
  "Operational decision support for trading and risk teams",
];

const fallbackScreenshots = [
  { src: "/dashboard/pt-swaps.png", alt: "Swap flow and trade count monitoring" },
  { src: "/dashboard/loans-hf.png", alt: "Loan distribution and health factor analysis" },
  { src: "/dashboard/ohlcv.png", alt: "OHLCV price and volume analysis" },
  { src: "/dashboard/fixed-spread.png", alt: "Fixed vs variable rate spread monitoring" },
];

const screenshots = dashboardScreenshots.length > 0
  ? dashboardScreenshots
  : fallbackScreenshots;

export function Dashboard() {
  const [active, setActive] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  const visibleScreenshots = screenshots.filter((img) => !failedSrcs.has(img.src));
  const carouselScreenshots = visibleScreenshots.length > 0
    ? visibleScreenshots
    : fallbackScreenshots.filter((img) => !failedSrcs.has(img.src));
  const activeIndex = carouselScreenshots.length > 0
    ? active % carouselScreenshots.length
    : 0;

  useEffect(() => {
    if (carouselScreenshots.length <= 1) return;
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % carouselScreenshots.length),
      5000,
    );
    return () => clearInterval(id);
  }, [carouselScreenshots.length]);

  return (
    <SectionShell id="system" variant="feature" className="py-14 md:py-14">
      <FadeIn>
        <div className="grid items-start gap-10 md:grid-cols-[2fr_3fr] md:gap-10">
          {/* Capability positioning */}
          <div className="md:pr-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-foreground/90">
              Operational Intelligence Platform
            </p>
            <p className="body-measure mb-8 text-[1.02rem] leading-relaxed text-muted-foreground/96">
              I design operational intelligence environments providing
              continuous visibility into liquidity, execution quality, and
              protocol risk – structured for real-time decision support.
            </p>

            <p className="section-label mb-3 text-muted-foreground/90">
              Core Capabilities
            </p>
            <ul className="mb-10 space-y-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[1.01rem] leading-snug text-muted-foreground/95"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />
                  {item}
                </li>
              ))}
            </ul>

            <hr className="mb-6 border-border md:mr-4" />
            <div className="card-interactive rounded-lg border border-border-strong bg-accent/32 bg-none px-5 py-4 hover:bg-accent/44 md:mr-4">
              <p className="section-label mb-2.5 text-muted-foreground/90">
                Deployment Readiness
              </p>
              <p className="text-[1.01rem] leading-relaxed text-muted-foreground/97">
                Solana protocols&ensp;&ndash;&ensp;turnkey deployment
                <br />
                EVM environments&ensp;&ndash;&ensp;rapid implementation
              </p>
              <p className="mt-2.5 text-[0.88rem] font-[300] text-muted-foreground/86">
                Shared analytical framework, protocol mechanics already
                modelled.
              </p>
            </div>
          </div>

          {/* Dashboard showcase – fade carousel */}
          <div className="md:-ml-3 md:pr-5">
            <p className="section-label mb-5 text-muted-foreground/90">
              Operational Views
            </p>
            <div className="card-interactive overflow-hidden rounded-xl border border-border/55 bg-[#0f192d] bg-none shadow-[0_0_0_1px_rgba(128,162,198,0.16),0_0_22px_1px_rgba(82,114,150,0.2),0_12px_30px_rgba(1,8,20,0.34)] hover:bg-accent/35 hover:shadow-[0_0_0_1px_rgba(143,178,219,0.28),0_0_30px_4px_rgba(88,132,186,0.26),0_18px_36px_rgba(1,8,20,0.42)]">
              <div className="relative grid aspect-[17/10] overflow-hidden bg-[#0f192d]">
                {carouselScreenshots.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 61vw"
                    priority={i === 0}
                    onError={() => {
                      setFailedSrcs((prev) => {
                        if (prev.has(img.src)) return prev;
                        const next = new Set(prev);
                        next.add(img.src);
                        return next;
                      });
                    }}
                    className="col-start-1 row-start-1 h-full w-full object-contain object-center saturate-[0.98] contrast-[0.99] transition-[opacity,transform] duration-[900ms] ease-in-out"
                    style={{
                      opacity: i === activeIndex ? 0.95 : 0,
                      transform: "scale(0.99)",
                    }}
                  />
                ))}

                {/* Bottom grounding gradient + edge softening */}
                <div className="pointer-events-none col-start-1 row-start-1 relative z-10 h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/[0.16]" />
                </div>

              </div>
            </div>

            <a
              href="#"
              className="mt-[1.375rem] inline-block font-mono text-[12px] text-cta/91 transition-[color,filter] duration-600 ease-in-out hover:text-cta/93 hover:drop-shadow-[0_0_1px_rgba(248,169,74,0.9)] hover:[filter:drop-shadow(0_0_1px_rgba(248,169,74,0.9))_drop-shadow(0_0_3px_rgba(248,169,74,0.3))]"
            >
              Explore Operational Dashboard&ensp;&rarr;
            </a>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
