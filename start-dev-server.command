#\!/bin/bash

# Marsstein Development Server Starter (ohne SEO)
# Doppelklick zum Starten\!

echo "🚀 Marsstein Development Server wird gestartet..."
echo "=================================="
echo "⚠️  ACHTUNG: Dies ist der DEV-Server OHNE SEO-Optimierung\!"
echo "    Für SEO nutze: start-seo-server.command"
echo "=================================="

# Zum Projekt-Verzeichnis wechseln
cd "$(dirname "$0")"

echo "📁 Arbeitsverzeichnis: $(pwd)"
echo ""

# Prüfe ob node_modules existiert
if [ \! -d "node_modules" ]; then
    echo "📦 Installiere Dependencies..."
    npm install
    echo ""
fi

# Cache löschen für sauberen Start
echo "🧹 Lösche Vite Cache..."
rm -rf node_modules/.vite
echo ""

echo "🔧 Starte Development Server..."
echo "=================================="
echo ""
echo "📍 Server läuft unter: http://localhost:5173"
echo ""
echo "⚡ Hot Module Replacement ist aktiviert"
echo ""
echo "🛑 Zum Beenden: Drücke Ctrl+C"
echo ""
echo "=================================="

# Dev Server starten
npm run dev

# Terminal offen halten falls Server stoppt
echo ""
echo "Server wurde beendet. Drücke eine Taste zum Schließen..."
read -n 1
EOF < /dev/null