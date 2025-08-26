# SEO Deployment Guide

## Problem
Im Development-Modus (`npm run dev`) wird nur die Basis-HTML ohne Server-Side-Rendering angezeigt. Für SEO brauchen wir die vorgerenderte Version.

## Lösung: Prerendering aktivieren

### 1. Build mit Prerendering erstellen
```bash
# Stoppe den Dev-Server (Ctrl+C)

# Baue die Production-Version
npm run build

# Führe das Prerendering aus
npm run prerender

# Oder alles in einem Schritt:
npm run build:full
```

### 2. Preview-Server starten
```bash
npm run preview
```
Öffne dann http://localhost:4173 (nicht 5173!)

### 3. Seitenquelltext prüfen
Jetzt solltest du sehen:
- `<html lang="de">` ✅
- Korrekte Meta-Tags von SEOHead ✅
- Vollständig gerenderter HTML-Content ✅
- Strukturierte Daten ✅

## Wichtige Scripts in package.json

```json
{
  "scripts": {
    "dev": "vite",                    // Development ohne SSR
    "build": "vite build",            // Production Build
    "preview": "vite preview",        // Preview der gebauten Version
    "prerender": "node scripts/full-prerender.js",  // Prerendering
    "build:full": "npm run build && npm run prerender"  // Alles zusammen
  }
}
```

## Deployment für Production

### Vercel/Netlify
1. Build Command: `npm run build:full`
2. Output Directory: `dist`

### Eigener Server
1. Führe `npm run build:full` aus
2. Serviere den `dist` Ordner mit einem statischen Webserver
3. Stelle sicher, dass alle Routen auf index.html zeigen (SPA-Fallback)

## Überprüfung

### Development (schlecht für SEO):
```html
<div id="root"></div>  <!-- Leerer Content -->
```

### Production mit Prerendering (gut für SEO):
```html
<div id="root">
  <div class="min-h-screen bg-slate-900">
    <header>...</header>
    <main>
      <h1>Compliance & Datenschutz...</h1>
      <!-- Vollständiger Content -->
    </main>
    <footer>...</footer>
  </div>
</div>
```

## Checkliste vor Go-Live

- [ ] `npm run build:full` ausführen
- [ ] Preview mit `npm run preview` testen
- [ ] Seitenquelltext prüfen (sollte vollständigen Content zeigen)
- [ ] Meta-Tags verifizieren
- [ ] Strukturierte Daten testen
- [ ] Mobile Ansicht prüfen
- [ ] Performance testen (Lighthouse)