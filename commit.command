#!/bin/bash

# Git Commit Script für macOS
# Dieses Script committed alle Änderungen mit einer automatischen Commit-Message

# Wechsle in das richtige Verzeichnis
cd "$(dirname "$0")"

echo "🚀 Git Commit Script gestartet..."
echo ""

# Prüfen ob wir in einem Git Repository sind
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Fehler: Dieses Verzeichnis ist kein Git Repository!"
    echo ""
    echo "Drücken Sie eine beliebige Taste zum Beenden..."
    read -n 1
    exit 1
fi

# Aktueller Status anzeigen
echo "📊 Aktueller Git Status:"
git status --short

echo ""
echo "📝 Füge alle Änderungen hinzu..."
git add .

echo ""
echo "💾 Erstelle Commit..."

# Automatische Commit-Message mit Datum
COMMIT_MESSAGE="Update: $(date '+%Y-%m-%d %H:%M:%S') - Automated commit"

git commit -m "$COMMIT_MESSAGE

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Commit erfolgreich erstellt!"
    echo "   Message: $COMMIT_MESSAGE"
    echo ""
    echo "📤 Möchten Sie die Änderungen auch pushen? (y/n)"
    read -r response
    
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo "📤 Pushe zu remote repository..."
        git push
        if [ $? -eq 0 ]; then
            echo "✅ Push erfolgreich!"
        else
            echo "❌ Push fehlgeschlagen!"
        fi
    else
        echo "ℹ️  Änderungen wurden nur lokal committed."
        echo "   Verwenden Sie 'git push' um sie später zu pushen."
    fi
else
    echo "❌ Commit fehlgeschlagen!"
    echo ""
    echo "Drücken Sie eine beliebige Taste zum Beenden..."
    read -n 1
    exit 1
fi

echo ""
echo "📊 Neuer Git Status:"
git status --short

echo ""
echo "🎉 Script beendet!"
echo ""
echo "Drücken Sie eine beliebige Taste zum Beenden..."
read -n 1