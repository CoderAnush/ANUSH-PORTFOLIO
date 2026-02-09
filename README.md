# Anush Portfolio

Production-ready developer portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

This repository follows a strict architecture and design system for a high-quality engineering portfolio.

Quick start

1. Copy environment example and fill secrets:

   cp .env.local.example .env.local
   # fill SENDGRID_API_KEY and SENDGRID_FROM_EMAIL

2. Install and run locally:

   npm install
   npm run dev

3. Run checks:

   npm run type-check
   npm run lint

Important notes

- The contact API route calls a server-side mailer implementation at `lib/mailer.ts`. In production configure `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL`.
- All content should live in the `/data` directory — add projects, skills, and blog content there.

See `instructions.md` for detailed phases, architecture rules, and contribution guidelines.
