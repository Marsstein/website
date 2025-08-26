#!/bin/bash

# Nur HTML formatieren ohne neuen Build
echo "📝 HTML-Formatierung für bestehenden Build"
echo "=========================================="

cd "$(dirname "$0")"

# Prüfe ob Build existiert
if [ ! -d "dist" ]; then
    echo "❌ Kein Build gefunden!"
    echo "Führe zuerst aus: npm run build"
    exit 1
fi

echo "✅ Build gefunden"
echo ""
echo "🎨 Formatiere HTML mit verbesserter Struktur..."
echo "   NODE_ENV=development für maximale Lesbarkeit"
echo ""

# Setze Environment für beste Formatierung
export NODE_ENV=development

# Führe nur Prerendering aus (ohne Build)
echo "📄 Starte Prerendering mit Formatierung..."
npm run prerender:full

echo ""
echo "✅ HTML-Formatierung abgeschlossen!"
echo ""
echo "🌐 Starte Server..."
echo "=========================================="
echo "📍 URL: http://localhost:4173"
echo "✨ HTML ist jetzt strukturiert!"
echo ""
echo "💡 Öffne Seitenquelltext mit:"
echo "   Rechtsklick → Seitenquelltext anzeigen"
echo ""
echo "🛑 Beenden: Ctrl+C"
echo "=========================================="

npm run preview

echo ""
echo "Fertig. Drücke eine Taste..."
read -n 1