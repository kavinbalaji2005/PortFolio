import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState({ show: false, message: '', type: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToastMessage = (message, type) => {
    setShowToast({ show: true, message, type });
    setTimeout(() => {
      setShowToast({ show: false, message: '', type: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showToastMessage('Please fill in all fields', 'error');
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS credentials
      const result = await emailjs.send(
        'service_wgtzyrq', //  EmailJS service ID
        'template_pxebjzr', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kavinbalaji@gmail.com' // email
        },
        'xpqW92qWBr5drGR00' // EmailJS public key
      );

      showToastMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      showToastMessage('Failed to send message. Please try again later.', 'error');
    }

    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'kavinbalaji@gmail.com',
      href: 'mailto:kavinbalaji@gmail.com'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/kavinbalaji2005', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/kavinbalaji2005', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, innovative projects, and creative ideas. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-300/80 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-300/80 dark:focus:bg-white/15 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-300/80 dark:focus:bg-white/15 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-gray-300/80 dark:focus:bg-white/15 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Toast Notification */}
      {showToast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 right-4 px-6 py-4 backdrop-blur-md border border-gray-300/60 dark:border-white/20 rounded-xl shadow-lg text-white z-50 ${
            showToast.type === 'success' 
              ? 'bg-green-500/80 dark:bg-green-600/80' 
              : 'bg-red-500/80 dark:bg-red-600/80'
          }`}
        >
          {showToast.message}
        </motion.div>
      )}
    </section>
  );
};

export default Contact;