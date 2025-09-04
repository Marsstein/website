import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Custom Plugin für Hydration-Fix
function hydrationSafePlugin() {
  return {
    name: 'hydration-safe',
    transformIndexHtml(html: string) {
      // Injiziere Hydration-Safety-Check
      const hydrationScript = `
        <script>
          (function() {
            // Polyfill für useLayoutEffect in SSR/Prerender Umgebung
            if (typeof window !== 'undefined' && !window.React) {
              window.React = { useLayoutEffect: function() {} };
            }
            
            // Verzögere React-Initialisierung
            const originalHydrate = window.ReactDOM?.hydrateRoot;
            const originalRender = window.ReactDOM?.createRoot;
            
            if (window.ReactDOM) {
              // Override hydrateRoot für sicheres Hydration
              window.ReactDOM.hydrateRoot = function(container, element) {
                console.log('🔄 Safe hydration starting...');
                // Warte auf nächsten Tick
                setTimeout(() => {
                  if (originalHydrate) {
                    originalHydrate.call(window.ReactDOM, container, element);
                  }
                }, 0);
              };
              
              // Override createRoot als Fallback
              window.ReactDOM.createRoot = function(container) {
                console.log('🚀 Using client-side rendering...');
                const root = originalRender.call(window.ReactDOM, container);
                return {
                  ...root,
                  render: function(element) {
                    // Lösche Pre-rendered Content vor dem Rendern
                    container.innerHTML = '';
                    return root.render(element);
                  }
                };
              };
            }
          })();
        </script>
      `;
      
      // Füge Script direkt nach <head> ein
      return html.replace(
        '<head>',
        `<head>${hydrationScript}`
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Wichtig: Nutze den neuen JSX Transform
      jsxRuntime: 'automatic',
      // Deaktiviere Fast Refresh für Production
      fastRefresh: process.env.NODE_ENV !== 'production'
    }),
    hydrationSafePlugin()
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Wichtig: Stelle sicher, dass React richtig aufgelöst wird
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },

  build: {
    // Optimierungen für Netlify
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    
    // Besseres Code-Splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // KRITISCH: React, React-DOM und React-Router MÜSSEN zusammen bleiben
          // um "Cannot read properties of undefined (reading 'createContext')" zu vermeiden
          if (id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          // Radix UI
          if (id.includes('@radix-ui')) {
            return 'radix-ui';
          }
          // Große Libraries
          if (id.includes('node_modules')) {
            if (id.includes('emailjs') || id.includes('@emailjs')) {
              return 'emailjs';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('framer-motion') || id.includes('@react-spring')) {
              return 'animation';
            }
            if (id.includes('recharts') || id.includes('d3')) {
              return 'charts';
            }
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'forms';
            }
            // Alle anderen node_modules
            return 'vendor';
          }
        },
        
        // Asset-Naming für besseres Caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Erhöhe Chunk-Size-Warnung (da wir viele Compliance-Seiten haben)
    chunkSizeWarningLimit: 500,
    
    // Terser Optionen für kleinere Bundles
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
  },

  server: {
    port: 8080,
    host: true,
    // Wichtig für Entwicklung
    hmr: {
      overlay: false
    }
  },

  preview: {
    port: 4173,
    strictPort: false,
    host: true
  },

  optimizeDeps: {
    // Pre-bundle diese Dependencies
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'clsx',
      'tailwind-merge',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu'
    ],
    // Exclude problematische Packages
    exclude: []
  },

  // Definiere globale Konstanten
  define: {
    // Für Production Build
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    // Feature Flags
    '__ENABLE_HYDRATION__': JSON.stringify(false), // Kann auf true gesetzt werden wenn Hydration funktioniert
  }
});