import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mkcert(),
    viteCompression({
      algorithm: "gzip",
      threshold: 10240, // Only compress files larger than 10kb
      deleteOriginFile: false,
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Real World Developers",
        short_name: "RWD",
        description: "Real World Developers Web Application",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
        screenshots: [
          {
            src: "/screenshots/desktop-1.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
            label: "Desktop view",
          },
          {
            src: "/screenshots/desktop-2.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
            label: "Desktop view",
          },
          {
            src: "/screenshots/desktop-3.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
            label: "Desktop view",
          },
          {
            src: "/screenshots/mobile-1.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
            label: "Mobile view",
          },
          {
            src: "/screenshots/mobile-2.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
            label: "Mobile view",
          },
        ],
        icons: [
          {
            src: "windows11/SmallTile.scale-100.png",
            sizes: "71x71",
          },
          {
            src: "windows11/SmallTile.scale-125.png",
            sizes: "89x89",
          },
          {
            src: "windows11/SmallTile.scale-150.png",
            sizes: "107x107",
          },
          {
            src: "windows11/SmallTile.scale-200.png",
            sizes: "142x142",
          },
          {
            src: "windows11/SmallTile.scale-400.png",
            sizes: "284x284",
          },
          {
            src: "windows11/Square150x150Logo.scale-100.png",
            sizes: "150x150",
          },
          {
            src: "windows11/Square150x150Logo.scale-125.png",
            sizes: "188x188",
          },
          {
            src: "windows11/Square150x150Logo.scale-150.png",
            sizes: "225x225",
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300",
          },
          {
            src: "windows11/Square150x150Logo.scale-400.png",
            sizes: "600x600",
          },
          {
            src: "windows11/Wide310x150Logo.scale-100.png",
            sizes: "310x150",
          },
          {
            src: "windows11/Wide310x150Logo.scale-125.png",
            sizes: "388x188",
          },
          {
            src: "windows11/Wide310x150Logo.scale-150.png",
            sizes: "465x225",
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300",
          },
          {
            src: "windows11/Wide310x150Logo.scale-400.png",
            sizes: "1240x600",
          },
          {
            src: "windows11/LargeTile.scale-100.png",
            sizes: "310x310",
          },
          {
            src: "windows11/LargeTile.scale-125.png",
            sizes: "388x388",
          },
          {
            src: "windows11/LargeTile.scale-150.png",
            sizes: "465x465",
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            sizes: "620x620",
          },
          {
            src: "windows11/LargeTile.scale-400.png",
            sizes: "1240x1240",
          },
          {
            src: "windows11/Square44x44Logo.scale-100.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.scale-125.png",
            sizes: "55x55",
          },
          {
            src: "windows11/Square44x44Logo.scale-150.png",
            sizes: "66x66",
          },
          {
            src: "windows11/Square44x44Logo.scale-200.png",
            sizes: "88x88",
          },
          {
            src: "windows11/Square44x44Logo.scale-400.png",
            sizes: "176x176",
          },
          {
            src: "windows11/StoreLogo.scale-100.png",
            sizes: "50x50",
          },
          {
            src: "windows11/StoreLogo.scale-125.png",
            sizes: "63x63",
          },
          {
            src: "windows11/StoreLogo.scale-150.png",
            sizes: "75x75",
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            sizes: "100x100",
          },
          {
            src: "windows11/StoreLogo.scale-400.png",
            sizes: "200x200",
          },
          {
            src: "windows11/SplashScreen.scale-100.png",
            sizes: "620x300",
          },
          {
            src: "windows11/SplashScreen.scale-125.png",
            sizes: "775x375",
          },
          {
            src: "windows11/SplashScreen.scale-150.png",
            sizes: "930x450",
          },
          {
            src: "windows11/SplashScreen.scale-200.png",
            sizes: "1240x600",
          },
          {
            src: "windows11/SplashScreen.scale-400.png",
            sizes: "2480x1200",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-16.png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-20.png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-24.png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-30.png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-32.png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-36.png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-40.png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-44.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-48.png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-60.png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-64.png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-72.png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-80.png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-96.png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-256.png",
            sizes: "256x256",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            sizes: "256x256",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            sizes: "256x256",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-144-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-96-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-72-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-48-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "ios/16.png",
            sizes: "16x16",
          },
          {
            src: "ios/20.png",
            sizes: "20x20",
          },
          {
            src: "ios/29.png",
            sizes: "29x29",
          },
          {
            src: "ios/32.png",
            sizes: "32x32",
          },
          {
            src: "ios/40.png",
            sizes: "40x40",
          },
          {
            src: "ios/50.png",
            sizes: "50x50",
          },
          {
            src: "ios/57.png",
            sizes: "57x57",
          },
          {
            src: "ios/58.png",
            sizes: "58x58",
          },
          {
            src: "ios/60.png",
            sizes: "60x60",
          },
          {
            src: "ios/64.png",
            sizes: "64x64",
          },
          {
            src: "ios/72.png",
            sizes: "72x72",
          },
          {
            src: "ios/76.png",
            sizes: "76x76",
          },
          {
            src: "ios/80.png",
            sizes: "80x80",
          },
          {
            src: "ios/87.png",
            sizes: "87x87",
          },
          {
            src: "ios/100.png",
            sizes: "100x100",
          },
          {
            src: "ios/114.png",
            sizes: "114x114",
          },
          {
            src: "ios/120.png",
            sizes: "120x120",
          },
          {
            src: "ios/128.png",
            sizes: "128x128",
          },
          {
            src: "ios/144.png",
            sizes: "144x144",
          },
          {
            src: "ios/152.png",
            sizes: "152x152",
          },
          {
            src: "ios/167.png",
            sizes: "167x167",
          },
          {
            src: "ios/180.png",
            sizes: "180x180",
          },
          {
            src: "ios/192.png",
            sizes: "192x192",
          },
          {
            src: "ios/256.png",
            sizes: "256x256",
          },
          {
            src: "ios/512.png",
            sizes: "512x512",
          },
          {
            src: "ios/1024.png",
            sizes: "1024x1024",
          },
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
        navigateFallback: "index.html",
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallbackDenylist: [/^\/[^/]+\.[^/]+$/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/localhost\/api\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 5,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/localhost\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "app-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      },
    }),
  ],
  build: {
    minify: "terser", // Use terser for best compression
    sourcemap: false, // Disable in prod
    target: "es2017", // Modern JS output
    chunkSizeWarningLimit: 800, // Adjust warnings
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.*
        drop_debugger: true,
        pure_funcs: ["console.info", "console.debug"],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Split vendor code to separate cacheable chunks
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          vendor: ["axios", "lodash", "lucide-react"],
        },
      },
    },
  },
  server: {
    https: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
