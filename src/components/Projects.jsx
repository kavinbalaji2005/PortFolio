import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "StartSmart",
    subtitle: "AI Startup Evaluator",
    desc: "AI-powered platform to evaluate and score startup ideas using SWOT analysis, innovation, and feasibility metrics.",
    tech: ["React", "Node", "Express", "MongoDB", "Gemini API"],
    link: "https://github.com/lithigesh/StartSmart",
    liveDemo: "https://startsmart-frontend.vercel.app/",
    gif: "/start-smart.png",
  },
  {
    title: "Document Management",
    subtitle: "System",
    desc: "Secure document storage platform featuring complete version control with history, OCR text extraction, and AI-generated version diff summaries.",
    tech: ["React.js", "Flask", "MySQL", "Mistral OCR", "OpenRouter API"],
    link: "https://github.com/kavinbalaji2005/DocumentManagementSystem",
    gif: "/document-management.png",
  },
  {
    title: "Music Genre",
    subtitle: "Classification",
    desc: "ML model to classify audio tracks by genre using spectral analysis and deep learning techniques.",
    tech: ["Python", "TensorFlow"],
    link: "https://github.com/kavinbalaji2005/MusicGenreClassification",
    gif: "/music-genre.png",
  },
  {
    title: "Library",
    subtitle: "System",
    desc: "Comprehensive management solution for library operations with full CRUD functionality.",
    tech: ["Python", "Tkinter"],
    link: "https://github.com/kavinbalaji2005/LibraryManagementSystem",
    gif: "/library-system.png",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const calculateScrollWidth = () => {
      if (scrollRef.current) {
        setScrollWidth(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };

    calculateScrollWidth();

    let resizeObserver;
    if (scrollRef.current) {
      resizeObserver = new ResizeObserver(() => calculateScrollWidth());
      resizeObserver.observe(scrollRef.current);
    }

    window.addEventListener("resize", calculateScrollWidth);
    return () => {
      window.removeEventListener("resize", calculateScrollWidth);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll transformation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollWidth]
  );

  return (
    <div id="projects" className="bg-background relative">
      {/* Section header */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 pt-20 pb-12">
        <TextReveal
          text="Projects."
          as="h2"
          className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mt-4"
        />
        <FadeIn delay={0.2}>
          <p className="text-white/60 text-lg mt-3 max-w-md font-light">
            Things I've built.
          </p>
        </FadeIn>
      </div>

      {/* ── Horizontal scroll gallery (Desktop) ── */}
      <div
        ref={containerRef}
        className="hidden lg:block relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            ref={scrollRef}
            style={{ x }}
            className="flex gap-8 pl-16 pr-16"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Vertical stack (Mobile) ── */}
      <div className="lg:hidden px-6 pb-16 flex flex-col gap-8">
        {projects.map((project, i) => (
          <MobileProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="group relative w-[80vw] max-w-[900px] h-[70vh] rounded-[2rem] overflow-hidden flex-shrink-0 border border-white/20 hover:border-white/40 bg-white/[0.01] transition-colors duration-300"
    >
      {/* Top Left Numbering */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 pointer-events-none">
        <span className="text-5xl md:text-7xl font-display font-black text-white/50 tracking-tighter leading-none select-none">
          {index + 1}
        </span>
      </div>

      {/* Project image with parallax */}
      <a
        href={project.liveDemo || project.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="View"
        className="absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="absolute inset-0 overflow-hidden">
          {project.gif ? (
            <img
              src={project.gif}
              alt={`${project.title} ${project.subtitle}`}
              className="w-full h-full object-cover scale-[1.1] group-hover:scale-100 transition-transform duration-[1.2s] ease-out brightness-[0.4] group-hover:brightness-[0.6]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent" />
          )}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </a>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white bg-white/[0.08] border border-white/[0.15] rounded-full px-3.5 py-1 backdrop-blur-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-2">
          {project.title}
          <span className="block text-white/70">{project.subtitle}</span>
        </h3>

        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-6 font-light">
          {project.desc}
        </p>

        {/* Action links */}
        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GitHub"
            className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors duration-300 border-b border-white/10 hover:border-white/30 pb-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            <span>Source</span>
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open"
              className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors duration-300 border-b border-white/10 hover:border-white/30 pb-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MobileProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-20%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/20 bg-white/[0.01]"
    >
      {/* Top Left Numbering */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none">
        <span className="text-4xl font-display font-black text-white/50 tracking-tighter leading-none select-none">
          {index + 1}
        </span>
      </div>

      <a
        href={project.liveDemo || project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 block"
      >
        {project.gif ? (
          <img
            src={project.gif}
            alt={`${project.title} ${project.subtitle}`}
            className="w-full h-full object-cover brightness-[0.35]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </a>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white bg-white/[0.08] border border-white/[0.15] rounded-full px-3 py-1 backdrop-blur-md"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-white leading-tight mb-1.5">
          {project.title}{" "}
          <span className="text-white/70">{project.subtitle}</span>
        </h3>

        <p className="text-xs text-white/60 leading-relaxed mb-4 font-light line-clamp-2">
          {project.desc}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
          >
            <Github size={12} />
            <span>Source</span>
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
            >
              <ExternalLink size={12} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
