# Vercel SEO Setup für Marsstein

## Übersicht

Dieses Dokument erklärt, wie das SEO-Prerendering für Vercel eingerichtet wurde. Das Setup stellt sicher, dass alle SEO-kritischen Seiten während des Vercel Build-Prozesses vorgerendert werden.

## Was wurde geändert?

### 1. **vercel-seo-build.sh**
Ein neues Build-Script, das:
- Puppeteer für das Prerendering installiert
- Den Production Build erstellt
- Das SEO-Prerendering für 64 verifizierte Seiten durchführt
- Build-Statistiken anzeigt

### 2. **vercel.json**
Angepasst für den SEO-Build-Prozess:
```json
{
  "installCommand": "npm install --legacy-peer-deps && npm install puppeteer",
  "buildCommand": "./vercel-seo-build.sh",
  "outputDirectory": "dist",
  "framework": null
}
```

## Wie funktioniert es?

1. **Vercel startet den Build-Prozess**
   - Installiert Dependencies inkl. Puppeteer
   - Führt `vercel-seo-build.sh` aus

2. **Build-Script läuft**
   - Erstellt optimierten Production Build mit Vite
   - Startet lokalen Preview-Server
   - Verwendet Puppeteer für Server-Side Rendering
   - Wartet auf React Hydration und Meta-Tag Updates
   - Optimiert HTML für beste SEO-Performance

3. **Ergebnis**
   - Vollständig vorgerenderte HTML-Dateien
   - Alle Meta-Tags, Open Graph und strukturierte Daten enthalten
   - Optimale Core Web Vitals

## Vorteile gegenüber dem alten Setup

- ✅ **Kein Git-Commit von dist/** - Build läuft direkt bei Vercel
- ✅ **Automatisch bei jedem Deploy** - Keine manuellen Schritte
- ✅ **Sauberer Git-Verlauf** - Keine generierten Dateien im Repository
- ✅ **Gleiche SEO-Qualität** - Identisches Prerendering wie lokal

## Deployment

Das Setup ist jetzt vollständig automatisiert:

1. Push zu main/jonasbranch
2. Vercel startet automatisch den Build
3. SEO-Prerendering läuft während des Builds
4. Deploy der optimierten Seite

## Lokales Testen

Zum lokalen Testen des SEO-Builds:
```bash
# Option 1: Verwende das Command-Script
./start-seo-server.command

# Option 2: Manuell
npm run build:seo
npm run preview:seo
```

## Troubleshooting

### Puppeteer-Fehler bei Vercel
Falls Puppeteer nicht startet, prüfen Sie:
- Die Vercel Build-Logs
- Ob alle Chrome-Dependencies installiert werden

### Timeout beim Prerendering
Das Prerendering von 64 Seiten dauert einige Minuten. Vercel hat ein Build-Timeout von 45 Minuten, was ausreichend ist.

### Fehlende SEO-Tags
Prüfen Sie mit:
```bash
curl -s https://ihre-domain.vercel.app/dsgvo | grep -i "<meta"
```

## Nächste Schritte

Optional können Sie:
- ISR (Incremental Static Regeneration) für dynamische Seiten einrichten
- Vercel Edge Functions für On-Demand Rendering nutzen
- Build-Cache für schnellere Deployments optimieren