#!/bin/bash

# Schneller SEO-Server ohne lange Builds
echo "🚀 Schneller SEO-Server Start..."
echo "================================"

# Zum Projekt-Verzeichnis
cd "$(dirname "$0")"

# Prüfe ob dist Ordner existiert
if [ ! -d "dist" ] || [ -z "$(ls -A dist)" ]; then
    echo "⚠️  Kein Build gefunden. Erstelle einen..."
    echo ""
    
    # Timeout für Build setzen
    timeout 120 npm run build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build fehlgeschlagen oder Timeout!"
        echo "Versuche: npm run build manuell"
        exit 1
    fi
fi

echo "✅ Build vorhanden"
echo ""

# Prüfe ob Prerendering nötig ist
if [ ! -f "dist/index.html" ]; then
    echo "📝 Führe Prerendering aus..."
    timeout 180 npm run prerender:full
else
    echo "✅ Prerendering bereits vorhanden"
fi

echo ""
echo "🌐 Starte Server..."
echo "================================"
echo "📍 URL: http://localhost:4173"
echo ""
echo "💡 Für bessere HTML-Formatierung:"
echo "   1. Stoppe Server (Ctrl+C)"
echo "   2. Führe aus: NODE_ENV=development npm run prerender:full"
echo "   3. Starte Server neu"
echo ""
echo "🛑 Beenden: Ctrl+C"
echo "================================"

npm run preview

echo ""
echo "Server beendet."
read -n 1