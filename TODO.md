# TODO — VIONYX Build Roadmap

## Phase 1: Foundation & Design System
- [ ] Setup folder structure (`src/config/`, `src/content/`, `src/types/`, etc.)
- [ ] Set up design tokens in `globals.css`
- [ ] Configure `src/config/business.ts`
- [ ] Create content layer files
- [ ] Create utility helpers (`cn.ts`)
- [ ] Build 11 MVP UI Primitives (Button, Card, Container, Heading, Input, Textarea, Badge, Accordion, SectionWrapper, GradientText, Spinner)
- [ ] Build `SectionTemplate`
- [ ] Validate compilation build

## Phase 2: Layout & Frame
- [ ] Implement RootLayout (`app/layout.tsx`)
- [ ] Implement Navbar
- [ ] Implement Footer
- [ ] Implement ScrollProgress
- [ ] Implement WhatsApp FAB

## Phase 3: Core Sections
- [ ] Hero Section
- [ ] Trust Bar
- [ ] About Section
- [ ] Services Section
- [ ] Industries Section

## Phase 4: Extended Sections
- [ ] Portfolio Section (placeholder images)
- [ ] Process Timeline Section
- [ ] Pricing Section
- [ ] Testimonials Carousel
- [ ] FAQ Accordion Section
- [ ] CTA Banner

## Phase 5: Contact Form, Validation & SEO
- [ ] Contact Form Section
- [ ] Zod schema validations
- [ ] API routes setup (Resend contact handler)
- [ ] SEO setup (`robots.ts`, `sitemap.ts`, `manifest.ts`, metadata layers)
- [ ] Global error routing / custom 404

## Phase 6: Performance & Polishing
- [ ] Preload fonts and perform bundle check
- [ ] Optimize images to WebP/AVIF
- [ ] Build checks
- [ ] Final portfolio imagery injection
