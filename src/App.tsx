import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { GitHubStats } from "./components/GitHubStats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-canvas-default text-fg-default scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
