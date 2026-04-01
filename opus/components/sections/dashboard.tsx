"use client";

import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { DashboardScreenshotCarousel } from "@/components/shared/dashboard-screenshot-carousel";

const capabilities = [
  "Cross-protocol monitoring across DeFi domains",
  "Structured views for liquidity, pricing, and exposure",
  "Customizable views tailored to operational needs",
  "Fast analytical follow-up after live incidents",
  "Historical event storage for replay and investigation",
  "Extendable architecture for new protocols and markets",
];

export function Dashboard() {
  return (
    <SectionShell id="system" variant="feature" className="py-10 md:py-14">
      <div className="md:hidden">
        <FadeIn>
          <p className="section-label">Flagship Platform</p>
          <h2 className="section-title">Cross-Protocol Monitoring in One View</h2>
          <p className="section-intro">
            A risk monitoring and analytical system for live onchain financial operations.
          </p>
          <ul className="mt-3 space-y-2 text-[0.9rem] leading-relaxed text-muted-foreground/88">
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cta/70" />
              Turnkey for key Solana DeFi protocols
            </li>
            <li className="flex gap-2.5">
              <span aria-hidden className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cta/70" />
              Rapid adaptation for EVM environments
            </li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.08}>
          <DashboardScreenshotCarousel className="mt-5" imageKeyPrefix="dash-mobile-" />
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
              <DashboardScreenshotCarousel
                imageKeyPrefix="dash-desktop-"
                sizes="(max-width: 1024px) 100vw, 61vw"
                cardClassName="bg-none hover:bg-accent/35 hover:shadow-[0_0_0_1px_rgba(143,178,219,0.28),0_0_30px_4px_rgba(88,132,186,0.26),0_18px_36px_rgba(1,8,20,0.42)]"
              />

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
