import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "./TextReveal";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);



  return (
    <div
      ref={ref}
      className="min-h-[100dvh] flex items-center justify-center bg-background px-6 md:px-20 py-24 relative overflow-hidden"
    >
      {/* Parallax background blob */}
      {/* Blob removed */}
      {/* Second subtle blob */}


      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        {/* Image Side — parallax + scale-in */}
        <motion.div
          style={{ y: imageY }}
          className="order-2 md:order-1 flex justify-center md:justify-start"
        >
          <ScrollReveal scale={true} className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
              <img
                src="/ProfilePic.png"
                alt="Kavin Balaji S - Profile photo"
                loading="lazy"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              {/* Gradient mask for softer edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />

              <div className="absolute bottom-6 left-6 text-white p-4 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg group-hover:border-primary/30 group-hover:shadow-glow-primary transition-all duration-500">
                <p className="text-sm font-semibold opacity-80">Education</p>
                <p className="text-lg font-bold">
                  Amrita Vishwa Vidyapeetham
                </p>
                <p className="text-sm opacity-70">B.Tech CCE (2023-2027)</p>
              </div>
          </ScrollReveal>
        </motion.div>

        {/* Content Side */}
        <div className="order-1 md:order-2 space-y-6">
          <ScrollReveal yOffset={0}>
            <div className="flex items-center gap-3">
              {/* Decorative accent line */}
              <div className="w-10 h-[2px] bg-white/20 rounded-full" />
              <h2 className="text-sm font-semibold tracking-wider text-secondary uppercase">
                About Me
              </h2>
            </div>
          </ScrollReveal>

          <TextReveal
            text="Driven by curiosity. Engineered for impact."
            as="h3"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            delay={0.2}
          />

          <ScrollReveal yOffset={0} className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
             I am an engineering student with a deep passion for cloud
             computing and full-stack development. Looking beyond the code, I
             strive to understand the "why" and "how" of technology to build
             solutions that truly matter.
          </ScrollReveal>

          <ScrollReveal yOffset={0} className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
             My journey is fueled by a constant desire to learn, adapt, and
             innovate in an ever-evolving tech landscape.
          </ScrollReveal>


        </div>
      </div>
    </div>
  );
}
