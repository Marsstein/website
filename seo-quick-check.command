#!/bin/bash

# SEO Quick Check - Schneller SEO Test ohne neuen Build
# Nutzt bestehenden Build und zeigt SEO-Status

echo "🔍 Marsstein SEO Quick Check"
echo "============================"
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

# Prüfe ob Build existiert
if [ ! -d "dist" ]; then
    echo "❌ Kein Build gefunden!"
    echo ""
    echo "Führe zuerst aus: ./seo-complete-build.command"
    echo ""
    echo "Drücke eine Taste..."
    read -n 1
    exit 1
fi

echo "✅ Build gefunden"
echo ""

# Zeige SEO-Status für wichtige Seiten
echo "📊 SEO-Status Check:"
echo "===================="
echo ""

# Funktion zum Prüfen der Meta-Tags
check_seo() {
    local path=$1
    local file="dist/$path/index.html"
    
    if [ -f "$file" ]; then
        echo "📄 /$path"
        echo "-------------------"
        
        # Title extrahieren
        title=$(grep -o '<title>[^<]*</title>' "$file" 2>/dev/null | sed 's/<[^>]*>//g' || echo "❌ Kein Title gefunden")
        echo "   Title: $title"
        
        # Description extrahieren
        desc=$(grep -o 'name="description" content="[^"]*"' "$file" 2>/dev/null | sed 's/.*content="//;s/"//' || echo "❌ Keine Description")
        echo "   Description: ${desc:0:80}..."
        
        # OG Title prüfen
        og_title=$(grep -o 'property="og:title" content="[^"]*"' "$file" 2>/dev/null | sed 's/.*content="//;s/"//' || echo "❌ Kein OG Title")
        echo "   OG Title: $og_title"
        
        # Canonical URL prüfen
        canonical=$(grep -o 'rel="canonical" href="[^"]*"' "$file" 2>/dev/null | sed 's/.*href="//;s/"//' || echo "❌ Keine Canonical URL")
        echo "   Canonical: $canonical"
        
        echo ""
    else
        echo "⚠️  /$path - Nicht gefunden"
        echo ""
    fi
}

# Prüfe wichtige Seiten
check_seo ""
check_seo "soc2-zertifizierung"
check_seo "eu-ai-act"
check_seo "nis2-compliance"
check_seo "iso-27001-zertifizierung"

echo "💡 Tipp: Für detaillierte Ansicht öffne die Seiten im Browser"
echo "        und nutze 'Seitenquelltext anzeigen'"
echo ""

# Frage ob Server gestartet werden soll
echo "🌐 Preview Server starten? (j/n)"
read -n 1 answer
echo ""

if [[ $answer == "j" || $answer == "J" ]]; then
    echo "Starte Server auf http://localhost:4173"
    echo "Beenden mit Ctrl+C"
    echo ""
    npm run preview
else
    echo "Fertig."
fi

echo ""
echo "Drücke eine Taste zum Beenden..."
read -n 1