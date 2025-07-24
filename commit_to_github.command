#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git branch -M main
    git remote add origin git@github.com:JFK465/mars.git
fi

# Add all files
echo "Adding all files..."
git add .

# Commit with timestamp
echo "Committing changes..."
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Press any key to close..."
read -n 1