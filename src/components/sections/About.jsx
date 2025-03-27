import { RevealOnScroll } from "../RevealOnScroll";
import { Timeline } from "../Timeline";

export const About = ({ menuOpen }) => {
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
              About me blah blah blah skills. aldjfa;kdflajsl;kd kajflkajd lkajd
              djflda jfla jdflja dfjadlfk ajdfaljdf ajdfadfjldkjf aldjf akdjf
              aldjf ajd kfjd jfd djf djfdkfj dfj djfdkfjd jdkjf kdjf kdjf dkjf
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
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/10 dark:border-white/10  border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                &#x1F393; Education
              </h3>
              <ul className="list-disc list-inside text-neutral-900 dark:text-gray-300 space-y-2">
                <li>
                  <strong>B.S. Computer Science</strong> - Oregon State
                  University
                </li>
                <li>
                  <strong>B.S. Physics</strong> - Emory University
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> course1, course2,
                  course3
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                &#x1F4BC; Work Experience
              </h3>
              <div className="space-y-4 text-neutral-900 dark:text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Associate Government Consultant at Mercer (2020 - Present)
                  </h4>
                  <p>What I did at job...</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Data Analyst at FieldEdge (2018 - 2020)
                  </h4>
                  <p>What I did at job...</p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
        <Timeline />
      </RevealOnScroll>
    </section>
  );
};
