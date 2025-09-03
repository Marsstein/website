#!/usr/bin/env node

import { build } from 'vite';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

// Import your app for SSR
async function loadApp() {
  const server = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  return server.ssrLoadModule('/src/main.tsx');
}

const routes = [
  '/',
  '/contact',
  '/branchen',
  '/compliance/dsgvo',
  '/compliance/iso-27001',
  '/compliance/eu-ai-act',
  '/compliance/nis2',
  '/wissen',
  '/wissen/dsgvo-leitfaeden',
  '/wissen/rechtsprechung/schrems-ii',
  '/wissen/rechtsprechung/amazon-luxemburg-2021',
  '/tools',
  '/iso-27001-zertifizierung',
  '/dsgvo-compliance',
  '/eu-ai-act-compliance'
];

console.log('🚀 Starting Hydration-Safe SSG Build...');

async function buildClient() {
  console.log('\n🔨 Building client bundle...');
  await build({
    root: rootDir,
    build: {
      outDir: distDir,
      ssrManifest: true,
      rollupOptions: {
        input: {
          main: join(rootDir, 'index.html')
        },
        output: {
          // Keep chunks for better caching
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
            'utils': ['clsx', 'tailwind-merge', 'class-variance-authority']
          }
        }
      }
    }
  });
  console.log('✅ Client build completed');
}

async function buildSSR() {
  console.log('\n🔨 Building SSR bundle...');
  await build({
    root: rootDir,
    build: {
      outDir: join(distDir, 'server'),
      ssr: join(rootDir, 'src/main.tsx'),
      rollupOptions: {
        output: {
          format: 'esm'
        }
      }
    }
  });
  console.log('✅ SSR build completed');
}

async function prerenderRoute(route, template) {
  console.log(`📄 Rendering: ${route}`);
  
  try {
    // This would be your actual React app render
    // Simplified for demonstration
    const appHtml = `
      <div id="root">
        <!-- Your prerendered content here -->
        <h1>Marsstein - ${route}</h1>
        <p>DSGVO & EU AI Act Compliance Experten</p>
      </div>
    `;
    
    // Replace placeholder in template
    let html = template.replace('<!--app-html-->', appHtml);
    
    // Add hydration marker
    html = html.replace(
      '<div id="root">',
      '<div id="root" data-hydration-safe="true">'
    );
    
    // Inject hydration-safe script
    const hydrationScript = `
      <script type="module">
        // Wait for all assets to load before hydrating
        window.addEventListener('DOMContentLoaded', () => {
          const root = document.getElementById('root');
          if (root && root.dataset.hydrationSafe === 'true') {
            // Delay hydration to ensure all chunks are loaded
            setTimeout(() => {
              import('/src/main.tsx').then(module => {
                if (module.hydrateRoot) {
                  module.hydrateRoot();
                }
              });
            }, 100);
          }
        });
      </script>
    `;
    
    html = html.replace('</body>', `${hydrationScript}</body>`);
    
    return html;
    
  } catch (error) {
    console.error(`Failed to render ${route}:`, error);
    return null;
  }
}

async function generateStaticPages() {
  console.log('\n📝 Generating static pages...');
  
  // Read the template
  const templatePath = join(distDir, 'index.html');
  const template = readFileSync(templatePath, 'utf-8');
  
  for (const route of routes) {
    const html = await prerenderRoute(route, template);
    
    if (html) {
      const routePath = route === '/' ? '/index' : route;
      const filePath = join(distDir, `${routePath}.html`);
      const dir = dirname(filePath);
      
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      writeFileSync(filePath, html, 'utf-8');
      console.log(`   ✓ Saved: ${filePath}`);
    }
  }
}

// Create modified main.tsx for hydration
async function createHydrationEntry() {
  const entryContent = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Hydration-safe rendering
export function hydrateRoot() {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  
  // Check if already hydrated
  if (rootElement.dataset.hydrated === 'true') {
    console.log('App already hydrated');
    return;
  }
  
  // Use React 18 hydration with error recovery
  const root = ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    {
      onRecoverableError: (error, errorInfo) => {
        console.warn('Hydration error recovered:', error, errorInfo);
      }
    }
  );
  
  rootElement.dataset.hydrated = 'true';
}

// Auto-hydrate if not prerendered
if (typeof window !== 'undefined' && !window.__PRERENDERED__) {
  hydrateRoot();
}
`;

  writeFileSync(join(rootDir, 'src/main-hydrate.tsx'), entryContent, 'utf-8');
  console.log('✅ Created hydration entry point');
}

async function createNetlifyHeaders() {
  const headers = `
/*
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable
`;

  writeFileSync(join(distDir, '_headers'), headers.trim(), 'utf-8');
  console.log('✅ Created _headers file');
}

async function main() {
  try {
    await buildClient();
    await generateStaticPages();
    await createNetlifyHeaders();
    
    console.log('\n🎉 Hydration-safe build completed!');
    console.log('📦 Output directory:', distDir);
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

main();