import { RevealOnScroll } from "../RevealOnScroll";
import nugetLight from "../../assets/images/NuGet_Logo.svg";
import nugetDark from "../../assets/images/NuGet_Logo.svg";

import githubLight from "../../assets/images/GitHub_Light.svg";
import githubDark from "../../assets/images/GitHub_Dark.svg";

import linkedinLight from "../../assets/images/Linkedin_logo.svg";
import linkedinDark from "../../assets/images/Linkedin_logo.svg";

import { useDarkMode } from "../../hooks/useDarkMode";

export const About = () => {
  const { theme } = useDarkMode(); // Get the theme from the hook

  // Determine if dark mode is active
  const isDarkMode =
    theme === "dark" ||
    (theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <section id="about" className="section-container">
      <RevealOnScroll effect="scaleUp">
        <div className="max-w-3xl mx-auto px-4">
          <h2>About Me</h2>

          <div className="rounded-xl p-8 border-white/20 border ">
            <p className="mb-6">
              I’ve been doing what I love for many years—building software that
              solves real problems and makes life easier. Along the way, I’ve
              had the chance to work across industries like finance and
              manufacturing, lead teams, and deliver solutions that really make
              an impact. I enjoy creating software that’s secure, scalable, and
              easy to maintain, and I get a lot of energy from helping teams
              grow and succeed together.
            </p>

            {/* Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {/* LinkedIn */}
              <div
                className="rounded-2xl border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                  <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                    LinkedIn
                  </h3>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400">
                    Professional Profile
                  </h4>

                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                    I connect with other professionals and share my work on
                    LinkedIn.
                  </p>
                  <a
                    href="https://stackoverflow.com/users/4505594/jstevens"
                    className="block w-full mt-10"
                  >
                    <img
                      className="w-full h-auto object-contain object-center"
                      src={isDarkMode ? linkedinDark : linkedinLight}
                      alt="LinkedIn Logo"
                    />
                  </a>
                </div>
              </div>

              {/* NuGet Packages */}
              <div
                className="rounded-2xl border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                  <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                    NuGet Packages
                  </h3>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400">
                    Shared Libraries
                  </h4>

                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                    I share some of my common code with others through NuGet
                    packages.
                  </p>
                  <a
                    href="https://www.nuget.org/profiles/RealWorldDevelopers"
                    className="block w-full mt-4"
                  >
                    <img
                      className="w-full h-auto object-contain"
                      src={isDarkMode ? nugetDark : nugetLight}
                      alt="NuGet Logo"
                    />
                  </a>
                </div>
              </div>

              {/* Source Code */}
              <div
                className="rounded-2xl border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 border-b border-gray-300 dark:border-gray-600">
                  <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                    GitHub Repositories
                  </h3>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400">
                    Open Source Projects
                  </h4>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                    I share many of my application projects with others on
                    GitHub.
                  </p>
                  <a
                    href="https://github.com/RealWorldDevelopers"
                    className="block w-full mt-10"
                  >
                    <img
                      className="w-full h-auto object-contain object-center"
                      src={isDarkMode ? githubDark : githubLight}
                      alt="GitHub Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
