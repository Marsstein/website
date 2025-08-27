import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4173;
const DIST_DIR = path.join(__dirname, '..', 'dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  let pathname = req.url || '/';
  
  // Remove query string and hash
  pathname = pathname.split('?')[0].split('#')[0];
  
  // Handle trailing slashes
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  
  // Try different file paths for the route
  const possiblePaths = [
    path.join(DIST_DIR, pathname, 'index.html'),
    path.join(DIST_DIR, pathname + '.html'),
    path.join(DIST_DIR, pathname === '/' ? 'index.html' : pathname + '/index.html'),
    path.join(DIST_DIR, pathname) // for static assets
  ];
  
  let filePath = null;
  let fileExists = false;
  
  // Find the first existing file
  for (const testPath of possiblePaths) {
    if (fs.existsSync(testPath) && fs.statSync(testPath).isFile()) {
      filePath = testPath;
      fileExists = true;
      break;
    }
  }
  
  // If no file found and it's not a static asset, fallback to root index.html
  if (!fileExists && !pathname.includes('.')) {
    filePath = path.join(DIST_DIR, 'index.html');
    fileExists = fs.existsSync(filePath);
  }
  
  if (fileExists) {
    const extname = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        return;
      }
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`
==================================
🚀 SEO-optimized server running
==================================

📍 Server: http://localhost:${PORT}

✅ Serving prerendered pages with proper SEO tags
📄 Each route now loads its specific meta data

Try these URLs to see different SEO tags:
- http://localhost:${PORT}/
- http://localhost:${PORT}/wissen/rechtsprechung/schrems-ii
- http://localhost:${PORT}/nis2-compliance
- http://localhost:${PORT}/iso-27001-zertifizierung

💡 Tip: View page source to see the correct meta tags!

🛑 To stop: Press Ctrl+C
==================================
  `);
});