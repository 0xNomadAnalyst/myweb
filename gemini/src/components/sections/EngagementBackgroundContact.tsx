import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function EngagementSection() {
  return (
    <AnimatedSection>
      <Container>
        <div className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Engagement Example</h2>
          <p className="text-muted-foreground max-w-2xl">
            Case study: Migration of a legacy batch-processing system to a real-time 
            event-driven architecture for a financial services client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium mb-4">The Challenge</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The client's existing infrastructure relied on overnight batch processing, 
              resulting in data staleness of up to 24 hours. The system was tightly coupled, 
              making schema evolution difficult and error-prone.
            </p>
            
            <h3 className="text-lg font-medium mb-4">The Implementation</h3>
            <ul className="space-y-4 text-muted-foreground list-disc pl-5">
              <li>Deployed a distributed event streaming platform (Kafka) as the central nervous system.</li>
              <li>Implemented change data capture (CDC) for legacy databases.</li>
              <li>Built stateless stream processing applications for real-time aggregation.</li>
              <li>Established a schema registry to enforce data contracts across domains.</li>
            </ul>
          </div>
          
          <div className="bg-card/30 border border-border/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 text-muted-foreground mb-4 border-b border-border/40 pb-4">
              <Terminal className="h-4 w-4" />
              <span>infrastructure/main.tf</span>
            </div>
            <pre className="text-muted-foreground">
              <code>
<span className="text-primary">module</span> "kafka_cluster" {"{"}
  source  = "confluentinc/confluent-cloud/aws"
  version = "~&gt; 1.0"

  cluster_name = "prod-core-events"
  region       = var.aws_region
  availability = "MULTI_ZONE"
  
  capacity {"{"}
    ingress_mbps = 100
    egress_mbps  = 300
    storage_gb   = 5000
  {"}"}

  network_config {"{"}
    vpc_id     = module.vpc.vpc_id
    subnet_ids = module.vpc.private_subnets
  {"}"}
{"}"}
              </code>
            </pre>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

export function BackgroundSection() {
  return (
    <AnimatedSection>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Background</h2>
          </div>
          <div className="md:col-span-2 text-muted-foreground space-y-6 leading-relaxed">
            <p>
              With over a decade of experience in distributed systems and data engineering, 
              I specialize in helping organizations transition from fragile, ad-hoc data 
              pipelines to robust, institutional-grade infrastructure.
            </p>
            <p>
              Previously served as Staff Data Engineer at leading technology firms, 
              architecting systems that process billions of events daily. My approach 
              emphasizes simplicity, observability, and infrastructure as code.
            </p>
            <p>
              I partner directly with engineering leadership to assess current architecture, 
              design scalable solutions, and lead implementation alongside internal teams.
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

export function ContactSection() {
  return (
    <AnimatedSection className="border-none pb-32">
      <Container>
        <div className="bg-card/20 border border-border/50 rounded-lg p-12 md:p-24 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">
            Initiate an Engagement
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Available for architectural assessments, system design, and implementation 
            partnerships. Please provide details regarding your current infrastructure 
            challenges.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 group">
            Contact via Email
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
