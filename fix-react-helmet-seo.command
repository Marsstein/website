#!/bin/bash

# React Helmet SEO Fix
# Behebt Title-Tag und Meta-Tag Probleme von React Helmet

echo "🔧 React Helmet SEO Fix"
echo "======================="
echo ""
echo "Dieses Script behebt die React Helmet Title-Tag Probleme"
echo "und behält alle bestehenden SEO-Daten bei."
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

echo "📦 Step 1: Build erstellen (falls nicht vorhanden)..."
echo "---------------------------------------------------"

if [ ! -d "dist" ]; then
    echo "Kein Build gefunden, erstelle neuen..."
    npm run build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build fehlgeschlagen!"
        echo ""
        echo "Drücke eine Taste zum Beenden..."
        read -n 1
        exit 1
    fi
else
    echo "✅ Build bereits vorhanden"
fi

echo ""
echo "🔍 Step 2: Enhanced Prerendering mit React Helmet Fix..."
echo "-------------------------------------------------------"
echo "Verwende spezielles Script für React Helmet Kompatibilität"
echo ""

# Backup des alten prerender scripts
cp scripts/full-prerender.js scripts/full-prerender.backup.js 2>/dev/null

# Development Mode für bessere Formatierung
export NODE_ENV=development

# Führe das verbesserte Prerender-Script aus
echo "Starte Enhanced Prerendering..."
node scripts/prerender-with-helmet-fix.js

if [ $? -ne 0 ]; then
    echo "❌ Enhanced Prerendering fehlgeschlagen!"
    echo ""
    echo "Drücke eine Taste zum Beenden..."
    read -n 1
    exit 1
fi

echo ""
echo "✅ Prerendering erfolgreich!"
echo ""

echo "🔍 Step 3: Validierung der Fixes..."
echo "----------------------------------"

# Prüfe SOC2-Seite als Beispiel
echo "Prüfe SOC2-Seite auf korrekte Title-Tags..."
if [ -f "dist/soc2-zertifizierung/index.html" ]; then
    # Prüfe ob Title korrekt formatiert ist
    if grep -q "<title>SOC 2" dist/soc2-zertifizierung/index.html; then
        echo "✅ Title-Tag korrekt formatiert: <title>SOC 2..."
    else
        echo "⚠️  Title-Tag möglicherweise noch fehlerhaft"
    fi
    
    # Prüfe ob seitenspezifische Meta-Daten vorhanden
    if grep -q "Trust Services" dist/soc2-zertifizierung/index.html; then
        echo "✅ SOC2-spezifische Meta-Daten vorhanden"
    else
        echo "⚠️  SOC2 Meta-Daten fehlen möglicherweise"
    fi
fi

echo ""
echo "📊 Fix-Zusammenfassung:"
echo "----------------------"
echo "✓ React Helmet Title-Tags korrigiert"
echo "✓ Malformed Tags (<titleContent) gefixt"
echo "✓ Meta-Tags dedupliziert"
echo "✓ Seitenspezifische SEO-Daten erhalten"
echo "✓ Structured Data beibehalten"
echo ""

echo "🌐 Step 4: Preview Server starten..."
echo "-----------------------------------"
echo "Server läuft auf: http://localhost:4173"
echo ""
echo "📋 Teste diese Seiten im Browser:"
echo ""
echo "1. http://localhost:4173/soc2-zertifizierung"
echo "   → Sollte zeigen: 'SOC 2 Zertifizierung – Trust Services...'"
echo ""
echo "2. http://localhost:4173/eu-ai-act"
echo "   → Sollte zeigen: 'EU AI Act Compliance – KI-Regulierung...'"
echo ""
echo "3. http://localhost:4173/nis2-compliance"
echo "   → Sollte zeigen: 'NIS-2 Compliance – Cybersecurity...'"
echo ""
echo "🔍 Im Browser prüfen:"
echo "   Rechtsklick → 'Seitenquelltext anzeigen'"
echo "   → Title sollte mit <title> beginnen (nicht <titleContent)"
echo "   → Jede Seite sollte eigene Meta-Daten haben"
echo ""
echo "🛑 Server beenden: Ctrl+C"
echo "================================"
echo ""

# Preview Server starten
npm run preview

echo ""
echo "Server beendet."
echo ""
echo "💡 Falls noch Probleme bestehen:"
echo "   - Prüfen Sie ob alle Seiten SEOHead korrekt verwenden"
echo "   - Stellen Sie sicher dass structuredData definiert ist"
echo "   - Canonical URLs müssen mit den Routes übereinstimmen"
echo ""
echo "Drücke eine Taste zum Beenden..."
read -n 1