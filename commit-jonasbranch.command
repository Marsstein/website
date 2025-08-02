#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

echo "Committing jonasbranch to GitHub..."

# Check if we're on the right branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "jonasbranch" ]; then
    echo "Switching to jonasbranch..."
    git checkout jonasbranch
fi

# Add all changes
git add .

# Commit with timestamp
commit_message="Auto commit $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"

# Push to GitHub
git push origin jonasbranch

echo "✅ Successfully committed and pushed jonasbranch to GitHub!"
echo "Press any key to close..."
read -n 1

exit 0