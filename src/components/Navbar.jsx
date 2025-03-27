import { Sun, Moon } from "lucide-react";

export const Navbar = ({
  menuOpen,
  setMenuOpen,
  darkMode,
  toggleDarkMode,
  isBlinking,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-lg ${menuOpen ? "opacity-20" : "opacity-100"}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-black dark:text-white"
          >
            Ryan<span className="text-blue-500"> Kim</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-neutral-900 dark:text-neutral-100"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-neutral-800 dark:text-gray-300 hover:text-neutral-500 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-neutral-800 dark:text-gray-300 hover:text-neutral-500 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-neutral-800 dark:text-gray-300 hover:text-neutral-500 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-neutral-800 dark:text-gray-300 hover:text-neutral-500 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
            <button
              className={`text-neutral-800 dark:text-gray-300 cursor-pointer p-2 rounded-full bg-gray-400 dark:bg-gray-700 ${isBlinking ? "blink" : ""}`}
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun size={24} className="text-yellow-300 fill-yellow-300" />
              ) : (
                <Moon size={24} className="text-neutral-100 fill-neutral-100" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
