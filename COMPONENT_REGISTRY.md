# Component Registry — VIONYX

This registry lists all available UI primitives, layout structures, and templates within the VIONYX project.

## 1. UI Primitives (11 MVP Components)

| Component | Path | Description | Interactive States |
|---|---|---|---|
| **Button** | `src/components/ui/button.tsx` | Highly custom, support variants (`primary`, `secondary`, `ghost`, `danger`) and sizing. | Hover, active click, focus, loading spinner, disabled |
| **Card** | `src/components/ui/card.tsx` | Glassmorphism or solid surfaces with hover rise. | Hover lift, focus |
| **Container** | `src/components/ui/container.tsx` | Maximum width viewport layout constraints. | Static |
| **Heading** | `src/components/ui/heading.tsx` | Strictly structured typography headings (`h1` through `h6`) with gradients. | Static |
| **Input** | `src/components/ui/input.tsx` | Styled form text inputs with error state handling. | Hover, focus glow, error, success |
| **Textarea** | `src/components/ui/textarea.tsx` | Custom multiline fields matching inputs. | Hover, focus glow, error |
| **Badge** | `src/components/ui/badge.tsx` | Pill badge tags for metrics or labels. | Static |
| **Accordion** | `src/components/ui/accordion.tsx` | Expandable disclosure items for FAQs. | Expanded, collapsed, focus |
| **SectionWrapper** | `src/components/ui/section-wrapper.tsx` | Main standard section container. | Static |
| **GradientText** | `src/components/ui/gradient-text.tsx` | Inline styled gradient texts. | Static |
| **Spinner** | `src/components/ui/spinner.tsx` | Loading circle animation spinner. | Busy spin animation |

## 2. Layout Components

| Component | Path | Description |
|---|---|---|
| **Navbar** | `src/components/layout/navbar.tsx` | Top navigation with sticky glass transition. |
| **Footer** | `src/components/layout/footer.tsx` | Standardized footer displaying business info. |
| **ScrollProgress** | `src/components/layout/scroll-progress.tsx` | Thin progress indicator at top of page. |
| **WhatsAppFAB** | `src/components/layout/whatsapp-fab.tsx` | Click-to-chat float button. |

## 3. Section Components

| Component | Path | Composition Outline |
|---|---|---|
| **SectionTemplate** | `src/components/sections/section-template.tsx` | Wrapper → Container → Badge → Heading → Description → Content → CTA |
| **HeroSection** | `src/sections/hero-section.tsx` | Core hero entry utilizing SectionTemplate |
| **TrustBar** | `src/sections/trust-bar.tsx` | Brand trust logos marquee |
| **AboutSection** | `src/sections/about-section.tsx` | Mission, description and statistics |
| **ServicesSection** | `src/sections/services-section.tsx` | Dynamic services list |
| **IndustriesSection** | `src/sections/industries-section.tsx` | Target industry niches |
