Use TypeScript strict mode.
No any types.
No inline styles.
Use Tailwind only.
Reuse components before creating new ones.
No duplicated code.
No hardcoded business content.
Use config files.
Follow design tokens.
Ensure responsive layouts.
Ensure accessibility.
Zero console errors.
Zero TypeScript errors.
Zero ESLint errors.


2. COMPONENT_REGISTRY.md ⭐⭐⭐⭐⭐

Define every reusable component:

Button

Card

Container

Navbar

Hero

SectionTitle

PricingCard

PortfolioCard

FAQAccordion

Input

Textarea

Badge

Toast

Footer

Modal

Spinner

Loader

ServiceCard

AI agents will reuse components instead of generating duplicates.

3. DESIGN_TOKENS.md ⭐⭐⭐⭐⭐

Centralize all design values:

colors

spacing

radius

shadow

font sizes

animation durations

z-index

breakpoints

container widths

transitions

This prevents inconsistent styling.

4. AI_AGENT_INSTRUCTIONS.md ⭐⭐⭐⭐⭐

Example:

Always search for existing components before creating new ones.

Never duplicate code.

Prefer Server Components.

Use Client Components only for interaction.

Never hardcode strings.

Read from config files.

Use semantic HTML.

Optimize for Lighthouse >95.

Follow WCAG AA.

Use Framer Motion wrappers.

Do not introduce new color values.

Use existing spacing tokens.

Keep components under 300 lines.

This greatly improves multi-agent consistency.

5. TODO_ROADMAP.md ⭐⭐⭐⭐☆

Track development in phases:

Phase 1

☐ Navbar

☐ Hero

☐ About

☐ Services

☐ Industries

☐ Portfolio

☐ Pricing

☐ FAQ

☐ Contact

☐ Footer

Phase 2

☐ SEO

☐ Animations

☐ Performance

☐ Accessibility

☐ Analytics

☐ Testing

☐ Deployment

Phase 3

☐ Blog

☐ AI Chatbot

☐ CMS

☐ Client Portal

This keeps all AI agents aligned.

One architectural recommendation

Move all business content into structured files rather than embedding text inside components.

For example:

src/

config/
site.ts

content/
hero.ts
about.ts
services.ts
portfolio.ts
pricing.ts
faq.ts
testimonials.ts

components/
...

sections/
...

Then, when creating a restaurant, salon, hotel, or gym website later, you can reuse the same codebase and simply replace the content files.