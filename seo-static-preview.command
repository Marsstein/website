#!/bin/bash

# SEO Static Preview
# Zeigt die reine HTML-Version ohne JavaScript für SEO-Testing

echo "🔍 Marsstein SEO Static Preview"
echo "==============================="
echo ""
echo "Diese Version zeigt das reine HTML ohne JavaScript."
echo "Perfekt für SEO-Testing und keine JS-Fehler!"
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

# Prüfe ob dist existiert
if [ ! -d "dist" ]; then
    echo "❌ Kein Build gefunden!"
    echo "Führe zuerst aus: npm run build"
    echo ""
    echo "Drücke eine Taste..."
    read -n 1
    exit 1
fi

echo "📦 Step 1: Erstelle statisches SEO HTML..."
echo "-----------------------------------------"

# Führe das SEO Static Build Script aus
node scripts/seo-static-build.js

if [ $? -ne 0 ]; then
    echo "❌ SEO Build fehlgeschlagen!"
    echo ""
    echo "Drücke eine Taste..."
    read -n 1
    exit 1
fi

echo ""
echo "✅ Statisches HTML erstellt!"
echo ""

# Prüfe ob serve installiert ist
if ! command -v serve &> /dev/null; then
    echo "📦 Installiere 'serve' für Static File Server..."
    npm install -g serve
fi

echo "🌐 Step 2: Starte Static File Server..."
echo "--------------------------------------"
echo ""
echo "Server läuft auf: http://localhost:5000"
echo ""
echo "📋 Diese Version bietet:"
echo "✓ Vollständiges HTML mit allen SEO-Tags"
echo "✓ Keine JavaScript-Ausführung"
echo "✓ Kein 'Root element not found' Fehler"
echo "✓ Exakt das, was Suchmaschinen sehen"
echo ""
echo "🔍 Teste diese URLs:"
echo "- http://localhost:5000/"
echo "- http://localhost:5000/soc2-zertifizierung/"
echo "- http://localhost:5000/eu-ai-act/"
echo "- http://localhost:5000/nis2-compliance/"
echo ""
echo "💡 Im Browser:"
echo "- Rechtsklick → 'Seitenquelltext anzeigen'"
echo "- Prüfe <title> Tags (sollten korrekt formatiert sein)"
echo "- Prüfe Meta-Descriptions"
echo "- Prüfe Open Graph Tags"
echo ""
echo "🛑 Server beenden: Ctrl+C"
echo "==============================="
echo ""

# Starte Static Server
serve dist-seo -p 5000

echo ""
echo "Server beendet."
echo ""
echo "💡 Hinweise:"
echo "- Für normale Entwicklung: npm run dev"
echo "- Für Preview mit JS: npm run preview"
echo "- Für SEO ohne JS: Dieses Script"
echo ""
echo "Drücke eine Taste zum Beenden..."
read -n 1