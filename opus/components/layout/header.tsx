"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Platform", href: "#system" },
  { label: "Domains", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Background", href: "#background" },
];

const brandName = "Roderick McKinley, CFA, FRM";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (!isNavOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsNavOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isNavOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-soft bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-6 sm:px-7 md:px-12">
        <Link
          href="/"
          className="inline-flex h-6 min-w-0 max-w-[62vw] items-center truncate rounded-sm font-sans text-[12px] font-medium leading-none tracking-[0.01em] text-muted-foreground/74 transition-colors hover:text-muted-foreground/90 sm:max-w-none sm:text-[14px]"
        >
          {brandName}
        </Link>
        <nav className="flex items-center gap-2 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-muted-foreground/92 hover:text-foreground sm:block"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            aria-expanded={isNavOpen}
            aria-controls="mobile-sections-nav"
            onClick={() => setIsNavOpen((current) => !current)}
            className="relative -top-0.5 inline-flex h-6 items-center gap-1 rounded-md px-1.5 text-[12px] font-medium leading-none text-foreground/92 transition-colors hover:text-foreground sm:hidden"
          >
            <span className="inline-block leading-none">Explore</span>
            <span
              aria-hidden
              className="h-[14px] w-[14px] bg-white/96 drop-shadow-[0_0_5px_rgba(248,169,74,0.32)] [-webkit-mask-image:url('/TokenDesign_Icon_White.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [mask-image:url('/TokenDesign_Icon_White.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
            />
          </button>
          <div className="hidden items-center gap-2.5 sm:inline-flex">
            <Button variant="ghost" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <span
              aria-hidden
              className="h-[20px] w-[20px] bg-white/96 drop-shadow-[0_0_5px_rgba(248,169,74,0.32)] [-webkit-mask-image:url('/TokenDesign_Icon_White.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [mask-image:url('/TokenDesign_Icon_White.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
            />
          </div>
        </nav>
      </div>
      <div
        id="mobile-sections-nav"
        className={`sm:hidden ${isNavOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close section navigation"
          onClick={() => setIsNavOpen(false)}
          className={`absolute inset-x-0 top-14 z-40 h-[calc(100svh-3.5rem)] bg-transparent transition-opacity duration-[420ms] ${isNavOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute right-2 top-14 z-50 w-fit min-w-[9.75rem] origin-top-right overflow-hidden border border-border-soft bg-[rgba(7,12,23,0.82)] px-3 py-2.5 backdrop-blur-md will-change-transform transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isNavOpen ? "translate-y-0 scale-y-100 opacity-100" : "-translate-y-3 scale-y-[0.82] opacity-0"}`}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className="block whitespace-nowrap rounded-md px-2.5 py-1.5 text-right text-[0.95rem] text-muted-foreground/95 transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsNavOpen(false)}
              className="block whitespace-nowrap rounded-md px-2.5 py-1.5 text-right text-[0.95rem] text-muted-foreground/95 transition-colors hover:bg-accent hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
