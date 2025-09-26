import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transform-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />

        {/* Floating mobile dark mode toggle */}
        <div className="fixed bottom-4 right-4 md:hidden z-50">
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
}

export default App;
