import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: process.env.NODE_ENV !== 'production'
    })
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },

  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('scheduler/')) {
              return 'react';
            }
            if (id.includes('react-router')) {
              return 'react-router';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
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
            return 'vendor';
          }
        },
        
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

    chunkSizeWarningLimit: 500,
    
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
    exclude: []
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    '__ENABLE_HYDRATION__': JSON.stringify(false)
  }
});