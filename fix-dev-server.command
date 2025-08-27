#!/bin/bash

# Fix für Development Server
# Stellt sicher dass die App im Development-Modus läuft

echo "🔧 Marsstein Development Server Fix"
echo "=================================="
echo ""

# Zum Projektverzeichnis wechseln
cd "$(dirname "$0")"

echo "Das Problem:"
echo "- Prerendering hat HTML in dist/ gespeichert"
echo "- Der Preview-Server zeigt das statische HTML"
echo "- React kann nicht mounten weil root bereits Inhalt hat"
echo ""

echo "Lösung: Development Server verwenden!"
echo ""

echo "🚀 Starte Development Server..."
echo "==============================="
echo ""
echo "Server läuft auf: http://localhost:5173"
echo "(Nicht 4173 - das ist der Preview Server!)"
echo ""
echo "Im Development-Modus:"
echo "✓ React App läuft normal"
echo "✓ Hot Module Replacement funktioniert"
echo "✓ Keine Konflikte mit prerendered HTML"
echo ""
echo "🛑 Server beenden: Ctrl+C"
echo "==============================="
echo ""

# Development Server starten
npm run dev

echo ""
echo "Server beendet. Drücke eine Taste..."
read -n 1