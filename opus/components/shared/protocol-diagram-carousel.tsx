"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SystemDiagram } from "@/components/shared/system-diagram";
import { ExponentDiagram } from "@/components/shared/exponent-diagram";
import { OrcaDiagram } from "@/components/shared/orca-diagram";

const DIAGRAMS = [
  {
    id: "kamino",
    label: "Kamino",
    render: () => <SystemDiagram />,
  },
  {
    id: "exponent",
    label: "Exponent",
    render: () => <ExponentDiagram />,
  },
  {
    id: "orca",
    label: "DEX",
    render: () => <OrcaDiagram />,
  },
] as const;

const ROTATION_MS = 9000;

export function ProtocolDiagramCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (DIAGRAMS.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % DIAGRAMS.length);
    }, ROTATION_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="relative h-[186px] sm:h-[232px] md:h-[270px]">
        {DIAGRAMS.map((diagram, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={diagram.id}
              className={cn(
                "h-full transition-opacity duration-700 ease-out",
                isActive
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0",
              )}
              aria-hidden={!isActive}
            >
              <div className="h-full overflow-hidden">
                <div className="h-full min-w-0">
                  {diagram.render()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
