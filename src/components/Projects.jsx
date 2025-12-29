import { Github, Code, Globe, Cpu } from "lucide-react";
import TiltCard from "./TiltCard";

export default function ProjectsPortfolio() {
  const projects = [
    {
      title: "Music Genre Classification",
      description:
        "A machine learning project to automatically classify music tracks into genres based on audio features using advanced ML algorithms.",
      tech: ["Python", "Librosa", "scikit-learn", "TensorFlow"],
      github: "https://github.com/kavinbalaji2005/MusicGenreClassification",
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Library Management System",
      description:
        "An application made using Python for managing all facets of library operations with intuitive GUI and data management.",
      tech: ["Python", "Tkinter", "Pandas", "OpenPyXL"],
      github: "https://github.com/kavinbalaji2005/LibraryManagementSystem",
      icon: Code,
      gradient: "from-blue-500 to-teal-500",
    },
    {
      title: "Cricket Player Manager",
      description:
        "A full-stack web application designed to help cricket clubs and teams efficiently manage their player database and statistics.",
      tech: ["React.js", "Node.js", "Express.js", "SQL"],
      github: "https://github.com/kavinbalaji2005/PlayerManagementDB",
      icon: Globe,
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Smart Appliance Manager",
      description:
        "An IoT-based home automation system to automatically control and monitor appliances in real time with mobile integration.",
      tech: ["C++", "MQTT", "Node-RED", "Blynk"],
      github: "https://github.com/kavinbalaji2005/SmartApplianceManagerIoT",
      icon: Cpu,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="relative w-full py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-geist bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <TiltCard
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/80"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}
                ></div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
