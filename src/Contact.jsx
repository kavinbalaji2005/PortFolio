import { useState } from "react";
import { faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    if (formData.get("_gotcha")) {
      setStatus("error");
      setMessage("Bot detected!");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xrbkyvpn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left glass">
          <h1 className="gradient-text">Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faGoogle} />
              <p>vishal26songara@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faWhatsapp} />
              <p>+91 9460772077</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        {/* Enhanced Form */}
        <form onSubmit={handleSubmit} className="contact-right">
          {/* Formspree Key */}
          <input type="hidden" name="_subject" value="New message from your portfolio" />

          {/* Honeypot Anti-Spam Field */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit Now"}
          </button>

            {/* error or sucess */}
          {status === "success" && <p className="success-msg">{message}</p>}
          {status === "error" && <p className="error-msg">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
