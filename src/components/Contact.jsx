import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import emailjs from "emailjs-com";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";
import MagneticButton from "./MagneticButton";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    if (!EMAIL_REGEX.test(formData.email)) {
      setStatus("invalid-email");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        "service_wgtzyrq",
        "template_pxebjzr",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "kavinbalaji@gmail.com",
        },
        "xpqW92qWBr5drGR00"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "loading":
        return (
          <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        );
      case "success":
        return (
          <>
            Sent Successfully <CheckCircle size={16} />
          </>
        );
      case "error":
        return (
          <>
            <span className="text-red-500">Failed to send</span>
            <AlertCircle size={16} className="text-red-500" />
          </>
        );
      case "invalid-email":
        return (
          <>
            <span className="text-red-500">Invalid email</span>
            <AlertCircle size={16} className="text-red-500" />
          </>
        );
      default:
        return (
          <>
            Send Message <ArrowRight size={16} strokeWidth={2.5} />
          </>
        );
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between bg-background px-6 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(41, 151, 255, 0.8), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center py-16 md:py-24">
        <div className="max-w-6xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Info Side — giant CTA headline */}
          <div className="space-y-8">
            <div>
              <FadeIn delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 font-display">
                  Contact
                </span>
              </FadeIn>
              <TextReveal
                text="Let's work together."
                as="h2"
                mode="word"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mt-4"
                stagger={0.06}
              />
            </div>

            <FadeIn delay={0.4}>
              <div className="space-y-5">
                <a
                  href="mailto:kavinbalaji@gmail.com"
                  data-cursor="Email"
                  className="group flex items-center gap-4 text-base text-white/60 hover:text-white/90 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] group-hover:bg-white/[0.03] transition-all duration-300">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="font-light">kavinbalaji@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-base text-white/60">
                  <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="font-light">Coimbatore, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <FadeIn direction="up" delay={0.3} distance={60}>
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 md:p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 ml-1"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white/35 focus:bg-white/[0.03] transition-all placeholder:text-white/15"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 ml-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className={`w-full bg-white/[0.02] border rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white/35 focus:bg-white/[0.03] transition-all placeholder:text-white/15 ${
                      status === "invalid-email"
                        ? "border-red-500/30"
                        : "border-white/15"
                    }`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {status === "invalid-email" && (
                    <p className="text-red-400/60 text-[10px] ml-1 mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-white/35 focus:bg-white/[0.03] transition-all placeholder:text-white/15 resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Submit button with liquid fill */}
                <MagneticButton strength={0.1}>
                  <button
                    disabled={status === "loading"}
                    className="group w-full relative bg-white text-black font-display font-bold rounded-xl py-3.5 text-sm flex items-center justify-center gap-2 overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                      {getButtonContent()}
                    </span>
                  </button>
                </MagneticButton>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      <footer className="py-8 px-6 z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Kavin Balaji S
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kavinbalaji2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-cursor="GitHub"
              className="hover:text-white/50 transition-colors duration-300"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavinbalaji2005/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-cursor="LinkedIn"
              className="hover:text-white/50 transition-colors duration-300"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:kavinbalaji@gmail.com"
              aria-label="Email"
              data-cursor="Email"
              className="hover:text-white/50 transition-colors duration-300"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
