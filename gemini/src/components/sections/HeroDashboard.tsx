import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Database, Server } from "lucide-react";
import { Panel } from "@/components/custom/Panel";

export function HeroSection() {
  return (
    <AnimatedSection className="pt-32 pb-16 md:pt-48 md:pb-24 border-none">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6 leading-tight">
            Institutional-grade data infrastructure for complex systems.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Designing and implementing scalable, resilient data architectures. 
            Specializing in high-throughput pipelines, distributed storage, and 
            analytical rigor for engineering teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8">
              View Capabilities
            </Button>
            <Button size="lg" variant="outline" className="rounded-md px-8 group">
              Contact
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

export function DashboardSection() {
  return (
    <AnimatedSection className="pt-0 pb-24 md:pb-32">
      <Container>
        <Panel className="bg-card/40 border-border/60 p-1 md:p-1 overflow-hidden">
          <div className="rounded-md bg-background/50 border border-border/40 w-full h-[400px] md:h-[500px] flex flex-col">
            {/* Dashboard Header */}
            <div className="h-12 border-b border-border/40 flex items-center px-4 gap-4 bg-muted/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border/80"></div>
                <div className="w-3 h-3 rounded-full bg-border/80"></div>
                <div className="w-3 h-3 rounded-full bg-border/80"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <Activity className="h-3 w-3" />
                system-status.log
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-border/40 rounded bg-card/20 p-4">
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-2">
                    <Database className="h-3 w-3" /> Ingestion Rate
                  </div>
                  <div className="text-2xl font-mono text-foreground">42.8 GB/s</div>
                  <div className="text-xs text-primary mt-2">+12% vs last hour</div>
                </div>
                <div className="border border-border/40 rounded bg-card/20 p-4">
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-2">
                    <Server className="h-3 w-3" /> Cluster Load
                  </div>
                  <div className="text-2xl font-mono text-foreground">78.4%</div>
                  <div className="w-full bg-muted mt-3 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[78.4%]"></div>
                  </div>
                </div>
                <div className="border border-border/40 rounded bg-card/20 p-4">
                  <div className="text-xs text-muted-foreground mb-1">Query Latency (p99)</div>
                  <div className="text-2xl font-mono text-foreground">14ms</div>
                  <div className="text-xs text-muted-foreground mt-2">Optimal range</div>
                </div>
              </div>
              
              <div className="flex-1 border border-border/40 rounded bg-card/20 p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                
                {/* Mock chart lines */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M0,150 Q100,120 200,160 T400,130 T600,100 T800,140 T1000,90 L1000,300 L0,300 Z" fill="currentColor" className="text-primary/5" />
                  <path d="M0,150 Q100,120 200,160 T400,130 T600,100 T800,140 T1000,90" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/60" />
                  
                  <path d="M0,200 Q150,180 250,210 T500,190 T700,220 T1000,170" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </AnimatedSection>
  );
}
