#!/bin/bash

# SEO Complete Fix Script
# Behebt alle SEO-Probleme und startet Server

echo "🔧 Marsstein SEO Complete Fix"
echo "=============================="
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

echo "🧹 Step 1: Bereinigung..."
echo "------------------------"
# Lösche alte Builds für sauberen Neustart
rm -rf dist
echo "✅ Alte Builds entfernt"
echo ""

echo "🏗️  Step 2: Neuer Build..."
echo "-------------------------"
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

echo "🔍 Step 3: SEO Prerendering mit Fixes..."
echo "---------------------------------------"
echo "Generiere HTML mit korrigierten Meta-Tags..."
echo ""

# Development Mode für bessere Formatierung
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

echo "🔍 Step 4: SEO Validierung..."
echo "-----------------------------"

# Prüfe ob Title-Tags korrekt sind
echo "Prüfe SOC2-Seite..."
if grep -q "<titleSOC" dist/soc2-zertifizierung/index.html 2>/dev/null; then
    echo "⚠️  WARNUNG: Title-Tag noch fehlerhaft!"
    echo "Manueller Fix erforderlich."
else
    echo "✅ Title-Tag korrekt formatiert"
fi

# Prüfe ob richtige Meta-Daten vorhanden sind
if grep -q "Trust Services" dist/soc2-zertifizierung/index.html 2>/dev/null; then
    echo "✅ SOC2-spezifische Meta-Daten gefunden"
else
    echo "⚠️  WARNUNG: SOC2 Meta-Daten fehlen!"
fi

echo ""
echo "📊 SEO-Fix Zusammenfassung:"
echo "--------------------------"
echo "✓ Build neu erstellt"
echo "✓ Prerendering mit Title-Fix"
echo "✓ Meta-Tags dedupliziert"
echo "✓ Canonical URLs gesetzt"
echo ""

echo "🌐 Step 5: Preview Server starten..."
echo "-----------------------------------"
echo "Server läuft auf: http://localhost:4173"
echo ""
echo "📋 Teste diese URLs:"
echo "1. http://localhost:4173/soc2-zertifizierung"
echo "2. http://localhost:4173/eu-ai-act"
echo "3. http://localhost:4173/nis2-compliance"
echo ""
echo "🔍 Prüfe im Browser:"
echo "   - Rechtsklick → 'Seitenquelltext anzeigen'"
echo "   - Suche nach <title> (sollte mit > enden)"
echo "   - Prüfe ob seitenspezifische Titel vorhanden"
echo ""
echo "🛑 Server beenden: Ctrl+C"
echo "=============================="
echo ""

# Preview Server starten
npm run preview

echo ""
echo "Server beendet. Drücke eine Taste..."
read -n 1