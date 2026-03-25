"use client";

import { useEffect, useState } from "react";

export function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-4 z-40 h-10 w-10 rounded-full border border-border-soft/85 bg-background/26 text-foreground/62 backdrop-blur-sm transition-all duration-500 hover:text-foreground/88 hover:bg-background/36 hover:border-border-soft ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
    >
      <span aria-hidden className="relative -top-px text-base leading-none">
        ↑
      </span>
    </button>
  );
}
