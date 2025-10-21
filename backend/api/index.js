import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import axios from "axios";
import { validate } from "./middleware/validate.js";
import { emailSchema } from "../../shared/schemas/emailSchema.js";

// Ensure we are resolving from the root of the monorepo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootEnvPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: rootEnvPath });

// console.log("Loaded env:", {
//   EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
//   EMAILJS_CU_TEMPLATE_ID: process.env.EMAILJS_CU_TEMPLATE_ID,
// });

const app = express();

// Helmet security headers for Vercel preview & production
app.use(
  helmet({
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: { policy: "same-origin" },
    strictTransportSecurity: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
  })
);

// CORS only for your frontend
app.use(
  cors({
    origin: ["https://your-frontend.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Express API running on Vercel");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", version: "1.0.0" });
});

// Email POST endpoint
app.post("/api/email", validate(emailSchema), async (req, res) => {
  const { name, message, title, email, captchaToken } = req.validatedBody;

  // Verify CAPTCHA with Google
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  const response = await fetch(verificationURL, { method: "POST" });
  const reCapdata = await response.json();

  if (!reCapdata.success) {
    return res.status(400).json({
      message: "CAPTCHA failed, try again.",
      token: captchaToken,
      secretKey: secretKey ? secretKey.slice(-5) : "missing",
    });
  }

  const data = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_CU_TEMPLATE_ID,
    user_id: process.env.EMAILJS_PUBLICKEY,
    accessToken: process.env.EMAILJS_ACCESSTOKEN,
    template_params: {
      name,
      email,
      title,
      message,
      "g-recaptcha-response": captchaToken,
    },
  };

  try {
    const emailURL = process.env.EMAILJS_URL;
    const response = await axios.post(emailURL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.status(200).json({ success: true, result: response.data });
  } catch (error) {
    console.error(
      `EmailJS call failed (${emailURL}):`,
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default app;

// Local dev mode
if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
