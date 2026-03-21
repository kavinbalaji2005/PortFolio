import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiGit, SiMysql,
  SiMongodb, SiHtml5, SiCss3, SiCplusplus, SiC, SiArduino,
  SiAmazonwebservices, SiEspressif
} from "react-icons/si";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

// Brand colors for hover effects
const brandColors = {
  HTML: "#e34f26",
  CSS: "#1572b6",
  JavaScript: "#f7df1e",
  React: "#61dafb",
  "Node.js": "#68a063",
  MySQL: "#00758f",
  MongoDB: "#47a248",
  Python: "#3776ab",
  "C++": "#00599c",
  C: "#555555",
  Arduino: "#00979d",
  ESP32: "#e7352c",
  AWS: "#ff9900",
  Git: "#f05032",
};

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-20 relative overflow-hidden">
      {/* Background Ambience */}
      {/* Background Ambience Removed */}

      <div className="max-w-7xl w-full z-10 flex flex-col gap-10">
        <div className="text-center space-y-6">
          <TextReveal
            text="Stack"
            as="h2"
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter justify-center"
          />
          <FadeIn delay={0.2}>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto font-light">
              What I build with.
            </p>
          </FadeIn>
        </div>


        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          
          {/* Card 1: Frontend - Slow scroll */}
          <ScrollReveal yOffset={40} className="md:col-span-2 h-full">
            <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10">
               <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Frontend Engine</h3>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <SkillItem name="React" icon={SiReact} delay={0} />
                  <SkillItem name="JavaScript" icon={SiJavascript} delay={0.1} />
                  <SkillItem name="HTML" icon={SiHtml5} delay={0.2} />
                  <SkillItem name="CSS" icon={SiCss3} delay={0.3} />
               </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2: Backend - Medium scroll */}
          <ScrollReveal yOffset={80} className="md:col-span-1 h-full">
            <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10">
               <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Backend & Cloud</h3>
               <div className="grid grid-cols-2 gap-4">
                  <SkillItem name="Node.js" icon={SiNodedotjs} delay={0.4} />
                  <SkillItem name="MongoDB" icon={SiMongodb} delay={0.5} />
                  <SkillItem name="MySQL" icon={SiMysql} delay={0.6} />
                  <SkillItem name="AWS" icon={SiAmazonwebservices} delay={0.7} />
               </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3: Systems - Fast scroll */}
          <ScrollReveal yOffset={120} className="md:col-span-1 h-full">
            <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10">
               <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Systems & IoT</h3>
               <div className="grid grid-cols-2 gap-4">
                  <SkillItem name="C++" icon={SiCplusplus} delay={0.8} />
                  <SkillItem name="C" icon={SiC} delay={0.9} />
                  <SkillItem name="Arduino" icon={SiArduino} delay={1.0} />
                  <SkillItem name="ESP32" icon={SiEspressif} delay={1.1} />
               </div>
            </SpotlightCard>
          </ScrollReveal>

           {/* Card 4: Tools - Infinite Marquee */}
          <ScrollReveal yOffset={60} className="md:col-span-2 h-full">
            <SpotlightCard className="h-full bg-black/40 backdrop-blur-xl border-white/10 overflow-hidden flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-white tracking-tight mb-6">Tools & Languages</h3>
               
               {/* Static Tools Grid */}
               <div className="flex flex-wrap gap-4">
                  {tools.map((tool, i) => (
                    <SkillItem 
                      key={i} 
                      name={tool.name} 
                      icon={tool.icon} 
                      delay={1.2 + (i * 0.1)} 
                    />
                  ))}
               </div>
            </SpotlightCard>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

const tools = [
  { name: "Python", icon: SiPython },
  { name: "Git", icon: SiGit },
];

function SkillItem({ name, icon: Icon, delay }) {
  const color = brandColors[name] || "#ffffff";
  
  return (
    <div 
      className="group/item flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-default hover:scale-105 hover:-translate-y-1 duration-200"
    >
      <div 
        className="text-2xl text-text-secondary group-hover/item:scale-110 transition-transform duration-300"
      >
        <span className="group-hover/item:text-[var(--brand-color)] transition-colors" style={{ "--brand-color": color }}>
          <Icon />
        </span>
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover/item:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
