import { ScrollProvider } from "./components/ScrollContext";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <ScrollProvider>
      {/* Skip to content link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navigation />

      <Layout>
        <section id="home" aria-label="Home" className="relative">
          <Hero />
        </section>

        <section id="about" aria-label="About" className="relative">
          <About />
        </section>

        <section id="skills" aria-label="Skills" className="relative">
          <Skills />
        </section>

        <section id="projects" aria-label="Projects" className="relative">
          <Projects />
        </section>

        <section id="certifications" aria-label="Certifications" className="relative">
          <Certifications />
        </section>

        <section id="contact" aria-label="Contact" className="relative">
          <Contact />
        </section>
      </Layout>
    </ScrollProvider>
  );
}

export default App;
