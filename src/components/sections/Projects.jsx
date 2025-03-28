import { RevealOnScroll } from "../RevealOnScroll";
import { SwiperComponent } from "../Swiper";

export const Projects = ({ menuOpen, darkMode }) => {
  const project1Tech = ["React", "Node.js", "AWS", "Docker"];

  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center py-20 ${menuOpen ? "opacity-20" : "opacity-100"}`}
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <SwiperComponent />
        </div>
      </RevealOnScroll>
    </section>
  );
};
