import { ArrowRight, Github, Linkedin, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

export default function HeroPortfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <section id="hero" className="relative z-1 mx-auto max-w-full">
        <motion.div
          className="z-10 mx-auto max-w-screen-xl gap-12 px-4 text-gray-600 md:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto max-w-4xl space-y-6 md:space-y-8 text-center leading-0 lg:leading-5 px-2">
            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-geist mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-transparent font-bold"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Kavin Balaji S
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.div
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-300 flex items-center justify-center gap-2 min-h-[28px] sm:min-h-[32px] px-4"
            >
              <TypingAnimation
                texts={[
                  "Full Stack Developer",
                  "Cloud Enthusiast",
                  "AWS Certified Cloud Practitioner",
                ]}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
                className="text-lg sm:text-xl text-gray-300"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-3xl text-sm sm:text-base text-gray-400 leading-relaxed px-4"
            >
              Passionate about building innovative solutions with cutting-edge
              technologies. Exploring full-stack development, cloud computing,
              and IoT to create impactful projects.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <a
                href="https://github.com/kavinbalaji2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent transition-all hover:border-white/20 hover:bg-white/5 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 transition-all group-hover:scale-110 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/kavinbalaji2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent transition-all hover:border-white/20 hover:bg-white/5 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 transition-all group-hover:scale-110 group-hover:text-white" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="items-center justify-center space-y-3 gap-x-4 sm:flex sm:space-y-0 mt-6 sm:mt-8 px-4"
            >
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <a
                    href="/Kavin_Balaji_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-input inline-flex w-full items-center justify-center gap-2 rounded-full border-[1px] bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent px-8 py-4 text-center text-white transition-colors hover:bg-transparent/90 sm:w-auto"
                  >
                    <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                    Download Resume
                  </a>
                </div>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
