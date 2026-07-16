# CLAUDE.md

## Project Overview

This project is a modern SaaS landing page for a CRM product called **StrataCRM**.

The goal is NOT just a static landing page, but a **high-conversion, interactive product experience** that simulates a real CRM.

The landing should feel like a real SaaS product ready to launch.

---

## Product Concept

**StrataCRM** is a CRM focused on:

- Visual sales pipeline management
- Simplicity and clarity
- Structured data ("layers" concept)
- Automation of follow-ups
- Helping small teams and freelancers close more deals

Core idea:

> Organize your sales process into clear, actionable layers.

---

## Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion (for animations)
- Zustand (for state management in demo)
- Recharts (for charts)

---

## Design Principles

- Clean, modern SaaS UI
- Minimal but interactive
- Focus on clarity over decoration
- Smooth animations (not excessive)
- Use spacing and hierarchy to guide attention
- Avoid clutter

Visual tone:

- Professional
- Structured
- Data-driven

---

## Landing Page Structure

### 1. Hero Section

Goal: Immediate clarity + strong first impression

Include:

- Headline
- Subheadline
- Primary CTA (e.g. "Try Demo")
- Secondary CTA (optional)
- Product preview (dashboard or pipeline)

---

### 2. Interactive Demo (CRITICAL)

This is the most important part.

Create a **mock CRM pipeline** with columns such as:

- Leads
- Contacted
- Proposal
- Closed

Each column contains cards (deals).

Interactions:

- Move deals between stages (simulated)
- Update deal values
- Highlight state changes

Use Zustand to manage demo state.

---

### 3. Problem → Solution Section

Explain:

- Pain: disorganized sales, lost leads
- Solution: structured CRM system

Keep it concise and visual.

---

### 4. Features Section

Show 4–6 key features:

- Visual pipeline
- Automated reminders
- Client management
- Analytics dashboard
- Simple automation

Each feature should have:

- Icon or visual
- Short description
- Subtle interaction (hover/animation)

---

### 5. Dashboard Preview

Show charts and metrics:

- Revenue
- Leads
- Conversion rate

Add simple interaction:

- Toggle between time ranges (7d / 30d)

Use Recharts.

---

### 6. Pricing Section

3 tiers:

- Starter
- Pro (highlighted)
- Business

Add:

- Monthly / yearly toggle
- Animated price changes

---

### 7. Testimonials

Mock testimonials are fine.

Keep them realistic and concise.

---

### 8. Final CTA

Strong closing message:

- Encourage demo or signup

---

## UX Requirements

- Fast load time
- Responsive design (mobile-first)
- Clear visual hierarchy
- Obvious CTAs
- Smooth transitions

---

## Animation Guidelines

Use Framer Motion for:

- Section entrances
- Hover effects
- Subtle transitions
- Demo interactions

Avoid:

- Over-animating
- Distracting effects

---

## Code Guidelines

- Use functional components
- Keep components modular
- Separate UI and logic
- Use reusable UI primitives (shadcn)
- Keep state simple and predictable
- Use TypeScript properly (no `any`)

---

## Folder Structure Guidelines

- Use `/src` as the root directory for all source code
- Organize the codebase by **responsibility**, not by file type alone

- Keep a clear separation between:
  - Landing/marketing sections (Hero, Features, Pricing)
  - Product-like features (CRM demo, dashboard logic)

- Group related components together (e.g. all parts of the CRM demo should live close to each other)

- Avoid deeply nested or overly complex structures — keep it simple and predictable

- Co-locate logic with the components that use it when it makes sense

- Extract shared logic (hooks, utilities) only when it is reused in multiple places

- Keep UI primitives (buttons, inputs, cards) consistent and reusable

- Separate global concerns (styles, helpers, state) from feature-specific code

- Make the structure scalable, as if this were a real SaaS product that will grow

- Favor clarity over cleverness — a new developer should understand the structure quickly

---

## Important Notes

- This is a **portfolio project**, but it must feel like a real SaaS
- Prioritize UX and interactivity over static content
- The demo experience is the main differentiator
- Avoid generic landing patterns — make it feel like a product

---

## Language

- All user-facing copy (headlines, subheadlines, CTAs, feature descriptions, testimonials, pricing, metadata/SEO text, etc.) must be written in **Spanish**.
- Code, comments, component/variable names, and file names stay in English — only the rendered text shown to visitors is in Spanish.

---

## Tone & Copy

Tone should be:

- Clear
- Professional
- Direct
- Slightly modern (not corporate-heavy)

Avoid:

- Buzzwords
- Overly long paragraphs

---

## Goal

Build a landing page that:

- Looks like a real SaaS product
- Demonstrates frontend skills
- Feels interactive and polished
- Could realistically convert users
