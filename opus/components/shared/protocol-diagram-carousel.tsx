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
      <div className="relative min-h-[320px]">
        {DIAGRAMS.map((diagram, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={diagram.id}
              className={cn(
                "transition-opacity duration-700 ease-out",
                isActive
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0",
              )}
              aria-hidden={!isActive}
            >
              {diagram.render()}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-border-soft pt-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/78">
          Diagram {String(activeIndex + 1).padStart(2, "0")} of{" "}
          {String(DIAGRAMS.length).padStart(2, "0")}
        </p>
        <div className="flex flex-wrap justify-end gap-2">
          {DIAGRAMS.map((diagram, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={diagram.id}
                type="button"
                className={cn(
                  "rounded-md border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors duration-300",
                  isActive
                    ? "border-border-soft bg-secondary/78 text-foreground/95"
                    : "border-border-soft/70 bg-secondary/42 text-muted-foreground/82 hover:border-border-soft hover:bg-secondary/62 hover:text-foreground/92",
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${diagram.label} diagram`}
                aria-pressed={isActive}
              >
                {diagram.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
