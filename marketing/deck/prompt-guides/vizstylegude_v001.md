# Visual Style Guide — Opus Capabilities Deck (v1)

Reference for replicating the visual language of the opus landing page across the capabilities deck slides.

---

## Color System (Dark Mode Only)

### 5-Step Surface Hierarchy

| Level | Token           | Hex       | Usage                              |
|-------|-----------------|-----------|------------------------------------|
| L0    | `--background`  | `#0B1220` | Page/slide base (darkest)          |
| L1    | `--surface`     | `#0F172A` | Section bands                      |
| L2    | `--secondary`   | `#111C34` | Content containers, tag backgrounds|
| L3    | `--card`        | `#172033` | Cards, panels                      |
| L4    | `--accent`      | `#1E293B` | Interactive/hover states           |

### Accent Colors

| Token                | Value     | Usage                              |
|----------------------|-----------|------------------------------------|
| `--primary`          | `#FF6B00` | Primary accent, slide titles, ring |
| `--cta`              | `#f8a94a` | Secondary accent, CTA links        |
| `--foreground`       | `#E5E7EB` | Primary text                       |
| `--muted-foreground` | `#9CA3AF` | Secondary/supporting text          |
| `--border`           | `oklch(1 0 0 / 6%)` | Card & section borders    |

---

## Typography

### Fonts

- **Sans (Inter)**: headings, body text, card titles — `font-sans` / `var(--font-inter)`
- **Mono (Geist Mono)**: labels, badges, metadata, eyebrows — `font-mono` / `var(--font-geist-mono)`

### Scale (key patterns used on the landing page)

| Element             | Classes                                                        |
|---------------------|----------------------------------------------------------------|
| Page heading (h1)   | `text-3xl font-medium leading-tight tracking-tight md:text-4xl`|
| Section heading (h2)| `text-2xl font-medium tracking-tight`                          |
| Card title (h3)     | `font-medium` (inherits base size)                             |
| Body paragraph      | `text-sm leading-relaxed text-muted-foreground`                |
| Secondary body      | `text-sm leading-relaxed text-muted-foreground/80`             |
| Tertiary/caption    | `text-xs text-muted-foreground/40`                             |
| Eyebrow label       | `font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50` |
| Section sub-label   | `font-mono text-xs uppercase tracking-wider text-muted-foreground` |
| Credential name     | `text-sm text-muted-foreground/50`                             |

---

## Card Pattern

Standard card used across Capabilities, Architecture, Engagement, and Background sections:

```
rounded-lg border border-border bg-card p-5
```

- Background: `bg-card` (`#172033`)
- Border: `border-border` (`oklch(1 0 0 / 6%)`)
- Radius: `rounded-lg`
- Padding: `p-5`
- Interactive variant adds: `card-interactive hover:bg-accent` (translateY lift on hover)
- First credential card uses `brightness-[1.05]` for subtle emphasis

---

## Domain Tag Pills

Small rounded badges used to classify domains in the hero section:

```
rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground/70
```

---

## Bullet Lists

Tiny-dot markers with muted body text:

```
Dot:   h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50 (mt-[7px] to align with text)
Text:  text-sm leading-snug text-muted-foreground/80
Gap:   gap-2.5 between dot and text
Stack: space-y-2 between items
```

---

## Separators & Dividers

| Variant              | Classes / CSS                                                                     |
|----------------------|-----------------------------------------------------------------------------------|
| Thin rule            | `hr` with `border-border/30` or `border-muted-foreground/20`                      |
| Gradient divider     | `h-px bg-gradient-to-r from-transparent via-border/40 to-transparent max-w-[800px]`|

---

## Ambient Glow

Subtle radial gradient placed behind card grids and content groups:

```css
background: radial-gradient(ellipse at 50% 50%, rgba(56, 130, 200, 0.05) 0%, transparent 65%);
```

Applied via an `aria-hidden` absolutely-positioned div with `-inset-8 -z-10 rounded-3xl`.

---

## Inset Panels (Call-Out Boxes)

Used for deployment readiness and similar highlighted blocks:

```
rounded-md border border-border/50 bg-accent/40 px-5 py-4
```

Contains a mono eyebrow label + body text.

---

## CTA Links

```
font-mono text-[11px] text-cta/50 transition-colors duration-500 hover:text-cta/80
```

---

## Background Texture

Dot-grid pattern applied to the body in dark mode:

```css
background-image: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
background-size: 24px 24px;
```

---

## Diagram / Showcase Containers

Semi-transparent panel for diagrams and visual showcases:

```css
background: rgba(15, 23, 42, 0.55);
border: 1px solid rgba(255, 255, 255, 0.06);
box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12);
border-radius: 14px;
padding: 20px 32px 24px 32px;  /* pt-5 px-8 pb-6 */
```

Dashboard image container uses:

```
rounded-lg bg-[#0c1425] ring-1 ring-inset ring-white/[0.05]
```

---

## Slide-Specific Adaptations

When adapting these patterns to 1920x1080 fixed-size slides:

- Scale typography up proportionally for the larger canvas (e.g., section heading becomes ~`text-4xl`, body becomes ~`text-xl`)
- Maintain the same color tokens and surface hierarchy
- Use consistent slide padding: `px-[120px] py-[80px]`
- Cards, pills, and bullets follow the same patterns but with proportionally larger sizes
- No animations — all slides must be visually complete as static frames
- Dot-grid background texture should be applied at slide level
