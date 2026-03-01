import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { DataBlock } from "@/components/custom/DataBlock";

export function CapabilitiesSection() {
  return (
    <AnimatedSection id="capabilities">
      <Container>
        <div className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl">
            Specialized expertise in designing and operating high-scale data systems. 
            Focus on reliability, performance, and operational simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DataBlock 
            title="Distributed Storage" 
            description="Architecture and optimization of petabyte-scale storage systems. Object stores, distributed file systems, and block storage."
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {["S3", "HDFS", "Ceph", "MinIO"].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </DataBlock>
          
          <DataBlock 
            title="Stream Processing" 
            description="Design of low-latency, high-throughput event streaming pipelines. Exactly-once processing and stateful stream applications."
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {["Kafka", "Flink", "Redpanda", "Kinesis"].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </DataBlock>

          <DataBlock 
            title="Analytical Databases" 
            description="Columnar database deployment, schema design, and query optimization for sub-second analytical workloads."
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {["ClickHouse", "Snowflake", "BigQuery", "Druid"].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </DataBlock>

          <DataBlock 
            title="Data Orchestration" 
            description="Complex dependency management, scheduling, and monitoring of batch and streaming data workflows."
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {["Airflow", "Dagster", "Prefect", "Temporal"].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </DataBlock>

          <DataBlock 
            title="Infrastructure as Code" 
            description="Immutable, version-controlled infrastructure provisioning and configuration management."
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {["Terraform", "Kubernetes", "Helm", "Ansible"].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </DataBlock>

          <DataBlock 
            title="Observability" 
            description="Comprehensive monitoring, distributed tracing, and alerting for complex data architectures."
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {["Prometheus", "Grafana", "Datadog", "OpenTelemetry"].map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </DataBlock>
        </div>
      </Container>
    </AnimatedSection>
  );
}

export function ArchitectureSection() {
  return (
    <AnimatedSection>
      <Container>
        <div className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4">Architecture Approach</h2>
          <p className="text-muted-foreground max-w-2xl">
            Systems are designed with a focus on decoupling compute from storage, 
            enforcing strict schemas at boundaries, and ensuring idempotency across all operations.
          </p>
        </div>

        <div className="border border-border/50 rounded-lg bg-card/20 p-8 md:p-12 overflow-x-auto">
          <div className="min-w-[700px] flex flex-col gap-8 text-sm font-mono text-muted-foreground">
            {/* Mock Architecture Diagram */}
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="col-span-1 flex flex-col gap-4">
                <div className="border border-border/60 bg-background p-3 rounded text-center">Event Sources</div>
                <div className="border border-border/60 bg-background p-3 rounded text-center">Batch Sources</div>
              </div>
              
              <div className="col-span-1 flex justify-center text-border">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0,12 L38,12 M30,4 L38,12 L30,20" />
                </svg>
              </div>
              
              <div className="col-span-1 border border-primary/30 bg-primary/5 p-4 rounded flex flex-col items-center justify-center h-full">
                <span className="text-primary font-medium mb-2">Ingestion Layer</span>
                <span className="text-xs">Kafka / Redpanda</span>
              </div>
              
              <div className="col-span-1 flex justify-center text-border">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0,12 L38,12 M30,4 L38,12 L30,20" />
                </svg>
              </div>
              
              <div className="col-span-1 flex flex-col gap-4">
                <div className="border border-border/60 bg-background p-3 rounded text-center">Stream Processing</div>
                <div className="border border-border/60 bg-background p-3 rounded text-center">Object Storage</div>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 items-center mt-4">
              <div className="col-start-3 col-span-1 flex justify-center text-border rotate-90">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M0,12 L38,12 M30,4 L38,12 L30,20" />
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="col-start-2 col-span-3 border border-border/60 bg-card/40 p-6 rounded text-center flex flex-col gap-2">
                <span className="font-medium text-foreground">Serving Layer (OLAP)</span>
                <span className="text-xs">Distributed Columnar Database</span>
                <div className="w-full h-1 bg-muted mt-2 rounded-full overflow-hidden flex">
                  <div className="h-full w-1/3 bg-primary/40"></div>
                  <div className="h-full w-1/3 bg-primary/60"></div>
                  <div className="h-full w-1/3 bg-primary/80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
