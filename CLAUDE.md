# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

```bash
npm run dev              # Development server on port 8080
npm run build            # Production build with SEO generation
npm run build:seo        # Production build with SSG pre-rendering
npm run lint             # ESLint code linting
npm run preview          # Preview production build on port 4173
npm run clean            # Clear build artifacts and caches
```

## Architecture Overview

### Tech Stack
- **Framework**: React 18.3 + TypeScript
- **Build Tool**: Vite 5.4 with SWC for fast refresh
- **Styling**: TailwindCSS + shadcn/ui component library
- **Routing**: React Router v6 with lazy loading for all pages
- **State Management**: TanStack Query (React Query v5) for server state
- **Animations**: Framer Motion + React Spring
- **Email**: Loops.so for transactional emails and contacts (replacing EmailJS)
- **SEO**: Static HTML generation post-build via scripts/generate-static-seo.mjs
- **Deployment**: Vercel static hosting

### Build Configuration
- **Path Alias**: `@/` maps to `./src/`
- **Manual Chunks**: vendor, router, ui, motion, utils, charts, forms
- **Minification**: Terser with console/debugger removal in production
- **Port**: Development server MUST run on port 8080
- **Preview Port**: 4173

### Project Structure
```
src/
├── pages/              # Route-based pages (all lazy loaded)
│   ├── assessment-center/  # Assessment tools
│   ├── branchen/           # Industry-specific guides
│   ├── compliance/         # Compliance framework guides
│   ├── crisis/             # Crisis management guides
│   ├── guides/             # General guides
│   ├── industries/         # Industry landing pages
│   ├── ki/                 # AI compliance guides
│   ├── legal/              # Legal case studies
│   └── wissen/             # Knowledge base articles
├── components/
│   ├── ui/             # shadcn/ui components (50+ components)
│   ├── separators/     # Animated separator components
│   └── ...             # Other reusable components
├── contexts/
│   └── LanguageContext.tsx  # i18n for en/de, stored in localStorage
├── lib/
│   └── utils.ts        # Utility functions (cn() for className merging)
└── App.tsx             # Root component with all route definitions
scripts/
├── generate-static-seo.mjs  # Post-build SEO meta tag injection
├── prerender.js             # Pre-rendering (used in build:seo)
└── sitemap.js              # Sitemap generation
```

### Key Architecture Patterns

**Routing**:
- All pages are lazy loaded using React.lazy() with dynamic imports
- Routes defined in App.tsx with pattern: `lazy(() => import("./pages/..."))`
- Suspense boundary with PageLoader spinner for all routes
- 150+ routes organized hierarchically

**State Management**:
- QueryClient with 5-minute stale time and 1 retry
- No global state - uses React Query for server state
- LanguageContext for i18n (en/de)

**Error Handling**:
- ErrorBoundary wraps entire application
- Provides fallback UI for uncaught errors

**SEO**:
- react-helmet-async for runtime meta management
- SEOWrapper component for default meta tags
- Post-build script (generate-static-seo.mjs) injects static meta tags
- Configured routes: /, /dsgvo, /eu-ai-act, /iso-27001-zertifizierung, etc.

**i18n**:
- LanguageContext provides language state (en/de)
- Translation function `t()` available via useContext
- Persisted in localStorage as 'marsstein-language'

**Component Library**:
- shadcn/ui components in src/components/ui/
- All styled with Tailwind CSS
- Radix UI primitives underneath

## Code Standards

### Development Workflow
- Website must run on port 8080 during development
- Always verify changes at localhost:8080 before committing
- Keep UI exactly as is - no visual changes without explicit request
- No linter exceptions - fix issues at source

### Commit Standards
- Use conventional commits (feat:, fix:, refactor:, chore:, docs:)
- Make atomic commits per file/component change
- Never include Claude Code attribution in commits
- Never ask for confirmation once task is understood

### Code Style
- Remove comments unless absolutely necessary for functionality
- TypeScript strict mode enabled
- ESLint configured with React hooks and refresh plugins

## Git Workflow

**Main Branch**: `cleanup/package-simplification`
**Current Branch**: `homepage`

1. Create feature branch from appropriate base
2. Make atomic changes per file/component
3. Write conventional commit messages
4. Create detailed PR descriptions

## Important Notes

- Development server port 8080 is critical for testing
- All pages use lazy loading - never import pages directly
- LanguageContext must wrap all components needing translations
- SEO meta tags are handled by both runtime (Helmet) and build-time (scripts)
- Route order matters in App.tsx - catch-all "*" route must be last