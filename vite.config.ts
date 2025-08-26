import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
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
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'forms';
            }
            if (id.includes('@emailjs')) {
              return 'email';
            }
            // Don't include react and react-dom in manualChunks for SSG
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
}));
