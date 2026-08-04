import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Para GitHub Pages: la app React se sirve desde /app/
// La landing page se sirve desde public/
export default defineConfig({
  plugins: [react()],
  base: "/voltage-drop-app/app/",
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          jspdf: ["jspdf", "html2canvas"],
        },
      },
    },
  },
  server: {
    open: "/app/",
  },
});
