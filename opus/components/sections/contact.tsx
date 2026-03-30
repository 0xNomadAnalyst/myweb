"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMsg("Please wait for verification to complete.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          subject: fd.get("subject"),
          message: fd.get("message"),
          turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        const data = (await res.json()) as { error?: string };
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SectionShell id="contact" variant="open">
        <FadeIn>
          <div className="max-w-lg" suppressHydrationWarning>
            <p className="section-label">Engagements & Fit</p>
            <h2 className="section-title">Message Sent</h2>
            <p className="section-intro text-[1.12rem] leading-8">
              Thank you — I&apos;ll be in touch if there&apos;s a fit.
            </p>
          </div>
        </FadeIn>
      </SectionShell>
    );
  }

  return (
    <SectionShell id="contact" variant="open">
      <FadeIn>
        <div className="max-w-lg">
          <p className="section-label">Engagements & Fit</p>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-intro text-[1rem] leading-[1.68] sm:text-[1.12rem] sm:leading-8">
            <span className="md:hidden">
              For teams operating token, treasury, and market-structure systems where visibility and execution quality matter.
            </span>
            <span className="hidden md:inline">
              I work with teams operating token, treasury, and market-structure environments where visibility, execution quality, and cross-protocol understanding are operationally important.
            </span>
          </p>
          <ul className="mt-3 hidden space-y-1.5 text-[0.93rem] leading-relaxed text-muted-foreground/88 md:block">
            <li>Stablecoin or treasury monitoring requirements</li>
            <li>Market-maker oversight and accountability</li>
            <li>Live risk-visibility gaps across venues</li>
            <li>Post-incident investigation and follow-up analysis</li>
            <li>Extension of an existing monitoring footprint into new domains</li>
          </ul>
          <p className="mt-4 hidden text-[0.93rem] leading-relaxed text-muted-foreground/84 md:block">
            If there is a live system, venue footprint, or operating problem you need to understand more clearly, I&apos;m happy to discuss scope.
          </p>
          <ul className="mt-3 space-y-1.5 text-[0.9rem] leading-relaxed text-muted-foreground/86 md:hidden">
            <li>Stablecoin or treasury monitoring</li>
            <li>Market-maker oversight</li>
            <li>Live risk visibility gaps</li>
            <li>Post-incident analysis</li>
          </ul>
          {!isMounted ? (
            <div className="mt-7 h-[20rem] sm:mt-8" aria-hidden />
          ) : (
          <form
            ref={formRef}
            className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4"
            onSubmit={handleSubmit}
          >
            <Input
              className="h-10 text-[0.98rem] sm:text-[1.03rem] md:text-[1.03rem]"
              name="name"
              placeholder="Name"
              required
              maxLength={100}
            />
            <Input
              className="h-10 text-[0.98rem] sm:text-[1.03rem] md:text-[1.03rem]"
              name="email"
              type="email"
              placeholder="Email"
              required
              maxLength={254}
            />
            <Input
              className="h-10 text-[0.98rem] sm:text-[1.03rem] md:text-[1.03rem]"
              name="subject"
              placeholder="Subject"
              required
              maxLength={200}
            />
            <Textarea
              className="text-[0.98rem] sm:text-[1.03rem] md:text-[1.03rem]"
              name="message"
              placeholder="Describe the system, problem, or infrastructure requirement"
              rows={5}
              required
              maxLength={5000}
            />
            <div className="w-full overflow-x-auto">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
                onSuccess={setTurnstileToken}
                options={{ theme: "dark" }}
              />
            </div>
            {status === "error" && errorMsg && (
              <p className="text-sm text-destructive">{errorMsg}</p>
            )}
            <Button
              className="w-full text-[0.98rem] sm:w-auto sm:text-[1.03rem] md:text-[1.03rem]"
              variant="cta"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>
          </form>
          )}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
