# Vercel SEO Solution - Vollständiges HTML-Rendering mit Puppeteer

## Ziel
Marsstein.ai auf Vercel mit vollständigem SEO-optimiertem HTML deployen, genau wie es lokal mit `start-seo-server.command` funktioniert.

## Problem
- **Lokal**: `start-seo-server.command` verwendet Puppeteer für vollständiges HTML-Rendering mit allen SEO-Informationen
- **Vercel**: Zeigt nur minimalen HTML ohne vollständigen Inhalt (nur `<div id="root"></div>`)
- **Ursache**: Vercel Build verwendet statische Templates statt Browser-Rendering

## Lösung: Puppeteer auf Vercel

### Technische Details
1. **@sparticuz/chromium**: Vercel-kompatible Chrome-Version
2. **Puppeteer**: Browser-basiertes Prerendering
3. **Build-Zeit**: Erhöht auf 45 Minuten für vollständiges Rendering

### Relevante Dateien

#### Bestehende Dateien
- `start-seo-server.command` - Lokales SEO-Server-Script (Referenz)
- `scripts/prerender-seo-final.js` - Funktionierendes Puppeteer-Script
- `scripts/build-vercel-seo.js` - Aktuelles Vercel Build (nur Templates)
- `vercel.json` - Vercel Konfiguration
- `package.json` - NPM Scripts

#### Neue Dateien (zu erstellen)
- `scripts/build-vercel-puppeteer.js` - Neues Puppeteer-basiertes Build für Vercel
- `VERCEL_SEO_SOLUTION.md` - Diese Dokumentation

### SEO-Routen
Das System generiert vollständige HTML für folgende Hauptrouten:
- `/` - Homepage
- `/dsgvo` - DSGVO Compliance
- `/eu-ai-act` - EU AI Act
- `/nis2-compliance` - NIS2 Compliance
- `/iso-27001-zertifizierung` - ISO 27001
- `/soc2-zertifizierung` - SOC 2
- `/tisax-zertifizierung` - TISAX
- `/branchen` - Branchenlösungen
- `/branchen/healthcare` - Healthcare
- `/branchen/fintech` - FinTech
- `/branchen/saas` - SaaS
- `/ueber-uns` - Über uns
- `/contact` - Kontakt
- `/pricing` - Preise
- `/tools` - Compliance Tools

### Vorgehensweise

#### 1. Dependencies installieren
```bash
npm install @sparticuz/chromium puppeteer-core --save-dev
```

#### 2. Build-Script erstellen
Neues Script `scripts/build-vercel-puppeteer.js` basierend auf `prerender-seo-final.js`

#### 3. Vercel.json anpassen
```json
{
  "buildCommand": "npm run build:vercel-puppeteer",
  "functions": {
    "api/*.js": {
      "maxDuration": 60
    }
  },
  "build": {
    "env": {
      "NODE_OPTIONS": "--max-old-space-size=8192"
    }
  }
}
```

#### 4. Package.json erweitern
```json
{
  "scripts": {
    "build:vercel-puppeteer": "node scripts/build-vercel-puppeteer.js"
  }
}
```

### Bekannte Probleme & Lösungen

#### Problem 1: Chrome nicht gefunden
**Fehler**: "Could not find Chrome"
**Lösung**: Verwendung von @sparticuz/chromium statt regulärem Puppeteer

#### Problem 2: Asset-Pfade falsch
**Fehler**: 404 für CSS/JS Dateien
**Lösung**: Dynamische Extraktion der Vite-generierten Asset-Pfade

#### Problem 3: Build-Timeout
**Fehler**: Build dauert zu lange
**Lösung**: Paralleles Rendering und optimierte Route-Verarbeitung

### Testing

#### Lokal testen
```bash
# Wichtig: Chrome oder Chromium muss installiert sein
# macOS: Chrome ist normalerweise unter /Applications/Google Chrome.app
# Linux: sudo apt-get install chromium-browser

# Build-Script lokal testen
npm run build:vercel-puppeteer

# Preview Server starten
npm run preview
```

#### Vercel Deployment testen
```bash
vercel --prod
```

#### Verifizierung
1. Öffne https://marsstein.ai/dsgvo
2. Rechtsklick → "Seitenquelltext anzeigen"
3. Prüfe ob vollständiger HTML-Inhalt vorhanden ist
4. Teste mit: `curl https://marsstein.ai/dsgvo`

### Wartung

#### Bei neuen Routen
1. Route zu `seoRoutes` in `build-vercel-puppeteer.js` hinzufügen
2. SEO-Metadaten definieren
3. Build neu ausführen

#### Performance-Optimierung
- Batch-Processing von Routen
- Cache für wiederverwendbare Assets
- Selective Prerendering für kritische Seiten

### Rollback-Plan
Falls Probleme auftreten:
1. `vercel.json` buildCommand zurück auf `"npm run build:vercel-seo"`
2. Deployment neu starten
3. Analyse der Fehler in Vercel Logs

### Implementierungsstatus

✅ **Abgeschlossen:**
- Dokumentation erstellt
- @sparticuz/chromium installiert
- Build-Script `build-vercel-puppeteer.js` erstellt
- Vercel.json konfiguriert
- Package.json aktualisiert
- Script nutzt System-Chrome lokal und @sparticuz/chromium auf Vercel

⚠️ **Zu beachten:**
- Lokal muss Chrome/Chromium installiert sein
- Vercel Build-Zeit kann länger dauern (15-30 Minuten)
- Memory-Limit auf 8GB erhöht

### Kontakt & Support
Bei Fragen oder Problemen:
- Vercel Logs prüfen
- Chrome/Puppeteer Kompatibilität verifizieren
- Build-Timeouts überprüfen