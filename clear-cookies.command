#!/bin/bash

# Clear Safari cookies for localhost
echo "🧹 Clearing browser cookies for localhost..."
echo "=========================================="
echo ""

# Kill Safari if running
echo "📌 Closing Safari..."
osascript -e 'quit app "Safari"' 2>/dev/null

# Clear Safari cookies for localhost domains
echo "🍪 Removing localhost cookies..."
rm -f ~/Library/Cookies/Cookies.binarycookies 2>/dev/null
rm -f ~/Library/Safari/LocalStorage/*localhost* 2>/dev/null
rm -f ~/Library/Safari/Databases/*localhost* 2>/dev/null

# Clear Chrome cookies for localhost
echo "🍪 Clearing Chrome localhost data..."
sqlite3 ~/Library/Application\ Support/Google/Chrome/Default/Cookies "DELETE FROM cookies WHERE host_key LIKE '%localhost%';" 2>/dev/null

# Clear Firefox cookies for localhost
echo "🍪 Clearing Firefox localhost data..."
find ~/Library/Application\ Support/Firefox/Profiles -name "cookies.sqlite" -exec sqlite3 {} "DELETE FROM moz_cookies WHERE host LIKE '%localhost%';" \; 2>/dev/null

echo ""
echo "✅ Browser cookies cleared!"
echo ""
echo "You can now restart your development server without cookie issues."
echo ""
echo "Press any key to exit..."
read -n 1