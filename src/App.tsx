import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Process } from "./components/Process";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { GitHubStats } from "./components/GitHubStats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
