import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, ChevronDown, ArrowRight } from "lucide-react";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax + fade for hero text
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Floating 3D Element Parallax - Mimicking Bevel's product shots
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [6, -6]);

  // Background Ambience
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      ref={ref}
      className="min-h-[100dvh] flex flex-col justify-center items-center bg-background px-6 relative overflow-hidden"
    >
      {/* ── Floating 3D Glass Element (Bevel Style) ── */}
      <motion.div
        style={{ y: cardY, rotate: cardRotate, x: 200 }}
        className="absolute right-[5%] top-[20%] w-64 h-80 hidden lg:block pointer-events-none z-0 opacity-40 grayscale-[50%]"
      >
        <div className="w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl relative overflow-hidden">

           {/* Abstract UI lines */}
           <div className="absolute top-8 left-8 right-8 h-2 bg-white/10 rounded-full" />
           <div className="absolute top-14 left-8 right-16 h-2 bg-white/5 rounded-full" />
           <div className="absolute top-24 left-8 right-8 bottom-8 border border-white/5 rounded-2xl" />
        </div>
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-5xl w-full z-10 flex flex-col items-center text-center gap-10"
      >


        <div className="space-y-4">
          <TextReveal
            text="Creating the Future of Web."
            as="h1"
            className="text-[clamp(2.5rem,6vw,6rem)] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] text-center"
            delay={0.2}
            stagger={0.05}
          />
          
          <FadeIn delay={0.6}>
             <h2 className="text-lg sm:text-2xl md:text-3xl text-text-secondary font-light tracking-wide max-w-2xl mx-auto px-4">
               <span className="text-white font-normal">Kavin Balaji S</span> — Full Stack Developer & Cloud Practitioner.
             </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="/Kavin_Balaji_CV.pdf"
              download="Kavin_Balaji_CV.pdf"
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 flex items-center gap-2"
            >
              <span>Download Resume</span>
              <Download size={20} className="transition-transform group-hover:translate-y-1" />
            </a>
            
            <div className="flex items-center gap-4 px-6 md:px-0">
               <span className="text-white/20 hidden sm:block">|</span>
               <div className="flex items-center gap-3">
                 <SocialLink href="https://github.com/kavinbalaji2005" icon={<Github size={20} />} />
                 <SocialLink href="https://www.linkedin.com/in/kavinbalaji2005/" icon={<Linkedin size={20} />} />
                 <SocialLink href="mailto:kavinbalaji@gmail.com" icon={<Mail size={20} />} />
               </div>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-white"
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-text-secondary transition-all hover:bg-white/10 hover:text-white hover:scale-110"
    >
      {icon}
    </a>
  );
}
