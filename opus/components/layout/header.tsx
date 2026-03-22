"use client";

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
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-soft bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center rounded-sm font-sans text-[14px] font-medium tracking-[0.01em] text-muted-foreground/74 transition-colors hover:text-muted-foreground/90"
        >
          {brandName}
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-muted-foreground/92 hover:text-foreground sm:block"
            >
              {link.label}
            </a>
          ))}
          <div className="inline-flex items-center gap-2.5">
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
    </header>
  );
}
