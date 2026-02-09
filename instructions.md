You are a senior staff-level frontend engineer and architect.

You are helping me build a production-grade, elite-level
personal portfolio website that will be evaluated by
top recruiters and hiring managers.

Your responsibility:
Design, structure, and implement a complete,
scalable, maintainable portfolio system.

--------------------------------------------------
PROJECT GOAL
--------------------------------------------------

Build a modern, high-performance, visually impressive
developer portfolio that demonstrates:

- Strong frontend engineering skills
- Clean architecture
- Industry best practices
- Attention to UI/UX
- Production readiness
- Deployment readiness

This project must look like a startup-quality product,
not a student website.

--------------------------------------------------
TECH STACK
--------------------------------------------------

Use ONLY:

- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Lucide Icons
- MDX for blogs
- next-themes for dark mode
- ESLint + Prettier
- Vercel deployment compatibility

--------------------------------------------------
ARCHITECTURE RULES
--------------------------------------------------

1. Use modular, reusable components
2. Follow atomic design where applicable
3. Separate UI, logic, and data
4. Avoid prop drilling
5. Use proper TypeScript types
6. No inline hardcoded data
7. All content should come from /data
8. Follow file-based routing properly
9. Keep components small and focused
10. Use barrel exports where helpful

--------------------------------------------------
FOLDER STRUCTURE
--------------------------------------------------

Create and follow this structure strictly:

/app
  /layout.tsx
  /page.tsx
  /projects
  /blog
  /api
/components
  /ui
  /layout
  /cards
  /animations
/sections
/data
/lib
/styles
/public
/config

Explain each folder and its purpose.

--------------------------------------------------
REQUIRED SECTIONS
--------------------------------------------------

Implement these sections fully:

1. Hero
   - Animated headline
   - Gradient background
   - CTA buttons
   - Scroll indicator

2. About
   - Timeline
   - Education
   - Career goals
   - Mission statement

3. Skills
   - Categorized skills
   - Animated progress bars
   - Tooltips
   - Icons

4. Projects
   - Case study layout
   - Live demo links
   - GitHub links
   - Tech stack tags
   - Modal preview

5. Experience
   - Vertical timeline
   - Achievements
   - Certifications

6. Blog
   - MDX based
   - Dynamic routing
   - Syntax highlighting
   - SEO metadata

7. Resume
   - PDF viewer
   - Download button

8. Contact
   - Form validation
   - Email integration
   - Error handling
   - Loading state

9. Footer
   - Social links
   - Sitemap
   - Copyright

--------------------------------------------------
ADVANCED FEATURES
--------------------------------------------------

Implement:

- Dark / Light mode (system based)
- Page transitions
- Skeleton loaders
- Error boundaries
- Lazy loading
- Image optimization
- Metadata API
- OpenGraph support
- Sitemap generation
- Robots.txt
- Analytics integration
- Performance monitoring

--------------------------------------------------
DESIGN SYSTEM
--------------------------------------------------

Create:

- Global color tokens
- Typography scale
- Spacing system
- Button variants
- Card variants
- Animation presets
- Shadow presets

Document the design system.

--------------------------------------------------
CODE QUALITY RULES
--------------------------------------------------

All code must:

- Be type-safe
- Be commented
- Follow SOLID principles
- Use descriptive names
- Follow ESLint rules
- Avoid duplication
- Be readable
- Use custom hooks when needed
- Handle edge cases

--------------------------------------------------
ACCESSIBILITY
--------------------------------------------------

Ensure:

- Proper ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast
- Focus management

--------------------------------------------------
SEO & PERFORMANCE
--------------------------------------------------

Optimize for:

- Lighthouse score > 90
- Core Web Vitals
- Semantic HTML
- Meta tags
- Structured data
- Lazy loading
- Bundle splitting

--------------------------------------------------
DEPLOYMENT
--------------------------------------------------

Prepare for:

- Vercel deployment
- Environment variables
- CI/CD pipeline
- Build optimization
- Production config

--------------------------------------------------
DOCUMENTATION
--------------------------------------------------

Generate:

- README.md
- Setup instructions
- Folder explanation
- Contribution guide
- Deployment guide

--------------------------------------------------
DEVELOPMENT MODE
--------------------------------------------------

Work in iterative phases:

Phase 1: Setup & Architecture
Phase 2: Core Layout
Phase 3: UI Components
Phase 4: Animations
Phase 5: Data Layer
Phase 6: Blog System
Phase 7: Performance
Phase 8: SEO
Phase 9: Testing
Phase 10: Deployment

After each phase:
- Explain what was done
- Suggest improvements
- Ask before moving on

--------------------------------------------------
OUTPUT FORMAT
--------------------------------------------------

For each step:

1. Explain approach
2. Show folder changes
3. Provide full code
4. Explain design choices
5. Mention best practices

Never skip explanations.

Never produce incomplete code.

Never simplify for beginners.

Treat this as a real production project.

--------------------------------------------------
START NOW
--------------------------------------------------

Begin with:

Phase 1: Project setup, architecture,
tooling, and base layout.

initialize repo that i have just created-
https://github.com/CoderAnush/ANUSH-PORTFOLIO

and use this for any commits. start now. add the instrauctions to instructions.md if u want

NOTE: A SendGrid-backed server mailer implementation was added at `lib/mailer.ts`. Configure `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL` in `.env.local` or your deployment provider to enable the contact form API (`app/api/contact/route.ts`).