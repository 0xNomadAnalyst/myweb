"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { dashboardScreenshots } from "@/lib/generated/dashboard-screenshots.generated";

const capabilities = [
  "Cross-protocol monitoring across DeFi domains",
  "Structured views for liquidity, pricing, and exposure",
  "Customizable views tailored to operational needs",
  "Fast analytical follow-up after live incidents",
  "Historical event storage for replay and investigation",
  "Extendable architecture for new protocols and markets",
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
      2000,
    );
    return () => clearInterval(id);
  }, [carouselScreenshots.length]);

  return (
    <SectionShell id="system" variant="feature" className="py-10 md:py-14">
      <div className="md:hidden">
        <FadeIn>
          <p className="section-label">Platform in action</p>
          <h2 className="section-title">Cross-Protocol Monitoring in One View</h2>
          <p className="section-intro">
            Cross-protocol monitoring across DEX, lending, yield, and issuer-controlled contract domains.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-5 card-interactive overflow-hidden rounded-xl border border-border/55 bg-[#0a1020] shadow-[0_0_0_1px_rgba(128,162,198,0.16),0_0_22px_1px_rgba(82,114,150,0.2),0_12px_30px_rgba(1,8,20,0.34)]">
            <div className="relative aspect-[17/10] overflow-hidden bg-[#0a1020]">
              {carouselScreenshots.map((img, i) => (
                <Image
                  key={`mobile-${img.src}`}
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  sizes="100vw"
                  priority={i === 0}
                  onError={() => {
                    setFailedSrcs((prev) => {
                      if (prev.has(img.src)) return prev;
                      const next = new Set(prev);
                      next.add(img.src);
                      return next;
                    });
                  }}
                  className="absolute inset-0 h-full w-full object-contain object-center saturate-[0.98] contrast-[0.99] transition-opacity duration-[900ms] ease-in-out"
                  style={{
                    opacity: i === activeIndex ? 0.95 : 0,
                  }}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/[0.16]" />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <a
            href="https://demo.rmckinley.net"
            className="mt-4 inline-block font-mono text-[11px] text-cta/91 transition-[color,filter] duration-600 ease-in-out hover:text-cta/93 hover:drop-shadow-[0_0_1px_rgba(248,169,74,0.9)] hover:[filter:drop-shadow(0_0_1px_rgba(248,169,74,0.9))_drop-shadow(0_0_3px_rgba(248,169,74,0.3))]"
          >
            View Live Demo&ensp;&rarr;
          </a>
        </FadeIn>
      </div>

      <div className="hidden md:block">
        <FadeIn>
          <div className="grid items-start gap-9 md:grid-cols-[2fr_3fr] md:gap-10">
            <div className="md:pl-1 md:pr-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-foreground/90">
                Flagship Intelligence Platform
              </p>
              <p className="body-measure mb-7 text-[0.98rem] leading-relaxed text-muted-foreground/96 sm:mb-8 sm:text-[1.02rem]">
              A specialized monitoring and analytical system for teams managing live onchain financial operations, turning raw onchain activity into decision-oriented visibility across liquidity, market structure, counterparties, and stress events.
              </p>
              <p className="section-label mb-3 text-muted-foreground/90">
                Core platform capabilities
              </p>
              <ul className="mb-6 space-y-2 sm:mb-7">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.96rem] leading-snug text-muted-foreground/95 sm:text-[1.01rem]"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/78" />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="mb-5 border-border md:mb-6 md:mr-4" />
              <div className="card-interactive rounded-lg border border-border-strong bg-accent/32 bg-none px-4 py-4 hover:bg-accent/44 sm:px-5 md:mr-4">
                <p className="section-label mb-2.5 text-muted-foreground/90">
                  Deployment Readiness
                </p>
                <p className="text-[0.96rem] leading-relaxed text-muted-foreground/97 sm:text-[1.01rem]">
                  Solana protocols – turnkey deployment
                  <br />
                  EVM environments – rapid implementation
                </p>
              </div>
            </div>

            <div className="md:-ml-3 md:pr-2">
              <p className="section-label mb-4 text-muted-foreground/90 sm:mb-6">
                Selected Platform Views
              </p>
              <div className="card-interactive overflow-hidden rounded-xl border border-border/55 bg-[#0a1020] bg-none shadow-[0_0_0_1px_rgba(128,162,198,0.16),0_0_22px_1px_rgba(82,114,150,0.2),0_12px_30px_rgba(1,8,20,0.34)] hover:bg-accent/35 hover:shadow-[0_0_0_1px_rgba(143,178,219,0.28),0_0_30px_4px_rgba(88,132,186,0.26),0_18px_36px_rgba(1,8,20,0.42)]">
                <div className="relative grid aspect-[17/10] overflow-hidden bg-[#0a1020]">
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
                      }}
                    />
                  ))}
                  <div className="pointer-events-none col-start-1 row-start-1 relative z-10 h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/[0.16]" />
                  </div>
                </div>
              </div>

              <a
                href="https://demo.rmckinley.net"
                className="mt-5 inline-block font-mono text-[11px] text-cta/91 transition-[color,filter] duration-600 ease-in-out hover:text-cta/93 hover:drop-shadow-[0_0_1px_rgba(248,169,74,0.9)] hover:[filter:drop-shadow(0_0_1px_rgba(248,169,74,0.9))_drop-shadow(0_0_3px_rgba(248,169,74,0.3))] sm:mt-[1.375rem] sm:text-[12px]"
              >
                Explore Live Platform&ensp;&rarr;
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
