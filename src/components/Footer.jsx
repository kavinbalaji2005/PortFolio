import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="border-t border-gray-300 dark:border-gray-700 pt-8 w-full"
          >
            <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-4 md:mb-0">
                © 2025 Kavin Balaji
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;