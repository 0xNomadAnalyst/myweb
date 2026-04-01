"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { dashboardScreenshots } from "@/lib/generated/dashboard-screenshots.generated";
import { cn } from "@/lib/utils";

const fallbackScreenshots = [
  { src: "/dashboard/pt-swaps.png", alt: "Swap flow and trade count monitoring" },
  { src: "/dashboard/loans-hf.png", alt: "Loan distribution and health factor analysis" },
  { src: "/dashboard/ohlcv.png", alt: "OHLCV price and volume analysis" },
  { src: "/dashboard/fixed-spread.png", alt: "Fixed vs variable rate spread monitoring" },
];

const screenshots = dashboardScreenshots.length > 0 ? dashboardScreenshots : fallbackScreenshots;

const baseCardClass =
  "card-interactive overflow-hidden rounded-xl border border-border/55 bg-[#0a1020] shadow-[0_0_0_1px_rgba(128,162,198,0.16),0_0_22px_1px_rgba(82,114,150,0.2),0_12px_30px_rgba(1,8,20,0.34)]";

export type DashboardScreenshotCarouselProps = {
  className?: string;
  /** Merged onto the card wrapper (e.g. hover styles for desktop). */
  cardClassName?: string;
  sizes?: string;
  /** Prefix Image React keys when multiple carousels mount on one page. */
  imageKeyPrefix?: string;
};

export function DashboardScreenshotCarousel({
  className,
  cardClassName,
  sizes = "100vw",
  imageKeyPrefix = "",
}: DashboardScreenshotCarouselProps) {
  const [active, setActive] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  const visibleScreenshots = screenshots.filter((img) => !failedSrcs.has(img.src));
  const carouselScreenshots =
    visibleScreenshots.length > 0
      ? visibleScreenshots
      : fallbackScreenshots.filter((img) => !failedSrcs.has(img.src));
  const activeIndex =
    carouselScreenshots.length > 0 ? active % carouselScreenshots.length : 0;

  useEffect(() => {
    if (carouselScreenshots.length <= 1) return;
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % carouselScreenshots.length),
      2000,
    );
    return () => clearInterval(id);
  }, [carouselScreenshots.length]);

  return (
    <div className={className}>
      <div className={cn(baseCardClass, cardClassName)}>
        <div className="relative aspect-[17/10] overflow-hidden bg-[#0a1020]">
          {carouselScreenshots.map((img, i) => (
            <Image
              key={`${imageKeyPrefix}${img.src}`}
              src={img.src}
              alt={img.alt}
              fill
              unoptimized
              sizes={sizes}
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
    </div>
  );
}
