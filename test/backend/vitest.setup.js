// vitest.setup.js

import { vi } from "vitest";

// Always mock fetch to return a successful CAPTCHA check
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);
