#!/bin/bash

# Marsstein SEO Server mit verbesserter HTML-Formatierung
# Doppelklick zum Starten!

echo "🚀 Marsstein SEO Server mit HTML-Formatierung..."
echo "=============================================="

# Zum Projekt-Verzeichnis wechseln
cd "$(dirname "$0")"

# Setze NODE_ENV für bessere Formatierung
export NODE_ENV=development

echo "📁 Arbeitsverzeichnis: $(pwd)"
echo "🎨 HTML-Formatierung: AKTIVIERT"
echo ""

# Cache löschen
echo "🧹 Lösche Caches..."
rm -rf node_modules/.vite
rm -rf dist/*
echo ""

# Build erstellen
echo "🔨 Erstelle formatierten Build..."
npm run build

# Prerendering mit Formatierung
echo "📝 Prerendering mit HTML-Formatierung..."
echo "   Dies dauert etwas länger für bessere Lesbarkeit..."
npm run prerender:full

echo ""
echo "✅ Formatierter Build fertig!"
echo ""
echo "🌐 Starte Server..."
echo "=============================================="
echo ""
echo "📍 Server: http://localhost:4173"
echo "✨ HTML ist jetzt strukturiert und lesbar!"
echo ""
echo "💡 Tipps:"
echo "   - Rechtsklick → Seitenquelltext anzeigen"
echo "   - Der HTML-Code ist jetzt eingerückt und strukturiert"
echo "   - Debug-Kommentare zeigen Build-Zeitpunkt"
echo ""
echo "🛑 Beenden: Ctrl+C"
echo ""
echo "=============================================="

# Preview Server starten
npm run preview

echo ""
echo "Server beendet. Drücke eine Taste..."
read -n 1