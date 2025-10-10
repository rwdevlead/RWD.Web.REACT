import { RevealOnScroll } from "../RevealOnScroll";
import headerLight from "../../assets/images/RWDevs-header-light.svg";
import headerDark from "../../assets/images/RWDevs-header-dark.svg";
import { useDarkMode } from "../../hooks/useDarkMode";

export const Home = () => {
  const { theme } = useDarkMode(); // Get the theme from the hook

  // Determine if dark mode is active
  const isDarkMode =
    theme === "dark" ||
    (theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <section id="home" className="section-container">
      <RevealOnScroll effect="scaleUp">
        <div>
          <div className="relative overflow-hidden">
            <img
              className="w-full h-auto object-cover object-center"
              src={isDarkMode ? headerDark : headerLight}
              alt="Header"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              A sample of my code projects.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="flex-1 max-w-[150px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] 
              text-center bg-blue-500 text-white py-3 px-6 rounded font-medium 
              transition relative overflow-hidden 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
              text-sm sm:text-base md:text-lg md:py-4 md:px-8"
            >
              Featured Projects
            </a>
            <a
              href="#contact"
              className="flex-1 max-w-[150px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] 
              text-center border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
              transition-all duration-500 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10
              text-sm sm:text-base md:text-lg md:py-4 md:px-8"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
