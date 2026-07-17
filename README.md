# StrataCRM Landing Page

A modern, interactive SaaS landing page for **StrataCRM** — a visual CRM platform designed for small teams and freelancers to manage their sales pipeline with clarity and simplicity.

## Overview

This is a high-conversion landing page that showcases StrataCRM's core features through an interactive product experience. Rather than a static marketing site, it's built to feel like a real SaaS product with live demos, smooth animations, and intuitive interactions.

**Live Demo**: [Coming soon]

## Features

- **Interactive Pipeline Demo** — A live, drag-enabled CRM demo that simulates deal management
- **Product Showcase** — Dashboard preview with charts and analytics
- **Responsive Design** — Mobile-first approach with full responsiveness
- **Smooth Navigation** — Anchor-based navigation with CSS smooth scrolling
- **Modern UX** — Framer Motion animations and polished interactions
- **Accessibility** — Built with shadcn/ui components for semantic HTML and a11y

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Charts**: [Recharts](https://recharts.org/)

## Project Structure

```
src/
├── app/
│   └── layout.tsx              # Root layout with metadata
├── components/
│   ├── layout/                 # Navigation, logo, header
│   ├── marketing/
│   │   ├── hero/              # Hero section with CTA
│   │   ├── features/          # Feature highlights
│   │   ├── pricing/           # Pricing tiers
│   │   ├── testimonials/      # Social proof
│   │   └── final-cta/         # Closing call-to-action
│   ├── ui/                     # Reusable shadcn components
│   └── dashboard/              # Dashboard preview section
├── features/
│   └── pipeline-demo/          # Interactive CRM demo
├── lib/                        # Utilities and helpers
└── hooks/                      # Custom React hooks
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: LTS)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd crm-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-refresh as you edit files.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint
- `npm run type-check` — Run TypeScript type checking

## Design Principles

- **Clean & Modern** — Professional SaaS aesthetic with minimal decorations
- **Interactive** — Smooth animations and live demos, not static content
- **Clear Hierarchy** — Intentional spacing and typography guide user attention
- **Data-Driven** — Visual approach to complex information (dashboards, pipelines)
- **Performance** — Optimized load times and smooth 60fps interactions

## Language & Localization

- **User-facing copy**: Spanish (es)
- **Code & Components**: English

All visible text (headlines, CTAs, feature descriptions, pricing) is in Spanish for the target audience.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site will be live in seconds.

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:

- AWS Amplify
- Netlify
- Docker
- Traditional VPS

See [Next.js Deployment Docs](https://nextjs.org/docs/app/building-application-deploying) for details.

## Development Guidelines

### Code Standards

- Use functional components and React hooks
- Keep components modular and focused
- Separate UI logic from business logic
- Use TypeScript (no `any` types)
- Co-locate logic with components when appropriate

### Component Organization

- UI primitives live in `components/ui/` (shadcn components)
- Marketing sections in `components/marketing/`
- Feature-specific logic in `features/`
- Shared utilities in `lib/`

### Styling

- Use Tailwind CSS utilities
- Follow the design system established in `tailwind.config.ts`
- Use `cn()` utility for conditional class merging
- Prefer composition over custom CSS

## Performance

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Using Next.js Image component
- **Font Loading**: Optimized with `next/font`
- **Smooth Scrolling**: CSS `scroll-behavior: smooth` + `scrollIntoView()` API

## Accessibility

- Semantic HTML with proper ARIA labels
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Mobile-touch friendly interfaces

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -m "feat: describe your change"`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## License

This project is private and proprietary.
