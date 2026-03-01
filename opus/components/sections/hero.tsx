"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const technologies = [
  "PostgreSQL",
  "dbt",
  "Airflow",
  "Snowflake",
  "Spark",
  "Kafka",
];

export function Hero() {
  return (
    <SectionShell className="pt-32 pb-16 md:pt-40 md:pb-24">
      <FadeIn>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Data infrastructure consulting for organizations that treat data as
            a first-class engineering problem.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We design, build, and optimize data platforms. Rigorous methodology.
            Production-grade systems. Measurable outcomes.
          </p>
          <div className="mt-8">
            <Button asChild>
              <a href="#system">View Live System</a>
            </Button>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mt-16 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-mono text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
