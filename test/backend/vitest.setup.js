import { vi } from "vitest";
import supertest from "supertest";

// Always mock fetch to return a successful CAPTCHA check
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

// Make supertest globally available as `request`
global.request = supertest;
