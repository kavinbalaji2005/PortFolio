import { useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiC,
  SiArduino,
  SiAmazonwebservices,
  SiEspressif,
} from "react-icons/si";

export default function SkillsPortfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const skills = [
    {
      name: "HTML",
      icon: SiHtml5,
      color: "#E34F26",
      level: 95,
      category: "frontend",
    },
    {
      name: "CSS",
      icon: SiCss3,
      color: "#1572B6",
      level: 90,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      level: 90,
      category: "frontend",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      level: 85,
      category: "frontend",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      level: 75,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      level: 75,
      category: "backend",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
      level: 80,
      category: "programming",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      color: "#00599C",
      level: 70,
      category: "programming",
    },
    {
      name: "C",
      icon: SiC,
      color: "#A8B9CC",
      level: 75,
      category: "programming",
    },
    {
      name: "Arduino",
      icon: SiArduino,
      color: "#00979D",
      level: 80,
      category: "iot",
    },
    {
      name: "ESP32",
      icon: SiEspressif,
      color: "#E7352C",
      level: 75,
      category: "iot",
    },
    {
      name: "AWS",
      icon: SiAmazonwebservices,
      color: "#FF9900",
      level: 70,
      category: "tools",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
      level: 85,
      category: "tools",
    },
  ];

  const filterOptions = [
    { key: "all", label: "All Skills", count: skills.length },
    {
      key: "frontend",
      label: "Frontend",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    {
      key: "backend",
      label: "Backend",
      count: skills.filter((s) => s.category === "backend").length,
    },
    {
      key: "programming",
      label: "Programming",
      count: skills.filter((s) => s.category === "programming").length,
    },
    {
      key: "iot",
      label: "IoT",
      count: skills.filter((s) => s.category === "iot").length,
    },
    {
      key: "tools",
      label: "Tools",
      count: skills.filter((s) => s.category === "tools").length,
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="relative w-full py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-geist bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <motion.button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeFilter === option.key
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white shadow-xl shadow-purple-500/30"
                  : "border-2 border-white/10 bg-neutral-900/50 text-gray-300 hover:border-white/30 hover:bg-neutral-800/80 hover:shadow-lg"
              }`}
            >
              {activeFilter === option.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {option.label}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    activeFilter === option.key
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-gray-400"
                  }`}
                >
                  {option.count}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <TiltCard
                  className="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/30 hover:shadow-2xl h-full"
                  style={{
                    boxShadow: `0 0 0 0 ${skill.color}00`,
                  }}
                >
                  {/* Animated gradient border on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}15, transparent 60%)`,
                    }}
                  />

                  {/* Glowing orb effect */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    {/* Icon with enhanced styling */}
                    <motion.div
                      className="relative p-4 rounded-2xl transition-all duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        boxShadow: `0 0 0 0 ${skill.color}00`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 30px 5px ${skill.color}40`,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Icon glow ring */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: `inset 0 0 20px ${skill.color}30`,
                        }}
                      />
                      <Icon
                        className="w-10 h-10 transition-all duration-500 group-hover:rotate-12 relative z-10"
                        style={{ color: skill.color }}
                      />
                    </motion.div>

                    {/* Name with enhanced typography */}
                    <h3 className="text-sm font-bold text-white text-center tracking-wide transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Decorative corner glow - enhanced */}
                  <div
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                    style={{ backgroundColor: skill.color }}
                  />
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
