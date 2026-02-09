# Copilot Agent Instructions — ANUSH-PORTFOLIO

Quick orientation for agents working on this repository.

## Mission
Help implement a production-grade Next.js (App Router) portfolio that follows strict architecture rules: all content comes from `/data`, minimal prop drilling, small focused components, and strict TypeScript.

## Big picture
- App uses Next.js App Router (see `app/layout.tsx`). Server Components are the default; mark a file with `"use client"` when using client-side libraries (next-themes, framer-motion, browser hooks).
- Design system tokens live in `config/` (e.g., `config/design-system.ts`). Global styles are in `styles/globals.css` and configured via `tailwind.config.cjs`.
- UI is organized into small modules:
  - `components/layout` — Providers, Header, Footer, Container
  - `components/ui` — small primitives and barrel export (`components/ui/index.ts`)
  - `components/cards` and `components/animations` — re-usable presentation pieces
  - `sections` — page-specific composed sections (Hero, About, Skills)
- Data content is fetched from `data/*` (e.g., `data/projects.ts`, `data/skills.ts`). Agents must add/modify content here rather than hardcoding inside components.

## Key files to scan first
- `app/layout.tsx` — global layout & metadata
- `components/layout/Providers.tsx` — theme provider (`next-themes`) (client only)
- `components/layout/Header.tsx`, `Footer.tsx` — examples of small layout components
- `sections/Hero.tsx` — example of Framer Motion + client UI
- `data/*.ts` — canonical place for content
- `app/api/contact/route.ts` — contact form serverless API (calls `lib/mailer`)
- `package.json` — scripts: `dev`, `build`, `start`, `lint`, `type-check`, `format`

## Conventions & rules agents must follow
- Content source rule: add or change data only in `/data` and export a getter (e.g., `getProjects()`). Do NOT hardcode content in components.
- Component design: keep components < 200 LOC, single responsibility, and add `index.ts` barrel exports when creating new directories.
- Type safety: follow `tsconfig.json` (strict mode). Export and use typed interfaces for props and data models (see `data/projects.ts` types).
- Server vs Client: Default is Server Components. Only add `"use client"` at top when necessary (hooks, event handlers, next-themes, framer-motion).
- Styling: Tailwind is the source of truth. Add tokens to `tailwind.config.cjs` when introducing new utility tokens, and update `config/design-system.ts` to document design decisions.
- Accessibility: use ARIA labels on interactive elements (see `components/cards/ProjectCard.tsx`), ensure keyboard navigation and focus states.

## Workflows & commands
- Local dev: `npm install`, `npm run dev` (app on http://localhost:3000)
- Type check: `npm run type-check` (`tsc --noEmit`)
- Lint: `npm run lint` (follows `eslint` + `eslint-config-next`)
- Format: `npm run format` (Prettier)
- Build: `npm run build` then `npm run start` for production checks

When opening PRs, ensure: type-check passes, lint is clean, and `npm run build` succeeds.

## Important integration notes
- The contact API (`app/api/contact/route.ts`) imports `sendContactEmail` from `lib/mailer` — **this module is missing**. Implement as a small server-side wrapper that uses env vars and a provider (SendGrid/Postmark/SES). Use `process.env` for credentials and add `.env.local.example` documenting required env vars.
- Theme uses `next-themes` (client-side) and expects Providers to wrap the app body (see `components/layout/Providers.tsx`).
- Animations use Framer Motion — prefer small motion wrappers in `components/animations`.

## Tests & quality
- There are no tests yet. When adding tests, choose Testing Library for React + Vitest/Jest. Add tests in `__tests__` and run them in CI.
- Add unit tests for small pure functions and component behavior; add an integration test for the contact API and mailer using test doubles for the mail provider.

## CI / Deployment
- Target deployment: Vercel (App Router + Next.js). Keep `next.config.js` stable and avoid server-specific Node APIs on client code.
- Ensure environment variables for mailer are documented and set in the Vercel project settings.

## Quick examples (copy/paste patterns)
- Add a project: edit `data/projects.ts` and append a properly typed object to the `PROJECTS` array and update `getProjects()` return. Avoid hard-coded strings in UI.

- Adding a client component: create file with `"use client"` at the top, keep props typed, and export default. Example: `components/ui/Button.tsx`.

- Implement mailer: create `lib/mailer.ts` server-only, export `sendContactEmail({ name, email, message }): Promise<void>`, read credentials from env vars, and throw detailed errors.

## Priorities & TODOs
- High: Implement `lib/mailer` and add `.env.local.example` + docs in README/instructions.md.
- Medium: Implement MDX blog system (Phase 6) and add an articles folder (suggestion: `/data/blog` or `/content/blog`).
- Low: Add tests and CI pipelines (GitHub Actions) to run `type-check`, `lint`, and `build` on PRs.

---

If something is unclear (missing conventions, ambiguous patterns, or gaps in content), add a short issue that explains the uncertainty and proposes a minimal change. Ask maintainers for ambiguous design decisions rather than making large structural changes unilaterally.

Thank you — be precise, small, and testable in every change. 🚀
