import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkill = ["React", "SQL", "BLAH", "BLAH"];
  const backendSkill = ["Azure", "MVC", "BLAH", "BLAH"];

  return (
    <section
      id="about"
      className="min-h-screen flex itens-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I a good developer <br />
              Blah Blah Blah
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkill.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition 
                                   "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkill.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition 
                                   "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all">
              <h3 className="text-xl fount-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BS in Crap</strong> - xyz school 2016-2020
                </li>
                <li>something else</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-1 transition-all">
              <h3 className="text-xl fount-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <h4 className="font-semibold">
                  Software Engineer at ABC Corp (2015-2020)
                </h4>
                <p>Developed some crap for someone to use</p>
              </div>
              <div className="space-y-4 text-gray-300">
                <h4>Software Engineer at xyz Corp (2015-2020)</h4>
                <p>Developed some crap for someone to use</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
