import { describe, it, expect, vi, beforeEach } from "vitest";
import app from "../../backend/api/index.js";
import axios from "axios";

// Automatically mock axios before each test
vi.mock("axios");

describe("POST /api/email", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 400 if required fields are missing or invalid", async () => {
    const badPayload = {
      email: "not-an-email", // invalid
      // missing name, title, message
    };

    const res = await request(app)
      .post("/api/email")
      .send({})
      .set("Accept", "application/json");

    expect(res.status).toBe(400);
  });

  it("should return 200 and success true for valid input", async () => {
    axios.post.mockResolvedValueOnce({ status: 200 });

    const payload = {
      name: "John Doe",
      email: "john@example.com",
      title: "Test Email",
      message: "This is a test message",
      captchaToken: "fake-captcha-token",
    };

    const res = await request(app)
      .post("/api/email")
      .send(payload)
      .set("Accept", "application/json");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(axios.post).toHaveBeenCalledOnce();
  });

  it("should return 500 and error message if axios call fails", async () => {
    axios.post.mockRejectedValueOnce(new Error("Email send failed"));

    const payload = {
      name: "John Doe",
      email: "john@example.com",
      title: "Test Email",
      message: "This is a test message",
      captchaToken: "fake-captcha-token",
    };

    const res = await request(app)
      .post("/api/email")
      .send(payload)
      .set("Accept", "application/json");

    console.log("Response body:", res.body);

    expect(res.status).toBe(500);
    expect(res.body).toBeDefined();
  });
});
