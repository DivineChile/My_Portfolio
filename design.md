# Design System — Divine Chigere Chile Portfolio

> **Locked Hallmark design system.** This file is the single source of truth for
> this app. Every component reads it before emitting code. Do not regenerate per
> component — extend or amend this file when the system needs to grow.

---

## Genre & philosophy

- **Genre**: `editorial` — a developer's broadsheet.
- **Voice**: Ink on warm paper. Type-led, composed, honest. Confident serif
  headlines, monospace metadata, generous hairlines. No decorative motion, no
  invented proof, no process jargon in the UI.

## Macrostructure

- **Family**: `13 · Index-First`. The page reads like a broadsheet — a masthead,
  a standfirst hero, a **numbered index of Selected Work** (a lead entry + rows),
  one feature spread, a practice colophon, and a letter close.
- **Enrichment**: typography-led. Real project screenshots in `<figure>` with
  captions. No fake browser chrome, no fabricated telemetry.

## Theme — "Broadsheet" (OKLCH)

### Light (`:root` / `[data-theme="broadsheet"]` / `[data-theme="light"]`)
- `--color-paper`      `oklch(97% 0.007 83)`   — warm newsprint
- `--color-paper-2`    `oklch(94.5% 0.009 82)` — tinted band / panel
- `--color-paper-3`    `oklch(91.5% 0.011 80)` — image ground
- `--color-rule`       `oklch(86% 0.012 78)`   — hairline
- `--color-rule-2`     `oklch(77% 0.015 74)`   — stronger rule
- `--color-muted`      `oklch(52% 0.013 66)`   — metadata / labels
- `--color-neutral`    `oklch(43% 0.015 62)`   — tertiary
- `--color-ink-2`      `oklch(33% 0.014 58)`   — body copy
- `--color-ink`        `oklch(20% 0.012 52)`   — headings, strong rules
- `--color-accent`     `oklch(45% 0.15 26)`    — oxblood signal (≤ 5% coverage)
- `--color-accent-ink` `oklch(97% 0.007 83)`   — text on accent
- `--color-focus`      `oklch(52% 0.17 26)`    — focus ring
- `--color-scrim`      `oklch(15% 0.01 55)`    — dialog backdrop (dark in both themes)

### Dark (`[data-theme="dark"]`)
- `--color-paper`      `oklch(19% 0.008 54)`
- `--color-paper-2`    `oklch(23% 0.010 54)`
- `--color-paper-3`    `oklch(27% 0.012 56)`
- `--color-rule`       `oklch(32% 0.011 58)`
- `--color-rule-2`     `oklch(43% 0.014 60)`
- `--color-muted`      `oklch(64% 0.012 70)`
- `--color-neutral`    `oklch(72% 0.011 72)`
- `--color-ink-2`      `oklch(81% 0.011 78)`
- `--color-ink`        `oklch(94% 0.008 82)`
- `--color-accent`     `oklch(66% 0.145 32)`
- `--color-accent-ink` `oklch(17% 0.012 54)`
- `--color-focus`      `oklch(70% 0.16 32)`

Theme is chosen by an inline no-flash script in `index.html` (saved choice →
OS `prefers-color-scheme` → `broadsheet`), then toggled at runtime.

## Typography (2 + 1)

- **Display**: `Fraunces` (serif), optical-sizing on, weights 400 / 500 / 600.
  Headline tracking `-0.015em`.
- **Body**: `Newsreader` (serif), weights 400 / 500 + italic 400. Measure ≤ 65ch.
- **Mono**: `IBM Plex Mono`, weights 400 / 500 / 600. Labels uppercase,
  tracking `0.12em`–`0.2em`.
- **Display scale anchor**: `clamp(2.5rem, 6vw + 0.5rem, 4.75rem)`.

## Spacing

Tailwind's 4-point scale is the named token set (`px-6`, `py-24`, `gap-10`, …).
Never raw pixel values in markup. Portable named tokens are mirrored in
`tokens.css` under `## Exports`.

## Motion

- Easings: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`.
- Reveal pattern: **none / fade only**. The page is composed, not animated in.
- Named property transitions only — never `transition-all`.
- **Reduced-motion**: a global `@media (prefers-reduced-motion: reduce)` collapses
  animation/transition to ≤ 0.01ms and disables smooth scroll. No pulsing/ping/spin.

## Microinteractions

- Silent success. No celebratory toasts.
- Copy-to-clipboard confirms inline for ~2s.
- Hover: color/underline shifts; a single ≤ 2% image scale on figures only.

## CTA voice

- **Primary**: solid oxblood rectangle, `--radius-ctl` (3px), mono uppercase label.
- **Ink action**: solid `--color-ink` rectangle with paper label (keeps accent scarce — used for Résumé).
- **Secondary**: underlined mono text link, `underline-offset-4`, accent on hover.
- No pills. No gradient fills.

## Component voice

- **Nav (N6 · newspaper masthead)**: sticky. Top dateline strip (location · date ·
  availability), serif wordmark + role, mono section links, ⌘K, Résumé, theme toggle.
- **Hero (H5 · statement)**: asymmetric. Standfirst headline + lede + text actions;
  portrait as a captioned `<figure>` plate. No stat bar, no availability ping.
- **Selected Work (Macro 13 · index)**: a numbered `<ol>` — lead entry (01) with
  figure, then compact rows (02…). Editorial text filters (no pills). Rows open a modal.
- **Feature (AniPulse)**: real screenshot figure + honest tabbed panel
  (Overview / What I built / Stack) from real project data. No fake player, no telemetry.
- **Practice**: definition-list of focus areas + sticky toolstack colophon.
- **Contact**: letter headline, one-click email copy, `mailto:`-composing form
  (opens the visitor's mail app — it never claims to send), socials.
- **Footer (Ft6 · letter close)**: signed sign-off, © + location + local time
  (static, no pulse) + back-to-top. No process/quality stamp.
- **Dialogs (modal + ⌘K)**: `role="dialog"`, `aria-modal`, focus trap, focus
  return, shared ref-counted scroll-lock (`src/lib/useDialog.js`).

## Accent budget & honesty rules

- Accent (oxblood) ≤ 5% per viewport: kickers, active states, primary buttons,
  the lead index numeral, focus rings. Ink carries structure, not accent.
- No invented metrics. No fabricated telemetry. No "verified/anti-slop" stamps.
- No Hallmark internal vocabulary (genre codes, macro numbers, gate numbers,
  P/H/E/S/R/V scores) anywhere in rendered output — CSS stamp comment only.

## What must stay consistent (app-wide)

Wordmark, oxblood accent + its ≤5% placement, Fraunces/Newsreader/IBM Plex Mono,
CTA voice, and the mono uppercase label rhythm.

## CSS stamp

```css
/* Hallmark · genre: editorial · macrostructure: 13 Index-First · theme: Broadsheet · design-system: design.md · designed-as-app */
```

---

## Exports

Drop-in formats for reusing this system elsewhere. Canonical values live in
[`tokens.css`](./tokens.css); Tailwind consumes them via `@theme` in
`src/index.css`.

### tokens.css
```css
:root {
  --color-paper: oklch(97% 0.007 83);
  --color-paper-2: oklch(94.5% 0.009 82);
  --color-paper-3: oklch(91.5% 0.011 80);
  --color-rule: oklch(86% 0.012 78);
  --color-rule-2: oklch(77% 0.015 74);
  --color-muted: oklch(52% 0.013 66);
  --color-neutral: oklch(43% 0.015 62);
  --color-ink-2: oklch(33% 0.014 58);
  --color-ink: oklch(20% 0.012 52);
  --color-accent: oklch(45% 0.15 26);
  --color-accent-ink: oklch(97% 0.007 83);
  --color-focus: oklch(52% 0.17 26);
  --color-scrim: oklch(15% 0.01 55);

  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Newsreader", Georgia, "Times New Roman", serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
  --space-sm: 1rem;     --space-md: 1.5rem;  --space-lg: 2rem;
  --space-xl: 3rem;     --space-2xl: 4.5rem; --space-3xl: 7rem;

  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-md: 1.125rem;
  --text-lg: 1.375rem; --text-xl: 1.75rem;  --text-2xl: 2.25rem;
  --text-display: clamp(2.5rem, 6vw + 0.5rem, 4.75rem);

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms; --dur-base: 220ms; --dur-slow: 500ms;
  --radius-card: 4px; --radius-ctl: 3px;
}
```

### Tailwind v4 `@theme`
```css
@theme {
  --color-paper: oklch(97% 0.007 83);
  --color-ink: oklch(20% 0.012 52);
  --color-accent: oklch(45% 0.15 26);
  --font-display: "Fraunces", serif;
  --font-body: "Newsreader", serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --radius-ctl: 3px;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "paper":  { "$value": "oklch(97% 0.007 83)", "$type": "color" },
    "ink":    { "$value": "oklch(20% 0.012 52)", "$type": "color" },
    "accent": { "$value": "oklch(45% 0.15 26)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Fraunces", "$type": "fontFamily" },
    "body":    { "$value": "Newsreader", "$type": "fontFamily" }
  },
  "space": { "md": { "$value": "1.5rem", "$type": "dimension" } }
}
```

### shadcn/ui CSS variables
```css
:root {
  --background: oklch(97% 0.007 83);
  --foreground: oklch(20% 0.012 52);
  --primary: oklch(45% 0.15 26);
  --primary-foreground: oklch(97% 0.007 83);
  --muted: oklch(86% 0.012 78);
  --muted-foreground: oklch(52% 0.013 66);
  --border: oklch(86% 0.012 78);
  --input: oklch(86% 0.012 78);
  --ring: oklch(52% 0.17 26);
  --radius: 3px;
}
```

---

## Changelog

- **2026-08-25 · v2** — Complete redesign. `modern-minimal / Portfolio Grid /
  Cobalt` → `editorial / Index-First / Broadsheet`. Nav N1b → N6, footer Ft2 → Ft6.
  Type Space Grotesk/Inter/JetBrains → Fraunces/Newsreader/IBM Plex Mono. Fixed
  off-token green accent (was `oklch(83% 0.198 157)` under a "cobalt" stamp),
  leaked Hallmark jargon, invented hero stats, and the non-functional contact form.
- **v1** — Initial `modern-minimal / Cobalt` build.
