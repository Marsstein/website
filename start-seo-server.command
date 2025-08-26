#!/bin/bash

# Marsstein SEO-optimierter Server Starter
# Doppelklick zum Starten!

echo "🚀 Marsstein SEO Server wird gestartet..."
echo "=================================="

# Zum Projekt-Verzeichnis wechseln
cd "$(dirname "$0")"

echo "📁 Arbeitsverzeichnis: $(pwd)"
echo ""

# Prüfe ob node_modules existiert
if [ ! -d "node_modules" ]; then
    echo "📦 Installiere Dependencies..."
    npm install
    echo ""
fi

# Cache löschen für sauberen Start
echo "🧹 Lösche Vite Cache..."
rm -rf node_modules/.vite
echo ""

# Build erstellen
echo "🔨 Erstelle Production Build..."
npm run build

# Warte kurz
sleep 2

# Prerendering ausführen
echo "🎨 Führe Prerendering aus für SEO..."
echo "   Dies kann einige Minuten dauern..."
npm run prerender:full

echo ""
echo "✅ Build abgeschlossen!"
echo ""
echo "🌐 Starte SEO-optimierten Server..."
echo "=================================="
echo ""
echo "📍 Server läuft unter: http://localhost:4173"
echo ""
echo "💡 Tipp: Öffne die Entwicklertools und schaue dir den Seitenquelltext an!"
echo "         Du solltest jetzt den vollständigen HTML-Content sehen."
echo ""
echo "🛑 Zum Beenden: Drücke Ctrl+C"
echo ""
echo "=================================="

# Preview Server starten
npm run preview

# Terminal offen halten falls Server stoppt
echo ""
echo "Server wurde beendet. Drücke eine Taste zum Schließen..."
read -n 1