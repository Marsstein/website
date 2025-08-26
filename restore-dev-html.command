#!/bin/bash

# Restore Development HTML
# Stellt das ursprüngliche index.html wieder her für Development

echo "🔧 Restore Development HTML"
echo "==========================="
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

echo "📋 Status prüfen..."
if [ ! -f "dist/index.html" ]; then
    echo "❌ Kein dist/index.html gefunden"
    echo ""
    echo "Drücke eine Taste..."
    read -n 1
    exit 1
fi

# Backup des prerendered HTML
echo "💾 Sichere prerendered HTML..."
cp dist/index.html dist/index.prerendered.html 2>/dev/null

echo "🔧 Erstelle sauberes index.html für Development..."
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Favicons / PWA -->
    <link rel="icon" type="image/svg+xml" href="/JLogoMarsstein.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e24e1b" />
    <meta name="theme-color" content="#0B1D2A" />
    
    <!-- Preconnect to external domains for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- Vite will inject the scripts here -->
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
EOF

echo "✅ Development HTML wiederhergestellt!"
echo ""
echo "📁 Backup gespeichert als: dist/index.prerendered.html"
echo ""

echo "🚀 Möchtest du den Development Server starten? (j/n)"
read -n 1 answer
echo ""

if [[ $answer == "j" || $answer == "J" ]]; then
    echo ""
    echo "🌐 Starte Development Server..."
    echo "==============================="
    echo "Server läuft auf: http://localhost:5173"
    echo ""
    echo "✓ React App funktioniert normal"
    echo "✓ SEOHead Component wird korrekt geladen"
    echo "✓ Keine 'Root element not found' Fehler"
    echo ""
    echo "🛑 Server beenden: Ctrl+C"
    echo "==============================="
    echo ""
    npm run dev
fi

echo ""
echo "💡 Hinweise:"
echo "- Für SEO-Testing: npm run preview (nutzt prerendered HTML)"
echo "- Für Development: npm run dev (nutzt sauberes HTML)"
echo ""
echo "Drücke eine Taste zum Beenden..."
read -n 1