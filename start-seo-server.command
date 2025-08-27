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

# Kill any existing process on port 4173
echo "🔄 Beende eventuell laufende Server..."
lsof -ti:4173 | xargs kill -9 2>/dev/null || true
echo ""

# Build mit SEO Prerendering erstellen
echo "🔨 Erstelle Production Build mit SEO-Prerendering..."
echo "   Dies rendert nur Seiten mit bestätigter SEO-Implementierung (64 Seiten)"
echo "   Bitte warten Sie einige Minuten..."
echo ""

# Zuerst normalen Build erstellen
npm run build

# Dann nur SEO-Seiten prerendern
echo ""
echo "🎯 Starte SEO-Prerendering für verifizierte Seiten..."
npm run prerender:seo

echo ""
echo "✅ Build und Prerendering abgeschlossen!"
echo ""
echo "📊 Prerenderte Seiten:"
echo "   - Homepage und Compliance-Seiten"
echo "   - Wissensdatenbank und Leitfäden"
echo "   - Rechtsprechung (Schrems II, Amazon, etc.)"
echo "   - Branchenlösungen"
echo "   - Tools und Assessment Center"
echo ""
echo "🌐 Starte SEO-optimierten Server..."
echo "=================================="
echo ""
echo "📍 Server läuft unter: http://localhost:4173"
echo ""
echo "💡 Tipp: Testen Sie verschiedene URLs:"
echo "   - http://localhost:4173/wissen/rechtsprechung/amazon-luxemburg-2021"
echo "   - http://localhost:4173/wissen/rechtsprechung/schrems-ii"
echo "   - http://localhost:4173/compliance/dsgvo"
echo "   - http://localhost:4173/iso-27001-zertifizierung"
echo ""
echo "🔍 Überprüfen Sie den Seitenquelltext (Rechtsklick → Seitenquelltext anzeigen)"
echo "   Sie sollten die spezifischen SEO-Meta-Tags für jede Seite sehen!"
echo ""
echo "🛑 Zum Beenden: Drücke Ctrl+C"
echo ""
echo "=================================="

# SEO Preview Server starten
npm run preview:seo

# Terminal offen halten falls Server stoppt
echo ""
echo "Server wurde beendet. Drücke eine Taste zum Schließen..."
read -n 1