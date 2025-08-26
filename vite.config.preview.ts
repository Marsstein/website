import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: false,
    middlewareMode: false,
    proxy: {
      // Intercept all requests and serve prerendered HTML if available
      '^(?!.*\.(js|css|svg|png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot)).*$': {
        bypass: (req, res) => {
          const url = req.url || '';
          const cleanUrl = url.split('?')[0].split('#')[0];
          
          // Try different file paths
          const paths = [
            path.join(__dirname, 'dist', cleanUrl, 'index.html'),
            path.join(__dirname, 'dist', cleanUrl + '.html'),
            path.join(__dirname, 'dist', cleanUrl.replace(/\/$/, '') + '/index.html')
          ];
          
          for (const filePath of paths) {
            if (fs.existsSync(filePath)) {
              const html = fs.readFileSync(filePath, 'utf-8');
              res.setHeader('Content-Type', 'text/html');
              res.end(html);
              return null;
            }
          }
          
          // Continue with normal serving
          return undefined;
        }
      }
    }
  }
})