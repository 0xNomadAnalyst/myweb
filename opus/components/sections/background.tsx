import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const credentials = [
  { label: "Years of Experience", value: "12+" },
  { label: "Engagements Completed", value: "40+" },
  { label: "Industries Served", value: "8" },
  { label: "Data Volume Managed", value: "Petabyte-scale" },
];

export function Background() {
  return (
    <SectionShell id="background">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-2xl font-medium tracking-tight">Background</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Opus is a data infrastructure consultancy founded on the principle
              that data systems should be engineered with the same rigor as
              production software. We work with mid-to-large organizations
              across financial services, healthcare, logistics, and technology.
            </p>
            <p>
              Our team has built and operated data platforms processing billions
              of records daily. Prior experience includes infrastructure roles at
              enterprise-scale organizations and contributions to open-source
              data tooling.
            </p>
            <p>
              Every engagement is led by a senior practitioner. We do not
              subcontract, and we do not staff with junior engineers.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-lg border border-border p-6">
            <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Credentials
            </p>
            <div className="space-y-0">
              {credentials.map((cred, i) => (
                <div
                  key={cred.label}
                  className={`flex items-center justify-between py-4 ${
                    i < credentials.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-sm text-muted-foreground">
                    {cred.label}
                  </span>
                  <span className="font-mono text-sm font-medium">
                    {cred.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
