# Marsstein - AI-Powered Compliance Platform

## 🎯 Kurzbeschreibung

Marsstein ist eine moderne SaaS-Plattform für automatisierte Compliance-Management-Lösungen im DACH-Raum. Die Platform unterstützt Unternehmen bei DSGVO, ISO 27001, NIS2 und EU AI Act Compliance durch KI-gestützte Automatisierung und intuitive Dashboards.

**Problem:** Komplexe Compliance-Anforderungen überfordern viele Unternehmen  
**Zielgruppe:** KMU und Enterprise im DACH-Raum (Finanz, Gesundheit, E-Commerce)  
**Scope:** Compliance-Automatisierung, Risk Assessment, Dokumentation, Monitoring

## 🚀 Tech-Stack

### Frontend
- **Framework:** React 18.3 + TypeScript
- **Build Tool:** Vite 5.4
- **Styling:** TailwindCSS + shadcn/ui
- **Routing:** React Router v6
- **State:** React Query (TanStack Query)
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion + React Spring

### Backend & Infrastructure
- **Hosting:** Netlify (Static + SSG)
- **Email:** EmailJS
- **Analytics:** TBD
- **Monitoring:** TBD

### Development
- **Package Manager:** npm/bun
- **Linting:** ESLint + Prettier
- **Pre-rendering:** Playwright für SEO

## ⚡ Quickstart

### Prerequisites
- Node.js 18+ (empfohlen: via [nvm](https://github.com/nvm-sh/nvm))
- npm oder bun
- Git

### Installation & Start

```bash
# Repository klonen
git clone https://github.com/marsstein/marsstein-platform.git
cd marsstein-platform/jonasmars

# Dependencies installieren
npm install
# oder
bun install

# Development Server starten
npm run dev
# Server läuft auf http://localhost:8080

# Production Build
npm run build

# Production Build mit SSG Pre-rendering
npm run build:ssg

# Tests ausführen
npm run test:hydration

# Code-Qualität prüfen
npm run lint
```

### Standard-Konfiguration

1. `.env.development` anlegen (siehe `.env.example`)
2. EmailJS konfigurieren (VITE_EMAILJS_* Variablen)
3. Optional: Netlify Deployment konfigurieren

## 📁 Projektstruktur

```
marsstein-platform/
├── jonasmars/           # Hauptapplikation
│   ├── src/
│   │   ├── components/  # React Komponenten
│   │   ├── pages/       # Route-basierte Pages
│   │   ├── hooks/       # Custom React Hooks
│   │   ├── lib/         # Utilities & Helpers
│   │   └── styles/      # Global Styles
│   ├── public/          # Statische Assets
│   └── scripts/         # Build & Prerender Scripts
├── Dokumentation/       # Projektdokumentation
└── scripts/             # Globale Scripts
```

## 🔗 Wichtige Links

### Development
- **Local:** http://localhost:8080
- **Preview:** http://localhost:4173

### Staging/Production
- **Staging:** https://marsstein-staging.netlify.app
- **Production:** https://marsstein.de

### Dokumentation
- **API Spec:** `/Dokumentation/docs/api.md`
- **Architecture:** `/Dokumentation/ARCHITECTURE.md`
- **Contributing:** `/Dokumentation/CONTRIBUTING.md`

## 📊 Monitoring & Analytics

- **Performance:** Web Vitals via Netlify Analytics
- **Errors:** Sentry (wenn konfiguriert)
- **Uptime:** Netlify Status

## 🤝 Support & Kontakt

- **Tech Lead:** [tech@marsstein.de]
- **Issues:** GitHub Issues
- **Dokumentation:** `/Dokumentation/`

## 📝 Lizenz

Proprietär - Alle Rechte vorbehalten. Siehe LICENSE Datei.

---

Für detaillierte Entwicklungsinformationen siehe [`/Dokumentation/ARCHITECTURE.md`](/Dokumentation/ARCHITECTURE.md) und [`/Dokumentation/INFRA.md`](/Dokumentation/INFRA.md).
