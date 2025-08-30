# Marsstein Platform - Vollständige Architektur-Dokumentation

## Inhaltsverzeichnis

1. [Überblick](#überblick)
2. [Tec1hnologie-Stack](#technologie-stack)
3. [Projekt-Struktur](#projekt-struktur)
4. [Architektur-Komponenten](#architektur-komponenten)
5. [Build & Deployment](#build--deployment)
6. [Datenfluss & State Management](#datenfluss--state-management)
7. [SEO & Rendering-Strategie](#seo--rendering-strategie)
8. [Vercel Deployment](#vercel-deployment)
9. [Performance-Optimierung](#performance-optimierung)
10. [Sicherheit](#sicherheit)
11. [Entwicklungsworkflow](#entwicklungsworkflow)
12. [Erweiterungsmöglichkeiten](#erweiterungsmöglichkeiten)

## Überblick

Marsstein ist eine KI-native Compliance-Platform für den DACH-Raum, entwickelt als moderne React-Single-Page-Application (SPA) mit umfassender SEO-Optimierung und statischer Generierung für optimale Performance.

### Kernmerkmale
- **Compliance-Fokus**: DSGVO, ISO 27001, EU AI Act, SOC2, NIS2
- **Multi-Sprachen-Support**: Deutsch und Englisch
- **SEO-First-Ansatz**: Vollständiges Pre-Rendering für 64+ Routen
- **Performance-optimiert**: Code-Splitting, Asset-Optimierung
- **Sicherheitsorientiert**: Umfassende Security Headers und CSP

## Technologie-Stack

### Frontend-Framework
- **React 18.3.1**: Modernes UI-Framework mit Hooks
- **TypeScript 5.5.3**: Type-Safety und bessere Developer Experience
- **Vite 5.4.1**: Schneller Build-Tool und Dev-Server

### UI-Komponenten & Styling
- **Tailwind CSS 3.4.11**: Utility-First CSS Framework
- **Radix UI**: Accessible UI-Komponenten (40+ Komponenten)
- **shadcn/ui**: Komponenten-Bibliothek auf Basis von Radix UI
- **Framer Motion 11.18.2**: Animationen und Übergänge
- **Lucide Icons**: Umfangreiche Icon-Bibliothek

### Routing & Navigation
- **React Router 6.30.1**: Client-seitiges Routing
- **React Helmet Async 2.0.5**: SEO Meta-Tag Management

### Form-Handling & Validierung
- **React Hook Form 7.53.0**: Performantes Form-Management
- **Zod 3.23.8**: Schema-Validierung
- **@hookform/resolvers**: Integration von Zod mit React Hook Form

### Kommunikation
- **EmailJS 4.4.1**: E-Mail-Versand ohne Backend
- **TanStack Query 5.56.2**: Server-State-Management (vorbereitet)

### Entwicklungstools
- **ESLint 9.9.0**: Code-Qualität und Konsistenz
- **Prettier 3.6.2**: Code-Formatierung
- **PostCSS**: CSS-Verarbeitung
- **Autoprefixer**: Browser-Kompatibilität

## Projekt-Struktur

```
marsstein_clean/
├── src/
│   ├── components/         # React-Komponenten
│   │   ├── ui/            # Basis-UI-Komponenten (shadcn)
│   │   └── separators/    # Visuelle Trenner-Komponenten
│   ├── pages/             # Route-Komponenten
│   │   ├── assessment-center/  # Assessment-Tools
│   │   ├── branchen/      # Branchenspezifische Seiten
│   │   ├── compliance/    # Compliance-Guides
│   │   ├── crisis/        # Krisenmanagement-Guides
│   │   ├── designs/       # Design-Showcase-Seiten
│   │   ├── guides/        # Allgemeine Leitfäden
│   │   ├── industries/    # Industrie-Seiten
│   │   ├── ki/           # KI-Compliance-Seiten
│   │   ├── legal/        # Rechtsprechung-Seiten
│   │   ├── resources/    # Ressourcen und Tools
│   │   └── wissen/       # Wissensdatenbank
│   ├── contexts/         # React Contexts
│   ├── hooks/           # Custom React Hooks
│   ├── lib/             # Utility-Funktionen
│   └── assets/          # Bilder und statische Dateien
├── scripts/             # Build und Deployment Scripts
├── api/                # Vercel Edge Functions
├── public/             # Statische Assets
└── dist/               # Build-Output
```

## Architektur-Komponenten

### 1. React-Komponenten-Architektur

#### Basis-Komponenten (UI-Library)
- **40+ shadcn/ui Komponenten**: Button, Card, Dialog, Form, etc.
- **Atomic Design**: Kleine, wiederverwendbare Komponenten
- **Accessibility-First**: ARIA-Labels, Keyboard-Navigation

#### Feature-Komponenten
- **SEOHead**: Zentrale SEO-Meta-Tag-Verwaltung
- **ContactForm**: EmailJS-Integration mit Rate-Limiting
- **ScrollTransformation**: Komplexe Scroll-Animationen
- **Header/Footer**: Globale Navigation und Branding

#### Seiten-Komponenten
- **400+ Routen**: Umfassende Inhaltsstruktur
- **Lazy Loading**: Code-Splitting für optimale Performance
- **Error Boundaries**: Fehlerbehandlung auf Seitenebene

### 2. State Management

#### Context API
```typescript
// LanguageContext für Internationalisierung
interface LanguageContextType {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
  t: (key: string) => string;
}
```

#### Local Storage
- Spracheinstellungen
- Form-Daten (temporär)
- User-Preferences

#### React Query (vorbereitet)
- QueryClient konfiguriert
- 5 Minuten staleTime
- Retry-Logik implementiert

### 3. Routing-Strategie

#### Hauptrouten-Kategorien
1. **Produkt-Seiten**: /dsgvo, /eu-ai-act, /iso-27001-zertifizierung
2. **Wissens-Seiten**: /wissen/*, /compliance/*, /guides/*
3. **Branchen-Seiten**: /branchen/*, /industries/*
4. **Tools**: /tools/*, /assessment-center/*
5. **Utility**: /contact, /pricing, /impressum, /datenschutz

#### Redirect-Strategie
- Legacy-URLs werden auf neue Struktur umgeleitet
- 301-Redirects für SEO-Erhalt
- Clean URLs ohne Trailing Slashes

## Build & Deployment

### Build-Prozess

#### 1. Standard Build
```bash
npm run build
```
- Vite-Standard-Build
- Code-Splitting aktiviert
- Asset-Optimierung

#### 2. SEO Build (Lokal)
```bash
npm run build:seo
```
- Vite Build + Puppeteer Pre-Rendering
- Vollständige HTML-Generierung
- Für lokale Entwicklung

#### 3. Vercel SEO Build
```bash
npm run build:vercel-seo
```
- Statische HTML-Generierung ohne Puppeteer
- 64 vorgenerierte SEO-Routen
- Sitemap und robots.txt Generation

### Code-Splitting-Strategie
```javascript
manualChunks: {
  'router': ['react-router-dom'],
  'ui': ['@radix-ui/*'],
  'forms': ['react-hook-form', '@hookform/*', 'zod'],
  'email': ['@emailjs/*']
}
```

## Datenfluss & State Management

### Datenfluss-Architektur

```
User Interface (React Components)
         ↓
    Custom Hooks
         ↓
    Context API
         ↓
   Local Storage
```

### Form-Datenfluss (ContactForm)
```
User Input
    ↓
React Hook Form Validation
    ↓
Zod Schema Validation
    ↓
EmailJS API Call
    ↓
Success: Redirect to /thank-you
Error: Toast Notification
```

### Internationalisierung (i18n)
```typescript
// Verwendung in Komponenten
const { t, language, setLanguage } = useLanguage();

// Translation-Keys
t('common.navigation.home') // → "Startseite" (de) / "Home" (en)
```

## SEO & Rendering-Strategie

### Pre-Rendering-Ansatz

#### Build-Zeit-Generierung
- **64 kritische SEO-Routen** werden vorgeneriert
- Jede Route erhält vollständige HTML-Datei mit:
  - Meta-Tags (title, description, keywords)
  - Open Graph Tags
  - Twitter Cards
  - Strukturierte Daten (JSON-LD)
  - Canonical URLs

#### HTML-Template-Struktur
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <!-- Primäre Meta-Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{SEO_TITLE}</title>
    <meta name="description" content="{SEO_DESCRIPTION}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="{OG_TITLE}">
    <meta property="og:image" content="{OG_IMAGE}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">{STRUCTURED_DATA}</script>
    
    <!-- Asset Preloading -->
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="preload" href="/assets/index.js" as="script" type="module">
</head>
<body>
    <div id="root"></div>
    <!-- Hidden SEO Content -->
    <div style="position: absolute; left: -9999px;">
        {SEO_CONTENT}
    </div>
</body>
</html>
```

### SEO-Komponenten

#### SEOHead Component
```typescript
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: any;
}
```

## Vercel Deployment

### Vercel-Konfiguration

#### vercel.json
```json
{
  "installCommand": "npm install --legacy-peer-deps",
  "buildCommand": "npm run build:vercel-seo",
  "outputDirectory": "dist",
  "framework": null,
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Edge Functions

#### /api/og.js
- **Zweck**: Dynamische OG-Tags-Generierung
- **Runtime**: Edge
- **Verwendung**: Aktuell nicht aktiv genutzt

#### /api/render.js
- **Zweck**: Server-Side Rendering Capability
- **Runtime**: Edge
- **Verwendung**: Backup für dynamische Inhalte

### Deployment-Workflow

1. **Git Push** → GitHub Repository
2. **Vercel Hook** → Automatischer Build-Start
3. **Install Phase** → Dependencies mit legacy-peer-deps
4. **Build Phase** → Statische HTML-Generierung
5. **Deploy Phase** → Globale CDN-Verteilung
6. **Post-Deploy** → Cache-Invalidierung

## Performance-Optimierung

### Asset-Optimierung
- **Long-Term Caching**: 1 Jahr für statische Assets
- **Fingerprinting**: Hash-basierte Dateinamen
- **Compression**: Gzip/Brotli aktiviert

### Code-Optimierung
- **Tree Shaking**: Ungenutzter Code wird entfernt
- **Minification**: JS/CSS minimiert
- **Code Splitting**: 
  - Router-Code separat
  - UI-Komponenten gebündelt
  - Forms-Logik isoliert

### Lazy Loading
- **Route-basiertes Splitting**: Jede Route wird separat geladen
- **Component-Level Splitting**: Große Komponenten lazy loaded
- **Image Loading**: Native lazy loading für Bilder

### Bundle-Analyse
```
Main Bundle: ~200KB
Router Chunk: ~50KB
UI Chunk: ~150KB
Forms Chunk: ~80KB
Email Chunk: ~30KB
```

## Sicherheit

### Security Headers
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Content Security Policy (CSP)
```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.emailjs.com;
style-src 'self' 'unsafe-inline' fonts.googleapis.com;
font-src 'self' fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' api.emailjs.com;
```

### Input-Validierung
- **Zod-Schemas** für alle Forms
- **Sanitization** von User-Input
- **Rate-Limiting** für Form-Submissions

## Entwicklungsworkflow

### Lokale Entwicklung
```bash
npm install
npm run dev
# Läuft auf http://localhost:8080
```

### Testing
```bash
npm run lint        # ESLint
npm run build       # Build-Test
npm run preview     # Production-Preview
```

### Deployment
```bash
# Automatisch via Git Push
git push origin main

# Manuell
vercel --prod
```

### Entwicklungstools
- **Vite HMR**: Hot Module Replacement
- **React DevTools**: Component-Inspektion
- **TypeScript**: Type-Checking
- **ESLint**: Code-Qualität

## Erweiterungsmöglichkeiten

### 1. Backend-Integration
- **API-Endpoints** implementieren
- **Datenbank** anbinden
- **User Authentication** hinzufügen
- **Real-time Features** mit WebSockets

### 2. Erweiterte Features
- **Dashboard** mit echten Daten
- **Compliance-Tracking** System
- **Automated Assessments**
- **Report-Generation**

### 3. Performance-Verbesserungen
- **Service Workers** für Offline-Support
- **WebAssembly** für komplexe Berechnungen
- **Edge Computing** für globale Performance

### 4. Skalierung
- **Microservices** Architektur
- **Serverless Functions** erweitern
- **Multi-Tenant** Capabilities
- **Enterprise SSO** Integration

## Zusammenfassung

Die Marsstein-Platform ist eine moderne, SEO-optimierte React-Anwendung mit Fokus auf Compliance im DACH-Raum. Die Architektur priorisiert:

- **SEO-Performance** durch vollständiges Pre-Rendering
- **User Experience** durch schnelle Ladezeiten
- **Developer Experience** durch TypeScript und moderne Tools
- **Skalierbarkeit** durch modulare Struktur
- **Sicherheit** durch umfassende Security-Maßnahmen

Die statische Generierung in Kombination mit React's SPA-Funktionalität bietet das Beste aus beiden Welten: SEO-Sichtbarkeit und interaktive User Experience.