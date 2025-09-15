import { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import logoLight from "../assets/images/globe-light.png";
import logoDark from "../assets/images/globe-dark.png";
import { useDarkMode } from "../hooks/useDarkMode";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const { theme } = useDarkMode(); // Get the theme from the hook

  // Determine if dark mode is active
  const isDarkMode =
    theme === "dark" ||
    (theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  console.log("Navbar theme:", theme); // Debugging
  console.log("Navbar isDarkMode:", isDarkMode); // Debugging

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10">
              <img
                src={isDarkMode ? logoDark : logoLight}
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <a
              href="#home"
              className="font-mono text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
            >
              RWDevs<span className="text-blue-500">.com</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div
            className="md:hidden w-7 h-5 flex items-center justify-center cursor-pointer text-gray-900 dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="text-2xl">&#9776;</span>
          </div>

          {/* Desktop menu + Dark mode toggle */}
          <div className="hidden md:flex items-center space-x-8 font-mono">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
