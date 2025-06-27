import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // SEO and Performance optimizations  
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Chunk splitting for better caching
        manualChunks: {
          // Language chunks - split by language for lazy loading
          translations: [
            './src/i18n/translations/en.js',
            './src/i18n/translations/es.js', 
            './src/i18n/translations/fr.js'
          ],
          // Core components
          components: [
            './src/components/LanguageSelector_part1.js',
            './src/seo/SEOManager_part1.js',
            './src/i18n/LanguageManager_core.js'
          ]
        },
        // Optimize asset file names for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/\.(png|jpe?g|gif|svg|ico|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          
          return `assets/[ext]/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    // Performance optimizations
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    // Headers for development CORS and security
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    }
  },
  
  // Optimizations
  optimizeDeps: {
    include: ['canvas-confetti'],
    exclude: []
  },
  
  // Preview server (for production builds)
  preview: {
    port: 4173,
    open: true,
    headers: {
      // Security headers for production preview
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  },
  
  // Plugin configuration for future extensions
  plugins: [
    // Future plugins for SEO optimization can be added here
    // e.g., sitemap generation, robots.txt generation, etc.
  ],
  
  // Base configuration for deployment  
  base: '/',
  
  // CSS optimization
  css: {
    devSourcemap: false
  }
})