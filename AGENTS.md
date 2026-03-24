# AGENTS.md

Agent-specific guidance for autonomous work in this repository.

## Critical Context

This is a **static landing site** with 3 pages and ~12 components. There are no API routes, no database, no auth, no server actions. The entire codebase is presentational. The privacy page lives in a separate project (`cw3-privacy` at `privacy.citizenweb3.com`). Changes are almost always about:
1. Adding/modifying visual sections on existing pages
2. Adding a new page (rare)
3. Updating content data (links, descriptions, items in arrays)
4. Fixing layout/responsive issues

## Component Dependency Map

```
Pages (src/app/):
  page.tsx (home)  →  Hero, ToolsGrid, Manifesto, About, BlockBorder, SiteFooter, ScrollToTop
  validator/page   →  Hero, Staking*, BlockBorder, SiteFooter
  bazaar/page      →  Hero, Bazaar, BlockBorder, SiteFooter

Shared across ALL pages:
  Hero       →  Menu, DecorativeArrows (→ HeaderArrow), Logo, header-bg.svg
  SiteFooter →  (standalone, Link only)
  BlockBorder →  (standalone, no deps)

Primitives used by multiple components:
  Card       ←  used by: ToolsGrid, About, Achivements, Bazaar
  BlockTitle ←  used by: Manifesto, Staking*, About, Achivements
  BlockText  ←  used by: Manifesto, About

* staking.tsx exports as "Manifesto" (legacy naming)
```

**High-impact components** (changing these affects multiple pages):
- `Hero` — used by all 3 pages
- `Card` — used by ToolsGrid, About, Achivements, Bazaar
- `BlockBorder` — used by all 3 pages
- `SiteFooter` — used by all 3 pages
- `BlockTitle` / `BlockText` — used across Manifesto, Staking, About sections

## How To: Add a New Page

1. Create `src/app/{route}/page.tsx`
2. Follow the page composition pattern exactly:
```tsx
import Hero from '@/components/hero';
import BlockBorder from '@/components/block-border';
import SiteFooter from '@/components/footer';
import YourSection from '@/components/your-section';

export default function Page() {
  return (
    <div className="min-h-dvh bg-[hsl(var(--background))]">
      <main>
        <Hero title="Your Page Title" />
        <YourSection />
        <BlockBorder />
      </main>
      <SiteFooter />
    </div>
  );
}
```
3. Add the route to `menuItems` in `src/components/menu.tsx`
4. Add the route to the footer grid in `src/components/footer.tsx`

## How To: Add a New Section Component

1. Create `src/components/my-section.tsx`
2. Use `Card`, `BlockTitle`, `BlockText` primitives — don't create new ones
3. Define content data as a module-level const array
4. Component signature: `const MySection: FC = () => ...` with `export default MySection`
5. Wrap in `<section id="my-section" className="py-16 md:py-24">`
6. Use `max-w-[80vw] mx-auto` for content width
7. Only add `'use client'` if you need hooks

## How To: Add Items to Existing Lists

Content arrays are at the top of their component files:

| Data | File | Array name |
|------|------|-----------|
| Tools/projects grid | `src/components/tools-grid.tsx` | `items` |
| Partners | `src/components/about.tsx` | `partners` |
| Bazaar cards | `src/components/bazaar.tsx` | `defaultItems` |
| Menu links | `src/components/menu.tsx` | `menuItems` |
| Footer links | `src/components/footer.tsx` | (inline JSX, 4-column grid) |

## Validation Checklist

Before marking work complete:
- [ ] `yarn lint` passes
- [ ] `yarn build` succeeds
- [ ] New pages follow the exact page composition pattern (Hero → sections + BlockBorder → SiteFooter)
- [ ] No new `<img>` tags (use `<Image>` from `next/image`)
- [ ] No new `<a>` tags (use `<Link>` from `next/link`)
- [ ] No inline CSS or `<style>` tags — Tailwind only
- [ ] Class merging uses `twMerge`, not `cn`/`clsx`
- [ ] `'use client'` only added if component uses hooks
- [ ] Colors use existing CSS variables, not new hex values
- [ ] `gitnexus_detect_changes()` confirms expected scope

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **citizenweb3** (120 symbols, 145 relationships, 1 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

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

- Re-index: `npx gitnexus analyze`
- Check freshness: `npx gitnexus status`
- Generate docs: `npx gitnexus wiki`

<!-- gitnexus:end -->
