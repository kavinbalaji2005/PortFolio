import { useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from 'emailjs-com';
import { emailConfig } from './emailConfig';

const Contact = () => {
  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("Sending your message...");

    const form = e.target;

    try {
      const result = await emailjs.sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        form,
        emailConfig.PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setMessage("✅ Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("❌ Something went wrong. Please try again or contact me directly.");
      console.error('EmailJS error:', err);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1 className="text-heading-1">Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left glass">
          <h1 className="gradient-text text-heading-2" data-text="Let's talk">Let's talk</h1>
          <p className="text-body-large">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faGoogle} />
              <p>kavinbalaji@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Enhanced Form */}
        <form onSubmit={handleSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="from_name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="from_email" placeholder="Enter your email" required />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit Now"}
          </button>

          {/* Status Messages */}
          {status === "sending" && <p className="sending-msg">{message}</p>}
          {status === "success" && <p className="success-msg">{message}</p>}
          {status === "error" && <p className="error-msg">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
