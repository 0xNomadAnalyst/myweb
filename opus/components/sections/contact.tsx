"use client";

import { useRef, useState } from "react";
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
        <div className="max-w-lg" suppressHydrationWarning>
          <p className="section-label">Engagements & Fit</p>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-intro text-[1.12rem] leading-8">
            Selective work with teams operating financial systems where visibility, operational clarity, or technical rigor matter.
          </p>
          <p className="mt-1 text-[1.01rem] font-light text-muted-foreground/88">
            Useful starting points include monitoring requirements, market structure concerns, protocol risk questions, or platform and infrastructure buildout.
          </p>
          <form
            ref={formRef}
            className="mt-8 space-y-4"
            onSubmit={handleSubmit}
            suppressHydrationWarning
          >
            <Input
              className="h-10 text-[1.03rem] md:text-[1.03rem]"
              name="name"
              placeholder="Name"
              required
              maxLength={100}
            />
            <Input
              className="h-10 text-[1.03rem] md:text-[1.03rem]"
              name="email"
              type="email"
              placeholder="Email"
              required
              maxLength={254}
            />
            <Input
              className="h-10 text-[1.03rem] md:text-[1.03rem]"
              name="subject"
              placeholder="Subject"
              required
              maxLength={200}
            />
            <Textarea
              className="text-[1.03rem] md:text-[1.03rem]"
              name="message"
              placeholder="Describe the system, problem, or infrastructure requirement"
              rows={5}
              required
              maxLength={5000}
            />
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
              onSuccess={setTurnstileToken}
              options={{ theme: "dark" }}
            />
            {status === "error" && errorMsg && (
              <p className="text-sm text-destructive">{errorMsg}</p>
            )}
            <Button
              className="text-[1.03rem] md:text-[1.03rem]"
              variant="cta"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
