import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Send, CheckCircle, ArrowRight, AlertCircle,
  Github, Linkedin,
} from "lucide-react";
import emailjs from "emailjs-com";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";

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
            Sent Successfully <CheckCircle size={18} />
          </>
        );
      case "error":
        return (
          <>
            <span className="text-red-600">Failed to send. Try again.</span>{" "}
            <AlertCircle size={18} className="text-red-600" />
          </>
        );
      case "invalid-email":
        return (
          <>
            <span className="text-red-600">Invalid email address</span>{" "}
            <AlertCircle size={18} className="text-red-600" />
          </>
        );
      default:
        return (
          <>
            Send Message <ArrowRight size={18} strokeWidth={2.5} />
          </>
        );
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between bg-background px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex items-center py-16 md:py-24">
        <div className="max-w-6xl w-full mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Info Side */}
          <div className="space-y-8">
            <TextReveal
              text="Let's work together."
              as="h2"
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight"
              stagger={0.08}
            />

            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <a
                  href="mailto:kavinbalaji@gmail.com"
                  className="group flex items-center gap-4 text-xl text-text-secondary hover:text-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-surface-hover group-hover:border-border-hover group-hover:shadow-[0_0_30px_rgba(41,151,255,0.25)] transition-all duration-300">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>kavinbalaji@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-xl text-text-secondary">
                  <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>Coimbatore, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <FadeIn direction="up" delay={0.3} distance={80}>
            <div className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-text-secondary ml-1"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-surface/80 border border-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/60 focus:bg-surface focus:shadow-[0_0_20px_rgba(41,151,255,0.1)] transition-all placeholder:text-text-secondary"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-text-secondary ml-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className={`w-full bg-surface/80 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/60 focus:bg-surface focus:shadow-[0_0_20px_rgba(41,151,255,0.1)] transition-all placeholder:text-text-secondary ${
                      status === "invalid-email"
                        ? "border-red-500/50"
                        : "border-border"
                    }`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {status === "invalid-email" && (
                    <p className="text-red-400 text-xs ml-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-text-secondary ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-surface/80 border border-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/60 focus:bg-surface focus:shadow-[0_0_20px_rgba(41,151,255,0.1)] transition-all placeholder:text-text-secondary resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  disabled={status === "loading"}
                  className="group relative w-full bg-white text-black font-bold rounded-2xl py-4 flex items-center justify-center gap-2 hover:bg-gray-100 hover:shadow-glow-white active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* Idle shimmer */}
                  {status === "idle" && (
                    <span className="absolute inset-0 overflow-hidden rounded-2xl">
                      <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
                        style={{
                          animation: "shine-sweep 3s ease-in-out infinite",
                        }}
                      />
                    </span>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {getButtonContent()}
                  </span>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-white/60">© {new Date().getFullYear()} Kavin Balaji S. All rights reserved.</p>

          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kavinbalaji2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/kavinbalaji2005/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:kavinbalaji@gmail.com"
              aria-label="Email"
              className="hover:text-white transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
