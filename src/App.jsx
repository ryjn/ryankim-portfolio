import "./App.css";
import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Timeline } from "./components/Timeline";
import { SwiperComponent } from "./components/Swiper";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const toggleDarkMode = () => {
    setIsBlinking(true);
    setDarkMode(!darkMode);
    setTimeout(() => setIsBlinking(false), 300);
  };

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="bg-neutral-100 dark:bg-neutral-900">
          {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
          <div
            className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}
          >
            <Navbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isBlinking={isBlinking}
            />
            <MobileMenu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isBlinking={isBlinking}
            />
            <Home menuOpen={menuOpen} />
            <About menuOpen={menuOpen} darkMode={darkMode} />
            <Projects menuOpen={menuOpen} darkMode={darkMode} />
            <Contact menuOpen={menuOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
