import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
  },
  plugins: [
    react(),
    // Temporarily disable componentTagger to test
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Kritisch: Vendor-Chunks trennen
          if (id.includes('node_modules')) {
            // React-Kern separat
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react') && !id.includes('react-dom')) return 'react-core';
            
            // UI-Bibliotheken
            if (id.includes('@radix-ui')) return 'radix-ui';
            if (id.includes('lucide-react')) return 'icons';
            
            // Animationen
            if (id.includes('framer-motion') || id.includes('@react-spring')) return 'animation';
            
            // Charts
            if (id.includes('recharts') || id.includes('d3')) return 'charts';
            
            // Forms
            if (id.includes('react-hook-form') || id.includes('zod')) return 'forms';
            
            // Router
            if (id.includes('react-router')) return 'router';
            
            // Utils
            if (id.includes('date-fns') || id.includes('clsx') || id.includes('tailwind-merge')) return 'utils';
            
            // Email
            if (id.includes('@emailjs')) return 'email';
            
            // Query & State Management
            if (id.includes('@tanstack/react-query')) return 'query';
            
            // Carousel & Media
            if (id.includes('embla-carousel')) return 'carousel';
            if (id.includes('react-lottie')) return 'lottie';
            
            // UI Utils
            if (id.includes('cmdk')) return 'command';
            if (id.includes('vaul')) return 'drawer';
            if (id.includes('sonner')) return 'toast';
            if (id.includes('react-resizable-panels')) return 'panels';
            if (id.includes('react-day-picker')) return 'datepicker';
            if (id.includes('input-otp')) return 'otp';
            if (id.includes('react-countup')) return 'countup';
            if (id.includes('react-intersection-observer')) return 'observer';
            if (id.includes('next-themes')) return 'themes';
            if (id.includes('react-helmet-async')) return 'helmet';
            if (id.includes('class-variance-authority')) return 'cva';
            
            // Alles andere
            return 'vendor';
          }
          
          // Große Komponenten splitten
          if (id.includes('HinweisgeberschutzgesetzGuide')) return 'guide-hinweis';
          if (id.includes('Iso27017Guide') || id.includes('Iso27018Guide')) return 'guide-iso';
          if (id.includes('TisaxGuide')) return 'guide-tisax';
          if (id.includes('DsgEkdGuide')) return 'guide-dsg';
          if (id.includes('EuAiActGuide')) return 'guide-ai';
          if (id.includes('Iso27001')) return 'guide-iso27001';
        },
        // Weitere Optimierungen
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
        // Entry-Chunk für kritische Assets
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/woff|woff2|eot|ttf|otf/.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          } else if (/png|jpe?g|svg|gif|tiff|bmp|ico/.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else {
            return `assets/[name]-[hash][extname]`;
          }
        }
      }
    },
    // Performance-Optimierungen
    target: 'es2020',
    cssCodeSplit: true,
    cssMinify: true,
    chunkSizeWarningLimit: 200,
    // Optimierungen für kleinere Bundles
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    reportCompressedSize: false,
    sourcemap: false,
    // Bessere Module-Preloading
    modulePreload: {
      polyfill: true
    }
  }
}));
