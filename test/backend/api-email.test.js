import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
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

    const response = await request(app)
      .post("/api/email")
      .send(badPayload)
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Validation failed");
    expect(response.body).toHaveProperty("details");

    // Optional: assert specific errors
    expect(response.body.details).toHaveProperty("name");
    expect(response.body.details).toHaveProperty("title");
    expect(response.body.details).toHaveProperty("message");
    expect(response.body.details.email[0]).toContain("Invalid email");
  });

  it("should return 200 and success true for valid input", async () => {
    // Arrange: set up mock response from axios
    axios.post.mockResolvedValue({
      data: { status: "mock success" },
    });

    const payload = {
      name: "Test User",
      email: "test@example.com",
      title: "Test Subject",
      message: "This is a test message.",
      captchaToken: "mocked-token",
    };

    // Act: perform POST request
    const response = await request(app)
      .post("/api/email")
      .send(payload)
      .set("Accept", "application/json");

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      result: { status: "mock success" },
    });

    // Verify axios was called
    expect(axios.post).toHaveBeenCalledOnce();
  });

  it("should return 500 and error message if axios call fails", async () => {
    axios.post.mockRejectedValue(new Error("Email service down"));

    const payload = {
      name: "Test User",
      email: "test@example.com",
      title: "Test Subject",
      message: "This is a test message.",
      captchaToken: "mocked-token",
    };

    const response = await request(app)
      .post("/api/email")
      .send(payload)
      .set("Accept", "application/json");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "Failed to send email" });

    expect(axios.post).toHaveBeenCalledOnce();
  });
});
