import { describe, it, expect } from "vitest";
import app from "../../backend/api/index.js";

describe("Backend API", () => {
  it("GET /api should return running message", async () => {
    const res = await request(app).get("/api");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Express API running");
  });

  it("GET /api/health should return status ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
