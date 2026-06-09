# VIONYX — Premium Agency Web Template

VIONYX is a premium digital agency website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It is structured as a reusable master template for service businesses such as clinics, law firms, hotels, salons, restaurants, gyms, and similar brands.

## Key Architectural Pillars

1. **Content and Config Separation**: Business data and copy live in `vionyx/src/config/` and `vionyx/src/content/`, keeping presentation code clean.
2. **Standardized Layout Hierarchy**: Sections are composed through shared templates and UI primitives for consistent spacing and flow.
3. **Performance-Oriented Motion**: Animations are kept lightweight and should be reduced or removed where they are not essential.
4. **Easy Rebranding**: Updating business config, content, and asset files is the intended path for cloning the template to another client.

## Repository Map

- `vionyx/` - Main Next.js application.
- `PROJECT_RULES.md` - Visual, code-quality, and structure rules.
- `AI_AGENT_RULES.md` - Guidance for AI-assisted edits.
- `COMPONENT_REGISTRY.md` - Inventory of sections and UI components.
- `DESIGN_TOKENS.md` - Fonts, colors, spacing, and radius tokens.
- `TODO.md` - Current task list.
- `CHANGELOG.md` - Release notes and version history.
- `vionyx/PR_FINAL_RELEASE.md` - Final release audit and verification report.

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

## How to Run Locally

From the repository root:

```bash
cd vionyx
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

To verify the production build locally:

```bash
cd vionyx
npm run build
npm run start
```

## Testing

Run the main quality checks from the app folder:

```bash
cd vionyx
npm run lint
npx tsc --noEmit
npm run test:e2e
```

If you want Lighthouse CI verification:

```bash
cd vionyx
npm run lhci
```

## Deployment Steps

### Option 1: Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the `vionyx` app into Vercel.
3. Set environment variables in the Vercel project settings, including any contact/email keys used by the app.
4. Deploy the production branch.
5. Verify the live site at the Vercel deployment URL.

### Option 2: Deploy on a Node.js host

1. Run `npm install` in `vionyx/`.
2. Run `npm run build`.
3. Start the app with `npm run start`.
4. Set the required environment variables in the hosting platform.
5. Place the app behind HTTPS and a CDN or reverse proxy for best performance.

### Environment Variables

Common variables used by the app include:

- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_GA_ID`

## Notes

- Keep content edits inside `vionyx/src/content/` and business details inside `vionyx/src/config/`.
- Preserve the existing visual identity when updating copy, assets, or deployment settings.
