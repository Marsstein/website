import { preview } from 'vite';
import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Start Vite preview server with custom middleware
async function startPreviewServer() {
  const previewServer = await preview({
    preview: {
      port: 4173,
      strictPort: false,
      host: true,
      open: false,
    },
    build: {
      outDir: 'dist'
    }
  });

  console.log('✨ Preview server running at http://localhost:4173');
  console.log('📂 Serving prerendered HTML files from ./dist directory');
  
  // Custom request handler that serves prerendered HTML files
  const server = createServer((req, res) => {
    const url = req.url;
    
    // Remove query strings and decode URL
    const cleanPath = decodeURIComponent(url.split('?')[0]);
    
    // Check if this is a route that should serve prerendered HTML
    const possibleHtmlPath = join(__dirname, 'dist', cleanPath, 'index.html');
    const directHtmlPath = join(__dirname, 'dist', cleanPath);
    
    // Try to serve prerendered HTML files
    if (existsSync(possibleHtmlPath)) {
      // Serve the prerendered index.html from subdirectory
      console.log(`Serving prerendered: ${possibleHtmlPath}`);
      const html = readFileSync(possibleHtmlPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else if (cleanPath.endsWith('.html') && existsSync(directHtmlPath)) {
      // Serve direct HTML file
      console.log(`Serving HTML: ${directHtmlPath}`);
      const html = readFileSync(directHtmlPath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      // Fallback to Vite's preview server for assets and root
      previewServer.middlewares.handle(req, res, () => {
        // If no middleware handled it, serve root index.html for client routing
        const rootIndex = join(__dirname, 'dist', 'index.html');
        if (existsSync(rootIndex)) {
          const html = readFileSync(rootIndex, 'utf-8');
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        } else {
          res.writeHead(404);
          res.end('Not found');
        }
      });
    }
  });

  server.listen(4173);
}

startPreviewServer().catch(console.error);