import { Sun, Moon } from "lucide-react";

export const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  darkMode,
  toggleDarkMode,
  isBlinking,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-neutral-900 dark:text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        className={`text-2xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#about"
        className={`text-2xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#projects"
        className={`text-2xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`text-2xl font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        onClick={() => setMenuOpen(false)}
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
  );
};
