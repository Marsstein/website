# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📚 CRITICAL DOCUMENTATION PATTERN
**ALWAYS ADD IMPORTANT DOCS HERE!** When you create or discover:
- Architecture diagrams → Add to `/Users/jonaskruger/Dev/MarsJonas/Dokumentation/`
- Database schemas → Add to `/Users/jonaskruger/Dev/MarsJonas/Dokumentation/docs/`
- Problem solutions → Add to `/Users/jonaskruger/Dev/MarsJonas/Dokumentation/adr/`
- Setup guides → Add to `/Users/jonaskruger/Dev/MarsJonas/Dokumentation/docs/`

This prevents context loss! Update this file IMMEDIATELY when creating important docs.

### 📁 Main Documentation Directory: `/Users/jonaskruger/Dev/MarsJonas/Dokumentation/`

### Key Documentation Files:
- **ARCHITECTURE.md** - System architecture overview
- **INFRA.md** - Infrastructure setup and configuration
- **PRODUKT.md** - Product specifications and features
- **RUNBOOK.md** - Operational procedures and troubleshooting
- **SECURITY.md** - Security guidelines and best practices
- **ENV-VARIABLES.md** - Environment variables documentation
- **INDEX.md** - Documentation index and navigation

### Technical Documentation (`/docs/`):
- **api.md** - API documentation
- **backend.md** - Backend architecture and services
- **frontend.md** - Frontend architecture and components
- **cicd.md** - CI/CD pipeline documentation
- **compliance-dsgvo.md** - DSGVO compliance documentation
- **testing.md** - Testing strategies and guidelines
- **observability.md** - Monitoring and logging setup
- **glossary.md** - Technical terms and definitions

### Architecture Decision Records (`/adr/`):
- **001-vite-react-stack.md** - Decision to use Vite + React
- **002-no-backend-architecture.md** - Serverless/static architecture decision
- **003-netlify-hosting.md** - Netlify as hosting platform

### Project-Specific Docs:
- **README.md** (`/Dokumentation/`) - Marsstein AI-Powered Compliance Platform overview, tech stack, and quickstart guide
- **netlify.toml** - Deployment configuration and build settings
- **vite.config.ts** - Build optimizations and hydration fixes
- **package.json** - All available scripts and commands
- **/scripts/** - Various prerendering and build scripts (50+ files)

## Project Overview

**Marsstein** - AI-Powered Compliance Platform for DSGVO, ISO 27001, NIS2 and EU AI Act compliance in the DACH region.

This is a React-based compliance and data protection platform built with:
- **Vite** as build tool
- **React 18** with TypeScript
- **React Router** for routing
- **Tailwind CSS** + shadcn/ui for styling
- **Radix UI** for accessible components
- **React Query** for data fetching
- **React Hook Form** + Zod for forms

## Essential Commands

### Development
```bash
npm run dev              # Start development server on port 8080
npm run preview          # Preview production build
npm run preview:ssg      # Preview SSG build with custom config
```

### Building
```bash
npm run build            # Default build (runs build:ssg)
npm run build:ssg        # Production SSG build with prerendering
npm run build:standard   # Standard Vite build without SSG
npm run build:quick      # Quick build with limited prerendering
```

### Code Quality
```bash
npm run lint             # Run ESLint
```

### Testing & Validation
```bash
npm run test:hydration   # Test React hydration
npm run test:ssg        # Test SSG build and preview
```

## Architecture

### Core Structure
- `/src/App.tsx` - Main application entry with lazy-loaded routes and providers
- `/src/main.tsx` - React DOM entry point
- `/src/pages/` - Page components (80+ compliance-related pages)
- `/src/components/` - Reusable UI components
- `/src/hooks/` - Custom React hooks
- `/src/contexts/` - React contexts (e.g., LanguageContext)

### Routing Strategy
- Most routes are lazy-loaded for performance
- Static pages are pre-rendered during build
- Dashboard/App sections remain as SPA (client-side routing)
- Extensive compliance content pages (DSGVO, ISO 27001, EU AI Act, etc.)

### Build System
- **Vite** with custom SSG prerendering using Playwright
- Aggressive code splitting with manual chunks for vendors
- Custom hydration safety plugin to prevent React hydration errors
- Multiple build modes for different deployment scenarios

### Deployment
- Deployed on Netlify
- Uses `netlify.toml` for build configuration
- Playwright-based prerendering for SEO-critical pages
- Static asset caching with immutable headers

## Key Configuration Files
- `vite.config.ts` - Vite configuration with custom plugins and optimizations
- `netlify.toml` - Netlify deployment settings
- `tsconfig.json` - TypeScript configuration with path aliases (@/*)
- `package.json` - Scripts and dependencies

## Important Notes
- Path alias `@/` maps to `./src/`
- TypeScript is configured with relaxed settings (no strict null checks)
- ESLint configured to ignore unused variables
- React hydration safety measures implemented via custom Vite plugin
- Extensive prerendering scripts in `/scripts/` for various SSG strategies