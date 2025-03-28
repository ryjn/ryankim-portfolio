import { RevealOnScroll } from "../RevealOnScroll";
import { Timeline } from "../Timeline";

export const About = ({ menuOpen, darkMode }) => {
  const frontendSkills = [
    "React",
    "Vue",
    "Typescript",
    "TailwindCSS",
    "HTML",
    "CSS",
  ];

  const backendSkills = ["Node.js", "Python", "SQL", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center py-20 ${menuOpen ? "opacity-20" : "opacity-100"}`}
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 border hover:-translate-y-1 transition-all">
            <p className="text-neutral-800 dark:text-white mb-6">
              I'm a data-driven analyst with a background in healthcare data and
              a passion for software engineering. With a degree in Physics and
              Computer Science, and hands-on experience working on various
              projects, I thrive at solving complex problems with efficient and
              scalable solutions. I'm eager to transition into a software
              engineering role where I can leverage my analytical mindset and
              technical skills to build impactful applications!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-neutral-800 dark:text-white font-bold mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-neutral-800 dark:text-white font-bold mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Timeline darkMode={darkMode} />
      </RevealOnScroll>
    </section>
  );
};
