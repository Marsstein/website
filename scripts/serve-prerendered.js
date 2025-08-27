#!/usr/bin/env node
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4173;

// Serve static files from dist directory
app.use(express.static(join(__dirname, '..', 'dist')));

// Handle routes by looking for prerendered HTML files
app.get('*', (req, res) => {
  const requestPath = req.path;
  
  // Try to find a prerendered HTML file
  const possiblePaths = [
    join(__dirname, '..', 'dist', requestPath, 'index.html'),
    join(__dirname, '..', 'dist', requestPath + '.html'),
  ];
  
  for (const filePath of possiblePaths) {
    if (existsSync(filePath)) {
      console.log(`Serving prerendered file: ${filePath}`);
      return res.sendFile(filePath);
    }
  }
  
  // Fallback to root index.html for client-side routing
  const rootIndex = join(__dirname, '..', 'dist', 'index.html');
  if (existsSync(rootIndex)) {
    console.log(`Falling back to root index.html for: ${requestPath}`);
    res.sendFile(rootIndex);
  } else {
    res.status(404).send('Not found');
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Preview server running at http://localhost:${PORT}`);
  console.log('📂 Serving prerendered HTML files from ./dist directory\n');
});