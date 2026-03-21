import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "StartSmart – AI Startup Evaluator",
    desc: "AI-powered platform to evaluate and score startup ideas using SWOT analysis, innovation, and feasibility metrics.",
    tech: "React • Node • Express • MongoDB • Gemini API",
    link: "https://github.com/lithigesh/StartSmart",
    liveDemo: "https://startsmart-frontend.vercel.app/",
    color: "bg-white/5",
    accentColor: "#ffffff",
    gif: "/start-smart.png", // Replace with actual image when available
  },
  {
    title: "Music Genre Classification",
    desc: "ML model to classify audio tracks by genre using spectral analysis and deep learning techniques.",
    tech: "Python • TensorFlow",
    link: "https://github.com/kavinbalaji2005/MusicGenreClassification",
    color: "bg-white/5",
    accentColor: "#ffffff",
    gif: "/music-genre.png",
  },
  {
    title: "Library System",
    desc: "Comprehensive management solution for library operations with full CRUD functionality.",
    tech: "Python • Tkinter",
    link: "https://github.com/kavinbalaji2005/LibraryManagementSystem",
    color: "bg-white/5",
    accentColor: "#ffffff",
    gif: "/library-system.png",
  },
  {
    title: "Smart Home IoT",
    desc: "Real-time appliance control system with mobile integration and sensor monitoring.",
    tech: "C++ • IoT",
    link: "https://github.com/kavinbalaji2005/SmartApplianceManagerIoT",
    color: "bg-white/5",
    accentColor: "#ffffff",
    gif: "/smart-home.png",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);

  return (
    <div id="projects" ref={ref} className="bg-background relative">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="mb-24 text-center md:text-left">
           <TextReveal
             text="Selected Work."
             as="h2"
             className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
           />
           <FadeIn delay={0.2}>
             <p className="text-text-secondary text-xl mt-4 max-w-xl">
               A showcase of technical depth and product thinking.
             </p>
           </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT: Scrollable Content List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[30vh] pb-[30vh]">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onViewportEnter={() => setActiveProject(i)}
                className="flex flex-col justify-center min-h-[40vh]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl md:text-4xl font-black text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                
                <span className="text-sm font-bold tracking-widest text-[var(--accent)] uppercase mb-3" style={{ "--accent": project.accentColor }}>
                   {project.tech}
                </span>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white/20 underline-offset-8 transition-all">
                    {project.title}
                  </a>
                </h3>

                {/* Mobile Visual */}
                <div className={`lg:hidden w-full aspect-video rounded-2xl mb-4 overflow-hidden relative bg-gradient-to-br border border-border shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] ${project.color}`}>
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />
                   <div className="absolute inset-0 flex items-center justify-center p-4">
                      {project.gif ? (
                         <img src={project.gif} alt={project.title} className="w-full h-full object-cover rounded-xl shadow-lg border border-white/10" />
                      ) : (
                         <span className="text-5xl md:text-7xl font-black text-white/10 tracking-tighter">
                           {project.title.charAt(0)}
                         </span>
                      )}
                   </div>
                </div>
                
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="flex items-center gap-6 mt-2">
                   <a 
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors"
                   >
                     <Github size={18} />
                     <span>View Code</span>
                   </a>
                   
                   {project.liveDemo && (
                     <a 
                       href={project.liveDemo}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 text-[var(--accent)] border-b border-[var(--accent)]/30 pb-1 hover:border-[var(--accent)] transition-colors"
                       style={{ "--accent": project.accentColor }}
                     >
                       <ExternalLink size={18} />
                       <span>Live Demo</span>
                     </a>
                   )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Sticky Visual (Desktop Only) */}
          <div className="hidden lg:block w-1/2 sticky top-0 h-screen flex flex-col justify-center py-24">
             <div className="relative w-full aspect-square max-h-[600px] rounded-[40px] overflow-hidden glass-panel">
                <AnimatePresence mode="popLayout">
                   <motion.div
                     key={activeProject}
                     initial={{ opacity: 0, scale: 0.98, y: 20, filter: "blur(10px)" }}
                     animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                     exit={{ opacity: 0, scale: 0.98, y: -20, filter: "blur(10px)" }}
                     transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                     className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].color}`}
                   >
                     {/* Decorative gradients inside the card */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.5),transparent)]" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-white/5 rounded-3xl border border-border shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden">
                        {projects[activeProject].gif ? (
                           <motion.img 
                             src={projects[activeProject].gif} 
                             alt={projects[activeProject].title} 
                             className="w-full h-full object-cover"
                             initial={{ scale: 1.1 }}
                             animate={{ scale: 1 }}
                             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                           />
                        ) : (
                           <span className="text-7xl font-black text-white/10 tracking-tighter">
                             {projects[activeProject].title.charAt(0)}
                           </span>
                        )}
                     </div>
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
