# AI Agent Rules — VIONYX

To maintain architectural integrity, scalability, and consistency, all AI agents editing or extending this codebase must adhere to the following rules:

## 1. Code Duplication & Reuse
- **Search First**: Before creating any new components, utilities, or hooks, search the existing files. Always check `src/components/ui/` and `src/components/layout/`.
- **Never Duplicate**: Under no circumstances should duplicate UI primitive designs or layout components be introduced.
- **Section Composition**: Construct sections using the `SectionTemplate` component from `src/components/sections/section-template.tsx` and UI primitives from `src/components/ui/`.

## 2. Server vs. Client Components
- **Server by Default**: All page sections, layout wrappers, and views must be React Server Components (RSC).
- **Client Components**: Only use the `"use client"` directive when rendering components that explicitly require user interactivity (e.g. form fields, mobile menu toggles, slider/carousel scroll state, or custom Framer Motion wrappers).
- **Isolation of Interaction**: Keep client-side state as low in the component tree as possible.

## 3. Separation of Concerns & Configuration
- **Zero Hardcoded Business Text**: Do not hardcode strings, emails, phone numbers, or marketing taglines in the component JSX.
- **Config & Content Layers**:
  - Read company identity metadata from `src/config/business.ts`.
  - Read copy, lists, features, FAQs, and price listings from the files in `src/content/`.
  - To clone this project for a new client, developers should only need to modify files in `src/config/` and `src/content/`.

## 4. Styling & Design System
- **Strict Tailwind Extension**: Only use classes that map to the design token scale defined in `src/app/globals.css`.
- **No Inline Styles**: Standard inline CSS is forbidden, except for dynamic calculation offsets (e.g. scroll positioning values in custom wrappers).
- **Visual Consistency**: Follow colors, spacing (8px base), borders, and typography scales exactly. Do not introduce arbitrary colors or spacing.

## 5. Performance & Accessibility
- **Lighthouse Target**: Ensure any page changes score >95 across all metrics (Performance, Accessibility, Best Practices, SEO).
- **Semantic HTML**: Build page layouts using proper landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Focus States**: All interactive components must exhibit a distinct visual focus ring.
- **Motion Restrictions**: Respect user preferences by wrapping animations in Framer Motion configurations that disable transitions when `prefers-reduced-motion` is active.

## 6. Coding Cleanliness
- **File Length Limit**: Keep component files under 300 lines. If a component exceeds this, extract sub-elements or custom hooks.
- **Strict Types**: Always compile with TypeScript strict mode. Never use the `any` type.
