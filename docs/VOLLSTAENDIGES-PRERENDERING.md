# Vollständiges Prerendering für Marsstein

## Übersicht

Diese Lösung implementiert ein vollständiges Prerendering-System für alle 180 Routen der Marsstein-Website mit automatischer Routenerkennung, paralleler Verarbeitung und umfassender Fehlerbehandlung.

## Architektur

### 1. Komponenten

```
scripts/
├── prerender-config.js      # Zentrale Konfiguration
├── prerender-all.js         # Hauptskript für vollständiges Prerendering
├── extract-routes.js        # Route-Extraktion aus routes.tsx
└── full-prerender.js        # Bestehendes Script für einzelne Routen
```

### 2. Features

- **Automatische Routenerkennung**: Extrahiert alle Routen aus `routes.tsx`
- **Parallele Verarbeitung**: Bis zu 5 gleichzeitige Puppeteer-Instanzen
- **Intelligente Filterung**: Überspringt Dashboard und interaktive Tools
- **Fehlerbehandlung**: Automatische Wiederholungen bei Fehlern
- **SEO-Optimierung**: Generiert Sitemap.xml und robots.txt
- **Performance**: Blockiert unwichtige Ressourcen beim Rendering
- **Monitoring**: Detaillierte Logs und Statistiken

## Installation & Verwendung

### 1. Einmalige Einrichtung

```bash
# Dependencies sind bereits installiert (Puppeteer)
# Keine weiteren Pakete nötig
```

### 2. Build-Commands

```bash
# Normale Build (ohne Prerendering)
npm run build

# Build mit vollständigem Prerendering
npm run build:full-ssg

# Nur Prerendering ausführen (nach Build)
npm run prerender:all
```

### 3. Package.json Ergänzungen

```json
{
  "scripts": {
    "build:full-ssg": "vite build && node scripts/prerender-all.js",
    "prerender:all": "node scripts/prerender-all.js",
    "extract-routes": "node scripts/extract-routes.js"
  }
}
```

## Konfiguration

### 1. Route-Filterung (`prerender-config.js`)

```javascript
excludePatterns: [
  '/dashboard',           // User-spezifisch
  '/dashboard-page',      
  '/thank-you',          // Nach Form-Submit
  '/test*',              // Test-Routen
  '/tools/dsgvo-email-generator',     // Interaktive Tools
  '/tools/compliance-scorecard',
  '/tools/compliance-ai-assistant',
  '/assessment-center/*'              // Interaktive Assessments
]
```

### 2. Performance-Einstellungen

```javascript
parallel: 5,        // Anzahl paralleler Browser
timeout: 30000,     // 30 Sekunden pro Seite
retries: 2,         // 2 Wiederholungen bei Fehler
```

### 3. SEO-Konfiguration

```javascript
routeCategories: {
  critical: {
    priority: 1.0,
    changefreq: 'weekly',
    routes: ['/', '/pricing', '/contact']
  },
  important: {
    priority: 0.8,
    changefreq: 'weekly',
    routes: ['/wissen/rechtsprechung/*', '/compliance/*']
  }
}
```

## Workflow

### 1. Entwicklung
```bash
npm run dev                    # Normale Entwicklung
```

### 2. Production Build
```bash
npm run build:full-ssg         # Build + Prerendering
```

### 3. Deployment
```bash
# Vercel erkennt dist/ automatisch
# Alle pregerenderten Seiten werden als statische HTML serviert
```

## Ausgabe

### 1. Verzeichnisstruktur
```
dist/
├── index.html
├── assets/
│   ├── index-xxx.js
│   └── index-xxx.css
├── wissen/
│   └── rechtsprechung/
│       └── amazon-luxemburg-2021/
│           └── index.html        # Vollständiges HTML mit Content
├── compliance/
│   └── dsgvo/
│       └── index.html
├── sitemap.xml                   # Automatisch generiert
└── robots.txt                    # Automatisch generiert
```

### 2. HTML-Optimierungen
- Entfernt Development-Scripts
- Entfernt Animation-blockierende Styles
- Fügt Canonical URLs hinzu
- Behält alle Meta-Tags von React Helmet

## Monitoring & Debugging

### 1. Log-Datei
```
prerender.log
[INFO] 2024-01-15T10:00:00.000Z - Starting full site prerendering...
[SUCCESS] 2024-01-15T10:00:05.000Z - Prerendered / (250ms)
[ERROR] 2024-01-15T10:00:10.000Z - Failed to prerender /broken-route: Timeout
```

### 2. Statistiken
```
📊 Prerendering Complete:
   Total routes: 147
   ✅ Successful: 145
   ❌ Failed: 2
   ⏭️  Skipped: 33
   ⏱️  Duration: 125.3s
```

### 3. Fehleranalyse
```bash
# Zeige nur fehlerhafte Routen
grep ERROR prerender.log

# Zeige Render-Zeiten
grep "Prerendered" prerender.log | sort -k5 -n
```

## Performance-Optimierung

### 1. Build-Zeit
- **Sequential**: ~10 Minuten für 147 Routen
- **Parallel (5)**: ~2-3 Minuten
- **Parallel (10)**: ~1-2 Minuten (mehr RAM benötigt)

### 2. Ressourcen-Verbrauch
```javascript
// Blockiere unwichtige Ressourcen
blockedResources: ['font', 'media', 'image']

// Reduziere Viewport für schnelleres Rendering
viewport: { width: 1280, height: 720 }
```

### 3. Caching
```bash
# Nutze Build-Cache
npm run build -- --no-clean
npm run prerender:all
```

## Wartung

### 1. Neue Routen
- Werden automatisch erkannt aus `routes.tsx`
- Keine manuelle Konfiguration nötig

### 2. Ausschlüsse
- Füge neue Patterns zu `excludePatterns` hinzu
- Beispiel: `/admin/*` für Admin-Bereich

### 3. Monitoring
```bash
# Prüfe fehlerhafte Routen nach jedem Deploy
tail -f prerender.log | grep ERROR

# Validiere generierte HTML
npx html-validator dist/**/index.html
```

## Best Practices

### 1. CI/CD Integration
```yaml
# .github/workflows/deploy.yml
- name: Build with SSG
  run: npm run build:full-ssg
  
- name: Check prerender errors
  run: |
    if grep -q ERROR prerender.log; then
      echo "Prerender errors found!"
      cat prerender.log | grep ERROR
      exit 1
    fi
```

### 2. Entwicklung
- Nutze `npm run build` für schnelle Builds ohne Prerendering
- Teste einzelne Routen mit `scripts/full-prerender.js`
- Validiere Meta-Tags mit Browser DevTools

### 3. SEO-Validierung
```bash
# Teste mit Google's Tool
curl -A "Googlebot" https://marsstein.com/wissen/rechtsprechung/amazon-luxemburg-2021

# Prüfe Structured Data
npx structured-data-testing-tool https://marsstein.com
```

## Troubleshooting

### Problem: Timeout bei bestimmten Routen
```javascript
// Erhöhe Timeout für langsame Seiten
timeout: 60000  // 60 Sekunden
```

### Problem: Zu viel RAM-Verbrauch
```javascript
// Reduziere parallele Instanzen
parallel: 3
```

### Problem: Fehlende Meta-Tags
- Prüfe ob React Helmet korrekt lädt
- Füge längere Wartezeit hinzu:
```javascript
await page.waitForSelector('[data-rh="true"]', { timeout: 10000 });
```

## Zusammenfassung

Diese Lösung bietet:
- ✅ Vollautomatisches Prerendering aller 147 Content-Seiten
- ✅ Optimale SEO mit vollständigem HTML-Content
- ✅ Automatische Sitemap und robots.txt
- ✅ Parallele Verarbeitung für schnelle Builds
- ✅ Umfassende Fehlerbehandlung und Monitoring
- ✅ Keine Änderungen am React-Code nötig