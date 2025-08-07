import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import debounce from "lodash.debounce";
import axios from "axios";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, error: null });
  const [formDisabled, setFormDisabled] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = debounce(async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        captchaToken: "",
      };

      // send request
      const res = await axios.post("http://localhost:3000/api/email", payload);

      // log response
      console.log(res);

      // update status
      setStatus({ success: true, error: null });

      // Clear the form
      setForm({
        name: "",
        email: "",
        title: "",
        message: "",
      });

      // Disable further submissions (one only)
      setFormDisabled(true);
    } catch (err) {
      // log out error
      console.error(err);
      // update status

      setStatus({
        success: false,
        error:
          "There was a problem sending your message. Please try again later.",
      });
    }
  }, 1000); // 1-second debounce (avoids double click)

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="time" value={getDate()} />

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={50}
                pattern="^[a-zA-Z\s'-]+$"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your name ..."
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={250}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your email (example@gmail.com)"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="title"
                name="title"
                required
                maxLength={80}
                pattern="^[\w\s.-]+$"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your subject ..."
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={500}
                pattern="^[\w\s.,!?'\-()]+$"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message ..."
                onChange={handleChange}
              />
            </div>

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
};
