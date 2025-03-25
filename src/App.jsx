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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="light">
        <div className="bg-neutral-100 dark:bg-neutral-900">
          {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
          <div
            className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}
          >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home menuOpen={menuOpen} />
            <About menuOpen={menuOpen} />
            <Projects menuOpen={menuOpen} />
            <Contact menuOpen={menuOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
