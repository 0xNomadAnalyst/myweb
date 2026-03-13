# Code-first Marketing Deck Stack (Cursor Agent Guide)

## Recommended stack (use this)
Build the deck as a **print-first web route** inside the existing **opus** Next.js codebase, then export to PDF using **Playwright**.

### Why this stack
- Reuses the existing **design system + Tailwind tokens + shadcn/ui components** in `opus` for a consistent, polished look.
- Produces a **repeatable, automated PDF build** (no manual export clicking).
- Keeps everything **code-first**, version-controlled, and easy to iterate with Cursor.

---

## Core components

### 1) Next.js deck route (in `opus`)
Create a dedicated route:
- `app/deck/page.tsx` (or `app/deck/[[...slug]]/page.tsx` if you want per-slide routes)
- Render a `Deck` component that outputs a list of `Slide` sections.

Slide structure:
- Each slide is a fixed 16:9 “canvas” (recommended: `1920x1080`).
- Each slide must be its own `<section className="slide">...</section>`.

Recommended layout constraints:
- Use a fixed size container: `w-[1920px] h-[1080px]`
- Wrap slides in a centered page area when viewing in browser
- For printing, slides should fill the page exactly.

---

### 2) Styling: Tailwind + shadcn/ui + minimal motion
Use existing:
- Tailwind v4 config + theme tokens (from `opus`)
- shadcn/ui components (Card, Badge, Button, Separator)
- Lucide icons for lightweight visuals

Motion policy:
- Marketing deck is print-first: disable animations in `?print=1` mode.
- If animations exist, guard them behind `if (!printMode)`.

---

### 3) Print CSS (critical for PDF quality)
Add a print stylesheet (global, or scoped to the deck route) that enforces slide pagination.

Required rules:
- `@page { size: landscape; margin: 0; }`
- `.slide { break-after: page; page-break-after: always; }`
- `html, body { height: auto; }`
- Ensure background printing:
  - `print-color-adjust: exact;`
  - `-webkit-print-color-adjust: exact;`

Also add:
- A `.print` mode that removes browser-only padding/margins and ensures the slide canvas aligns to the page.

---

### 4) Content authoring: MDX + components (optional but recommended)
Use MDX to keep content easy to edit while preserving design consistency.

Suggested setup:
- Create `content/deck/*.mdx` (one file per slide or section)
- Each MDX file imports and uses predefined components:
  - `<Slide>`
  - `<SlideTitle>`
  - `<TwoCol>`
  - `<CardGrid>`
  - `<MetricCard>`
  - `<LogoRow>`

If MDX is too heavy, keep content in TS objects:
- `content/deck.ts` exports an array of slide models
- Render with components.

---

### 5) PDF export: Playwright (non-negotiable)
Export PDFs via a script so results are:
- consistent
- reproducible
- CI-friendly later if needed

Implementation:
- Add Playwright as a dev dependency in the repo
- Write `scripts/export-deck-pdf.ts`

Playwright PDF settings:
- `printBackground: true`
- `preferCSSPageSize: true`
- enforce 16:9 page size (either via `@page` or explicit width/height)
- load `/deck?print=1`

This replaces manual “Print to PDF” and avoids OS/browser variance.

---

## File/Folder layout (recommended)
Inside `opus`:
- `app/deck/page.tsx` (entry)
- `components/deck/Slide.tsx`
- `components/deck/layouts.tsx` (TwoCol, Grid, etc.)
- `components/deck/blocks.tsx` (MetricCard, FeatureCard, LogoRow)
- `styles/deck-print.css` (or equivalent)
- `content/deck/*.mdx` (optional)
- `scripts/export-deck-pdf.ts`

---

## Operational rules for the agent
- Optimize for **print output** first, screen second.
- Keep typography + spacing consistent by reusing existing `opus` tokens/components.
- Prefer static assets (SVG/PNG) for logos and screenshots.
- Avoid heavy blur/filters that can rasterize poorly in PDF.
- Every slide must be visually “complete” without relying on animation.

---

## Deliverables
- A `/deck` route that renders a 10–15 slide marketing deck.
- A `scripts/export-deck-pdf.ts` Playwright exporter that outputs `deck.pdf`.
- A “print mode” (`?print=1`) that disables motion and enforces exact pagination.

---

## Summary decision
Use: **Next.js (opus) + Tailwind + shadcn/ui + (optional MDX) + Playwright PDF export**.
This is the most reliable code-first stack that still produces a sleek, client-ready marketing deck.