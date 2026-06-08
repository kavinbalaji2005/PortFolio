import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";
import MagneticButton from "./MagneticButton";

const roles = [
  "Full Stack Developer",
  "Cloud Architect",
  "Problem Solver",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax + fade for hero text — enhanced
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  // Role ticker
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-[100dvh] flex flex-col justify-center items-center bg-background px-6 relative overflow-hidden"
    >
      {/* ── Ambient gradient orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, rgba(41, 151, 255, 0.8), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(191, 90, 242, 0.8), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <motion.div
        style={{
          y: isDesktop ? y : 0,
          opacity,
          scale: isDesktop ? scale : 1,
        }}
        className="max-w-6xl w-full z-10 flex flex-col items-center text-center gap-6"
      >
        {/* Greeting */}
        <FadeIn delay={0.3}>
          <span className="text-sm md:text-base text-white/60 tracking-[0.2em] uppercase font-display">
            Hello, this is
          </span>
        </FadeIn>

        {/* Name — character-by-character reveal */}
        <TextReveal
          text="Kavin Balaji"
          as="h1"
          mode="char"
          className="text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] font-display font-bold text-white tracking-tighter text-center justify-center"
          delay={0.5}
          stagger={0.06}
        />

        {/* Animated role ticker */}
        <FadeIn delay={1}>
          <div className="h-8 md:h-10 overflow-hidden relative mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-white/70 font-display font-medium tracking-wide"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* CTA + Social */}
        <FadeIn delay={1.2}>
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-6">
            <MagneticButton strength={0.2}>
              <a
                href="/Kavin_Balaji_CV.pdf"
                download="Kavin_Balaji_CV.pdf"
                data-cursor="Download"
                className="group px-7 py-3.5 bg-white text-black border border-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white active:scale-95 flex items-center gap-2.5"
              >
                <span>Download Resume</span>
                <Download
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-y-0.5 duration-300"
                />
              </a>
            </MagneticButton>

            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <SocialLink
                  href="https://github.com/kavinbalaji2005"
                  icon={<Github size={18} />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/kavinbalaji2005/"
                  icon={<Linkedin size={18} />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="mailto:kavinbalaji@gmail.com"
                  icon={<Mail size={18} />}
                  label="Email"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
           <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-display">
            Scroll Down
          </span>
          <div className="w-[1px] h-12 bg-white/10 overflow-hidden">
            <motion.div
              className="w-full h-1/3 bg-white/50"
              animate={{ y: [-48, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <MagneticButton strength={0.3} radius={60}>
      <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        aria-label={label}
        data-cursor={label}
        className="w-11 h-11 flex items-center justify-center rounded-full border border-white/[0.06] text-white/60 transition-all duration-300 hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
      >
        {icon}
      </a>
    </MagneticButton>
  );
}
