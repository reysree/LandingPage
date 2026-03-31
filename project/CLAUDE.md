# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npx playwright test  # Run E2E responsiveness tests
npx eslint .         # Lint the codebase
```

To run a single Playwright test file:
```bash
npx playwright test tests/<file>.spec.ts
```

## Architecture

This is a **personal portfolio site** for Sreeram Bangaru (Founding Software Engineer / AI Full Stack Developer) built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS v4.

### Key Architectural Decisions

**Content is static TypeScript files, not a CMS:**
- `src/content/site.ts` — site metadata, social links, resume PDF path
- `src/content/projects.ts` — project data (slug, title, stack, featured flag, etc.)
- `src/content/experience.ts` — work history, certifications

**Types are Zod schemas** in `src/types/content.ts` — all content types are validated at build time.

**Project detail pages use MDX** loaded from `src/content/projects/[slug].mdx`. If no MDX file exists for a slug, the page shows a "coming soon" message. The project slug in `projects.ts` must match the MDX filename.

**Styling uses Tailwind CSS v4 with CSS custom properties** — there is no `tailwind.config.js`. All design tokens (colors, spacing, shadows, motion) are defined as CSS variables in `src/app/globals.css` using the `@theme` directive. Semantic tokens (`--text-primary`, `--bg-elevated`, etc.) switch between light/dark mode via `[data-theme="dark"]`.

**Custom utility classes** like `.btn-primary`, `.card`, `.tag`, `.eyebrow`, `.section-title` are defined in `globals.css` — prefer these over raw Tailwind classes for consistent styling.

### Component Layers

- `src/components/system/` — layout primitives: `Nav`, `Footer`, `Container`, `Section`, `PageHeader`
- `src/components/marketing/` — content-specific: `ProjectCard`, `ExperienceBox`, `GitHubStats`, `LeetCodeStats`, `TimelineItem`
- `src/components/ui/` — shadcn/ui base components (button, card, input, carousel, etc.)
- `src/components/motion/` — animation wrappers (`FadeIn`, `Reveal`) using the Motion library

### API Routes

- `src/app/api/openai/route.js` — Powers the "Cypher" AI chat widget using OpenAI GPT-4o-mini. Requires `OPENAI_API_KEY` in `.env.local`.
- `src/app/api/leetcode/[username]/route.ts` — Proxy for LeetCode stats from external API.

### Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).

## Environment Variables

```
OPENAI_API_KEY=  # Required for AI chat (Cypher widget)
```

## Testing

Playwright tests in `tests/` verify responsive layout across Desktop Chrome, iPad Pro 11, and iPhone 13. Tests check all main routes: `/`, `/projects`, `/about`, `/contact`.
