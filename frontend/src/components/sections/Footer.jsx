// src/components/layout/Footer.jsx
import { Github, Linkedin, Mail } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <section
      id="footer"
      className="flex items-center justify-center relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll effect="scaleUp">
        <footer className="mt-2  bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Real World Developers
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://github.com/rwdevlead"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/rwdevlead/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="/#contact"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Contact"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </footer>
      </RevealOnScroll>
    </section>
  );
};
