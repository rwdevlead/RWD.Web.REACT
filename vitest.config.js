export default {
  test: {
    globals: true, // So you can use describe/it/expect without imports
    setupFiles: ["./test/backend/vitest.setup.js"], // Load the CAPTCHA mock globally
    environment: "node",
  },
};
