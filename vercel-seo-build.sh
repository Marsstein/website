#!/bin/bash

# Vercel SEO Build Script
# Dieses Script wird von Vercel während des Build-Prozesses ausgeführt

echo "🚀 Starte Vercel SEO Build..."
echo "=================================="

# Puppeteer Dependencies für Vercel
echo "📦 Installiere Puppeteer und Chrome..."
npm install puppeteer

# Chrome für Puppeteer herunterladen
echo "🌐 Lade Chrome Browser herunter..."
npx puppeteer browsers install chrome

# Build erstellen
echo "🔨 Erstelle Production Build..."
npm run build

# SEO Prerendering
echo "🎯 Starte SEO-Prerendering..."
echo "   Dies rendert 64 SEO-optimierte Seiten"
echo "   Bitte warten..."

# Führe Prerendering aus
node scripts/full-prerender.js

echo ""
echo "✅ Build und Prerendering abgeschlossen!"
echo "=================================="

# Zeige Statistiken
echo "📊 Build-Statistiken:"
echo "   - HTML-Dateien: $(find dist -name "*.html" | wc -l)"
echo "   - Gesamtgröße: $(du -sh dist | cut -f1)"
echo ""

# Wichtig für Vercel: Exit mit Status 0 für Erfolg
exit 0