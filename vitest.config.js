/// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "./test/backend/vitest.setup.js",
    environment: "node",
  },
});
