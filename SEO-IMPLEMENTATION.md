# SEO Implementation Guide

## Überblick

Diese Dokumentaggtion beschreibt, wie SEO in unserem React SPA (Single Page Application) Projekt implementiert ist und wie neue Seiten korrekt für SEO vorbereitet werden.

## Technologie-Stack

- **React Helmet Async**: Für dynamisches SEO im Client
- **Static SEO Generation Script**: Für Pre-rendered HTML mit SEO-Tags
- **Prerender.io via Cloudflare Worker**: Server-side Rendering für Crawler
- **Lokales Prerender Script**: Backup/Alternative für lokale Generierung
- **Vercel**: Hosting und Deployment
- **Cloudflare**: CDN + Prerender.io Worker Integration

## Architektur

### 1. Multi-Layer SEO System

```
┌─────────────────────────────────────────────┐
│           Build Process (npm run build)      │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│         1. Vite Build (dist/index.html)      │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│    2. generate-static-seo.mjs Script         │
│       - Liest dist/index.html                │
│       - Erstellt route-spezifische HTMLs     │
│       - Injiziert SEO Meta-Tags              │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│         3. Vercel Deployment                 │
│       - Statische HTML-Dateien               │
│       - Client-side React App                │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│      4. Cloudflare CDN + Worker              │
│       - Prerender.io für Crawler             │
│       - Normal SPA für User                  │
└─────────────────────────────────────────────┘
```

### SEO-Rendering Fluss

1. **User Request** → Cloudflare prüft User-Agent
2. **Normale User** → Bekommen React SPA
3. **Search Bots** → Cloudflare Worker triggert Prerender.io
4. **Prerender.io** → Rendert die Seite komplett (inkl. React Helmet)
5. **Bot bekommt** → Vollständig gerenderte HTML mit allen Meta-Tags

### 2. Komponenten

#### a) React Component mit SEOHead

```tsx
// src/pages/YourPage.tsx
import SEOHead from '../components/SEOHead';

const YourPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    // ... structured data
  };

  return (
    <div>
      <SEOHead
        title="Seitentitel | Marsstein"
        description="Seitenbeschreibung für Suchmaschinen"
        canonical="/ihre-route"
        structuredData={structuredData}
      />
      {/* Seiteninhalt */}
    </div>
  );
};
```

#### b) Static SEO Configuration

```javascript
// scripts/generate-static-seo.mjs
const routeConfigs = {
  '/ihre-route': {
    title: 'Seitentitel | Marsstein',
    description: 'Seitenbeschreibung für Suchmaschinen',
    keywords: 'keyword1, keyword2, keyword3',
    canonical: 'https://marsstein.ai/ihre-route'
  }
};
```

## Schritt-für-Schritt Anleitung für neue Seiten

### 1. React Component erstellen

```tsx
// src/pages/NeueBranchePage.tsx
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const NeueBranchePage: React.FC = () => {
  // Structured Data für Rich Snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "name": "Branche XYZ Compliance Guide",
    "description": "Detaillierte Compliance-Anleitung für Branche XYZ",
    "url": "https://marsstein.ai/wissen/branchen/xyz",
    // weitere Felder...
  };

  return (
    <div>
      <SEOHead
        title="Branche XYZ Compliance Guide - DSGVO & mehr"
        description="Umfassender Compliance-Leitfaden für Branche XYZ. DSGVO, ISO 27001 und branchenspezifische Anforderungen erklärt."
        canonical="/wissen/branchen/xyz"
        structuredData={structuredData}
      />
      <Header />
      {/* Seiteninhalt */}
      <Footer />
    </div>
  );
};

export default NeueBranchePage;
```

### 2. Route in Router hinzufügen

```tsx
// src/router.tsx
{
  path: '/wissen/branchen/xyz',
  lazy: () => import('./pages/NeueBranchePage')
}
```

### 3. Static SEO Configuration erweitern

```javascript
// scripts/generate-static-seo.mjs
const routeConfigs = {
  // ... andere Routen
  '/wissen/branchen/xyz': {
    title: 'Branche XYZ Compliance Guide | DSGVO & mehr | Marsstein',
    description: 'Umfassender Compliance-Leitfaden für Branche XYZ. DSGVO, ISO 27001 und branchenspezifische Anforderungen erklärt.',
    keywords: 'Branche XYZ, DSGVO, Compliance, ISO 27001',
    canonical: 'https://marsstein.ai/wissen/branchen/xyz'
  }
};
```

### 4. Build und Test

```bash
# Lokal testen
npm run build
npm run preview

# SEO Tags prüfen
curl http://localhost:4173/wissen/branchen/xyz | grep -E '<title>|<meta'
```

## Vercel Deployment

### Automatischer Workflow

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: add neue branche page with SEO"
   git push
   ```

2. **Vercel Build Process**
   - Vercel detektiert Push
   - Führt `npm run build` aus
   - `generate-static-seo.mjs` erstellt statische HTMLs
   - Deployment der statischen Files

3. **Resultat**
   - Statische HTML-Dateien mit SEO-Tags (für Crawler)
   - React SPA für dynamische Navigation
   - Beide Systeme arbeiten zusammen

### Vercel Configuration

```json
// vercel.json (falls vorhanden)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## SEO Best Practices

### 1. Title Tags
- **Format**: `Spezifischer Titel | Kategorie | Marsstein`
- **Länge**: Max. 60 Zeichen
- **Beispiel**: `Healthcare DSGVO Guide | Branchen | Marsstein`

### 2. Meta Descriptions
- **Länge**: 150-160 Zeichen
- **Call-to-Action**: Verwende ✓ Checkmarks und action-orientierte Sprache
- **Keywords**: Natürlich einbauen, nicht keyword-stuffing

### 3. Structured Data
- **Types**: Article, Organization, BreadcrumbList, ItemList
- **Testing**: [Google Rich Results Test](https://search.google.com/test/rich-results)

### 4. URLs
- **Format**: Sprechende URLs verwenden
- **Struktur**: `/kategorie/unterkategorie/seite`
- **Beispiel**: `/wissen/branchen/healthcare-dsgvo`

## Wichtig: Keine Konflikte!

Die drei SEO-Systeme **ergänzen sich** und verursachen **keine Konflikte**:

1. **Static Generation** (generate-static-seo.mjs)
   - Erstellt Basis-HTML für jede Route
   - Fallback wenn Prerender.io nicht greift

2. **Prerender.io** (Cloudflare Worker)
   - Hauptsystem für Crawler
   - Rendert React komplett (inkl. React Helmet Updates)
   - Überschreibt die statischen Tags mit finalen Werten

3. **React Helmet** (Client-side)
   - Für dynamische Updates beim Navigieren
   - Wird von Prerender.io mit gerendert

### Priorität:
```
1. Prerender.io (wenn Bot) → Vollständig gerenderte Seite
2. Static HTML (wenn kein Prerender) → Basis SEO-Tags
3. React Helmet (nach Hydration) → Dynamische Updates
```

## Troubleshooting

### Problem: SEO Tags erscheinen nicht

1. **Check Build Output**
   ```bash
   npm run build
   ls -la dist/wissen/branchen/
   ```

2. **Verify Static Generation**
   ```bash
   cat dist/wissen/branchen/xyz/index.html | head -50
   ```

3. **Test mit curl**
   ```bash
   curl https://marsstein.ai/wissen/branchen/xyz | grep '<title>'
   ```

### Problem: React Helmet überschreibt Static Tags

- Stelle sicher, dass beide Konfigurationen identisch sind
- SEOHead props müssen mit generate-static-seo.mjs übereinstimmen

## Testing Tools

1. **Local Testing**
   ```bash
   npm run build && npm run preview
   ```

2. **SEO Validation**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Meta Tags Checker](https://metatags.io/)

3. **Lighthouse**
   ```bash
   npx lighthouse https://marsstein.ai/wissen/branchen/xyz
   ```

## Wartung

### Monatliche Checks
- [ ] Alle Seiten in generate-static-seo.mjs vorhanden?
- [ ] SEOHead Component in allen Pages verwendet?
- [ ] Structured Data aktuell?
- [ ] Meta Descriptions optimiert?

### Bei neuen Features
- [ ] Route in Router hinzugefügt?
- [ ] Static SEO Config erweitert?
- [ ] Build lokal getestet?
- [ ] Deployment auf Vercel erfolgreich?

## Kontakt

Bei Fragen zur SEO-Implementation:
- Dokumentation: Diese Datei
- Build-Script: `scripts/generate-static-seo.mjs`
- SEO Component: `src/components/SEOHead.tsx`