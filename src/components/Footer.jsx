import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function FooterPortfolio() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Kavin Balaji S
            </h3>
            <p className="text-gray-400 text-sm">
              Engineering Student & Full Stack Developer passionate about
              creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/kavinbalaji2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent transition-all hover:border-white/20 hover:bg-white/5"
              >
                <Github className="h-5 w-5 text-gray-300 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/kavinbalaji2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent transition-all hover:border-white/20 hover:bg-white/5"
              >
                <Linkedin className="h-5 w-5 text-gray-300 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="mailto:kavinbalaji@gmail.com"
                className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent transition-all hover:border-white/20 hover:bg-white/5"
              >
                <Mail className="h-5 w-5 text-gray-300 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Kavin Balaji S
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
