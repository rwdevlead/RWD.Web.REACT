import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  envDir: "../", // <-- Tell Vite to look for .env in the root
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
