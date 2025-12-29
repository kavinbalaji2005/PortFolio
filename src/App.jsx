import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ParticlesBackground from "./components/ParticlesBackground";
import AnimatedBackground from "./components/AnimatedBackground";
import SectionReveal from "./components/SectionReveal";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <div className="relative z-[5]">
        <Navbar />
        <main>
          <Hero />
          <SectionReveal>
            <About />
          </SectionReveal>
          <SectionReveal>
            <Skills />
          </SectionReveal>
          <SectionReveal>
            <Projects />
          </SectionReveal>
          <SectionReveal>
            <Certifications />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
