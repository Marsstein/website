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
    target: 'es2020',
    minify: 'terser',
    sourcemap: false,
    cssMinify: true,
    
    rollupOptions: {
      output: {
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
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-accordion'],
          motion: ['framer-motion', '@react-spring/web'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          charts: ['recharts'],
          forms: ['@emailjs/browser']
        }
      },
    },

    chunkSizeWarningLimit: 300,
    
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
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
    host: true,
    cors: true,
    open: false
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