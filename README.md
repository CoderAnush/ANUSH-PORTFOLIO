# Anush Ramesh — AI/ML Engineer Portfolio 🚀

> A premium, interactive developer portfolio built with Next.js 14, TypeScript, Three.js, Framer Motion & Tailwind CSS.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎮 **Interactive 3D Hero** | Custom-built 3D floating sphere via `@react-three/fiber`, reacts to time and renders beautifully |
| 🎬 **Premium Animations** | Entrance animations, stagger effects, and glassmorphism hover cards via Framer Motion |
| 🌊 **Smooth Scrolling** | Butter-smooth scroll inertia using the `Lenis` library |
| 🌗 **Light & Dark Mode** | Fully semantic CSS variable system with a one-click toggle in the header |
| 🤖 **AI Chatbot** | Context-aware chatbot that discusses Anush's experience, projects, and skills |
| 📊 **DSA Tracker** | Links to daily LeetCode & GeeksforGeeks practice repos, showcasing problem-solving passion |
| 📝 **MDX Blog** | Fully rendered Markdown/MDX blog posts with code highlighting and prose styling |
| 📬 **Smart Contact Form** | Client-side `mailto:` integration — no backend API keys needed, opens native mail client |
| ⚡ **Fast Navigation** | Client-side routing via Next.js App Router with instant page transitions |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables for theming
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **Smooth Scroll**: Lenis
- **Blog**: MDX with `next-mdx-remote` + `gray-matter`
- **Linting**: ESLint + Prettier

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/CoderAnush/PORTFOLIO.git
cd PORTFOLIO

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/                  # Next.js App Router pages
├── components/
│   ├── 3d/               # Three.js / R3F 3D components
│   ├── cards/            # Reusable card components (Blog, Experience, Project)
│   ├── chatbot/          # AI Chatbot widget
│   ├── layout/           # Header, Footer, Navigation
│   └── ui/               # Shared UI (Button, ContactForm, etc.)
├── data/
│   ├── blog/             # MDX blog post files
│   ├── experience.ts     # Work experience data
│   ├── projects.ts       # Project showcase data
│   └── skills.ts         # Skills & tools data
├── sections/             # Full-page sections (Hero, About, Projects, etc.)
├── styles/               # Global CSS + Tailwind theme variables
└── lib/                  # Utility functions (MDX parser, mailer)
```

---

## 📬 Contact Form

The contact form uses a **client-side `mailto:` link** — when a user fills out the form and clicks "Open Mail Client", it opens their default email app (e.g. Outlook, Gmail) with the subject and message pre-filled. No backend email service configuration required.

---

## 🧰 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checker
```

---

Built with ❤️ by [Anush Ramesh](https://github.com/CoderAnush)

