import { RevealOnScroll } from "../RevealOnScroll";
// import { useDarkMode } from "../../hooks/useDarkMode";

// import nugetLight from "../../assets/images/NuGet_Logo.svg";
// import nugetDark from "../../assets/images/NuGet_Logo.svg";

export const Projects = () => {
  // const { theme } = useDarkMode(); // Get the theme from the hook

  // // Determine if dark mode is active
  // const isDarkMode =
  //   theme === "dark" ||
  //   (theme === "auto" &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <section id="projects" className="section-container">
      <RevealOnScroll effect="scaleUp">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="mt-4 mb-6">Featured Projects</h2>

          <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition "
            >
              <h3>RWDevs.com</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "SPA", "PWA", "Tailwind CSS"].map(
                  (tech, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                      >
                        {tech}
                      </span>
                    );
                  }
                )}
              </div>
              <p className="text-gray-400 mb-4">(this site)</p>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rwdevlead/RWD.Web.REACT"
                  className="text-blue-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-teal-300 transition-colors my-4"
                >
                  Live →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition "
            >
              <h3>Home Lab</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Terraform", "Ansible", "Docker"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <p className="text-gray-400 mb-4">
                An Infrastructure as Code (IaC) setup that automates a homelab,
                handling VM creation, system setup, and app deployment with
                Terraform, Ansible, and Docker Compose.
              </p>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/rwdevlead/Homelab"
                  className="text-blue-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
