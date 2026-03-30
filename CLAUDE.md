# Portfolio — CLAUDE.md

## Project Overview
Andrew Jenkins' personal developer portfolio site. Built with React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + React Router. Deployed to Vercel. No backend.

## Stack
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`)
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## Git
- Email: andrew.jenkins88@gmail.com
- Remote: https://github.com/drewjenkins/portfolio

## Important Rules
- Do NOT put build config in `vercel.json` — only rewrites and headers
- Use Tailwind's **built-in** colors only (zinc, emerald, etc.) — no custom color config
- Tailwind v4: configured via `@tailwindcss/vite` plugin in `vite.config.ts`, CSS starts with `@import "tailwindcss"`
- No `tailwind.config.js` — v4 doesn't need one for basic usage
- Google Fonts loaded in `index.html`: JetBrains Mono + Inter

## Brand
- Background: zinc-950 (`#09090b`)
- Text: zinc-100
- Accent: emerald-500 (`#10b981`)
- Heading font: JetBrains Mono (monospace)
- Body font: Inter

## Pages
- `/` — Home (Hero, TechStack, FeaturedProjects, ValueProps, CTASection)
- `/projects` — Projects case studies
- `/about` — Bio, skills, approach, timeline
- `/contact` — Contact form (UI only, no backend)

## Contact
- Email: andrew.jenkins88@gmail.com
- GitHub: drewjenkins
