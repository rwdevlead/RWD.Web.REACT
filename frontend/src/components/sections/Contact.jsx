import { useState, useCallback } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import debounce from "lodash.debounce";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, error: null });
  const [formDisabled, setFormDisabled] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // Store token for submission
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Define the debounced async function *once*
  const debouncedFn = debounce(async (payload) => {
    try {
      const res = await axios.post("http://localhost:3000/api/email", payload);
      console.log(res);
      setStatus({ success: true, error: null });
      setForm({ name: "", email: "", title: "", message: "" });
      setFormDisabled(true);
    } catch (err) {
      console.error(err);
      setStatus({
        success: false,
        error:
          "There was a problem sending your message. Please try again later.",
      });
    }
  }, 500);

  // Memoize the handler that calls the debounced function
  const debouncedSubmit = useCallback(
    (payload) => {
      debouncedFn(payload);
    },
    [debouncedFn] // Note: lodash debounce returns the same function always, so this is fine
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }
    const payload = {
      ...form,
      captchaToken,
    };
    debouncedSubmit(payload);
  };

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <section id="contact" className="section-container" data-nosnippet>
      <meta name="robots" content="noindex, nofollow" />
      <RevealOnScroll effect="scaleUp">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="mt-4 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="time" value={getDate()} />

            {/* <div> */}
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={50}
              pattern="^[a-zA-Z\s'-]+$"
              placeholder="Your name ..."
              onChange={handleChange}
              value={form.name}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              aria-required="true"
            />
            {/* </div>

            <div> */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={250}
              placeholder="Your email (example@gmail.com)"
              onChange={handleChange}
              value={form.email}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              aria-required="true"
            />
            {/* </div>

            <div> */}
            <label htmlFor="title" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              maxLength={80}
              pattern="^[\w\s.-]+$"
              placeholder="Your subject ..."
              onChange={handleChange}
              value={form.title}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              aria-required="true"
            />
            {/* </div>

            <div> */}
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={500}
              pattern="^[\w\s.,!?'\-()]+$"
              placeholder="Your message ..."
              onChange={handleChange}
              value={form.message}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                  dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              aria-required="true"
            />
            {/* </div> */}

            {siteKey ? (
              <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
            ) : (
              <span>Loading CAPTCHA...</span>
            )}

            <button
              type="submit"
              disabled={formDisabled}
              className={`w-full py-3 px-6 rounded font-medium transition relative overflow-hidden
                ${
                  formDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:-translate-y-0.5 hover:shadow-[0_0_115px_rgba(59,130,246,0.4)] cursor-pointer"
                }`}
            >
              {formDisabled ? "Message Sent" : "Send Message"}
            </button>

            {status.error && (
              <p className="text-white mt-2 text-sm">{status.error}</p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
