# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Citizen Web3 landing site — a static Next.js 15 website for a non-custodial, self-hosted bare-metal blockchain validator. Three pages: home (`/`), validator (`/validator`), bazaar (`/bazaar`). No API routes, no database, no i18n — pure presentational SSR/SSG.

Live: citizenweb3.com | Staking dashboard (separate app): staking.citizenweb3.com

## Commands

```bash
yarn install          # Install deps (NEVER npm)
yarn dev              # Dev server with Turbopack on :3000
yarn build            # Production build (Turbopack)
yarn start            # Serve production build
yarn lint             # ESLint (next/core-web-vitals + next/typescript)
```

Docker:
```bash
docker compose up --build        # Build & run (maps :12000 → :3000)
docker compose up -d --build     # Detached mode
```

## Git Workflow

- `master` — production, protected
- `landing-dev` — development branch, PRs go here
- Always branch from `landing-dev`
- Run `yarn lint` before committing, `yarn build` before pushing
- Package manager: **yarn only** (`yarn.lock` is committed, no `package-lock.json` should be used for installs)

## Architecture

### Page Composition Pattern

Every page follows an identical structure — this is a **strict convention**:

```tsx
// src/app/{route}/page.tsx
export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero title="..." />        {/* Always first — full-screen header with logo + Menu */}
        <ContentSection />           {/* Page-specific content */}
        <BlockBorder />              {/* Gradient separator between sections */}
        <AnotherSection />
        <BlockBorder />
      </main>
      <SiteFooter />                 {/* Always last */}
      <ScrollToTop />                {/* Optional — present on pages with long scroll */}
    </div>
  );
}
```

`<BlockBorder />` is always placed between content sections as a visual separator. Never omit it.

### UI Primitives (src/components/)

These four primitives are the building blocks for all sections:

| Primitive | Purpose | Key behavior |
|-----------|---------|-------------|
| `Card` | Container with gradient bg + shadow | Accepts `className` via `twMerge`, wraps `children` |
| `BlockTitle` | Section heading `<h2>` | Centered, bold, accepts `className` |
| `BlockText` | Text block | Supports `string \| ReactNode`, `whitespace-pre-wrap`, `textCenter` prop |
| `BlockBorder` | Section separator | `bg-linear-to-t from-[#7C7C81]/50 to-[#000000]/50 h-7` — no props |

When building new sections: compose from these primitives first. Don't create new heading/text/container components.

### Data Pattern

Content data (tools, partners, menu items, bazaar items) is defined as **module-level const arrays** above the component, not fetched or imported from JSON:

```tsx
const items = [
  { title: 'Validator Info', icon: '/tools/vi.svg', href: 'https://validatorinfo.com', ... },
  ...
];

const MySection: FC = () => (
  <section>
    {items.map((item) => (...))}
  </section>
);
```

### Client vs Server Components

Most components are **Server Components** by default. Only add `'use client'` when the component uses hooks (useState, useEffect, useRef). Currently client components:
- `Menu` (useState for open/close, useOnClickOutside)
- `Bazaar` (useState, useEffect, useRef for carousel)
- `Achivements` (useState for modal toggle)
- `ScrollToTop` (useState, useEffect for scroll position)
- `DecorativeArrows` (useState, useEffect for animation interval)

## Styling Rules

### Color System

Dark-only theme (hardcoded `className="dark"` on `<html>`). Colors defined as CSS variables in `globals.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | `#000000` | Page background |
| `--foreground` | `#E6E6E6` | Default text |
| `--accent` | `#2FFBF7` | Accent cyan (links, highlights) |
| `--primary` | `248 100% 70%` | HSL purple |
| `--border` | `220 10% 22%` | Border color |
| `--card` | `220 10% 10%` | Card surface |
| `--muted` | `220 10% 46%` | Muted text |

### Recurring Tailwind Tokens

These exact values are used consistently across the codebase — use them, don't invent new ones:

- **Section wrapper**: `max-w-[80vw] mx-auto` (some sections use `max-w-[60vw]` or `w-[90vw]`)
- **Button base**: `bg-[#1A1A1B] hover:bg-[#262626]` or `hover:bg-[#ffffff]/15`
- **Card gradient**: `bg-linear-to-t from-[#7C7C81]/25 to-[#1A1A1B]/25`
- **Section padding**: `py-16 md:py-20` or `py-16 md:py-24`
- **Hover scale**: `hover:scale-105 transform transition-transform duration-300 ease-in-out`
- **Golden glow on icons**: `hover:shadow-[0_0_3px_3px_rgba(253,226,149,0.7)]`
- **External link attrs**: `target="_blank" rel="noopener noreferrer"`

### Viewport-relative Typography

`globals.css` sets `font-size: 0.9vw` on `<html>` (with `10px` fallback at `max-width: 768px`). All `rem`-based sizes scale with viewport width. This means component sizes in `rem` are intentionally large (e.g. `h-[55rem]` for cards) — they scale down proportionally.

### Class Merging

Use `twMerge` from `tailwind-merge` for conditional/override classes — NOT `cn()`, NOT `clsx`:

```tsx
import { twMerge } from 'tailwind-merge';
className={twMerge('base-classes', condition && 'conditional-classes', className)}
```

## Component Conventions

- **Arrow functions with FC type**: `const MyComponent: FC<OwnProps> = ({ prop }) => ...`
- **Props interface**: Always named `OwnProps` (project convention, not generic `Props`)
- **Export**: `export default ComponentName` at end of file (not inline export)
- **Exception**: `ToolsGrid` uses named export `export function ToolsGrid()` — both patterns exist, but `FC` + default export is dominant
- **Images**: Always use `next/image` `<Image>` component with explicit `width`/`height`
- **Links**: Always use `next/link` `<Link>`. External links get `target="_blank" rel="noopener noreferrer"`
- **No i18n**: All text is hardcoded in English — no translation system
- **Staking component exports as `Manifesto`**: `src/components/staking.tsx` exports `default Manifesto` (the component function is also named `Manifesto`). This is legacy naming — the staking page's content section is conceptually a manifesto-style block

## Code Search & Intelligence

### DeepContext

Codebase is indexed by DeepContext (30 chunks). Use `search_codebase` for semantic search across components and patterns.

### GitNexus

Indexed as **citizenweb3** (107 symbols, 134 relationships). Use GitNexus MCP tools for impact analysis before modifying shared components (especially `Card`, `BlockTitle`, `BlockText`, `Hero`, `BlockBorder` — they are used by multiple pages).

### When to Use What

| Need | Tool |
|------|------|
| Find components by concept | DeepContext `search_codebase` |
| Impact before changing shared component | GitNexus `impact` |
| Trace who uses a component | GitNexus `context` |
| Pre-commit scope check | GitNexus `detect_changes` |
| Library docs (Next.js, Tailwind) | Context7 |

### Re-index After Structural Changes

```bash
gitnexus analyze     # Re-index GitNexus graph
```

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **citizenweb3** (107 symbols, 134 relationships, 1 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## When Debugging

1. `gitnexus_query({query: "<error or symptom>"})` — find execution flows related to the issue
2. `gitnexus_context({name: "<suspect function>"})` — see all callers, callees, and process participation
3. `READ gitnexus://repo/citizenweb3/process/{processName}` — trace the full execution flow step by step
4. For regressions: `gitnexus_detect_changes({scope: "compare", base_ref: "main"})` — see what your branch changed

## When Refactoring

- **Renaming**: MUST use `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` first. Review the preview — graph edits are safe, text_search edits need manual review. Then run with `dry_run: false`.
- **Extracting/Splitting**: MUST run `gitnexus_context({name: "target"})` to see all incoming/outgoing refs, then `gitnexus_impact({target: "target", direction: "upstream"})` to find all external callers before moving code.
- After any refactor: run `gitnexus_detect_changes({scope: "all"})` to verify only expected files changed.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Tools Quick Reference

| Tool | When to use | Command |
|------|-------------|---------|
| `query` | Find code by concept | `gitnexus_query({query: "auth validation"})` |
| `context` | 360-degree view of one symbol | `gitnexus_context({name: "validateUser"})` |
| `impact` | Blast radius before editing | `gitnexus_impact({target: "X", direction: "upstream"})` |
| `detect_changes` | Pre-commit scope check | `gitnexus_detect_changes({scope: "staged"})` |
| `rename` | Safe multi-file rename | `gitnexus_rename({symbol_name: "old", new_name: "new", dry_run: true})` |
| `cypher` | Custom graph queries | `gitnexus_cypher({query: "MATCH ..."})` |

## Impact Risk Levels

| Depth | Meaning | Action |
|-------|---------|--------|
| d=1 | WILL BREAK — direct callers/importers | MUST update these |
| d=2 | LIKELY AFFECTED — indirect deps | Should test |
| d=3 | MAY NEED TESTING — transitive | Test if critical path |

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/citizenweb3/context` | Codebase overview, check index freshness |
| `gitnexus://repo/citizenweb3/clusters` | All functional areas |
| `gitnexus://repo/citizenweb3/processes` | All execution flows |
| `gitnexus://repo/citizenweb3/process/{name}` | Step-by-step execution trace |

## Self-Check Before Finishing

Before completing any code modification task, verify:
1. `gitnexus_impact` was run for all modified symbols
2. No HIGH/CRITICAL risk warnings were ignored
3. `gitnexus_detect_changes()` confirms changes match expected scope
4. All d=1 (WILL BREAK) dependents were updated

## CLI

- Re-index: `gitnexus analyze`
- Check freshness: `gitnexus status`
- Generate docs: `gitnexus wiki`

<!-- gitnexus:end -->

## Common Mistakes

- **`npm install`** — always `yarn`
- **Creating new container/heading components** instead of using `Card`/`BlockTitle`/`BlockText`
- **Using `cn()` or `clsx`** — this project uses `twMerge` from `tailwind-merge`
- **Inline CSS or `<style>` tags** — Tailwind classes only
- **`<img>` tag** — always `next/image` `<Image>`
- **`<a>` tag** — always `next/link` `<Link>`
- **Forgetting `BlockBorder`** between sections on a page
- **Adding `'use client'`** to components that don't need hooks — keep Server Components by default
- **Inventing new color values** — use the CSS variables from `globals.css`
- **Small rem values for sizes** — remember font-size is `0.9vw`, so rem-based sizes appear much larger than typical (e.g. `text-5xl`, `h-[55rem]` are correct for this project)
