import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showToastMessage = (message, type) => {
    setShowToast({ show: true, message, type });
    setTimeout(() => {
      setShowToast({ show: false, message: "", type: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim whitespace from inputs
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      showToastMessage("Please fill in all fields", "error");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      showToastMessage("Please enter a valid email address", "error");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_wgtzyrq",
        "template_pxebjzr",
        {
          from_name: trimmedData.name,
          from_email: trimmedData.email,
          message: trimmedData.message,
          to_email: "kavinbalaji@gmail.com",
        },
        "xpqW92qWBr5drGR00"
      );

      showToastMessage(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      showToastMessage(
        "Failed to send message. Please try again later.",
        "error"
      );
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-geist bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-6 transition-all hover:border-white/20 hover:bg-neutral-900/80">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:kavinbalaji@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      kavinbalaji@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-6 transition-all hover:border-white/20 hover:bg-neutral-900/80">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-green-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-400">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-neutral-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                  required
                  minLength="2"
                  maxLength="100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-neutral-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-neutral-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Your message..."
                  required
                  minLength="10"
                  maxLength="1000"
                />
              </div>

              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px] w-full">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative inline-flex w-full items-center justify-center gap-2 rounded-full border-[1px] border-input bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent px-8 py-4 text-center font-medium text-white transition-colors hover:bg-transparent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast.show && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-right">
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${
              showToast.type === "success"
                ? "bg-green-500/10 border-green-500/20 text-green-400"
                : "bg-red-500/10 border-red-500/20 text-red-400"
            } backdrop-blur-sm shadow-lg`}
          >
            {showToast.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <p className="text-sm font-medium">{showToast.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
