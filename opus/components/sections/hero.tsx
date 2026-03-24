"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/shared/section-shell";
import { FadeIn } from "@/components/shared/fade-in";

const domains = [
  "DeFi Risk Visibility",
  "Protocol & Market Structure",
  "On-Chain Market Data",
  "Realtime Monitoring",
  "Operational Intelligence",
];

const COVER_VIDEO_ID = "0wgPh78PwAs";
const COVER_VIDEO_EMBED_URL = `https://www.youtube-nocookie.com/embed/${COVER_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080&enablejsapi=1`;
const COVER_VIDEO_THUMB = `/video-posters/${COVER_VIDEO_ID}.png`;
const COVER_VIDEO_THUMB_HQ = `https://img.youtube.com/vi/${COVER_VIDEO_ID}/hqdefault.jpg`;

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isVideoOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideo();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isVideoOpen]);

  useEffect(() => {
    if (!isVideoOpen) return;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube-nocookie.com") return;
      try {
        const data = JSON.parse(event.data as string);
        if (data.event === "onReady") {
          iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "addEventListener", args: ["onStateChange"] }),
            "https://www.youtube-nocookie.com"
          );
        } else if (data.event === "onStateChange" && data.info === 2) {
          if (iframeRef.current) iframeRef.current.src = "about:blank";
          setIsPlaying(false);
        }
      } catch {}
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isVideoOpen]);

  function openVideo() {
    setIsPlaying(false);
    setIsVideoOpen(true);
  }

  function closeVideo() {
    if (iframeRef.current) iframeRef.current.src = "about:blank";
    setIsVideoOpen(false);
    setIsPlaying(false);
  }

  function handlePlay() {
    if (iframeRef.current) iframeRef.current.src = COVER_VIDEO_EMBED_URL;
    setIsPlaying(true);
  }

  return (
    <SectionShell variant="hero">
      <FadeIn>
        <div className="max-w-[980px]">
          <h1 className="text-[2.2rem] font-medium leading-[1.14] tracking-tight text-foreground md:text-[2.9rem] md:leading-tight">
            Understand and operate complex
            <br />
            financial systems in realtime environments.
          </h1>

          <p className="body-measure mt-5 text-[1.08rem] leading-7 text-foreground/90">
            I work with teams facing complex financial environments - combining analytical judgement and technical implementation as a single principal practitioner.
          </p>
          <p className="mt-3 max-w-[80ch] text-[0.98rem] leading-relaxed text-muted-foreground/70">
            This independent practice spans financial risk analysis, empirical modelling, and realtime infrastructure across digital-asset markets - from problem definition to deployment.
          </p>

          <hr className="my-7 border-muted-foreground/24" />

          <p className="text-[0.98rem] text-muted-foreground/50">
            Roderick McKinley, CFA, FRM
            <br />
            Independent Financial Systems Analyst
          </p>

          <div className="mt-8">
            <Button variant="cta" asChild>
              <a href="#system">Explore Operational Dashboard</a>
            </Button>
            <button
              type="button"
              onClick={openVideo}
              className="mt-3.5 flex items-center gap-2 text-sm text-muted-foreground/60 transition-colors duration-500 hover:text-muted-foreground/90"
            >
              Watch dashboard introduction video
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.52V8.48L15.86 12l-6.11 3.52z"/></svg>
            </button>
            <a
              href="/downloads/RMcKinley-FinancialSystemsAnalyst-Capabilities.pdf#view=FitH&page=1"
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              className="mt-2 block font-mono text-xs text-muted-foreground/45 transition-colors duration-500 hover:text-muted-foreground/60"
            >
              View advisory capabilities deck (PDF)
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-11 flex flex-wrap gap-2">
          {domains.map((domain) => (
            <div
              key={domain}
              className="group rounded-md border border-border-soft/80 bg-secondary/48 px-2.5 py-1 hover:border-border-soft hover:bg-secondary/66 hover:shadow-[0_0_0_1px_rgba(128,162,198,0.12),0_0_16px_rgba(82,114,150,0.2)]"
              style={{
                transition:
                  "box-shadow 750ms ease-in-out, border-color 750ms ease-in-out, background-color 750ms ease-in-out",
              }}
            >
              <p className="font-mono text-[11px] leading-snug tracking-[0.04em] text-muted-foreground/91 transition-colors duration-750 ease-in-out group-hover:text-foreground/96">
                {domain}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-[rgba(7,12,23,0.84)] px-4"
          role="presentation"
          onClick={closeVideo}
        >
          <section
            className="relative w-full max-w-[960px] overflow-hidden rounded-xl border-[0.5px] border-cta/58 bg-black shadow-[0_0_0_0.75px_rgba(248,169,74,0.32),0_0_17px_rgba(248,169,74,0.25),0_0_37px_rgba(248,169,74,0.14),0_12px_48px_rgba(0,0,0,0.62)]"
            role="dialog"
            aria-modal="true"
            aria-label="Platform overview video"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-md border border-white/20 bg-black/45 px-2 py-1 text-xs text-white/88 transition-colors duration-300 hover:bg-black/72 hover:text-white"
              onClick={closeVideo}
              aria-label="Close video"
            >
              Close
            </button>
            <div className="relative aspect-video w-full">
              {!isPlaying && (
                <button
                  type="button"
                  className="absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center"
                  aria-label="Play video"
                  onClick={handlePlay}
                >
                  <img
                    src={COVER_VIDEO_THUMB}
                    onError={(e) => { (e.target as HTMLImageElement).src = COVER_VIDEO_THUMB_HQ; }}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <svg
                    viewBox="0 0 68 48"
                    width="68"
                    height="48"
                    className="relative z-10 opacity-85 transition-[opacity,transform] duration-150 hover:scale-[1.08] hover:opacity-100"
                  >
                    <path d="M66.5 7.4C65.7 4.4 63.3 2 60.3 1.2 55 0 34 0 34 0S13 0 7.7 1.2C4.7 2 2.3 4.4 1.5 7.4 0 12.8 0 24 0 24s0 11.2 1.5 16.6c.8 3 3.2 5.4 6.2 6.2C13 48 34 48 34 48s21 0 26.3-1.2c3-.8 5.4-3.2 6.2-6.2C68 35.2 68 24 68 24s0-11.2-1.5-16.6z" fill="rgba(0,0,0,0.55)" />
                    <path d="M45 24 27 14v20z" fill="#fff" />
                  </svg>
                </button>
              )}
              <iframe
                ref={iframeRef}
                className="h-full w-full"
                title="3-minute platform overview"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      )}
    </SectionShell>
  );
}
