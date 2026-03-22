"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Platform", href: "#system" },
  { label: "Domains", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Background", href: "#background" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground/92"
        >
          opus
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-muted-foreground/85 hover:text-foreground sm:block"
            >
              {link.label}
            </a>
          ))}
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
