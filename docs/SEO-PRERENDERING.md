# SEO Prerendering für Marsstein

## Übersicht

Dieses Dokument beschreibt die Implementierung von SEO-Optimierungen für die Marsstein-Plattform, um bessere Suchmaschinen-Rankings zu erreichen.

## Problem

Single Page Applications (SPAs) mit React haben ein fundamentales SEO-Problem:
- Suchmaschinen-Crawler sehen nur die leere HTML-Shell
- JavaScript wird oft nicht oder nur teilweise ausgeführt
- Meta-Tags werden erst nach dem Rendern gesetzt
- Content (H1, H2, Text) ist nicht im initialen HTML vorhanden

## Aktuelle Lösung: Meta-Tag Prerendering

### Was wurde implementiert

1. **Prerender-Script** (`scripts/prerender.js`)
   - Generiert statische HTML-Dateien für wichtige Routen
   - Setzt spezifische Meta-Tags für jede Seite
   - Läuft nach dem Build-Prozess

2. **Build-Prozess**
   ```bash
   npm run build  # Führt aus: vite build && node scripts/prerender.js
   ```

3. **Ergebnis**
   - Statische HTML-Dateien mit korrekten Meta-Tags
   - Beispiel: `/dist/wissen/rechtsprechung/amazon-luxemburg-2021/index.html`

### Vorteile
- ✅ Korrekte Meta-Tags für Social Media Sharing
- ✅ Bessere Titel und Beschreibungen in Suchergebnissen
- ✅ Einfache Implementierung

### Nachteile
- ❌ Kein Content im HTML (keine H1, H2, p-Tags etc.)
- ❌ Google kann den Seiteninhalt nicht indexieren
- ❌ Suboptimale SEO-Performance

## Empfohlene Lösung: Vollständiges SSG/SSR

### Option 1: Vike (ehemals vite-plugin-ssr)
**Empfohlen für komplexe Anforderungen**

```bash
npm install vike react
```

**Vorteile:**
- Vollständiges HTML-Rendering
- Flexibel (SSR, SSG, SPA möglich)
- Gute Vite-Integration

### Option 2: Puppeteer-basiertes Prerendering
**Für bestehende SPAs**

```javascript
// scripts/full-prerender.js
import puppeteer from 'puppeteer';

async function prerender(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  const html = await page.content();
  await browser.close();
  return html;
}
```

### Option 3: Migration zu Next.js
**Beste Langzeitlösung**

```bash
npx create-next-app@latest marsstein-next
```

**Vorteile:**
- Eingebautes SSG/SSR
- Optimierte Performance
- Große Community

### Option 4: react-snap
**Schnelle Lösung für bestehende Apps**

```bash
npm install --save-dev react-snap
```

```json
// package.json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": [
      "/",
      "/wissen/rechtsprechung/amazon-luxemburg-2021",
      "/compliance/dsgvo"
    ]
  }
}
```

## Implementierungsschritte für vollständiges Prerendering

### 1. Installation Dependencies
```bash
npm install --save-dev puppeteer
```

### 2. Erweitertes Prerender-Script
```javascript
// scripts/full-prerender.js
import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

async function prerenderRoute(route) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Navigiere zur Route
  await page.goto(`http://localhost:4173${route.path}`, {
    waitUntil: 'networkidle0'
  });
  
  // Warte auf React-Rendering
  await page.waitForSelector('#root > *');
  
  // Hole das gerenderte HTML
  const html = await page.content();
  
  await browser.close();
  
  // Speichere HTML
  const outputPath = join('dist', route.path, 'index.html');
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html);
}
```

### 3. Build-Pipeline
```json
// package.json
{
  "scripts": {
    "build": "vite build",
    "build:ssg": "vite build && vite preview --port 4173 & sleep 5 && node scripts/full-prerender.js && kill $!"
  }
}
```

## SEO Best Practices für React

### 1. Strukturierte Daten
```jsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Amazon Luxemburg DSGVO-Bußgeld 2021",
  "datePublished": "2021-07-30",
  "author": {
    "@type": "Organization",
    "name": "Marsstein"
  }
})}
</script>
```

### 2. Semantisches HTML
```jsx
<article>
  <h1>Amazon Luxemburg DSGVO-Bußgeld 2021</h1>
  <section>
    <h2>Zusammenfassung</h2>
    <p>Die luxemburgische Datenschutzbehörde...</p>
  </section>
</article>
```

### 3. Core Web Vitals
- Lazy Loading für Bilder
- Code Splitting
- Optimierte Fonts

## Vercel-spezifische Optimierungen

### Edge Functions für dynamische Meta-Tags
```javascript
// api/og/[...slug].js
export const config = { runtime: 'edge' };

export default async function handler(request) {
  // Dynamische OG-Image Generation
}
```

### Incremental Static Regeneration (ISR)
```javascript
// Mit Next.js auf Vercel
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 3600 // Regeneriere alle Stunde
  };
}
```

## Monitoring und Testing

### Tools
1. **Google Search Console** - Indexierungsstatus
2. **Lighthouse** - Performance & SEO Score
3. **Screaming Frog** - Crawling-Test
4. **Rich Results Test** - Strukturierte Daten

### Checkliste
- [ ] Alle wichtigen Seiten haben unique Titles
- [ ] Meta Descriptions sind optimiert (150-160 Zeichen)
- [ ] H1-Tags sind vorhanden und unique
- [ ] Bilder haben Alt-Texte
- [ ] Strukturierte Daten sind implementiert
- [ ] Sitemap.xml ist aktuell
- [ ] Robots.txt ist konfiguriert

## Nächste Schritte

1. **Kurzfristig**: Implementiere Puppeteer-basiertes Prerendering
2. **Mittelfristig**: Evaluiere Migration zu Vike oder Next.js
3. **Langfristig**: Vollständige SSG/SSR-Implementierung

## Fazit

Die aktuelle Meta-Tag-Lösung ist ein guter erster Schritt, aber für optimale SEO-Ergebnisse brauchen wir vollständiges HTML-Rendering mit allen Content-Elementen (H1, H2, p-Tags, etc.). Die empfohlene Lösung ist entweder Puppeteer-basiertes Prerendering oder eine Migration zu einem Framework mit eingebautem SSG/SSR-Support.