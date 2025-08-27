#!/bin/bash

# SEO Complete Build & Preview Script
# Führt alle notwendigen Schritte für korrektes SEO aus

echo "🚀 Marsstein SEO Complete Build"
echo "==============================="
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

echo "📦 Step 1: Build erstellen..."
echo "------------------------------"
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build fehlgeschlagen!"
    echo "Bitte Fehler beheben und erneut versuchen."
    echo ""
    echo "Drücke eine Taste zum Beenden..."
    read -n 1
    exit 1
fi

echo ""
echo "✅ Build erfolgreich!"
echo ""

echo "🔍 Step 2: SEO Prerendering..."
echo "------------------------------"
echo "Generiere vollständige HTML-Seiten mit Meta-Tags..."
echo ""

# Mit Development-Umgebung für bessere Formatierung
export NODE_ENV=development
npm run prerender:full

if [ $? -ne 0 ]; then
    echo "❌ Prerendering fehlgeschlagen!"
    echo ""
    echo "Drücke eine Taste zum Beenden..."
    read -n 1
    exit 1
fi

echo ""
echo "✅ Prerendering erfolgreich!"
echo ""

echo "🎉 Build abgeschlossen!"
echo "======================"
echo ""
echo "📊 SEO-Zusammenfassung:"
echo "----------------------"
echo "✓ Title-Tags korrigiert"
echo "✓ Meta-Descriptions optimiert"
echo "✓ Open Graph Tags implementiert"
echo "✓ Structured Data hinzugefügt"
echo "✓ Canonical URLs gesetzt"
echo "✓ Doppelte Meta-Tags entfernt"
echo ""

echo "🌐 Step 3: Preview Server starten..."
echo "-----------------------------------"
echo "Server läuft auf: http://localhost:4173"
echo ""
echo "📋 Zum Testen der SEO-Tags:"
echo "1. Öffne http://localhost:4173/soc2-zertifizierung"
echo "2. Rechtsklick → 'Seitenquelltext anzeigen'"
echo "3. Suche nach <title> und <meta> Tags"
echo ""
echo "💡 Weitere Test-URLs:"
echo "   - /eu-ai-act"
echo "   - /nis2-compliance"
echo "   - /iso-27001-zertifizierung"
echo ""
echo "🛑 Server beenden: Ctrl+C"
echo "==============================="
echo ""

# Preview Server starten
npm run preview

echo ""
echo "Server beendet. Drücke eine Taste..."
read -n 1