import { useRef } from "react";
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
  SiC,
  SiAmazonwebservices,
  SiExpress,
  SiSqlite,
  SiPostman,
  SiDocker,
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
  "React.js": "#61dafb",
  "Express.js": "#ffffff",
  "Node.js": "#68a063",
  AWS: "#ff9900",
  MySQL: "#00758f",
  MongoDB: "#47a248",
  SQLite: "#003b57",
  Postman: "#ff6c37",
  C: "#555555",
  Python: "#3776ab",
  Git: "#f05032",
  Docker: "#2496ed",
};

export default function Skills() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full z-10 flex flex-col gap-12">
        <div className="text-center space-y-4">
          <TextReveal
            text="Tech"
            as="h2"
            mode="char"
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter justify-center"
          />
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
              What I build with.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-2">
          {/* Card 1: Frontend */}
          <ScrollReveal yOffset={40} className="lg:col-span-1 h-full">
            <SpotlightCard
              className="h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/20 hover:border-white/40 p-10 md:p-12 transition-all duration-300"
              spotlightColor="rgba(255, 255, 255, 0.08)"
            >
              <h3 className="text-xl font-display font-bold text-white tracking-tight mb-6">
                Frontend Engine
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <SkillItem name="React.js" icon={SiReact} />
                <SkillItem name="JavaScript" icon={SiJavascript} />
                <SkillItem name="HTML" icon={SiHtml5} />
                <SkillItem name="CSS" icon={SiCss3} />
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2: Backend & Databases */}
          <ScrollReveal yOffset={80} className="lg:col-span-1 h-full">
            <SpotlightCard
              className="h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/20 hover:border-white/40 p-10 md:p-12 transition-all duration-300"
              spotlightColor="rgba(255, 255, 255, 0.08)"
            >
              <h3 className="text-xl font-display font-bold text-white tracking-tight mb-6">
                Backend & Databases
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <SkillItem name="Node.js" icon={SiNodedotjs} />
                <SkillItem name="Express.js" icon={SiExpress} />
                <SkillItem name="MySQL" icon={SiMysql} />
                <SkillItem name="MongoDB" icon={SiMongodb} />
                <SkillItem name="SQLite" icon={SiSqlite} />
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3: Tools & Languages */}
          <ScrollReveal yOffset={60} className="lg:col-span-2 h-full">
            <SpotlightCard
              className="h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/20 hover:border-white/40 p-10 md:p-12 transition-all duration-300 overflow-hidden flex flex-col justify-center"
              spotlightColor="rgba(255, 255, 255, 0.08)"
            >
              <h3 className="text-xl font-display font-bold text-white tracking-tight mb-6">
                Tools & Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillItem name="C" icon={SiC} />
                <SkillItem name="Python" icon={SiPython} />
                <SkillItem name="AWS" icon={SiAmazonwebservices} />
                <SkillItem name="Postman" icon={SiPostman} />
                <SkillItem name="Git" icon={SiGit} />
                <SkillItem name="Docker" icon={SiDocker} />
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ name, icon: Icon }) {
  const color = brandColors[name] || "#ffffff";

  return (
    <div
      className="group/item flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all cursor-default duration-300"
    >
      <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover/item:scale-110 flex items-center justify-center shrink-0">
        <span
          style={{ color }}
          className="opacity-85 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <Icon />
        </span>
      </div>
      <span className="text-sm sm:text-base font-semibold text-white/80 group-hover/item:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}
