# Visual Style Note — `htmx` website app

Use this as the style brief for any slide deck that should feel visually consistent with the `htmx` dashboard.

## Overall design language
- **Dark-first, data-dashboard aesthetic** with a polished institutional/technical feel.
- Visual tone is **clean, compact, analytical, and modern**, not playful or heavily decorative.
- The UI relies on **structured panels/cards**, thin borders, muted labels, and restrained accent color usage.
- Branding cues suggest **crypto / Solana / market infrastructure**: dark navy surfaces, electric blue highlights, status greens/reds, and small technical UI details. ​:codex-file-citation[codex-file-citation]{line_range_start=1 line_range_end=16 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L1-L16"}​​:codex-file-citation[codex-file-citation]{line_range_start=49 line_range_end=64 path=htmx/app/templates/base.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/base.html#L49-L64"}​

## Color system
### Default / primary mode
- Background: **very dark navy** `#0a1020`
- Main card/panel: **deep blue-navy** `#0f1a2d`
- Secondary surface/top bar: **slightly lighter navy** `#101f35`
- Primary text: **soft off-white/blue-gray** `#d7def0`
- Secondary text: **muted steel-blue** `#8ea1c7`
- Borders/dividers: **cool dark blue** `#20314d`
- Accent/link color: **bright sky blue** `#4bb7ff`
- Positive status: **green** `#36c96a`
- Negative status: **rose/red** `#f65f74` ​:codex-file-citation[codex-file-citation]{line_range_start=1 line_range_end=16 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L1-L16"}​​:codex-file-citation[codex-file-citation]{line_range_start=8 line_range_end=25 path=htmx/app/docs/COLORS.md git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/docs/COLORS.md#L8-L25"}​

### Light mode
- There is a full light theme, but it keeps the same system:
  - pale blue-gray background
  - white panels
  - dark navy text
  - stronger royal-blue accent
- For slides, the **dark theme should be treated as the canonical look** unless there is a strong reason to use light mode. ​:codex-file-citation[codex-file-citation]{line_range_start=18 line_range_end=33 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L18-L33"}​​:codex-file-citation[codex-file-citation]{line_range_start=37 line_range_end=54 path=htmx/app/docs/COLORS.md git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/docs/COLORS.md#L37-L54"}​

### Warm accent on cover-style sections
- The cover/welcome experience introduces a **warm amber accent**:
  - `#f0a020`
  - softer variants `#f8a94a` and `#e8853d`
- This warm accent is used sparingly for **section emphasis**, not as the main UI accent. ​:codex-file-citation[codex-file-citation]{line_range_start=66 line_range_end=80 path=htmx/app/docs/COLORS.md git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/docs/COLORS.md#L66-L80"}​

## Layout principles
- The app uses a **12-column dashboard grid** with tight spacing and modular card placement.
- Panels are arranged in a **dense analytical layout** rather than oversized marketing blocks.
- Spacing is generally **compact**:
  - grid gap around `12px`
  - panel header padding around `10px 12px`
  - panel body padding around `8px`
- Cards often have fixed or minimum heights to create a **disciplined, aligned dashboard rhythm**. ​:codex-file-citation[codex-file-citation]{line_range_start=276 line_range_end=299 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L276-L299"}​​:codex-file-citation[codex-file-citation]{line_range_start=465 line_range_end=497 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L465-L497"}​

## Cards / panels
- Core surface is the **panel card**:
  - solid dark fill
  - thin 1px border
  - `8px` corner radius
  - no heavy shadows in normal layout
- Panel headers are separated by a **thin border line**.
- The visual result is **crisp and boxy-soft**, more “terminal-grade product UI” than “soft consumer SaaS”. ​:codex-file-citation[codex-file-citation]{line_range_start=283 line_range_end=299 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L283-L299"}​

## Typography
- Font stack: **Inter, Segoe UI, Arial, sans-serif**
- Typography is **small, dense, and functional**
  - titles often around `13px`
  - labels around `11–12px`
  - metadata around `11–13px`
- Text hierarchy depends more on **weight, spacing, and muted color** than on dramatic size changes.
- Headings are typically semibold, compact, and practical. ​:codex-file-citation[codex-file-citation]{line_range_start=51 line_range_end=59 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L51-L59"}​​:codex-file-citation[codex-file-citation]{line_range_start=170 line_range_end=194 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L170-L194"}​​:codex-file-citation[codex-file-citation]{line_range_start=309 line_range_end=344 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L309-L344"}​

## Top bar / navigation style
- The header is a **sticky control bar** with:
  - a secondary-surface background
  - thin bottom border
  - inline filters and dropdowns
  - compact action buttons
- It includes a **small Solana logo/icon**, reinforcing a technical crypto context.
- Controls are understated: bordered, flat, compact, and consistent with the panel system. ​:codex-file-citation[codex-file-citation]{line_range_start=84 line_range_end=126 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L84-L126"}​​:codex-file-citation[codex-file-citation]{line_range_start=186 line_range_end=240 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L186-L240"}​​:codex-file-citation[codex-file-citation]{line_range_start=49 line_range_end=97 path=htmx/app/templates/base.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/base.html#L49-L97"}​

## Buttons and controls
- Buttons and selects are:
  - **flat or near-flat**
  - outlined with thin borders
  - small radius (`6px`)
  - compact padding
- Accent is applied with restraint; most controls inherit the neutral panel palette.
- Hover/interaction feedback is subtle and polished through **smooth color/border transitions**. ​:codex-file-citation[codex-file-citation]{line_range_start=39 line_range_end=49 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L39-L49"}​​:codex-file-citation[codex-file-citation]{line_range_start=186 line_range_end=256 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L186-L256"}​

## Data-display styling
- The interface is optimized for **charts, KPIs, and tables**.
- KPI cards use:
  - compact titles
  - large but still disciplined numeric values
  - small secondary annotations
- Updated timestamps and metadata are intentionally low-emphasis via muted text.
- Tables are part of the main visual identity, so the style feels as much like a **research terminal** as a dashboard. ​:codex-file-citation[codex-file-citation]{line_range_start=453 line_range_end=497 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L453-L497"}​​:codex-file-citation[codex-file-citation]{line_range_start=1002 line_range_end=1018 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L1002-L1018"}​​:codex-file-citation[codex-file-citation]{line_range_start=1069 line_range_end=1208 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L1069-L1208"}​

## Section headers
- Section headers are understated and structural:
  - small uppercase-ish/semibold feel
  - muted or accented title color depending on context
  - horizontal divider/underline extension
- On cover-style pages, these become slightly more editorial, using the warm accent family. ​:codex-file-citation[codex-file-citation]{line_range_start=1647 line_range_end=1681 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L1647-L1681"}​​:codex-file-citation[codex-file-citation]{line_range_start=2304 line_range_end=2308 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L2304-L2308"}​

## Cover-page variation
The cover pages introduce a slightly more presentation-like version of the dashboard style:
- same panel-based system
- same grid logic
- more explanatory text blocks
- warm accent tags for categories like **DEX**, **Lending**, **Yield**
- still analytical and modular, not glossy or image-heavy
- content is organized into structured sections like:
  - Welcome
  - Ecosystem overview
  - Protocols monitored
  - Dashboard pages
  - Guides/resources
  - Pipeline overview ​:codex-file-citation[codex-file-citation]{line_range_start=1 line_range_end=26 path=htmx/app/templates/partials/cover.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/partials/cover.html#L1-L26"}​​:codex-file-citation[codex-file-citation]{line_range_start=28 line_range_end=88 path=htmx/app/templates/partials/cover.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/partials/cover.html#L28-L88"}​​:codex-file-citation[codex-file-citation]{line_range_start=90 line_range_end=176 path=htmx/app/templates/partials/cover.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/partials/cover.html#L90-L176"}​​:codex-file-citation[codex-file-citation]{line_range_start=178 line_range_end=260 path=htmx/app/templates/partials/cover.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/partials/cover.html#L178-L260"}​

## Motion and interaction feel
- Motion is **subtle and professional**:
  - gentle transitions on color, border, and shadow
  - light hover states
  - no flashy animations except functional status signaling
- Status dots may pulse for alerts, but animation is used sparingly. ​:codex-file-citation[codex-file-citation]{line_range_start=39 line_range_end=49 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L39-L49"}​​:codex-file-citation[codex-file-citation]{line_range_start=141 line_range_end=169 path=htmx/app/static/css/theme.css git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/static/css/theme.css#L141-L169"}​

## Imagery and iconography
- Very little decorative imagery is used.
- Visual identity comes mostly from:
  - panel structure
  - icons
  - charts
  - color coding
- Icons are small, utilitarian, and inline with labels/actions.
- If slides include illustrations, keep them **diagrammatic and technical**, not photographic. ​:codex-file-citation[codex-file-citation]{line_range_start=55 line_range_end=62 path=htmx/app/templates/base.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/base.html#L55-L62"}​​:codex-file-citation[codex-file-citation]{line_range_start=91 line_range_end=116 path=htmx/app/templates/base.html git_url="https://github.com/0xNomadAnalyst/pfx/blob/master/htmx/app/templates/base.html#L91-L116"}​

## If recreating this style in slides
### Do
- Use a **dark navy canvas** with lighter navy cards
- Build slides on a **strict grid**
- Use **thin borders** instead of heavy shadows
- Keep typography **compact, modern, and semibold**
- Use **bright blue** as the primary highlight color
- Use **green/red** only for status or directional meaning
- Use **warm amber** only for select section accents or taxonomy tags
- Prefer **charts, metric tiles, labeled modules, and system diagrams**

### Avoid
- Large soft gradients as primary backgrounds
- Rounded bubbly SaaS styling
- Oversized typography with lots of empty space
- Heavy illustration, photography, or decorative texture
- Loud multicolor palettes
- Excessive animation or glossy effects

## Slide translation summary
A presentation in this style should feel like:
> **institutional crypto analytics dashboard meets technical research briefing**

Think:
- dark mode
- modular cards
- compact controls
- precise spacing
- restrained accents
- information-dense layouts
- polished but utilitarian execution