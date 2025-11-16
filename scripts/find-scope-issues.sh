#!/bin/bash

# Script to find potential variable scope issues in React components
# Looks for constants defined in conditional blocks that might be used outside

echo "🔍 Scanning for potential scope issues in React components..."
echo ""

ISSUES_FOUND=0

for file in /Users/jonaskruger/Mars25/Website/src/pages/**/*.tsx; do
  if [ -f "$file" ]; then
    # Extract the component name
    component=$(basename "$file" .tsx)

    # Look for constants defined inside if blocks
    const_in_if=$(grep -n "if.*{$" "$file" | while read line; do
      line_num=$(echo "$line" | cut -d: -f1)
      # Check if there are const declarations after this if statement within next 50 lines
      awk -v start="$line_num" 'NR > start && NR <= start+50 && /^\s*const\s+[a-zA-Z]+.*=.*{/ {print NR": "$0}' "$file"
    done)

    if [ -n "$const_in_if" ]; then
      # Extract variable names
      var_names=$(echo "$const_in_if" | grep -o "const [a-zA-Z_][a-zA-Z0-9_]*" | cut -d' ' -f2)

      for var in $var_names; do
        # Count total usages of this variable
        total_usage=$(grep -c "\b$var\b" "$file" 2>/dev/null || echo 0)

        if [ "$total_usage" -gt 1 ]; then
          echo "⚠️  Potential issue in: $component"
          echo "   Variable: $var"
          echo "   File: $file"
          echo "   Usage count: $total_usage"
          echo "   Defined in conditional block - check if used outside scope"
          echo ""
          ISSUES_FOUND=$((ISSUES_FOUND + 1))
        fi
      done
    fi
  fi
done

echo ""
if [ "$ISSUES_FOUND" -eq 0 ]; then
  echo "✅ No obvious scope issues found!"
else
  echo "⚠️  Found $ISSUES_FOUND potential scope issues to review"
fi
