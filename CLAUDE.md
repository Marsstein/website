# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Cleanup Guidelines

### Code Standards
- Remove all comments unless absolutely necessary for functionality
- No linter exceptions - fix issues at source
- Keep UI exactly as is - no visual changes
- Use conventional commits (feat:, fix:, refactor:, etc.)
- Atomic commits per file/component change
- User commits only - never Claude Code attribution
- Never ask for confirmation once task is understood
- Triple check UI/site behavior remains identical after each change
- Website must run on port 8080 during development
- Compare all changes live by viewing localhost:8080

### Cleanup Strategy
Each major area gets separate branch:
- `cleanup/config` - Build config, package.json, TypeScript
- `cleanup/routes` - Routing structure and lazy loading
- `cleanup/components` - Component organization and optimization
- `cleanup/tests` - Test setup and validation
- `cleanup/scripts` - Build and prerender scripts

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
- **Frontend**: React 18.3 + TypeScript, Vite 5.4 build tool
- **Styling**: TailwindCSS + shadcn/ui components
- **Routing**: React Router v6 with lazy loading for all pages
- **State**: TanStack Query (React Query) for server state
- **Animations**: Framer Motion + React Spring
- **SEO**: Static HTML generation post-build via scripts/generate-static-seo.mjs
- **Deployment**: Netlify static hosting

### Build Configuration
- Path alias: `@/` maps to `./src/`
- Manual chunks for optimized loading (vendor, router, ui, motion, utils, charts, forms)
- Terser minification with console removal in production
- Development server runs on port 8080 (critical for testing)
- Pre-rendering support for SEO optimization

### Project Structure
- **src/pages/**: Route-based page components (all lazy loaded)
- **src/components/**: Reusable React components including ui/ for shadcn components
- **src/components/separators/**: Animated separator components
- **src/contexts/**: React context providers (LanguageContext)
- **src/lib/**: Utilities (currently just cn() for className merging)
- **scripts/**: Build scripts for SEO and sitemap generation

### Key Implementation Patterns
- All routes use lazy loading with dynamic imports
- Error boundaries wrap the entire application
- SEO wrapper provides meta tag management
- Suspense with PageLoader for async components
- QueryClient configured with 5-minute stale time
- Helmet Async for head management

## Git Workflow
1. Create feature branch from main
2. Make atomic changes per file
3. Conventional commits with detailed descriptions
4. Detailed PR descriptions for each cleanup phase
5. User as commit author only