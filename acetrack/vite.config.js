import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "AceTrack - Association Of Computing And Engineering Students",
        short_name: "AceTrack",
        description: `AceTrack is a modern Event Attendance system designed to replace traditional paper-based
attendance methods with a QR code-based approach.`,
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-72x72.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-128x128.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-144x144.png",
            sizes: "192x192",
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
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
