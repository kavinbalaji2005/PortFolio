import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "./TextReveal";
import ScrollReveal from "./ScrollReveal";
import FadeIn from "./FadeIn";

export default function About() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const imageClip = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [
      "inset(100% 0 0 0)",
      "inset(20% 0 0 0)",
      "inset(0% 0 0 0)",
    ]
  );

  return (
    <div
      ref={ref}
      className="min-h-[100dvh] flex items-center justify-center bg-background px-6 md:px-16 lg:px-20 py-24 relative overflow-hidden"
    >
      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Image Side — parallax + clip-path reveal */}
        <motion.div
          style={{ y: isDesktop ? imageY : 0 }}
          className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start"
        >
          <ScrollReveal
            scale={true}
            className="relative w-[280px] h-[350px] sm:w-[380px] sm:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50 group mx-auto lg:mx-0"
          >
            <motion.div
              style={{ clipPath: imageClip }}
              className="absolute inset-0"
            >
              <img
                src="/ProfilePic.png"
                alt="Kavin Balaji S - Profile photo"
                loading="lazy"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              />
            </motion.div>

            {/* Gradient mask for softer edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

            {/* Education badge — elevated with glassmorphism */}
            <div className="absolute bottom-5 left-5 right-5 text-white p-4 backdrop-blur-xl bg-white/[0.06] rounded-2xl border border-white/[0.08] shadow-xl group-hover:border-white/[0.12] transition-all duration-700">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">
                Education
              </p>
              <p className="text-sm font-bold text-white/90">
                Amrita Vishwa Vidyapeetham
              </p>
              <p className="text-xs text-white/60 mt-0.5">
                B.Tech CCE (2023-2027)
              </p>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* Content Side — editorial layout */}
        <div className="order-1 lg:order-2 lg:col-span-7 space-y-8 lg:pl-8">
          <div>

            <TextReveal
              text="A bit about me."
              as="h2"
              mode="word"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mt-4 tracking-tight"
              delay={0.2}
            />
          </div>

          <ScrollReveal
            yOffset={0}
            className="text-base md:text-lg text-white/70 leading-[1.8] max-w-xl font-light"
          >
            I'm an engineering undergraduate who likes building things that
            work well. Most of my time goes into Web development and Cloud infrastructure.
          </ScrollReveal>
          <ScrollReveal
            yOffset={0}
            className="text-base md:text-lg text-white/70 leading-[1.8] max-w-xl font-light"
          >
            When I'm not writing code, I'm probably reading about it.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
